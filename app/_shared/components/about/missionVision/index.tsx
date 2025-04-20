import classNames from "classnames";
import styles from "./style.module.scss";

const MissionVision = () => {
  return (
    <section className={classNames(styles.sectionContainer, "relative")}>
      <div className={classNames(styles.customContainer)}>
        <div className={styles.contentWrapper}>
          <section className={styles.missionSection}>
            <h2 className={styles.sectionTitle}>Our Mission</h2>
            <p className={styles.sectionText}>
              To create sustainable, high-quality clothing that combines
              minimalist design with exceptional comfort, making thoughtful
              fashion accessible to everyone.
            </p>
          </section>

          <section className={styles.visionSection}>
            <h2 className={styles.sectionTitle}>Our Vision</h2>
            <p className={styles.sectionText}>
              We envision a fashion industry where simplicity and sustainability
              coexist, where every piece in your wardrobe is intentionally
              designed to last beyond seasons and trends.
            </p>
          </section>

          <section className={styles.valuesSection}>
            <h2 className={styles.sectionTitle}>Our Values</h2>
            <ul className={styles.valuesList}>
              <li className={styles.valueItem}>Minimalist Design</li>
              <li className={styles.valueItem}>Sustainable Practices</li>
              <li className={styles.valueItem}>Ethical Production</li>
              <li className={styles.valueItem}>Timeless Quality</li>
            </ul>
          </section>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;
