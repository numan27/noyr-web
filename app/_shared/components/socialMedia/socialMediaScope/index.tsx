"use client";

import classNames from "classnames";
import styles from "./style.module.scss";
import useWindowDimensions from "hooks/useWindowDimensions";
import Image from "next/image";
import { LuCheck } from "react-icons/lu";

const SocialMediaScope = () => {
  const { width } = useWindowDimensions();

  const scopeData = [
    {
      title: "Social media's reach is unmatched",
      desc: "Digital consumers are now spending an average of 2 hours and 23 minutes per day on social media platforms.",
    },
    {
      title: "Massive growth and expanding audience",
      desc: "The number of social media users worldwide grew by 320 million people from January 2023 to January 2024.",
    },
    {
      title: "Social media drives purchasing decisions",
      desc: "51.2% of people research brands and businesses online before making a purchase.",
    },
  ];

  return (
    <div className={classNames(styles.sectionWrapper, "h-full")}>
      <div className={classNames(styles.customContainer, "")}>
        <h2 className="uppercase">
          <span>
            Social Media is a Powerful {width > 768 && <br />} Tool You Can’t
            Afford to Ignore
          </span>
        </h2>
        <div
          className={classNames(
            styles.contentContainer,
            "grid md:grid-cols-2 grid-cols-1 lg:gap-16 gap-8"
          )}
        >
          <div
            className={classNames(
              styles.content,
              "flex flex-col xs:items-start items-center gap-5"
            )}
          >
            <p className="mt-3">
              Online advertising can be complicated. We make it simple.
              Innovative targeting practices and consistent moderation turn your
              search engine and social media advertisements into finely tuned
              money-making machines. Every campaign is treated as if it were our
              own, backed by a passion for efficiency and quality.
            </p>

            <div className="container">
              {scopeData.map((items, index) => (
                <div key={index} className="item flex items-start gap-4 mb-3">
                  <span>
                    <span
                      className={classNames(styles.bulletContainer, "mt-1")}
                    >
                      <LuCheck />
                      {/* <Icons.CheckBullet /> */}
                    </span>
                  </span>
                  <div>
                    <h3>{items.title}</h3>
                    <p>{items.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className={classNames(styles.imgContainer, "hidden md:block")}>
            <Image
              width={800}
              height={300}
              src="/mission-section-img.webp"
              alt="Social Media Management Service"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialMediaScope;
