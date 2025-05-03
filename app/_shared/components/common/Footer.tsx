import React from "react";
import {
  ArrowRight,
  Twitter,
  Instagram,
  Facebook,
  Youtube,
  Star,
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
        { label: "Shirts", href: routeConstant.collections.path + "?shirts" },
        {
          label: "Trousers",
          href: routeConstant.collections.path + "?trousers",
        },
        { label: "Jeans", href: routeConstant.collections.path + "?jeans" },
        { label: "All Products", href: routeConstant.collections.path },
      ],
    },
    {
      title: "Help",
      links: [
        {
          label: "Terms & Conditions",
          href: routeConstant.termsAndConditions.path,
        },
        {
          label: "Shipping & Returns",
          href: routeConstant.shippingAndReturns.path,
        },
        { label: "About Us", href: routeConstant.about.path },
        { label: "Contact Us", href: routeConstant.contact.path },
      ],
    },
  ];

  const socialLinks = [
    {
      icon: <Instagram size={20} />,
      href: "https://www.instagram.com/noyr.official_?igsh=MWpza3R5Yjl0enUxdw==",
    },
    { icon: <Twitter size={20} />, href: "#" },
    {
      icon: <Facebook size={20} />,
      href: "https://www.facebook.com/share/163MsJ4fBR/?mibextid=wwXIfr",
    },
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

          {/* Review Prompt */}
          <div>
            <h4 className="text-lg text-white font-medium mb-4">
              Share Your Experience
            </h4>
            <p className="mb-4 text-left">
              We value your feedback! Rate your shopping experience with us.
            </p>

            <div className="mb-4">
              <p className="text-sm text-white/70 mb-2 text-left">
                How would you rate us?
              </p>
              <div className="flex space-x-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    className="text-white/70 hover:text-yellow-400 hover:fill-yellow-400 transition-colors"
                    aria-label={`Rate ${star} star`}
                  >
                    <Star size={20} />
                  </button>
                ))}
              </div>
            </div>

            {/* <div className="mb-4">
              <textarea
                placeholder="Tell us about your experience..."
                className="w-full bg-white/10 px-4 py-2 text-white placeholder:text-white/50 focus:outline-none min-h-[100px]"
              />
            </div> */}

            {/* <button className="bg-white text-black px-6 py-2 hover:bg-sand-100 transition-colors text-sm font-medium">
              Submit Review
            </button> */}
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
