import React from "react";
import styles from "./style.module.scss";
import { motion } from "framer-motion";

const TermsContent = () => {
  const sections = [
    {
      title: "1. Acceptance of Terms",
      content: `By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement. Additionally, when using this website's services, you shall be subject to any posted guidelines or rules applicable to such services.`,
    },
    {
      title: "2. Use License",
      content: `Permission is granted to temporarily download one copy of the materials (information or software) on Noyr's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title.`,
    },
    {
      title: "3. Account Registration",
      content: `To access certain features of the website, you may be required to register for an account. You agree to provide accurate, current, and complete information during the registration process and to update such information to keep it accurate, current, and complete.`,
    },
    {
      title: "4. Privacy Policy",
      content: `Your use of the website is also governed by our Privacy Policy. Please review our Privacy Policy, which also governs the website and informs users of our data collection practices.`,
    },
    {
      title: "5. Electronic Communications",
      content: `When you visit the website or send emails to us, you are communicating with us electronically. You consent to receive communications from us electronically. We will communicate with you by email or by posting notices on the website.`,
    },
    {
      title: "6. User Content",
      content: `Any content you upload to the website will be considered non-confidential and non-proprietary. You retain all ownership rights in your content, but you grant us a license to use, store, and copy that content and to distribute and make it available to third parties.`,
    },
    {
      title: "7. Disclaimer",
      content: `The materials on Noyr's website are provided on an 'as is' basis. Noyr makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.`,
    },
  ];

  return (
    <div className={styles.termsContent}>
      {sections.map((section, index) => (
        <motion.div
          key={index}
          className={styles.section}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
        >
          <h3>{section.title}</h3>
          <p>{section.content}</p>
        </motion.div>
      ))}

      <motion.div
        className={styles.lastUpdated}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.8 }}
      >
        <p>Last updated: January 2024</p>
      </motion.div>
    </div>
  );
};

export default TermsContent;
