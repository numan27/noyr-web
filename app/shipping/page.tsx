import React from "react";
import HeroBanner from "../_shared/components/common/HeroBanner";
import ShippingContent from "../_shared/components/shipping/ShippingContent";

const ShippingPage = () => {
  return (
    <main>
      <HeroBanner
        title="Shipping & Returns"
        description="Learn about our shipping methods and return policies"
        imagePath="/images/shipping-banner.jpg"
      />
      <ShippingContent />
    </main>
  );
};

export default ShippingPage;
