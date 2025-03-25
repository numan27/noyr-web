"use client";

import { Images } from "assets";
import CoreValues from "components/about/coreValues";
import GetStartedCall from "components/home/getStartedCall";
import HeroBanner from "components/home/heroBanner";
import Newsletter from "components/home/newsletter";
import Portfolio from "components/home/portfolio";
import TeamSection from "components/home/teamReviewSection";
import GetQuote from "components/advertisement/getQuote";
import Stats from "components/advertisement/stats";
import VideoSection from "components/advertisement/videoSection";
import EmotionalIntelligence from "components/about/emotionalIntelligence";
import MeetTheFounder from "components/about/meetTheFounder";
import { handleScrollToQuote } from "utils/scrollHelpers";

const About = () => {
  const brands = [
    Images.ClientReview1,
    Images.ClientReview2,
    Images.ClientReview3,
    Images.BrandLogo3,
    Images.BrandLogo,
    Images.HFOBrandLogo,
  ];

  return (
    <div>
      <HeroBanner
        title={
          <>
            <span>Get To Know ABOUT HAYES MEDIA</span>
          </>
        }
        desc="Hayes Media was founded by James Hayes in 2019. With a passion for entrepreneurialism and creative content. James honed his talents in content creation, social media marketing, and, most importantly, getting things done. Through his endeavors, he gathered a team of talented entrepreneurs and directed their brilliance towards a single mission: create viral content that sells. And so, Hayes Media was born."
        brandImagesData={brands}
        btnTitle="Get Started Today"
      />
      <VideoSection
        title="Our Vision"
        desc="At Hayes Media, we’re reshaping how marketing is done. We believe marketing can be both entertaining and impactful. Why settle for dull, forgettable ads when every campaign could feel like a Super Bowl commercial? We’re building a culture where every piece of content engages, inspires, and delivers results. Businesses embracing this philosophy will thrive in the long run, and we’re here to make that happen"
        btnText="Get Started Today"
        videoSrc="https://zhc7epsgulcyrb2e.public.blob.vercel-storage.com/SocialMediaAnimation2-yjYFWOLlY3eqL28GQdD3MKxiv0FUqo.mov"
        buttonAction={handleScrollToQuote}
      />
      <CoreValues />
      <EmotionalIntelligence />
      <MeetTheFounder />
      <Stats />
      <Portfolio />
      <GetStartedCall />
      <TeamSection />
      <GetQuote />
      <Newsletter />
    </div>
  );
};

export default About;
