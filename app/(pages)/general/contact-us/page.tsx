"use client";
import React from "react";
import styles from "./style.module.scss";
import HeroSection from "../../../_shared/components/collections/heroSection";
import ContactForm from "../../../_shared/components/contact/ContactForm";
import ContactInfo from "../../../_shared/components/contact/ContactInfo";
import FAQ from "../../../_shared/components/contact/FAQ";

export default function Contact() {
  const handleSubmit = (data: {
    name: string;
    email: string;
    subject: string;
    message: string;
  }) => {
    // Handle form submission
    console.log(data);
  };

  return (
    <div className={styles.pageWrapper}>
      <HeroSection
        title="Contact"
        desc="Get in touch with us for any questions about our products, collaborations, or general inquiries. We're here to help."
      />

      <div className={styles.mainContent}>
        <div className="container mx-auto px-4">
          <div className={styles.topSection}>
            <div className={styles.formSection}>
              <ContactForm onSubmit={handleSubmit} />
            </div>
            <div className={styles.infoSection}>
              <ContactInfo />
            </div>
          </div>

          <div className={styles.faqSection}>
            <FAQ />
          </div>
        </div>
      </div>
    </div>
  );
}
