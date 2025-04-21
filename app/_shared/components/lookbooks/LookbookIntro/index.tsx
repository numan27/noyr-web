import React from "react";
import styles from "./style.module.scss";
import { motion } from "framer-motion";

const LookbookIntro = () => {
  return (
    <div className={styles.introSection}>
      <motion.div
        className={styles.content}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2>Our Latest Collections</h2>
        <p>
          Explore our carefully curated lookbooks showcasing the latest in
          minimalist fashion. Each collection tells a unique story through clean
          lines, thoughtful details, and timeless design.
        </p>
      </motion.div>

      <motion.div
        className={styles.stats}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <div className={styles.statItem}>
          <span className={styles.number}>6</span>
          <span className={styles.label}>Collections</span>
        </div>
        <div className={styles.statItem}>
          <span className={styles.number}>120+</span>
          <span className={styles.label}>Unique Pieces</span>
        </div>
        <div className={styles.statItem}>
          <span className={styles.number}>4</span>
          <span className={styles.label}>Seasonal Releases</span>
        </div>
      </motion.div>
    </div>
  );
};

export default LookbookIntro;
