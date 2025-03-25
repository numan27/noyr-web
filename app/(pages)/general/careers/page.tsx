import { Images } from "assets";
import HeroBanner from "components/home/heroBanner";
import Newsletter from "components/home/newsletter";
import Jobs from "components/careers/jobs";
import OurTeam from "components/careers/ourTeam";
import CareersCTA from "components/careers/careersCta";

const Careers = () => {
  const brands = [
    Images.ClientReview1,
    Images.ClientReview2,
    Images.ClientReview3,
    Images.BrandLogo3,
    Images.BrandLogo,
  ];

  return (
    <div>
      <HeroBanner
        title={
          <>
            <span>Join the most incredible & creative team</span>
          </>
        }
        desc="Hayes Media was founded by James Hayes in 2019. With a passion for entrepreneurialism and creative content. James honed his talents in content creation, social media marketing, and, most importantly, getting things done. Through his endeavors, he gathered a team of talented entrepreneurs and directed their brilliance towards a single mission: create viral content that sells. And so, Hayes Media was born."
        brandImagesData={brands}
        btnTitle="View Open Positions"
      />
      <Jobs />
      {/* <OurTeam /> */}
      <CareersCTA />
      <Newsletter />
    </div>
  );
};

export default Careers;
