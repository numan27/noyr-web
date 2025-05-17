interface Product {
  id: string;
  name: string;
  price: number;
  quantity?: number;
  category?: string;
}

interface Purchase {
  currency: string;
  value: number;
  contents: Product[];
}

// Declare fbq as a global function
declare global {
  interface Window {
    fbq: any;
  }
}

// Helper function to ensure fbq is available
const isPixelInitialized = (): boolean => {
  return typeof window !== "undefined" && window.fbq;
};

// Track when a user views a product
export const trackViewContent = (product: Product) => {
  if (!isPixelInitialized()) return;

  window.fbq("track", "ViewContent", {
    content_ids: [product.id],
    content_name: product.name,
    content_type: "product",
    value: product.price,
    currency: "USD",
  });
};

// Track when a user adds a product to cart
export const trackAddToCart = (product: Product) => {
  if (!isPixelInitialized()) return;

  window.fbq("track", "AddToCart", {
    content_ids: [product.id],
    content_name: product.name,
    content_type: "product",
    value: product.price,
    currency: "USD",
    contents: [
      {
        id: product.id,
        quantity: product.quantity || 1,
      },
    ],
  });
};

// Track when a user initiates checkout
export const trackInitiateCheckout = (products: Product[]) => {
  if (!isPixelInitialized()) return;

  const value = products.reduce((total, product) => {
    return total + product.price * (product.quantity || 1);
  }, 0);

  window.fbq("track", "InitiateCheckout", {
    content_type: "product",
    currency: "USD",
    value: value,
    contents: products.map((product) => ({
      id: product.id,
      quantity: product.quantity || 1,
    })),
  });
};

// Track when a user completes a purchase
export const trackPurchase = (purchase: Purchase) => {
  if (!isPixelInitialized()) return;

  window.fbq("track", "Purchase", {
    currency: purchase.currency,
    value: purchase.value,
    contents: purchase.contents.map((product) => ({
      id: product.id,
      quantity: product.quantity || 1,
    })),
  });
};

// Track when a user performs a search
export const trackSearch = (searchTerm: string) => {
  if (!isPixelInitialized()) return;

  window.fbq("track", "Search", {
    search_string: searchTerm,
  });
};

// Track when a user contacts through WhatsApp
export const trackContact = () => {
  if (!isPixelInitialized()) return;

  window.fbq("track", "Contact");
};
