"use client";
import { Icons, Images } from "assets";
import classNames from "classnames";
import { useEffect, useState } from "react";
import { headerLinks } from "utils/constants";
import styles from "./style.module.scss";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { routeConstant } from "routes/constants";
import Image from "next/image";
import { MyContext } from "utils/myContext";
import DynamicActions from "../header/dynamicActions";
import CustomAnimatedBorder from "../customAnimatedBorder";
import CustomButton from "../customButton";
import { handleScrollToQuote } from "utils/scrollHelpers";

interface SideCanvasProps {
  setIsOpen: (val: boolean) => void;
  isOpen: boolean;
  hoveredTab: string | null;
}

const SideCanvas = ({ isOpen, setIsOpen, hoveredTab }: SideCanvasProps) => {
  const pathname = usePathname();
  const [openDropdown, setOpenDropdown] = useState<number | null>(null);

  function handleClick(e: any) {
    const elem: any = document.getElementById("sideCanvas");
    if (!elem.contains(e.target)) {
      setIsOpen(false);
    }
  }

  useEffect(() => {
    let elem: any = document.getElementById("backDropContainer");
    elem.addEventListener("click", (event: any) => {
      handleClick(event);
    });
  }, [pathname]);

  const getContentForTab = () => {
    switch (hoveredTab) {
      case "Men":
        return (
          <div>
            <h3>Men's Collection</h3>
            {/* Add Men's specific links */}
          </div>
        );
      case "Women":
        return (
          <div>
            <h3>Women's Collection</h3>
            {/* Add Women's specific links */}
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div
      className={classNames(styles.backDropContainer, "lg:hidden")}
      style={isOpen ? { visibility: "visible" } : { visibility: "hidden" }}
      id="backDropContainer"
    >
      <div
        className={classNames(
          styles.mainContainer,
          isOpen ? styles.shown : styles.hidden
        )}
        id="sideCanvas"
      >
        {/* Logo and Close Button */}
        <div
          className={classNames(
            "flex justify-between items-center px-4 gap-4",
            styles.logoContainer
          )}
        >
          <Link
            href={routeConstant.home.path}
            className={classNames(styles.site__logo)}
          >
            <Image
              data-aos="flip-right"
              src={Images.Logo}
              alt="Hayes Media"
              width={56}
              height={56}
              priority
            />
          </Link>
          <div
            className={classNames(styles.crossContainer)}
            onClick={() => setIsOpen(false)}
          >
            <Icons.Cross />
          </div>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col gap-4 px-4 mt-7">
          {getContentForTab()}
        </div>
      </div>
    </div>
  );
};

export default SideCanvas;
