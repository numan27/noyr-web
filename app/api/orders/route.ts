import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import nodemailer from "nodemailer";

const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
  try {
    console.log("Received order request");
    const orderData = await req.json();
    console.log("Order data:", JSON.stringify(orderData, null, 2));

    const {
      items,
      customerName,
      customerEmail,
      customerPhone,
      shippingAddress,
      paymentMethod,
      totalAmount,
      receiptUrl,
    } = orderData;

    // Validate required fields
    if (!customerName || !customerEmail || !customerPhone || !shippingAddress) {
      console.log("Missing required fields:", {
        customerName,
        customerEmail,
        customerPhone,
        shippingAddress,
      });
      return NextResponse.json(
        { error: "All customer information fields are required" },
        { status: 400 }
      );
    }

    if (!items || items.length === 0) {
      console.log("Empty cart");
      return NextResponse.json({ error: "Cart is empty" }, { status: 400 });
    }

    console.log("Creating order in database...");
    // Create the order
    const order = await prisma.order.create({
      data: {
        customerName,
        customerEmail,
        customerPhone,
        shippingAddress,
        paymentMethod,
        totalAmount: parseFloat(totalAmount),
        receiptUrl,
        items: {
          create: items.map((item: any) => {
            // Remove 'PKR ' prefix and commas, then parse to float
            const price = parseFloat(
              item.price.replace("PKR ", "").replace(/,/g, "")
            );
            if (isNaN(price)) {
              console.log("Invalid price for item:", item);
              throw new Error(`Invalid price format for item: ${item.name}`);
            }
            return {
              productId: item.id,
              productName: item.name,
              price: price,
              quantity: item.quantity,
              size: item.size,
            };
          }),
        },
      },
      include: {
        items: true,
      },
    });

    console.log("Order created successfully:", order.id);

    // Send email notification to admin
    console.log("Sending email notification...");
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_TO || process.env.EMAIL_USER,
      subject: "New Order Received",
      html: `
        <h2>New Order Received</h2>
        <p><strong>Order ID:</strong> ${order.id}</p>
        <p><strong>Customer:</strong> ${customerName}</p>
        <p><strong>Email:</strong> ${customerEmail}</p>
        <p><strong>Phone:</strong> ${customerPhone}</p>
        <p><strong>Total Amount:</strong> PKR ${totalAmount}</p>
        <p><strong>Payment Method:</strong> ${paymentMethod}</p>
        <h3>Order Items:</h3>
        <ul>
          ${items
            .map(
              (item: any) =>
                `<li>${item.name} - ${item.quantity} x PKR ${item.price}</li>`
            )
            .join("")}
        </ul>
      `,
    };

    await transporter.sendMail(mailOptions);
    console.log("Email notification sent");

    return NextResponse.json(
      { message: "Order placed successfully", order },
      { status: 201 }
    );
  } catch (error) {
    console.error("Order placement error:", error);
    return NextResponse.json(
      {
        error: error instanceof Error ? error.message : "Failed to place order",
      },
      { status: 500 }
    );
  }
}

export async function GET(req: NextRequest) {
  try {
    const orders = await prisma.order.findMany({
      include: {
        items: true,
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    return NextResponse.json(orders);
  } catch (error) {
    console.error("Error fetching orders:", error);
    return NextResponse.json(
      { error: "Failed to fetch orders" },
      { status: 500 }
    );
  }
}
