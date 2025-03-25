import classNames from "classnames";
import styles from "./style.module.scss";
import CustomSectionHeading from "components/common/customSectionHeading";
import CustomAnimatedBorder from "components/common/customAnimatedBorder";
import { Icons } from "assets";
import { LuCheck } from "react-icons/lu";

const CoreValues = () => {
  const partnersData = [
    {
      title: "We’re Flexible",
      desc: "Month-to-month subscriptions. Cancel anytime.",
    },
    {
      title: "Make It Happen",
      desc: "Road blocks? Let’s find creative solutions.",
    },
    {
      title: "Transparency",
      desc: "All completed work is accessible, even if you leave us.",
    },
    {
      title: "Partners",
      desc: "We don’t take on everyone. We work alongside the clients we do.",
    },
  ];

  return (
    <section className={classNames(styles.sectionContainer)}>
      <CustomSectionHeading centered heading="OUR CORE VALUES" description="" />
      <div className={classNames(styles.customContainer)}>
        <div className={classNames(styles.contentWrapper)}>
          <CustomAnimatedBorder
            gradientColors="linear-gradient(135deg, #EC1E24 0%, #141212 50%, #902880 100%)"
            animationSpeed="5s"
            borderRadius="12px"
          >
            <div
              className={classNames(
                styles.gridContainer,
                "grid md:grid-cols-2 grid-cols-1 md:gap-8 sm:gap-5 xs:gap-4 gap-3"
              )}
            >
              {partnersData.map((items) => (
                <div className={classNames(styles.gridItem)}>
                  <div
                    className={classNames(
                      styles.content,
                      "flex items-center gap-3"
                    )}
                  >
                    <span className={classNames(styles.bulletContainer)}>
                      <LuCheck />
                      {/* <Icons.CheckBullet /> */}
                    </span>
                    <div>
                      <h3 className="">
                        <span>{items.title}</span>
                      </h3>
                      <p>Month-to-month subscriptions. Cancel anytime.</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CustomAnimatedBorder>
        </div>
      </div>
    </section>
  );
};

export default CoreValues;
