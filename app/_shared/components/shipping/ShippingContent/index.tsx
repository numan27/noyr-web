import React from "react";
import styles from "./style.module.scss";
import { motion } from "framer-motion";
import { FiTruck, FiClock } from "react-icons/fi";

const ShippingContent = () => {
  const shippingMethods = [
    {
      icon: <FiTruck />,
      title: "Standard Shipping",
      details: [
        "Delivery in 3-5 business days",
        "PKR 300 flat rate shipping anywhere in Pakistan",
        "Tracking number provided",
      ],
    },
  ];

  const returnPolicy = [
    {
      icon: <FiClock />,
      title: "Returns Policy",
      content:
        "We accept returns within 7 days of delivery. Items must be unworn, unwashed, and have original tags attached. To initiate a return, please contact our customer service team via email at help@noyr.com or WhatsApp. Once we receive your return, we'll process your refund within 5-7 business days.",
    },
    {
      icon: <FiClock />,
      title: "Processing Time",
      content:
        "Orders are typically processed within 1-2 business days. During peak seasons or sales events, processing time may be extended by an additional 1-2 days.",
    },
  ];

  return (
    <div className={styles.shippingContent}>
      <motion.section
        className={styles.shippingSection}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2>Shipping Method</h2>
        <div className={styles.singleMethodGrid}>
          {shippingMethods.map((method, index) => (
            <motion.div
              key={index}
              className={styles.methodCard}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className={styles.iconWrapper}>{method.icon}</div>
              <h3>{method.title}</h3>
              <ul>
                {method.details.map((detail, i) => (
                  <li key={i}>{detail}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.section>

      <motion.section
        className={styles.returnsSection}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <h2>Returns & Processing</h2>
        <div className={styles.singleMethodGrid}>
          {returnPolicy.map((policy, index) => (
            <motion.div
              key={index}
              className={styles.policyCard}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: (index + 2) * 0.1 }}
            >
              <div className={styles.iconWrapper}>{policy.icon}</div>
              <h3>{policy.title}</h3>
              <p>{policy.content}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      <motion.div
        className={styles.note}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        <p>
          Note: Shipping times may vary during peak seasons and holidays. For
          any questions about shipping or returns, please contact our customer
          service team.
        </p>
      </motion.div>
    </div>
  );
};

export default ShippingContent;
