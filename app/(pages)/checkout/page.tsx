"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useCart } from "../../_shared/context/CartContext";
import styles from "./style.module.scss";
import classNames from "classnames";
import Link from "next/link";
import { routeConstant } from "routes/constants";
import CustomButton from "components/common/customButton";
import { createOrder } from "../../actions/order";
import { StaticImageData } from "next/image";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";

type PaymentMethod =
  | "bank_transfer"
  // "easypaisa" | "jazzcash" |
  | "cod";

type CartItem = {
  id: number | string;
  name: string;
  price: string;
  size: string;
  image: StaticImageData;
  quantity: number;
};

export default function CheckoutPage() {
  const { cartItems, calculateSubtotal, clearCart } = useCart();
  const [selectedPayment, setSelectedPayment] =
    useState<PaymentMethod>("bank_transfer");
  const [receipt, setReceipt] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const [customerInfo, setCustomerInfo] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });
  const router = useRouter();

  const bankDetails = {
    bankName: "Faysal Bank",
    accountTitle: "NOYR",
    accountNumber: "3558301000009013",
    iban: "PKO2FAYS3558301000009013",
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setReceipt(e.target.files[0]);
    }
  };

  const handleWhatsAppShare = () => {
    const whatsappNumber = "+96897676629";
    const message = encodeURIComponent(
      `Order Total: $${calculateSubtotal().toFixed(2)}\nBank Details:\nBank: ${
        bankDetails.bankName
      }\nAccount: ${bankDetails.accountNumber}`
    );
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, "_blank");
  };

  const handleCustomerInfoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCustomerInfo((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handlePlaceOrder = async () => {
    if (!cartItems.length) {
      toast.error("Your cart is empty");
      return;
    }

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      const orderData = {
        items: cartItems.map((item) => ({
          id: item.id,
          name: item.name,
          price: item.price,
          size: item.size,
          quantity: item.quantity,
        })),
        customerInfo: {
          name: customerInfo.name,
          email: customerInfo.email,
          phone: customerInfo.phone,
          address: customerInfo.address,
        },
        paymentMethod: selectedPayment,
        totalAmount: calculateSubtotal(),
      };

      const result = await createOrder(orderData);

      if (result.success) {
        // Clear cart
        clearCart();

        // Show success message
        toast.success("Order placed successfully!");

        // Set success state to show success message
        setSuccess(true);
      } else {
        toast.error(result.error || "Failed to place order");
      }
    } catch (error) {
      console.error("Error placing order:", error);
      toast.error("Failed to place order. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const validateForm = () => {
    if (
      !customerInfo.name ||
      !customerInfo.email ||
      !customerInfo.phone ||
      !customerInfo.address
    ) {
      setError("Please fill in all customer information fields");
      return false;
    }

    if (selectedPayment === "bank_transfer" && !receipt) {
      setError("Please upload your payment receipt");
      return false;
    }

    return true;
  };

  if (success) {
    return (
      <div
        className={classNames(
          styles.pageWrapper,
          "min-h-screen flex items-center justify-center"
        )}
      >
        <div className={classNames(styles.successMessage, "text-center p-8")}>
          <h3
            className={classNames(
              styles.pageHeading,
              "text-2xl font-bold mb-4"
            )}
          >
            Order Placed Successfully!
          </h3>
          <p className={classNames(styles.itemDetails, "mb-2")}>
            Thank you for your order
          </p>
          <p className={classNames(styles.itemDetails, "mb-6")}>
            Our team will contact you shortly to confirm your order details.
          </p>
          <div className="flex justify-center">
            <Link href={routeConstant.collections.path}>
              <CustomButton
                title="Continue Shopping"
                containerStyle={styles.continueButton}
              />
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={classNames(styles.pageWrapper)}>
      <div
        className={classNames(
          styles.container,
          "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        )}
      >
        <h1
          className={classNames(styles.pageHeading, "text-3xl font-bold mb-8")}
        >
          Checkout
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Order Summary */}
          <div className="lg:col-span-8">
            <div className={classNames(styles.card, "p-6 rounded-lg mb-6")}>
              <h2
                className={classNames(
                  styles.sectionTitle,
                  "text-xl font-semibold mb-4"
                )}
              >
                Order Summary
              </h2>
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className={classNames(
                    styles.cartItem,
                    "flex items-center mb-4 pb-4 border-b"
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
                    <h3 className={classNames(styles.itemName, "font-medium")}>
                      {item.name}
                    </h3>
                    <p className={classNames(styles.itemDetails)}>
                      Size: {item.size}
                    </p>
                    <p className={classNames(styles.itemDetails)}>
                      Quantity: {item.quantity}
                    </p>
                  </div>
                  <p className={classNames(styles.itemPrice, "font-medium")}>
                    {item.price}
                  </p>
                </div>
              ))}
            </div>

            {/* Customer Information Form */}
            <div className={classNames(styles.card, "p-6 rounded-lg mb-6")}>
              <h2
                className={classNames(
                  styles.sectionTitle,
                  "text-xl font-semibold mb-4"
                )}
              >
                Customer Information
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className={classNames(styles.formLabel)}>
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={customerInfo.name}
                    onChange={handleCustomerInfoChange}
                    className={classNames(styles.formInput)}
                    required
                  />
                </div>
                <div>
                  <label className={classNames(styles.formLabel)}>Email</label>
                  <input
                    type="email"
                    name="email"
                    value={customerInfo.email}
                    onChange={handleCustomerInfoChange}
                    className={classNames(styles.formInput)}
                    required
                  />
                </div>
                <div>
                  <label className={classNames(styles.formLabel)}>
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={customerInfo.phone}
                    onChange={handleCustomerInfoChange}
                    className={classNames(styles.formInput)}
                    required
                  />
                </div>
                <div className="md:col-span-2">
                  <label className={classNames(styles.formLabel)}>
                    Shipping Address
                  </label>
                  <input
                    type="text"
                    name="address"
                    value={customerInfo.address}
                    onChange={handleCustomerInfoChange}
                    className={classNames(styles.formInput)}
                    required
                  />
                </div>
              </div>
            </div>

            {/* Payment Methods */}
            <div className={classNames(styles.card, "p-6 rounded-lg")}>
              <h2
                className={classNames(
                  styles.sectionTitle,
                  "text-xl font-semibold mb-4"
                )}
              >
                Payment Method
              </h2>
              <div className="space-y-4">
                {["bank_transfer", "COD"].map((method) => (
                  <div key={method}>
                    <label className="flex items-center space-x-3">
                      <input
                        type="radio"
                        value={method}
                        checked={selectedPayment === method}
                        onChange={(e) =>
                          setSelectedPayment(e.target.value as PaymentMethod)
                        }
                        className={classNames(styles.radioInput)}
                      />
                      <span className={classNames(styles.radioLabel)}>
                        {method.replace("_", " ")}
                      </span>
                    </label>

                    {selectedPayment === method && (
                      <div
                        className={classNames(
                          styles.paymentInfo,
                          "ml-7 mt-2 p-4 rounded"
                        )}
                      >
                        {method === "bank_transfer" ? (
                          <>
                            <h3
                              className={classNames(
                                styles.subHeading,
                                "font-medium mb-2"
                              )}
                            >
                              Bank Details
                            </h3>
                            <p>Bank: {bankDetails.bankName}</p>
                            <p>Account Title: {bankDetails.accountTitle}</p>
                            <p>Account Number: {bankDetails.accountNumber}</p>
                            <p>IBAN: {bankDetails.iban}</p>

                            <div className="mt-4">
                              <label className={classNames(styles.uploadLabel)}>
                                Upload Payment Receipt
                              </label>
                              <input
                                type="file"
                                accept="image/*"
                                onChange={handleFileChange}
                                className={classNames(
                                  styles.fileInput,
                                  "mt-1 block w-full"
                                )}
                              />
                            </div>

                            <button
                              onClick={handleWhatsAppShare}
                              className={classNames(
                                styles.whatsappButton,
                                "mt-4"
                              )}
                            >
                              Share on WhatsApp
                            </button>
                          </>
                        ) : (
                          ""
                          // <p>{`${
                          //   method.charAt(0).toUpperCase() + method.slice(1)
                          // } Account: 0300-1234567`}</p>
                        )}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Order Total */}
          <div className="lg:col-span-4">
            <div className={classNames(styles.card, "p-6 sticky top-4")}>
              <h2
                className={classNames(
                  styles.sectionTitle,
                  "text-lg font-medium mb-4"
                )}
              >
                Order Total
              </h2>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className={classNames(styles.label)}>Subtotal</span>
                  <span className={classNames(styles.value)}>
                    PKR {calculateSubtotal().toFixed(2)}
                  </span>
                </div>
                {cartItems.length > 0 && (
                  <div className="flex justify-between">
                    <span className={classNames(styles.label)}>Shipping</span>
                    <span className={classNames(styles.value)}>PKR 400.00</span>
                  </div>
                )}
                <div className="border-t pt-2 mt-2">
                  <div className="flex justify-between">
                    <span
                      className={classNames(
                        styles.totalLabel,
                        "text-lg font-medium"
                      )}
                    >
                      Total
                    </span>
                    <span
                      className={classNames(
                        styles.totalValue,
                        "text-lg font-medium"
                      )}
                    >
                      PKR{" "}
                      {(
                        calculateSubtotal() + (cartItems.length > 0 ? 400 : 0)
                      ).toFixed(2)}
                    </span>
                  </div>
                </div>
              </div>
              <button
                onClick={handlePlaceOrder}
                disabled={isSubmitting}
                className={classNames(
                  styles.placeOrderButton,
                  "w-full mt-6 py-3 rounded-md",
                  isSubmitting && styles.disabled
                )}
              >
                {isSubmitting ? "Placing Order..." : "Place Order"}
              </button>
              {error && (
                <p className="text-red-500 mt-2 text-center">{error}</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
