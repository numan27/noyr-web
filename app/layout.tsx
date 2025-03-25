import type { Metadata } from "next";
import { Raleway, Titillium_Web } from "next/font/google";
import classNames from "classnames";
import "./globals.css";
import "./styles.scss";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import "aos/dist/aos.css";
import CustomProvider from "_shared/provider";
import ScrollToTop from "components/common/scrollToTop";
import WhatsAppCTA from "components/common/whatsAppCTA";

export const metadata: Metadata = {
  title: "Noyr",
  description: "",
  openGraph: {
    title: "Noyr",
    description: "",
    url: "https://noyr.store",
    siteName: "Noyr Store",
    // images: [
    //   {
    //     url: "https://hayesmediaco.com/fav.webp",
    //     width: 625,
    //     height: 625,
    //     alt: "Hayes Media",
    //   },
    // ],
    type: "website",
  },
  // twitter: {
  //   card: "summary_large_image",
  //   title: "Noyr",
  //   description: "",
  //   images: ["https://hayesmediaco.com/fav.webp"],
  // },
};

const raleway = Raleway({
  variable: "--font-raleway",
  display: "swap",
  subsets: ["latin"],
});
const titilliumWeb = Titillium_Web({
  variable: "--font-titillium",
  display: "swap",
  subsets: ["latin"],
  weight: ["600", "700", "900"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={classNames(raleway.variable, titilliumWeb.variable)}
    >
      <head>
        <link rel="icon" href="/icon.png" />
        <link rel="apple-touch-icon" href="/icon.png" />
      </head>
      <body>
        <CustomProvider>
          {children}
          <WhatsAppCTA />
          <ScrollToTop />
        </CustomProvider>
      </body>
    </html>
  );
}
