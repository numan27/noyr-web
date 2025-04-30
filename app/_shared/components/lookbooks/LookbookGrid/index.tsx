import React from "react";
import styles from "./style.module.scss";
import Image, { StaticImageData } from "next/image";
import { motion } from "framer-motion";
import { products } from "utils/constants";
import { ArrowRight } from "lucide-react";

interface LookbookItem {
  id: number;
  image: StaticImageData;
  title: string;
  description: string;
  category: string;
  products?: any[];
}

const featuredCollections: LookbookItem[] = [
  {
    id: 1,
    image: products[0].image,
    title: "Shirts Collection",
    description:
      "Discover our premium shirts collection featuring classic fits and modern designs",
    category: "shirts",
    products: products.filter((p) => p.category === "shirts").slice(0, 3),
  },
  {
    id: 2,
    image: products[7].image,
    title: "Trousers Collection",
    description:
      "Explore our range of sophisticated trousers for every occasion",
    category: "trousers",
    products: products.filter((p) => p.category === "trousers").slice(0, 3),
  },
  {
    id: 3,
    image: products[12].image,
    title: "Jeans Collection",
    description:
      "Experience our premium denim collection with contemporary styles",
    category: "jeans",
    products: products.filter((p) => p.category === "jeans").slice(0, 3),
  },
];

const seasonalLooks = [
  {
    id: 1,
    image: products[0].image,
    title: "Urban Essentials",
    description: "Perfect combinations for city life",
    products: [products[0], products[7], products[12]],
  },
  {
    id: 2,
    image: products[1].image,
    title: "Casual Elegance",
    description: "Effortless style for everyday wear",
    products: [products[1], products[8], products[13]],
  },
  {
    id: 3,
    image: products[2].image,
    title: "Minimalist Vibes",
    description: "Clean lines and sophisticated simplicity",
    products: [products[2], products[9], products[12]],
  },
];

const LookbookGrid = () => {
  // Calculate collection statistics
  const shirtsCount = products.filter((p) => p.category === "shirts").length;
  const trousersCount = products.filter(
    (p) => p.category === "trousers"
  ).length;
  const jeansCount = products.filter((p) => p.category === "jeans").length;
  const totalProducts = products.length;
  const newArrivals = products.filter((p) => p.isNew).length;

  return (
    <div className={styles.lookbookContainer}>
      {/* Hero Section */}
      {/* <section className={styles.heroSection}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className={styles.heroContent}
        >
          <h1>Discover Your Style</h1>
          <p>Explore our latest collections and find your perfect look</p>
        </motion.div>
      </section> */}

      {/* Collection Stats */}
      <section className={styles.collectionStats}>
        <h2>Our Latest Collections</h2>
        <div className={styles.statsGrid}>
          <motion.div
            className={styles.statCard}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3>{totalProducts}</h3>
            <p>Total Products</p>
          </motion.div>
          <motion.div
            className={styles.statCard}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h3>{shirtsCount}</h3>
            <p>Premium Shirts</p>
          </motion.div>
          <motion.div
            className={styles.statCard}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h3>{trousersCount}</h3>
            <p>Sophisticated Trousers</p>
          </motion.div>
          <motion.div
            className={styles.statCard}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h3>{jeansCount}</h3>
            <p>Contemporary Jeans</p>
          </motion.div>
          <motion.div
            className={styles.statCard}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <h3>{newArrivals}</h3>
            <p>New Arrivals</p>
          </motion.div>
        </div>
      </section>

      {/* Featured Collections */}
      <section className={styles.featuredCollections}>
        <h2>Featured Collections</h2>
        <div className={styles.collectionsGrid}>
          {featuredCollections.map((collection) => (
            <motion.div
              key={collection.id}
              className={styles.collectionItem}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: collection.id * 0.1 }}
            >
              <div className={styles.imageWrapper}>
                <Image
                  src={collection.image}
                  alt={collection.title}
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
                    <h3>{collection.title}</h3>
                    <p>{collection.description}</p>
                    <div className={styles.productGrid}>
                      {collection.products?.map((product) => (
                        <div key={product.id} className={styles.productPreview}>
                          <Image
                            src={product.image}
                            alt={product.name}
                            width={100}
                            height={100}
                          />
                          <span>{product.name}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Seasonal Looks */}
      <section className={styles.seasonalLooks}>
        <h2>Seasonal Looks</h2>
        <div className={styles.looksGrid}>
          {seasonalLooks.map((look) => (
            <motion.div
              key={look.id}
              className={styles.lookItem}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: look.id * 0.1 }}
            >
              <div className={styles.imageWrapper}>
                <Image
                  src={look.image}
                  alt={look.title}
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
                    <h3>{look.title}</h3>
                    <p>{look.description}</p>
                    <div className={styles.productGrid}>
                      {look.products.map((product) => (
                        <div key={product.id} className={styles.productPreview}>
                          <Image
                            src={product.image}
                            alt={product.name}
                            width={100}
                            height={100}
                          />
                          <span>{product.name}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Styling Tips */}
      <section className={styles.stylingTips}>
        <h2>Styling Inspiration</h2>
        <div className={styles.tipsGrid}>
          <motion.div
            className={styles.tipCard}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3>Mix & Match</h3>
            <p>
              Create versatile looks by combining different pieces from our
              collections
            </p>
          </motion.div>
          <motion.div
            className={styles.tipCard}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3>Layering</h3>
            <p>
              Master the art of layering with our premium shirts and trousers
            </p>
          </motion.div>
          <motion.div
            className={styles.tipCard}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3>Accessorize</h3>
            <p>Complete your look with the perfect accessories</p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default LookbookGrid;
