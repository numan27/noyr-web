"use client";
import classNames from "classnames";
import styles from "./style.module.scss";
import { X } from "lucide-react";
import Image, { StaticImageData } from "next/image";

type CartItem = {
  id: number;
  name: string;
  price: string;
  size: string;
  image: StaticImageData;
  quantity: number;
};

interface CartSideCanvasProps {
  isOpen: boolean;
  setIsOpen: (val: boolean) => void;
  cartItems?: CartItem[];
  removeFromCart?: (id: number) => void;
}

const CartSideCanvas = ({
  isOpen,
  setIsOpen,
  cartItems = [],
  removeFromCart,
}: CartSideCanvasProps) => {
  const calculateSubtotal = () => {
    return cartItems.reduce((total, item) => {
      return total + parseFloat(item.price.replace("$", "")) * item.quantity;
    }, 0);
  };

  return (
    <div
      className={classNames(styles.cartBackDropContainer, "")}
      style={isOpen ? { visibility: "visible" } : { visibility: "hidden" }}
    >
      <div
        className={classNames(
          styles.cartMainContainer,
          isOpen ? styles.cartShown : styles.cartHidden
        )}
      >
        <div className="flex justify-between items-center px-4 py-4 border-b border-gray-700">
          <h3 className="text-white text-lg font-bold">Cart</h3>
          <button
            onClick={() => setIsOpen(false)}
            className="text-white/80 hover:text-white"
          >
            <X size={24} />
          </button>
        </div>

        <div className="p-4">
          {cartItems.length === 0 ? (
            <p className="text-white/80">Your cart is empty.</p>
          ) : (
            <>
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between mb-4"
                >
                  <div className="flex items-center">
                    <Image
                      src={item.image}
                      alt={item.name}
                      width={60}
                      height={60}
                      className="rounded"
                    />
                    <div className="ml-4">
                      <p className="text-white">{item.name}</p>
                      <p className="text-white/80">{item.size}</p>
                      <p className="text-white/80">{item.price}</p>
                    </div>
                  </div>
                  <button
                    // @ts-ignore
                    onClick={() => removeFromCart(item.id)}
                    className="text-white/80 hover:text-white"
                  >
                    Remove
                  </button>
                </div>
              ))}
              <div className="border-t border-gray-700 pt-4">
                <p className="text-white">
                  Subtotal: ${calculateSubtotal().toFixed(2)}
                </p>
                <p className="text-white font-bold">
                  Total: ${calculateSubtotal().toFixed(2)}
                </p>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default CartSideCanvas;
