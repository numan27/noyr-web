import classNames from "classnames";
import styles from "./style.module.scss";
import CustomSectionHeading from "components/common/customSectionHeading";
import Image from "next/image";
import { Images } from "assets";
import CustomAnimatedBorder from "components/common/customAnimatedBorder";

const MeetTheFounder = () => {
  return (
    <section className={classNames(styles.sectionContainer)}>
      <CustomSectionHeading
        centered
        heading="Meet the founder"
        description=""
      />
      <div className={classNames(styles.customContainer)}>
        <div className={classNames(styles.contentWrapper)}>
          <div className={classNames(styles.imgContainer, "relative mx-auto")}>
            <CustomAnimatedBorder
              gradientColors="linear-gradient(135deg, #EC1E24 0%, #908e8e 50%, #902880 100%)"
              animationSpeed="5s"
              borderRadius="6px"
            >
              <div>
                <Image
                  height={640}
                  width={583}
                  src={Images.CeoAbout}
                  alt="ceo-img"
                  className="absolute bottom-[2px] -right-[15%]"
                />
                <h2 className={classNames(styles.title)}>James Hayes</h2>
              </div>
            </CustomAnimatedBorder>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MeetTheFounder;
