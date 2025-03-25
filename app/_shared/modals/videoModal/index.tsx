import CustomModal from "components/common/customModal";
import styles from "./style.module.scss";
import classNames from "classnames";
import BannerVideo from "components/home/heroBanner/banner-video";
import Image from "next/image";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  item?: { type: "video" | "image" | "pdf"; src: string } | null;
}

const VideoModal = ({ isOpen, onClose, item }: ModalProps) => {
  return (
    <CustomModal
      isOpen={isOpen}
      onClose={onClose}
      title=""
      showBackButton={false}
      customContentContainer="noSidePadding"
      showModalFooter={false}
    >
      <div className={classNames(styles.modalContentContainer)}>
        {item ? (
          item.type === "video" ? (
            <BannerVideo isHaveAudioControl videoSrc={item.src} />
          ) : item.type === "image" ? (
            <Image
              className="w-full h-auto"
              src={item.src}
              alt="Portfolio Image"
            />
          ) : item.type === "pdf" ? (
            <iframe
              className="w-full h-[80vh]"
              src={`https://docs.google.com/viewer?url=${encodeURIComponent(
                item.src
              )}&embedded=true`}
              title="PDF Viewer"
              allowFullScreen
            />
          ) : (
            <p>Unsupported content type</p>
          )
        ) : (
          <p>No content available</p>
        )}
      </div>
    </CustomModal>
  );
};

export default VideoModal;
