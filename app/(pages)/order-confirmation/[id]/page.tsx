"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { routeConstant } from "routes/constants";
import classNames from "classnames";
import styles from "./style.module.scss";

interface OrderItem {
  id: string;
  productName: string;
  price: number;
  quantity: number;
  size?: string;
}

interface Order {
  id: string;
  status: string;
  totalAmount: number;
  paymentMethod: string;
  paymentStatus: string;
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  shippingAddress: string;
  items: OrderItem[];
  createdAt: string;
}

export default function OrderConfirmationPage() {
  const { id } = useParams();
  const [order, setOrder] = useState<Order | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchOrder = async () => {
      try {
        const response = await fetch(`/api/orders/${id}`);
        if (!response.ok) {
          throw new Error("Failed to fetch order");
        }
        const data = await response.json();
        setOrder(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to fetch order");
      } finally {
        setLoading(false);
      }
    };

    fetchOrder();
  }, [id]);

  if (loading) {
    return (
      <div className={classNames("min-h-screen", styles.pageWrapper)}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <p>Loading order details...</p>
        </div>
      </div>
    );
  }

  if (error || !order) {
    return (
      <div className={classNames("min-h-screen", styles.pageWrapper)}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <p className="text-red-500">{error || "Order not found"}</p>
          <Link
            href={routeConstant.collections.path}
            className={classNames("mt-4 inline-block", styles.continueButton)}
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className={classNames("min-h-screen", styles.pageWrapper)}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1
          className={classNames("text-3xl font-bold mb-8", styles.pageHeading)}
        >
          Order Confirmation
        </h1>

        <div className={classNames("p-6 rounded-lg mb-8", styles.card)}>
          <h2
            className={classNames(
              "text-xl font-semibold mb-4",
              styles.sectionTitle
            )}
          >
            Order Details
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p>
                <strong>Order ID:</strong> {order.id}
              </p>
              <p>
                <strong>Status:</strong> {order.status}
              </p>
              <p>
                <strong>Payment Status:</strong> {order.paymentStatus}
              </p>
              <p>
                <strong>Payment Method:</strong> {order.paymentMethod}
              </p>
              <p>
                <strong>Order Date:</strong>{" "}
                {new Date(order.createdAt).toLocaleDateString()}
              </p>
            </div>
            <div>
              <p>
                <strong>Customer Name:</strong> {order.customerName}
              </p>
              <p>
                <strong>Email:</strong> {order.customerEmail}
              </p>
              <p>
                <strong>Phone:</strong> {order.customerPhone}
              </p>
              <p>
                <strong>Shipping Address:</strong> {order.shippingAddress}
              </p>
            </div>
          </div>
        </div>

        <div className={classNames("p-6 rounded-lg mb-8", styles.card)}>
          <h2
            className={classNames(
              "text-xl font-semibold mb-4",
              styles.sectionTitle
            )}
          >
            Order Items
          </h2>
          <div className="space-y-4">
            {order.items.map((item) => (
              <div
                key={item.id}
                className={classNames(
                  "flex justify-between items-center",
                  styles.orderItem
                )}
              >
                <div>
                  <h3 className={classNames("font-medium", styles.itemName)}>
                    {item.productName}
                  </h3>
                  {item.size && (
                    <p className={styles.itemDetails}>Size: {item.size}</p>
                  )}
                  <p className={styles.itemDetails}>
                    Quantity: {item.quantity}
                  </p>
                </div>
                <p className={classNames("font-medium", styles.itemPrice)}>
                  PKR {item.price.toLocaleString()}
                </p>
              </div>
            ))}
          </div>
          <div className="border-t pt-4 mt-4">
            <div className="flex justify-between">
              <span
                className={classNames("text-lg font-medium", styles.totalLabel)}
              >
                Total Amount
              </span>
              <span
                className={classNames("text-lg font-medium", styles.totalValue)}
              >
                PKR {order.totalAmount.toLocaleString()}
              </span>
            </div>
          </div>
        </div>

        <div className="flex justify-center">
          <Link
            href={routeConstant.collections.path}
            className={classNames(
              "px-8 py-3 rounded-md",
              styles.continueButton
            )}
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    </div>
  );
}
