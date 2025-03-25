"use client";

import classNames from "classnames";
import styles from "./style.module.scss";
import { Icons, Images } from "assets";
import Image from "next/image";

const CeoMessage = () => {
  return (
    <section className={classNames(styles.sectionContainer)}>
      <div
        className={classNames(
          styles.contentWrapper,
          "grid sm:grid-cols-2 grid-cols-1"
        )}
      >
        <Image data-aos="zoom-in" src={Images.CeoPlaceholder} alt="ceo-img" />
        <div
          data-aos="fade-down"
          className={classNames(
            styles.contentContainer,
            "flex flex-col items-center justify-center lg:gap-8 sm:gap-5 gap-4"
          )}
        >
          <Image
            width={99}
            height={100}
            loading="lazy"
            src={Images.BigQuote}
            alt="icon"
          />
          <p className={classNames(styles.desc)}>
            “ In an attention based economy, we take an interpersonal approach
            to reaching audiences that are otherwise burnt out from the current
            marketing trends. this is emotionally intelligent marketing. ”
          </p>
          <div>
            <p>CEO MESSAGE</p>
            <p className={classNames(styles.name)}>James Hayes</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CeoMessage;
