import classNames from "classnames";
import styles from "./style.module.scss";
import { Icons } from "assets";

interface CustomSearchProps {
  placeholder?: string;
}

const CustomSearch = ({ placeholder = "Search here" }: CustomSearchProps) => {
  return (
    <div className={classNames(styles.searchContainer)}>
      <span className={classNames(styles.iconContainer)}>
        <Icons.Search />
      </span>
      <input placeholder={placeholder} type="text" />
    </div>
  );
};

export default CustomSearch;
