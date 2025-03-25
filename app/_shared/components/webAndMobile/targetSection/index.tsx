"use client";
import { useEffect, useState } from "react";
import classNames from "classnames";
import styles from "./style.module.scss";
import CustomButton from "components/common/customButton";
import Image from "next/image";
import { Images } from "assets";
import { handleScrollToQuote } from "utils/scrollHelpers";

const TargetSection = () => {
  const [launch, setLaunch] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setLaunch(true);
      setTimeout(() => setLaunch(false), 2000);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className={classNames(styles.sectionContainer)}>
      <div className={classNames(styles.customContainer)}>
        <div className={classNames(styles.contentWrapper)}>
          <div
            className={classNames(
              styles.gridContainer,
              "grid lg:grid-cols-2 grid-cols-1 lg:gap-8 sm:gap-5 xs:gap-4 gap-3"
            )}
          >
            <div className="flex flex-col sm:items-start items-center justify-center gap-6">
              <h2 className="sm:text-left text-center">
                <span>
                  Partner with Industry Leaders for Precision-Driven Website &
                  Mobile App Development
                </span>
              </h2>
              <p>
                Partner with trusted leaders in website and mobile app
                development for high-quality, tailored solutions that drive
                business growth. Our team combines technical expertise with
                strategic insight to deliver robust, scalable digital platforms
                optimized for performance and user experience. We focus on
                precision, reliability, and innovation to ensure your digital
                presence is impactful, efficient, and aligned with your business
                objectives.
              </p>
              <CustomButton
                onClick={handleScrollToQuote}
                title="Optimize My Website Now"
              />
            </div>
            <div
              className={classNames(
                styles.rocketContainer,
                "flex lg:justify-end items-end justify-center"
              )}
            >
              <Image
                width={420}
                height={420}
                src={Images.TargetSectionImg}
                alt="section-img"
                className={classNames(styles.rocket, {
                  [styles.launch]: launch,
                })}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TargetSection;
