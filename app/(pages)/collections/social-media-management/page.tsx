import SocialMedia from "components/socialMedia";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Social Media Management Agency in Austin, TX | Hayes Media",
  description:
    "Get in touch with the top social media management agency in Austin, TX. Austin's most trusted agency, expert in social media marketing, strategy & growth.",
  alternates: {
    canonical: "https://hayesmediaco.com/service/social-media-management",
  },
};

const SocialMediaManagement = () => {
  return (
    <div>
      <SocialMedia />
    </div>
  );
};

export default SocialMediaManagement;
