import classNames from "classnames";
import styles from "./style.module.scss";
import { Icons, Images } from "assets";
import Image from "next/image";

const CEO = () => {
  return (
    <section className={classNames(styles.sectionContainer, "relative")}>
      <div className={classNames(styles.customContainer)}>
        <div
          className={classNames(
            styles.contentContainer,
            "grid md:grid-cols-2 grid-cols-1 lg:gap-16 md:gap-12 sm:gap-10 gap-8"
          )}
        >
          <div
            className={classNames(
              styles.content,
              "flex flex-col lg:gap-5 md:gap-4 gap-3 items-start justify-center"
            )}
          >
            <h2 data-aos="fade-up">Meet Our Founder, Alessandro!</h2>
            <p>
              A designer, entrepreneur, and visionary, Alessandro founded Noyr
              with a simple idea — to create clothing that balances form and
              function without compromising on style. <br />
              <br />
              Inspired by minimalist aesthetics and timeless design, he set out
              to build a brand that speaks to modern individuals who value
              quality, simplicity, and authenticity in their wardrobe.
            </p>
          </div>
          <div className={classNames(styles.imgContainer, "relative")}>
            <Image width={632} height={450} src="/ceo.jpg" alt="section-img" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CEO;
