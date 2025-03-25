"use client";

import { useState } from "react";
import classNames from "classnames";
import styles from "./style.module.scss";
import CustomSectionHeading from "components/common/customSectionHeading";
import CustomAccordion from "components/common/customAccordion";
import CustomAnimatedBorder from "components/common/customAnimatedBorder";

type AccordionItem = {
  id: number;
  title: string;
  content: string;
};

const FAQs = () => {
  const accordionData: AccordionItem[] = [
    {
      id: 1,
      title: "What’s your secret sauce for success?",
      content:
        "It’s simple: data meets creativity and emotional intelligence while maximizing efficiency with artificial intelligence.",
    },
    {
      id: 2,
      title: "Can you help businesses outside Austin?",
      content:
        "Of course! We’re proudly Austin-based but make magic happen for businesses across the U.S.",
    },
    {
      id: 3,
      title: "How soon will I see the results?",
      content:
        "While some results show in a couple of weeks, our strategies are designed for long-term growth. Real impact takes time but it’s worth it.",
    },
    {
      id: 4,
      title: "Do you only work with established businesses?",
      content:
        "No way! Whether you’re a startup or a household name, we tailor our approach to meet your unique needs.",
    },
    {
      id: 5,
      title: "Why choose Hayes Media over other agencies?",
      content:
        "We take an innovative approach to spending your money, and treat your project as if it was our own. We’re not your outsourced agency, we’re you’re partners for a long-term future.",
    },
  ];

  const [openAccordion, setOpenAccordion] = useState<number | null>(1);

  const toggleAccordion = (id: number) => {
    setOpenAccordion((prev) => (prev === id ? null : id));
  };

  return (
    <section className={classNames(styles.sectionContainer)}>
      <div className={classNames(styles.customContainer)}>
        <div className={classNames(styles.contentWrapper)}>
          <CustomSectionHeading
            centered
            heading="Frequently Asked Questions"
            description="Got questions? We’ve got answers! Explore our FAQs to learn more about our services, process, and how we streamline media and IT solutions to help your business grow. Whether it's branding, automation, AI integration, or launch strategies, we’re here to clarify every step."
          />
          <div className="mx-auto mt-10">
            <CustomAnimatedBorder
              gradientColors="linear-gradient(270deg, #EC1E24 0%, #141212 50%, #902880 100%)"
              animationSpeed="6s"
              borderRadius="4px"
            >
              <div className={classNames(styles.accordionContainer, "w-full")}>
                {accordionData.map((item) => (
                  <CustomAccordion
                    key={item.id}
                    title={item.title}
                    isOpen={openAccordion === item.id}
                    onClick={() => toggleAccordion(item.id)}
                  >
                    {item.content}
                  </CustomAccordion>
                ))}
              </div>
            </CustomAnimatedBorder>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQs;
