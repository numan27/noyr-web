import Wrapper from "components/common/wrapper";
import LandingPage from "components/home";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Noyr Store",
  description: "",
  alternates: {
    canonical: "https://hayesmediaco.com/",
  },
};

export default function Home() {
  return (
    <>
      <Wrapper>
        <LandingPage />
      </Wrapper>
    </>
  );
}
