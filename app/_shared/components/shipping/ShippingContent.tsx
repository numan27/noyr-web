import React from "react";
import {
  FaTruck,
  FaBox,
  FaShippingFast,
  FaUndo,
  FaExchangeAlt,
  FaInfoCircle,
} from "react-icons/fa";
import styles from "./style.module.scss";

const ShippingContent = () => {
  const shippingMethods = [
    {
      icon: <FaTruck />,
      title: "Standard Shipping",
      description: "3-5 business days",
      price: "Free for orders over $50",
    },
    {
      icon: <FaShippingFast />,
      title: "Express Shipping",
      description: "1-2 business days",
      price: "$15.00",
    },
    {
      icon: <FaBox />,
      title: "International Shipping",
      description: "7-14 business days",
      price: "Calculated at checkout",
    },
  ];

  const returnPolicies = [
    {
      icon: <FaUndo />,
      title: "30-Day Returns",
      description: "Easy returns within 30 days of delivery",
    },
    {
      icon: <FaExchangeAlt />,
      title: "Free Exchanges",
      description: "Exchange items for a different size or color",
    },
    {
      icon: <FaInfoCircle />,
      title: "Return Process",
      description: "Initiate returns through your account dashboard",
    },
  ];

  return (
    <div className={styles.shippingContent}>
      <section className={styles.shippingMethods}>
        <h2>Shipping Methods</h2>
        <div className={styles.methodsGrid}>
          {shippingMethods.map((method, index) => (
            <div key={index} className={styles.methodCard}>
              <div className={styles.iconWrapper}>{method.icon}</div>
              <h3>{method.title}</h3>
              <p className={styles.description}>{method.description}</p>
              <p className={styles.price}>{method.price}</p>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.returnPolicy}>
        <h2>Return Policy</h2>
        <div className={styles.policiesGrid}>
          {returnPolicies.map((policy, index) => (
            <div key={index} className={styles.policyCard}>
              <div className={styles.iconWrapper}>{policy.icon}</div>
              <h3>{policy.title}</h3>
              <p>{policy.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.note}>
        <h3>Important Note</h3>
        <ul>
          <li>All orders are processed within 24-48 hours</li>
          <li>Tracking information will be provided via email</li>
          <li>Shipping times may vary during peak seasons</li>
          <li>International orders may be subject to customs fees</li>
        </ul>
      </section>
    </div>
  );
};

export default ShippingContent;
