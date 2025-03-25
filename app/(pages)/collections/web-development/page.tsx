"use client";

import { Images } from "assets";
import TargetSection from "components/webAndMobile/targetSection";
import TrustedPartners from "components/webAndMobile/trustedPartners";
import FullWidthVideo from "components/webAndMobile/fullWidthVideo";

const WebDevelopment = () => {
  return (
    <div>
      <TrustedPartners />
      {/* <MobileSlider /> */}
      <FullWidthVideo />
      <TargetSection />
    </div>
  );
};

export default WebDevelopment;
