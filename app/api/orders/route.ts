import { NextRequest } from "next/server";
import nodemailer from "nodemailer";

interface Order {
  id: string;
  items: any[];
  customerInfo: any;
  totalAmount: number;
}

export async function POST(req: NextRequest) {
  try {
    // Get the request body
    const body = await req.json();

    // Basic validation
    if (!body.items || !body.customerInfo) {
      return new Response(
        JSON.stringify({ error: "Missing required fields" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    const { items, customerInfo, paymentMethod, totalAmount } = body;

    // Create email content
    const emailContent = `
      <h2>New Order Received</h2>
      
      <h3>Customer Information:</h3>
      <p><strong>Name:</strong> ${customerInfo.name}</p>
      <p><strong>Email:</strong> ${customerInfo.email}</p>
      <p><strong>Phone:</strong> ${customerInfo.phone}</p>
      <p><strong>Address:</strong> ${customerInfo.address}</p>
      
      <h3>Payment Method:</h3>
      <p>${paymentMethod.replace("_", " ").toUpperCase()}</p>
      
      <h3>Order Items:</h3>
      <ul>
        ${items
          .map(
            (item: any) => `
            <li>
              ${item.name} - 
              Size: ${item.size || "N/A"} - 
              Quantity: ${item.quantity} - 
              Price: ${item.price}
            </li>
          `
          )
          .join("")}
      </ul>
      
      <h3>Order Total: PKR ${totalAmount.toFixed(2)}</h3>
    `;

    // Send email
    if (process.env.EMAIL_USER && process.env.EMAIL_PASS) {
      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS,
        },
      });

      await transporter.sendMail({
        from: process.env.EMAIL_USER,
        to: process.env.EMAIL_TO || process.env.EMAIL_USER,
        subject: "New Order Received",
        html: emailContent,
      });
    } else {
      console.log("Email configuration missing, skipping email send");
    }

    // Return success response
    return new Response(
      JSON.stringify({ message: "Order received successfully" }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    // Log the error
    console.error("Error in orders API:", error);

    // Return error response
    return new Response(JSON.stringify({ error: "Failed to process order" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}

export async function GET() {
  try {
    const orders: Order[] = [];
    return new Response(JSON.stringify(orders), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error fetching orders:", error);
    return new Response(JSON.stringify({ error: "Failed to fetch orders" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
