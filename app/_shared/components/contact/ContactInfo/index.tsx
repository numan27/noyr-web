import React from "react";
import styles from "./style.module.scss";
import { FiMail, FiPhone, FiClock } from "react-icons/fi";
import { IoLogoWhatsapp } from "react-icons/io5";

const ContactInfo = () => {
  return (
    <div className={styles.contactInfo}>
      <h3>Get in Touch</h3>
      <p className={styles.subtitle}>
        Have a question or need assistance? We're here to help!
      </p>

      <div className={styles.infoGrid}>
        <div className={styles.infoItem}>
          <div className={styles.iconWrapper}>
            <FiMail />
          </div>
          <div className={styles.content}>
            <h4>Email Us</h4>
            <a href="mailto:info@noyr.store">info@noyr.store</a>
          </div>
        </div>

        <div className={styles.infoItem}>
          <div className={styles.iconWrapper}>
            <FiPhone />
          </div>
          <div className={styles.content}>
            <h4>Call Us</h4>
            <a href="tel:+923147883458">+923147883458</a>
          </div>
        </div>

        <div className={styles.infoItem}>
          <div className={styles.iconWrapper}>
            <IoLogoWhatsapp />
          </div>
          <div className={styles.content}>
            <h4>Whatsapp</h4>
            <a href="https://wa.me/923264688466">+923264688466</a>
          </div>
        </div>

        <div className={styles.infoItem}>
          <div className={styles.iconWrapper}>
            <FiClock />
          </div>
          <div className={styles.content}>
            <h4>Business Hours</h4>
            <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
            <p>Saturday: 10:00 AM - 4:00 PM</p>
          </div>
        </div>
      </div>

      <div className={styles.additionalInfo}>
        <h4>Connect With Us</h4>
        <p>
          Follow us on social media for the latest updates, style inspiration,
          and exclusive offers.
        </p>
      </div>
    </div>
  );
};

export default ContactInfo;
