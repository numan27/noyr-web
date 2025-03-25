import classNames from "classnames";
import styles from "./style.module.scss";
import CustomInput from "../customInput";
import CustomButton from "../customButton";

const NewsLetter = () => {
  return (
    <div
      className={classNames(
        styles.newsLetter,
        "flex items-center relative z-50"
      )}
    >
      <CustomInput
        customInputContainer="newsletter-input h-full"
        placeholder="Enter your email address"
      />
      <div className="">
        <CustomButton
          title="Subscribe"
          containerStyle={classNames(
            styles.subscribeButton,
            "h-full full-height-button z-40"
          )}
        />
      </div>
    </div>
  );
};

export default NewsLetter;
