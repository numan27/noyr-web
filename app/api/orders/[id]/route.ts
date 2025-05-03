import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

type RouteParams = {
  params: {
    id: string;
  };
};

export async function GET(request: NextRequest, context: RouteParams) {
  try {
    const order = await prisma.order.findUnique({
      where: {
        id: context.params.id,
      },
      include: {
        items: true,
      },
    });

    if (!order) {
      return NextResponse.json({ error: "Order not found" }, { status: 404 });
    }

    return NextResponse.json(order);
  } catch (error) {
    console.error("Error fetching order:", error);
    return NextResponse.json(
      { error: "Failed to fetch order" },
      { status: 500 }
    );
  }
}

export async function PATCH(request: NextRequest, context: RouteParams) {
  try {
    const { status } = await request.json();

    const order = await prisma.order.update({
      where: {
        id: context.params.id,
      },
      data: {
        status,
      },
    });

    return NextResponse.json(order);
  } catch (error) {
    console.error("Error updating order:", error);
    return NextResponse.json(
      { error: "Failed to update order" },
      { status: 500 }
    );
  }
}
