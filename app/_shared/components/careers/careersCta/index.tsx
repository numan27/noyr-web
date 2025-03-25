import classNames from "classnames";
import styles from "./style.module.scss";
import CustomButton from "components/common/customButton";

const CareersCTA = () => {
  // const handleScrollToJobs = () => {
  //   const jobsSection = document.getElementById("jobs");

  //   if (jobsSection) {
  //     jobsSection.scrollIntoView({ behavior: "smooth", block: "center" });
  //   }
  // };

  return (
    <section className={classNames(styles.sectionContainer)}>
      <div className={classNames(styles.customContainer)}>
        <div
          className={classNames(
            styles.contentWrapper,
            "flex justify-center items-center flex-col text-center gap-5"
          )}
        >
          <h2>Let's Work Together</h2>
          <p className="w-3/6 mx-auto mb-2">
            Whether you’re a fresher or an experienced professional, explore
            Pinnacle Infotech careers for opportunities to grow, learn, and
            lead.
          </p>
          {/* <CustomButton
            onClick={handleScrollToJobs}
            title="Apply Now"
          /> */}
        </div>
      </div>
    </section>
  );
};

export default CareersCTA;
