"use client";
import { useEffect } from "react";
import { CookiesProvider } from "react-cookie";
import { ToastContainer } from "react-toastify";
import { Next13ProgressBar } from "next13-progressbar";
import "react-toastify/dist/ReactToastify.css";
import AOS from "aos";
import { CartProvider } from "./context/CartContext";

const CustomProvider = ({ children }: any) => {
  useEffect(() => {
    AOS.init({
      easing: "ease-in-out",
      duration: 1000,
      delay: 0,
    });
  }, []);
  return (
    <div>
      <Next13ProgressBar
        height="4px"
        color="#866146"
        options={{ showSpinner: false }}
        showOnShallow
      />
      <CartProvider>
        <CookiesProvider>{children}</CookiesProvider>
      </CartProvider>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
};

export default CustomProvider;
