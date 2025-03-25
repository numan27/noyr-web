import classNames from "classnames";
import styles from "./style.module.scss";
import CustomSectionHeading from "components/common/customSectionHeading";
import Image from "next/image";
import { Images } from "assets";

const OurTeam = () => {
  const teamData = [
    { img: Images.Team1, name: "John Doe" },
    { img: Images.Team2, name: "John Doe" },
    { img: Images.Team3, name: "John Doe" },
    { img: Images.Team4, name: "John Doe" },
  ];

  return (
    <section className={classNames(styles.sectionContainer)}>
      <CustomSectionHeading centered heading="OUR TEAM" />
      <div className={classNames(styles.customContainer)}>
        <div
          className={classNames(
            styles.contentWrapper,
            "grid sm:grid-cols-4 grid-cols-2 gap-4 mt-12"
          )}
        >
          {teamData.map((items, index) => (
            <div
              key={index}
              className={classNames(styles.teamItem, "flex justify-center")}
            >
              <div className={classNames(styles.imgContainer)}>
                <Image src={items.img} alt="team-img" />
              </div>
              <div
                className={classNames(
                  styles.title,
                  "flex items-center justify-center"
                )}
              >
                <h5>{items.name}</h5>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurTeam;
