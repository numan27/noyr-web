import styles from "./style.module.scss";
import Image, { StaticImageData } from "next/image";
import classNames from "classnames";
import Link from "next/link";
import { routeConstant } from "routes/constants";

type ProductCardProps = {
  product: {
    id: string;
    name: string;
    price: string;
    color: string;
    colorsAvailable: string;
    image: StaticImageData;
  };
  selectedVariation: string | null;
  onVariationSelect: (productId: string, size: string) => void;
  isHovered: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
};

const ProductCard: React.FC<ProductCardProps> = ({
  product,
  selectedVariation,
  onVariationSelect,
  isHovered,
  onMouseEnter,
  onMouseLeave,
}) => {
  const handleSizeClick = (e: React.MouseEvent, size: string) => {
    e.preventDefault(); // Prevent navigation
    e.stopPropagation(); // Stop event bubbling
    onVariationSelect(product.id, size);
  };

  return (
    <div className={styles.productCard}>
      <div className={styles.productImageContainer}>
        <Link
          href={routeConstant.productDetail.path.replace(":id", product.id)}
        >
          <Image
            src={product.image}
            alt={product.name}
            className={styles.productImage}
            width={300}
            height={400}
          />
        </Link>
        <div
          className={classNames(
            styles.plusIconContainer,
            "flex items-center justify-center"
          )}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          onClick={(e) => e.preventDefault()}
        >
          {isHovered ? (
            <div className={classNames(styles.productVariations)}>
              <div
                className={classNames(
                  styles.sizeSelector,
                  "flex items-center justify-center"
                )}
              >
                {["XS", "S", "M", "L", "XL", "XXL"].map((size) => (
                  <button
                    key={size}
                    className={classNames(
                      styles.sizeButton,
                      selectedVariation === size && styles.selected
                    )}
                    onClick={(e) => handleSizeClick(e, size)}
                  >
                    {size}
                    {selectedVariation === size && (
                      <span className={styles.checkIcon}>✔</span>
                    )}
                  </button>
                ))}
              </div>
            </div>
          ) : (
            <div className={styles.plusIcon}>+</div>
          )}
        </div>
      </div>
      <div className={classNames(styles.productDetails, "text-black")}>
        <h3 className={styles.productName}>{product.name}</h3>
        <p className={classNames(styles.productColor, "text-black")}>
          {product.color} | {product.colorsAvailable} Colors
        </p>
        <p className={styles.productPrice}>{product.price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
