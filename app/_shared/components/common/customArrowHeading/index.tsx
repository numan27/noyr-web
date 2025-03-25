import classNames from "classnames";
import styles from "./style.module.scss";
import Image from "next/image";
import { Icons, Images } from "assets";

interface CustomSecondaryHeadingProps {
  number: number;
  heading: string;
}

const CustomArrowHeading = ({
  number,
  heading,
}: CustomSecondaryHeadingProps) => (
  <div
    className={classNames(
      styles.sectionHeading,
      "flex items-end sm:justify-start justify-center xs:gap-0 gap-1.5"
    )}
  >
    <h3 date-aos="flip-left" className={classNames(styles.number)}>
      {number}
    </h3>
    <div className="flex items-baseline mt-auto">
      <h2 data-aos="fade-up" className={classNames(styles.title)}>
        {heading}
        <span className={classNames(styles.arrow)}>
          <Image
            height={25}
            width={25}
            src={Images.LongArrow}
            alt="arrow-icon"
          />
          {/* <Icons.LongArrow /> */}
        </span>
        <div data-aos="fade-right" className={classNames(styles.lineX)}>
          {/* <Image src={Images.GradientLineX} alt="lineX-icon" /> */}
          {/* <Icons.GradientLineX /> */}
        </div>
      </h2>
    </div>
  </div>
);

export default CustomArrowHeading;
