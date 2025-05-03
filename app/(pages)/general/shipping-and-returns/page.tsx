import React from "react";
import { motion } from "framer-motion";
import styles from "./style.module.scss";
import ShippingContent from "components/shipping/ShippingContent";
import HeroSection from "components/collections/heroSection";

export const metadata = {
  title: "Shipping & Returns | NOYR",
  description: "Learn about our shipping methods and returns policy.",
};

export default function ShippingPage() {
  return (
    <div className={styles.pageWrapper}>
      {/* <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      > */}
      <HeroSection
        title="Shipping & Returns"
        desc="Learn about our shipping methods and return policies"
      />
      <div>
        <header className={styles.pageHeader}>
          <h1>Shipping & Returns</h1>
          <p>
            Everything you need to know about our shipping methods and returns
            policy
          </p>
        </header>
        <ShippingContent />
      </div>
      {/* </motion.div> */}
    </div>
  );
}
