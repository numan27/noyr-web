"use client";

import classNames from "classnames";
import React from "react";
import { MessageCircle } from "lucide-react";
import styles from "./style.module.scss";

const WhatsAppCTA = () => {
  const openWhatsApp = () => {
    window.open("https://wa.me/1234567890", "_blank");
  };

  return (
    <button
      onClick={openWhatsApp}
      className={classNames(styles.whatsappButton, styles.visible)}
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={20} />
    </button>
  );
};

export default WhatsAppCTA;
