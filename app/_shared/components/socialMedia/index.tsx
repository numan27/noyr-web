"use client";

import { Images } from "assets";
import InnovationSection from "components/socialMedia/innovationSection";
import SocialMediaScope from "components/socialMedia/socialMediaScope";
import useWindowDimensions from "hooks/useWindowDimensions";
import {
  handleScrollToPortfolio,
  handleScrollToQuote,
} from "utils/scrollHelpers";

const SocialMedia = () => {
  const { width } = useWindowDimensions();
  const brands = [
    Images.SocialBrand1,
    Images.SocialBrand2,
    Images.SocialBrand3,
    Images.SocialBrand4,
    Images.SocialBrand5,
    Images.SocialBrand6,
  ];

  const servicesData = [
    {
      videoSrc:
        "https://zhc7epsgulcyrb2e.public.blob.vercel-storage.com/SocialMediaAnimation3-0N7J3SpZ3ZI7v5qxlgNoMbiMpMHEqq.mov",
      title: "Tailored Social Media Management Strategy",
      desc: "We begin by understanding your unique business goals and audience to create a custom social media plan that aligns with your vision so that things work as per your set strategies.",
      buttonText: "Schedule A Discovery Call",
      buttonAction: "tel:+17134834953",
    },
    {
      videoSrc:
        "https://zhc7epsgulcyrb2e.public.blob.vercel-storage.com/SocialMediaCube1%20-fK2YQoBkCV2881THbWwFycx0ICIsBa.mov",
      title: "Engaging Content Creation and Posting",
      desc: "Our team crafts visually compelling and engaging content that resonates with your target audience and schedules posts for optimal reach. With us, targeting your audience and engaging with them on a regular basis is a breeze.",
      buttonText: "See Our Work",
      buttonAction: handleScrollToPortfolio,
    },
    {
      videoSrc:
        "https://zhc7epsgulcyrb2e.public.blob.vercel-storage.com/SocialMediaAnimation2-yjYFWOLlY3eqL28GQdD3MKxiv0FUqo.mov",
      title: "Community Driven Optimization",
      desc: "We regularly analyze performance data to tweak and improve your social media marketing strategy, ensuring maximum reach and engagement. This leads to better conversion rates and improved results.",
      buttonText: "Get A Custom Quote",
      buttonAction: handleScrollToQuote,
    },
  ];
  return (
    <div>
      <SocialMediaScope />
      <InnovationSection />
    </div>
  );
};

export default SocialMedia;
