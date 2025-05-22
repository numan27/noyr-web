"use client";

import classNames from "classnames";
import React from "react";
import { MessageCircle } from "lucide-react";
import styles from "./style.module.scss";
import { trackContact } from "_shared/utils/metaPixel";

const WhatsAppCTA = () => {
  const openWhatsApp = () => {
    // Track contact event
    trackContact();
    window.open("https://wa.me/923264688466", "_blank");
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
