import { ReactNode } from "react";
import classNames from "classnames";
import styles from "./style.module.scss";
import { Icons } from "assets";

interface CustomAccordionProps {
  title: string;
  children?: ReactNode;
  isOpen?: boolean;
  isHaveHeaderAction?: boolean;
  onEditClick?: () => void;
  onClick?: () => void;
  nested?: boolean;
}

const CustomAccordion = ({
  title,
  children,
  isOpen,
  onClick,
  onEditClick,
  nested = false,
  isHaveHeaderAction = false,
}: CustomAccordionProps) => {
  const nameParts = title.split(" ");
  const initials = nameParts
    .map((part) => part.charAt(0))
    .join("")
    .toUpperCase();

  return (
    <div
      className={classNames(styles.accordion, {
        [styles.active]: isOpen,
        [styles.nested]: nested,
      })}
    >
      <div
        className={classNames(styles.accordionHeader, {
          [styles.active]: isOpen,
        })}
        onClick={onClick}
      >
        <div className="flex items-center gap-6">
          <span className={styles.questionIcon}>
            <Icons.QuestionMark />
          </span>
          <h3>{title}</h3>
          {isHaveHeaderAction && isOpen && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                onEditClick?.();
              }}
              className={classNames(styles.editButton)}
            >
              <Icons.EditIcon />
            </button>
          )}
        </div>
        <span
          className={classNames(styles.chevronIcon, {
            [styles.rotate]: isOpen,
          })}
        >
          <Icons.ArrowRight />
        </span>
      </div>
      {isOpen && (
        <div className={classNames(styles.accordionContent)}>{children}</div>
      )}
    </div>
  );
};

export default CustomAccordion;
