import classNames from "classnames";
import styles from "./style.module.scss";
import CustomSectionHeading from "components/common/customSectionHeading";
import CustomButton from "components/common/customButton";
import { handleScrollToQuote } from "utils/scrollHelpers";

const EmotionalIntelligence = () => {
  return (
    <section className={classNames(styles.sectionContainer)}>
      <CustomSectionHeading
        centered
        heading="Emotional Intelligence in Marketing"
        description=""
      />
      <div className={classNames(styles.customContainer)}>
        <div
          className={classNames(
            styles.contentWrapper,
            "flex flex-col items-center justify-center text-center gap-10"
          )}
        >
          <p>
            Marketing is more than just selling; it’s about creating
            connections. Our emotionally intelligent marketing approach helps
            your audience feel understood and inspired. By creating quality
            content that sparks emotional responses, we build trust and compel
            your audience to act. When your message resonates, it gets
            shared—organically. That’s the power of emotional intelligence in
            marketing.
          </p>
          <CustomButton
            title="Get Started Today"
            onClick={handleScrollToQuote}
          />
        </div>
      </div>
    </section>
  );
};

export default EmotionalIntelligence;
