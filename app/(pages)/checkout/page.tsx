"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useCart } from "../../_shared/context/CartContext";
import styles from "./style.module.scss";
import classNames from "classnames";

type PaymentMethod = "bank_transfer" | "easypaisa" | "jazzcash" | "cod";

export default function CheckoutPage() {
  const { cartItems, calculateSubtotal } = useCart();
  const [selectedPayment, setSelectedPayment] =
    useState<PaymentMethod>("bank_transfer");
  const [receipt, setReceipt] = useState<File | null>(null);

  const bankDetails = {
    bankName: "HBL Bank",
    accountTitle: "Your Company Name",
    accountNumber: "1234-5678-9012-3456",
    iban: "PK36HABB0000123456789012",
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setReceipt(e.target.files[0]);
    }
  };

  const handleWhatsAppShare = () => {
    const whatsappNumber = "+923001234567";
    const message = encodeURIComponent(
      `Order Total: $${calculateSubtotal().toFixed(2)}\nBank Details:\nBank: ${
        bankDetails.bankName
      }\nAccount: ${bankDetails.accountNumber}`
    );
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, "_blank");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedPayment === "bank_transfer" && !receipt) {
      alert("Please upload your payment receipt");
      return;
    }
    // Submit order logic...
  };

  return (
    <div className={classNames("min-h-screen", styles.pageWrapper)}>
      <div
        className={classNames(
          "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
          styles.container
        )}
      >
        <h1
          className={classNames("text-3xl font-bold mb-8", styles.pageHeading)}
        >
          Checkout
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Order Summary */}
          <div className="lg:col-span-8">
            <div className={classNames("p-6 rounded-lg mb-6", styles.card)}>
              <h2
                className={classNames(
                  "text-xl font-semibold mb-4",
                  styles.sectionTitle
                )}
              >
                Order Summary
              </h2>
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className={classNames(
                    "flex items-center mb-4 pb-4 border-b",
                    styles.cartItem
                  )}
                >
                  <div className="relative w-20 h-20">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover rounded"
                    />
                  </div>
                  <div className="ml-4 flex-1">
                    <h3 className={classNames("font-medium", styles.itemName)}>
                      {item.name}
                    </h3>
                    <p className={styles.itemDetails}>Size: {item.size}</p>
                    <p className={styles.itemDetails}>
                      Quantity: {item.quantity}
                    </p>
                  </div>
                  <p className={classNames("font-medium", styles.itemPrice)}>
                    {item.price}
                  </p>
                </div>
              ))}
            </div>

            {/* Payment Methods */}
            <div className={classNames("p-6 rounded-lg", styles.card)}>
              <h2
                className={classNames(
                  "text-xl font-semibold mb-4",
                  styles.sectionTitle
                )}
              >
                Payment Method
              </h2>

              <div className="space-y-4">
                {["bank_transfer", "easypaisa", "jazzcash", "cod"].map(
                  (method) => (
                    <div key={method}>
                      <label className="flex items-center space-x-3">
                        <input
                          type="radio"
                          value={method}
                          checked={selectedPayment === method}
                          onChange={(e) =>
                            setSelectedPayment(e.target.value as PaymentMethod)
                          }
                          className={styles.radioInput}
                        />
                        <span className={styles.radioLabel}>
                          {method.replace("_", " ")}
                        </span>
                      </label>

                      {selectedPayment === method && (
                        <div
                          className={classNames(
                            "ml-7 mt-2 p-4 rounded",
                            styles.paymentInfo
                          )}
                        >
                          {method === "bank_transfer" ? (
                            <>
                              <h3
                                className={classNames(
                                  "font-medium mb-2",
                                  styles.subHeading
                                )}
                              >
                                Bank Details
                              </h3>
                              <p>Bank: {bankDetails.bankName}</p>
                              <p>Account Title: {bankDetails.accountTitle}</p>
                              <p>Account Number: {bankDetails.accountNumber}</p>
                              <p>IBAN: {bankDetails.iban}</p>

                              <div className="mt-4">
                                <label className={styles.uploadLabel}>
                                  Upload Payment Receipt
                                </label>
                                <input
                                  type="file"
                                  accept="image/*"
                                  onChange={handleFileChange}
                                  className={classNames(
                                    "mt-1 block w-full",
                                    styles.fileInput
                                  )}
                                />
                              </div>

                              <button
                                onClick={handleWhatsAppShare}
                                className={classNames(
                                  "mt-4",
                                  styles.whatsappButton
                                )}
                              >
                                Share on WhatsApp
                              </button>
                            </>
                          ) : (
                            <p>{`${
                              method.charAt(0).toUpperCase() + method.slice(1)
                            } Account: 0300-1234567`}</p>
                          )}
                        </div>
                      )}
                    </div>
                  )
                )}
              </div>
            </div>
          </div>

          {/* Order Total */}
          <div className="lg:col-span-4">
            <div className={classNames("p-6 sticky top-4", styles.card)}>
              <h2
                className={classNames(
                  "text-lg font-medium mb-4",
                  styles.sectionTitle
                )}
              >
                Order Total
              </h2>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className={styles.label}>Subtotal</span>
                  <span className={styles.value}>
                    ${calculateSubtotal().toFixed(2)}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className={styles.label}>Shipping</span>
                  <span className={styles.value}>$10.00</span>
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
                      ${(calculateSubtotal() + 10).toFixed(2)}
                    </span>
                  </div>
                </div>
              </div>
              <button
                onClick={handleSubmit}
                className={classNames(
                  "w-full mt-6 py-3 rounded-md",
                  styles.placeOrderButton
                )}
              >
                Place Order
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
