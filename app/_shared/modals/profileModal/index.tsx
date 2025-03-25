import CustomModal from "components/common/customModal";
import styles from "./style.module.scss";
import classNames from "classnames";
import Image from "next/image";
import { Images } from "assets";

interface ProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
}

const ProfileModal = ({ isOpen, onClose, title }: ProfileModalProps) => {
  const basicData = [
    { label: "Phone Number", value: "(123) 4567 8901" },
    { label: "Email Address", value: "contact@arlenemcopy.com" },
    { label: "Address", value: "38 Clarence St, Boston, MA 02119, USA" },
  ];

  const educationData = [
    {
      value: "Ph.D. in Computer Science",
      smallText: "University of California, Berkeley | 2011",
    },
    {
      value: "Master's in Computer Science",
      smallText: "Stanford University | 2006",
    },
  ];

  const experienceData = [
    {
      value: "Associate Professor",
      smallText: "University of California, Berkeley | 2011",
    },
    {
      value: "Associate Professor",
      smallText: "University of Illinois Urbana | 2012–2016",
    },
  ];

  return (
    <CustomModal
      // size="md"
      isOpen={isOpen}
      onClose={onClose}
      title={title}
      showBackButton={false}
      customContentContainer="noSidePadding"
      showModalFooter={false}
    >
      <div className={classNames(styles.modalContentContainer)}>
        <div
          className={classNames(
            styles.content,
            "grid grid-cols-12 sm:gap-8 gap-4"
          )}
        >
          <div className="xs:col-span-4 col-span-12">
            <div
              className={classNames(
                styles.imgContainer,
                "flex flex-col items-center justify-center gap-4"
              )}
            >
              {/* <Image src={Images.ProfileModal} alt="profile-img" /> */}
              <h4>Jane Cooper</h4>
            </div>
          </div>
          <div className="xs:col-span-8 col-span-12">
            <div className={classNames(styles.contentItemContainer)}>
              {basicData.map((data, index) => (
                <div
                  key={index}
                  className={classNames(
                    styles.contentItem,
                    "flex sm:flex-row flex-col sm:items-center items-start sm:gap-0 gap-0.5"
                  )}
                >
                  <div className="sm:w-5/12 w-full">
                    <p className={classNames(styles.label)}>{data.label}:</p>
                  </div>
                  <div className="sm:w-7/12 w-full">
                    <p className={classNames(styles.value)}>{data.value}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className={classNames(styles.contentItemContainer, "pt-2")}>
              {educationData.map((data, index) => (
                <div
                  key={index}
                  className={classNames(
                    styles.contentItem,
                    "flex sm:flex-row flex-col sm:items-center items-start sm:gap-0 gap-0.5"
                  )}
                >
                  <div className="sm:w-5/12 w-full">
                    {index === 0 && (
                      <p className={classNames(styles.label)}>Education:</p>
                    )}
                  </div>
                  <div className="sm:w-7/12 w-full">
                    <p className={classNames(styles.value)}>{data.value}</p>
                    <span className={classNames(styles.smallText)}>
                      {data.smallText}
                    </span>
                  </div>
                </div>
              ))}
            </div>
            <div className={classNames(styles.contentItemContainer, "pt-2")}>
              {experienceData.map((data, index) => (
                <div
                  key={index}
                  className={classNames(
                    styles.contentItem,
                    "flex sm:flex-row flex-col sm:items-center items-start sm:gap-0 gap-0.5"
                  )}
                >
                  <div className="sm:w-5/12 w-full">
                    {index === 0 && (
                      <p className={classNames(styles.label)}>Experience:</p>
                    )}
                  </div>
                  <div className="sm:w-7/12 w-full">
                    <p className={classNames(styles.value)}>{data.value}</p>
                    <span className={classNames(styles.smallText)}>
                      {data.smallText}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </CustomModal>
  );
};

export default ProfileModal;
