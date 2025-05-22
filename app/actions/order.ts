"use server";

import nodemailer from "nodemailer";

interface OrderData {
  items: {
    id: number | string;
    name: string;
    price: string;
    size: string;
    quantity: number;
  }[];
  customerInfo: {
    name: string;
    email: string;
    phone: string;
    address: string;
  };
  paymentMethod: string;
  totalAmount: number;
}

export async function createOrder(data: OrderData) {
  try {
    // Generate a structured order ID: NOYR-YYYYMMDD-XXXX
    const date = new Date()
      .toLocaleString("en-US", {
        timeZone: "Asia/Karachi",
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
      })
      .replace(/[^0-9]/g, "");

    // Generate a 4-digit sequence number (0001-9999)
    const sequence = Math.floor(Math.random() * 9000) + 1000;

    const orderId = `NOYR-${date}-${sequence}`;

    // Get current time in Pakistan timezone (GMT+5)
    const pkTime = new Date().toLocaleString("en-US", {
      timeZone: "Asia/Karachi",
      dateStyle: "full",
      timeStyle: "long",
    });

    // Create email content
    const emailContent = `
      <h2>New Order Received</h2>
      
      <h3>Order Details:</h3>
      <p><strong>Order ID:</strong> ${orderId}</p>
      <p><strong>Date:</strong> ${pkTime}</p>
      
      <h3>Customer Information:</h3>
      <p><strong>Name:</strong> ${data.customerInfo.name}</p>
      <p><strong>Email:</strong> ${data.customerInfo.email}</p>
      <p><strong>Phone:</strong> ${data.customerInfo.phone}</p>
      <p><strong>Address:</strong> ${data.customerInfo.address}</p>
      
      <h3>Payment Method:</h3>
      <p>${data.paymentMethod.replace("_", " ").toUpperCase()}</p>
      
      <h3>Order Items:</h3>
      <ul>
        ${data.items
          .map(
            (item) => `
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
      
      <h3>Order Total: PKR ${(data.totalAmount + 300).toFixed(2)}</h3>
    `;

    // Send email notification
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
    }

    return {
      success: true,
      order: {
        id: orderId,
        totalAmount: data.totalAmount + 300,
        customerName: data.customerInfo.name,
        customerEmail: data.customerInfo.email,
        customerPhone: data.customerInfo.phone,
        shippingAddress: data.customerInfo.address,
        paymentMethod: data.paymentMethod,
        items: data.items,
        createdAt: new Date().toLocaleString("en-US", {
          timeZone: "Asia/Karachi",
        }),
      },
    };
  } catch (error) {
    console.error("Error processing order:", error);
    return { success: false, error: "Failed to process order" };
  }
}
