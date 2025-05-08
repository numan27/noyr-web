export type RouteConstant = {
  home: { path: string; title: string };
  shirts: { path: string; title: string };
  trousers: { path: string; title: string };
  jeans: { path: string; title: string };
  shop: { path: string; title: string };
  brand: { path: string; title: string };
  info: { path: string; title: string };
  collections: { path: string; title: string };
  productDetail: { path: string; title: string };
  sales: { path: string; title: string };
  lookbook: { path: string; title: string };
  about: { path: string; title: string };
  contact: { path: string; title: string };
  privacyPolicy: { path: string; title: string };
  termsAndConditions: { path: string; title: string };
  shippingAndReturns: { path: string; title: string };
  searchResults: { path: string; title: string };
  sizeGuide: { path: string; title: string };
};

const routeConstant: RouteConstant = {
  // Public Pages
  home: {
    path: "/",
    title: "Home",
  },
  shirts: {
    path: "/collections/shirts",
    title: "Shirts",
  },
  trousers: {
    path: "/collections/trousers",
    title: "Trousers",
  },
  jeans: {
    path: "/collections/jeans",
    title: "Jeans",
  },
  shop: {
    path: "/collections",
    title: "Shop",
  },
  brand: {
    path: "",
    title: "Brand",
  },
  info: {
    path: "",
    title: "Info",
  },
  collections: {
    path: "/collections",
    title: "Collections",
  },
  productDetail: {
    path: "/collections/:slug",
    title: "Collections",
  },
  sales: {
    path: "/collections/sales",
    title: "Sales",
  },
  lookbook: {
    path: "/general/lookbooks",
    title: "Lookbooks",
  },
  about: {
    path: "/general/about-us",
    title: "About Us",
  },
  contact: {
    path: "/general/contact-us",
    title: "Contact Us",
  },
  privacyPolicy: {
    path: "/general/privacy-policy",
    title: "Privacy Policy",
  },
  termsAndConditions: {
    path: "/general/terms-and-conditions",
    title: "Terms and Conditions",
  },
  shippingAndReturns: {
    path: "/general/shipping-and-returns",
    title: "Shipping and Returns",
  },
  searchResults: {
    path: "/general/search-results",
    title: "Search Results",
  },
  sizeGuide: {
    path: "/size-guide",
    title: "Size Guide",
  },
};

export { routeConstant };
