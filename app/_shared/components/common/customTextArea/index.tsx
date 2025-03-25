"use client";
import classNames from "classnames";
import styles from "./style.module.scss";

interface TextAreaProps {
  label?: string;
  required?: boolean;
  error?: string;
  placeholder?: string;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onBlur?: (event: React.FocusEvent<HTMLTextAreaElement>) => void;
  customLabelStyle?: string;
  customInputStyle?: string;
  customInputContainer?: string;
  limit?: number;
  showLimit?: boolean;
  rows?: number;
}

const CustomTextArea = ({
  label,
  required,
  error,
  value,
  placeholder,
  onChange,
  onBlur,
  customLabelStyle,
  customInputStyle,
  customInputContainer,
  limit,
  showLimit,
  rows,
}: TextAreaProps) => {
  const charLimit = limit ? limit : 3000;

  return (
    <div className="relative w-full">
      <div className="flex flex-col items-start w-full gap-2">
        {label && (
          <label
            className={classNames(
              styles.inputLabel,
              customLabelStyle && customLabelStyle
            )}
          >
            {label} {required && <span className={styles.asterik}>*</span>}
          </label>
        )}

        <div
          className={classNames(
            customInputContainer && customInputContainer,
            styles.inputContainer,
            "w-full"
          )}
        >
          <textarea
            rows={rows}
            onChange={onChange} // Ensure this is correctly bound
            onBlur={onBlur} // Ensure this is correctly bound
            placeholder={placeholder}
            className={classNames(
              styles.inputStyle,
              customInputStyle && customInputStyle
            )}
            value={value}
          />
        </div>
      </div>
      {error ? (
        <div className={styles.error}>{error}</div>
      ) : showLimit ? (
        <label className={classNames(styles.lmtLabel)}>
          {charLimit - (value ? value.length : 0)} characters left
        </label>
      ) : null}
    </div>
  );
};

export default CustomTextArea;
