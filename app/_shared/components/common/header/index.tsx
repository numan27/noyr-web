import React, { useState, useEffect, useRef } from "react";
import { ShoppingBag, Search, ArrowRight, Menu, X } from "lucide-react";
import SideCanvas from "../sideCanvas";
import CartSideCanvas from "../cartSideCanvas";
import Link from "next/link";
import classNames from "classnames";
import styles from "./style.module.scss";
import { headerLinks } from "utils/constants";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";
import { Icons, Images } from "assets";
import useWindowDimensions from "hooks/useWindowDimensions";
import { routeConstant } from "routes/constants";

interface HeaderProps {
  isLandingPage?: boolean;
}

const Header = ({ isLandingPage = false }: HeaderProps) => {
  const router = useRouter();
  const { width } = useWindowDimensions();
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const searchRef = useRef<HTMLDivElement>(null);
  const cartRef = useRef<HTMLDivElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target as Node)
      ) {
        setIsMobileMenuOpen(false);
      }
      if (
        searchRef.current &&
        !searchRef.current.contains(event.target as Node)
      ) {
        setIsSearchOpen(false);
      }
      if (cartRef.current && !cartRef.current.contains(event.target as Node)) {
        setIsCartOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const getHeaderStyle = () => {
    if (isLandingPage) {
      return isScrolled ? "glass-navbar bg-white/80" : "bg-transparent";
    }
    return "bg-black";
  };

  const getTextStyle = () => {
    if (isLandingPage) {
      return isScrolled ? "text-black/80" : "text-white/90";
    }
    return "text-white/90";
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(
        `${routeConstant.searchResults.path}?q=${encodeURIComponent(
          searchQuery.trim()
        )}`
      );
      setIsSearchOpen(false);
      setSearchQuery("");
    }
  };

  useEffect(() => {
    if (isSearchOpen && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [isSearchOpen]);

  return (
    <header
      className={classNames(
        styles.header,
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        getHeaderStyle(),
        "py-2"
      )}
    >
      <div className="container px-4 mx-auto">
        {/* <div
          className={classNames(
            styles.sideCanvasTrigger,
            "fixed left-0 top-32 cursor-pointer"
          )}
          onMouseEnter={() => setIsHovered(true)}
        >
          <div className={styles.iconContainer}>
            <Grid size={24} className={styles.icon} />
            <span className={styles.iconText}>Collections</span>
          </div>
        </div> */}

        <div className="flex items-center">
          {/* Desktop */}
          <div className="hidden md:flex flex-1 justify-start">
            <nav className="flex items-center space-x-8">
              <ul
                className={classNames(
                  styles.main__menu,
                  "md:flex items-center gap-7 hidden ms-2"
                )}
              >
                {headerLinks.map((link, index) => (
                  <li key={index} className={classNames("relative group")}>
                    <Link
                      href={link.path || ""}
                      className={classNames(
                        styles.navLink,
                        (pathname === link.path ||
                          link.children?.some((child) =>
                            pathname.startsWith(child.path)
                          )) &&
                          styles.activeLink,
                        "flex items-center uppercase",
                        getTextStyle()
                      )}
                    >
                      {link.title}
                      {/* <span>
                        <Icons.ChevDown />
                      </span> */}
                    </Link>

                    {link.children && (
                      <ul
                        className={classNames(
                          styles.subMenu,
                          "absolute left-0 hidden group-hover:block"
                        )}
                      >
                        {link.children.map((child, childIndex) => (
                          <li
                            className={classNames(styles.subMenuItem)}
                            key={childIndex}
                          >
                            <Link
                              href={child.path}
                              className={classNames(
                                styles.subMenuLink,
                                pathname === child.path &&
                                  styles.activeSubMenuLink
                              )}
                            >
                              {child.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Logo */}
          <div className="flex-1 md:flex-none md:mx-auto">
            <Link
              href={routeConstant.home.path}
              className={classNames(styles.logo)}
            >
              <Image width={130} src={Images.Logo} alt="Noyr-Logo" />
            </Link>
          </div>

          {/* Icons */}
          <div className="flex-1 flex justify-end">
            <div className="flex items-center space-x-5 z-50">
              <button
                className={classNames(
                  "hover:opacity-80 transition-colors",
                  getTextStyle()
                )}
                onClick={() => setIsSearchOpen(!isSearchOpen)}
              >
                <Search size={20} />
              </button>
              {/* <button className="text-white/90 hover:text-white transition-colors">
              <User size={20} />
            </button> */}
              <button
                className={classNames(
                  "hover:opacity-80 transition-colors",
                  getTextStyle()
                )}
                onClick={() => setIsCartOpen(!isCartOpen)}
              >
                <ShoppingBag size={20} />
              </button>
              <button
                className={classNames(
                  "hover:opacity-80 transition-colors md:hidden",
                  getTextStyle()
                )}
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
        {/* Mobile Menu */}
        <div
          ref={mobileMenuRef}
          className={classNames(
            styles.mobileMenu,
            `fixed inset-0 bg-black/95 z-40 flex flex-col items-center justify-center transition-all duration-300 ${
              isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
            }`
          )}
        >
          <nav className="flex flex-col items-center space-y-8 text-center">
            {headerLinks.map((items, index) => (
              <Link
                key={index}
                href="#"
                className="text-white text-xl uppercase tracking-wider"
                onClick={closeMobileMenu}
              >
                {items.title}
              </Link>
            ))}
          </nav>
        </div>
      </div>

      {/* Search Popup */}
      {isSearchOpen && (
        <div
          ref={searchRef}
          className={classNames(
            styles.searchPopup,
            "fixed top-20 left-0 right-0 bg-black p-4 shadow-lg"
          )}
        >
          <div className="container mx-auto">
            <form onSubmit={handleSearch} className="flex items-center">
              <input
                ref={searchInputRef}
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search products..."
                className="flex-1 bg-transparent text-white border-b border-white/30 focus:border-white outline-none py-2 px-4"
              />
              <button
                type="submit"
                className="text-white hover:text-white/80 transition-colors ml-4"
              >
                <Search size={20} />
              </button>
            </form>
          </div>
        </div>
      )}

      {/* SideCanvas */}
      {/* <SideCanvas
        isOpen={isHovered}
        setIsOpen={setIsHovered}
        // @ts-ignore
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      /> */}

      {/* CartSideCanvas */}
      <CartSideCanvas
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
      />
    </header>
  );
};

export default Header;
