import React from "react";
import {
  ArrowRight,
  Twitter,
  Instagram,
  Facebook,
  Youtube,
} from "lucide-react";
import Link from "next/link";
import { routeConstant } from "routes/constants";
import Image from "next/image";
import { Images } from "assets";

const Footer: React.FC = () => {
  const footerItems = [
    {
      title: "Shop",
      links: [
        { label: "Men", href: routeConstant.collections.path + "?men" },
        { label: "Women", href: routeConstant.collections.path + "?women" },
        {
          label: "New Arrivals",
          href: routeConstant.collections.path + "?new-arrivals",
        },
        { label: "Sale", href: routeConstant.sales.path },
        { label: "Lookbook", href: routeConstant.lookbook.path },
      ],
    },
    {
      title: "Help",
      links: [
        { label: "Customer Service", href: "#" },
        { label: "My Account", href: "#" },
        { label: "Store Locator", href: "#" },
        { label: "Legal & Privacy", href: "#" },
        { label: "Contact", href: "#" },
      ],
    },
  ];

  const socialLinks = [
    { icon: <Instagram size={20} />, href: "#" },
    { icon: <Twitter size={20} />, href: "#" },
    { icon: <Facebook size={20} />, href: "#" },
    { icon: <Youtube size={20} />, href: "#" },
  ];

  return (
    <footer className="bg-brand-950 text-white/80 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="flex md:justify-start justify-center">
              <Link
                href={routeConstant.home.path}
                className="lg:mb-9 md:mb-8 mb-6"
              >
                <Image
                  className="lg:w-64 md:w-48 sm:w-32 w-24"
                  width={250}
                  src={Images.Logo}
                  alt="Noyr-Logo"
                />
              </Link>
            </div>
            <p className="mb-6">
              Contemporary fashion at the intersection of style and function,
              created with meticulous attention to detail.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <Link
                  key={index}
                  href={social.href}
                  className="text-white/70 hover:text-white transition-colors"
                >
                  {social.icon}
                </Link>
              ))}
            </div>
          </div>

          {/* Mapped Footer Items */}
          {footerItems.map((item) => (
            <div key={item.title}>
              <h4 className="text-lg text-white font-medium mb-4">
                {item.title}
              </h4>
              <ul className="space-y-3">
                {item.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Newsletter */}
          <div>
            <h4 className="text-lg text-white font-medium mb-4">Newsletter</h4>
            <p className="mb-4">
              Subscribe to receive updates, access to exclusive deals, and more.
            </p>
            <form className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-white/10 px-4 py-2 w-full text-white placeholder:text-white/50 focus:outline-none"
              />
              <button
                type="submit"
                className="bg-white text-black px-4 hover:bg-sand-100 transition-colors"
              >
                <ArrowRight size={20} />
              </button>
            </form>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 flex justify-center items-center">
          <p>© 2025 Noyr. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
