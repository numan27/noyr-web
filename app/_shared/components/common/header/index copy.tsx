import React, { useState, useEffect, useRef } from "react";
import { ShoppingBag, Search, User, Grid } from "lucide-react"; // Import Grid icon
import SideCanvas from "../sideCanvas";
import Link from "next/link";
import classNames from "classnames";
import styles from "./style.module.scss";
import { headerLinks } from "utils/constants";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false); // State for search popup
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const searchRef = useRef<HTMLDivElement>(null);

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
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={classNames(
        styles.header,
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        { "glass-navbar py-3": isScrolled, "py-5": !isScrolled }
      )}
    >
      <div className="container px-4 mx-auto">
        {/* Modern Icon for SideCanvas Trigger */}
        <div
          className={classNames(
            styles.sideCanvasTrigger,
            "fixed left-3 top-1/3 cursor-pointer"
          )}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className={styles.iconContainer}>
            <Grid size={24} className={styles.icon} />
            <span className={styles.iconText}>Collections</span>
          </div>
        </div>

        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            className="text-white text-2xl font-serif tracking-wider z-10"
          >
            NOYR
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <ul
              className={classNames(
                styles.main__menu,
                "md:flex items-center gap-5 hidden ms-2"
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
                      "flex items-center uppercase"
                    )}
                  >
                    {link.title}
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

          {/* Icons */}
          <div className="flex items-center space-x-5 z-50">
            <button
              className="text-white/90 hover:text-white transition-colors"
              onClick={() => setIsSearchOpen(!isSearchOpen)}
            >
              <Search size={20} />
            </button>
            <button className="text-white/90 hover:text-white transition-colors">
              <User size={20} />
            </button>
            <button className="text-white/90 hover:text-white transition-colors">
              <ShoppingBag size={20} />
            </button>
          </div>
        </div>
      </div>

      {/* Search Popup */}
      {isSearchOpen && (
        <div
          ref={searchRef}
          className={classNames(
            styles.searchPopup,
            "fixed top-20 right-4 bg-black p-4 rounded-lg shadow-lg"
          )}
        >
          <input
            type="text"
            placeholder="Search..."
            className="w-full p-2 rounded bg-gray-800 text-white focus:outline-none"
          />
        </div>
      )}

      {/* SideCanvas */}
      <SideCanvas
        isOpen={isHovered}
        setIsOpen={setIsHovered}
        // @ts-ignore
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      />
    </header>
  );
};

export default Header;
