import React, { useState } from "react";
import styles from "./style.module.scss";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

const faqs = [
  {
    question: "What is your return policy?",
    answer:
      "We offer a 7-day return policy for all unworn items in their original condition with tags attached. To initiate a return, please contact our customer service team via email at help@noyr.com or WhatsApp. Shipping costs for returns are the responsibility of the customer unless the item is defective.",
  },
  {
    question: "How long does shipping take?",
    answer:
      "Standard shipping typically takes 3-5 business days within Pakistan. We charge a flat rate of PKR 300 for shipping anywhere in Pakistan.",
  },
  {
    question: "Do you offer international shipping?",
    answer: "Currently, we only ship within Pakistan.",
  },
  {
    question: "How can I track my order?",
    answer:
      "Once your order ships, you'll receive a confirmation email with tracking information. You can also contact our customer service team for tracking updates.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept all major credit cards (Visa, MasterCard, American Express), PayPal, and Apple Pay. All transactions are secure and encrypted.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className={styles.faqSection}>
      <h3>Frequently Asked Questions</h3>
      <p className={styles.subtitle}>
        Find quick answers to common questions about our services
      </p>

      <div className={styles.faqList}>
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`${styles.faqItem} ${
              openIndex === index ? styles.active : ""
            }`}
          >
            <button
              className={styles.faqButton}
              onClick={() => toggleFAQ(index)}
              aria-expanded={openIndex === index}
            >
              <span>{faq.question}</span>
              {openIndex === index ? <FiChevronUp /> : <FiChevronDown />}
            </button>
            <div
              className={styles.faqAnswer}
              style={{
                maxHeight: openIndex === index ? "500px" : "0",
              }}
            >
              <p>{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
