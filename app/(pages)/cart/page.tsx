"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { routeConstant } from "routes/constants";
import { useCart } from "../../_shared/context/CartContext";
import classNames from "classnames";
import styles from "./style.module.scss";

export default function CartPage() {
  const { cartItems, removeFromCart, updateQuantity, calculateSubtotal } =
    useCart();

  return (
    <div
      className={classNames("py-12 min-h-screen h-full", styles.pageWrapper)}
    >
      <div
        className={classNames(
          "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
          styles.container
        )}
      >
        <h1
          className={classNames("text-3xl font-bold mb-8", styles.pageHeading)}
        >
          Shopping Cart
        </h1>

        {cartItems.length === 0 ? (
          <div className="text-center py-12">
            <h2
              className={classNames(
                "text-2xl font-medium mb-4",
                styles.emptyTitle
              )}
            >
              Your cart is empty
            </h2>
            <p className={classNames("mb-8", styles.emptyDescription)}>
              Add some items to your cart to continue shopping
            </p>
            <Link
              href={routeConstant.collections.path}
              className={classNames(
                "inline-block px-8 py-3 rounded-md transition-colors",
                styles.continueButton
              )}
            >
              Continue Shopping
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-8">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className={classNames(
                    "flex items-center justify-between p-6 mb-4",
                    styles.cartItem
                  )}
                >
                  <div className="flex items-center space-x-4">
                    <div className="relative w-24 h-24">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-cover rounded"
                      />
                    </div>
                    <div>
                      <h3
                        className={classNames(
                          "text-lg font-medium",
                          styles.itemName
                        )}
                      >
                        {item.name}
                      </h3>
                      <p className={styles.itemDetails}>Size: {item.size}</p>
                      <p
                        className={classNames("font-medium", styles.itemPrice)}
                      >
                        {item.price}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="flex items-center border rounded">
                      <button
                        onClick={() =>
                          updateQuantity(item.id, item.quantity - 1)
                        }
                        className={classNames(
                          "px-3 py-1 border-r hover:bg-gray-100",
                          styles.qtyButton
                        )}
                      >
                        -
                      </button>
                      <span className="px-4 py-1 text-center text-black">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() =>
                          updateQuantity(item.id, item.quantity + 1)
                        }
                        className={classNames(
                          "px-3 py-1 border-l hover:bg-gray-100",
                          styles.qtyButton
                        )}
                      >
                        +
                      </button>
                    </div>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className={styles.removeButton}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="lg:col-span-4">
              <div
                className={classNames("p-6 sticky top-4", styles.orderSummary)}
              >
                <h2
                  className={classNames(
                    "text-lg font-medium mb-4",
                    styles.orderSummaryTitle
                  )}
                >
                  Order Summary
                </h2>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className={styles.label}>Subtotal</span>
                    <span className={styles.value}>
                      PKR{" "}
                      {calculateSubtotal().toLocaleString("en-US", {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2,
                      })}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className={styles.label}>Shipping</span>
                    <span className={styles.value}>Calculated at checkout</span>
                  </div>
                  <div className="border-t pt-2 mt-2">
                    <div className="flex justify-between">
                      <span
                        className={classNames(
                          "text-lg font-medium",
                          styles.totalLabel
                        )}
                      >
                        Total
                      </span>
                      <span
                        className={classNames(
                          "text-lg font-medium",
                          styles.totalValue
                        )}
                      >
                        PKR{" "}
                        {calculateSubtotal().toLocaleString("en-US", {
                          minimumFractionDigits: 2,
                          maximumFractionDigits: 2,
                        })}
                      </span>
                    </div>
                  </div>
                </div>
                <Link
                  href="/checkout"
                  className={classNames(
                    "w-full mt-6 py-3 rounded-md block text-center",
                    styles.checkoutButton
                  )}
                >
                  Proceed to Checkout
                </Link>
                <Link
                  href={routeConstant.collections.path}
                  className={classNames(
                    "block text-center mt-4",
                    styles.continueLink
                  )}
                >
                  Continue Shopping
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
