import React from "react";
import { FaTruck, FaInfoCircle } from "react-icons/fa";
import styles from "./style.module.scss";

const ShippingContent = () => {
  const shippingMethods = [
    {
      icon: <FaTruck />,
      title: "Standard Shipping",
      description: "3-5 business days",
      price: "PKR 300 flat rate shipping anywhere in Pakistan",
    },
  ];

  const returnPolicies = [
    {
      icon: <FaInfoCircle />,
      title: "Return Policy",
      description:
        "Returns accepted within 7 days of delivery. Items must be unworn with tags attached.",
    },
  ];

  return (
    <div className={styles.shippingContent}>
      <section className={styles.shippingMethods}>
        <h2>Shipping Method</h2>
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
        </ul>
      </section>
    </div>
  );
};

export default ShippingContent;
