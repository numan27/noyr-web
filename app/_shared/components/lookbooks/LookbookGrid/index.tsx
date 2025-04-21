import React from "react";
import styles from "./style.module.scss";
import Image from "next/image";
import { motion } from "framer-motion";

interface LookbookItem {
  id: number;
  image: string;
  title: string;
  description: string;
}

const lookbooks: LookbookItem[] = [
  {
    id: 1,
    image: "/bg-1.jpg",
    title: "Summer Collection",
    description: "Minimalist essentials for the modern wardrobe",
  },
  {
    id: 2,
    image: "/bg-2.jpg",
    title: "Urban Style",
    description: "Contemporary streetwear with a refined touch",
  },
  {
    id: 3,
    image: "/bg-3.jpg",
    title: "Casual Elegance",
    description: "Effortless style for everyday moments",
  },
  {
    id: 4,
    image: "/bg-4.jpg",
    title: "Evening Wear",
    description: "Sophisticated pieces for special occasions",
  },
  {
    id: 5,
    image: "/bg-5.jpg",
    title: "Weekend Casual",
    description: "Relaxed fits for your off-duty style",
  },
  {
    id: 6,
    image: "/bg-6.jpg",
    title: "Modern Basics",
    description: "Essential pieces with a contemporary twist",
  },
];

const LookbookGrid = () => {
  return (
    <div className={styles.lookbookGrid}>
      {lookbooks.map((item) => (
        <motion.div
          key={item.id}
          className={styles.lookbookItem}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: item.id * 0.1 }}
        >
          <div className={styles.imageWrapper}>
            <Image
              src={item.image}
              alt={item.title}
              width={800}
              height={1000}
              className={styles.image}
            />
            <div className={styles.overlay}>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileHover={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2 }}
                className={styles.content}
              >
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default LookbookGrid;
