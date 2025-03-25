import classNames from "classnames";
import styles from "./style.module.scss";
import BannerVideo from "components/home/heroBanner/banner-video";

const FullWidthVideo = () => {
  return (
    <section className={classNames(styles.sectionContainer)}>
      <div className={classNames(styles.customContainer)}>
        <div className={classNames(styles.contentWrapper)}>
          <BannerVideo videoSrc="https://zhc7epsgulcyrb2e.public.blob.vercel-storage.com/WebsiteAnimation2Updated-atmwMMtnGHaDf0nLnVdtHzjlpPwI5L.mov" />
        </div>
      </div>
    </section>
  );
};

export default FullWidthVideo;
