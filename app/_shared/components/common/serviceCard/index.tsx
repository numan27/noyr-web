import { memo } from "react";
import classNames from "classnames";
import styles from "./style.module.scss";
import CustomAnimatedBorder from "components/common/customAnimatedBorder";
import CustomButton from "components/common/customButton";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

export interface ServiceType {
  title: string;
  desc: string;
  icon: StaticImageData;
  path: string;
}

interface ServiceCardProps {
  item: ServiceType;
}

const ServiceCard = ({ item }: ServiceCardProps) => (
  <CustomAnimatedBorder
    gradientColors="linear-gradient(270deg, #EC1E24 0%, #141212 50%, #902880 100%)"
    animationSpeed="6s"
    borderRadius="8px"
  >
    <div
      className={classNames(
        styles.gridItem,
        "flex flex-col md:items-start items-center justify-between"
      )}
    >
      <div className="flex flex-col gap-3 xs:items-start items-center py-4 px-2.5">
        <span className={classNames(styles.iconContainer)}>
          <Image
            height={48}
            width={48}
            src={item.icon}
            alt="icon"
            loading="eager"
          />
        </span>
        <h3>{item.title}</h3>
        <p>{item.desc}</p>
      </div>
      <Link className="mb-3" href={item.path}>
        <CustomButton title="More Details" containerStyle="" />
      </Link>
    </div>
  </CustomAnimatedBorder>
);

export default memo(ServiceCard);
