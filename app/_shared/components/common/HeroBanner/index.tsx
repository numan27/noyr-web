import React from "react";
import styles from "./style.module.scss";
import Image from "next/image";

interface HeroBannerProps {
  title: string;
  description?: string;
  imagePath: string;
}

const HeroBanner: React.FC<HeroBannerProps> = ({
  title,
  description,
  imagePath,
}) => {
  return (
    <div className={styles.heroBanner}>
      <div className={styles.imageWrapper}>
        <Image
          src={imagePath}
          alt={title}
          fill
          priority
          className={styles.image}
        />
        <div className={styles.overlay} />
      </div>
      <div className={styles.content}>
        <h1>{title}</h1>
        {description && <p>{description}</p>}
      </div>
    </div>
  );
};

export default HeroBanner;
