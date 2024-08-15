import React from "react";
import { CgSearch } from "react-icons/cg";
import styles from "./Search.module.scss";

interface Props {
  searchFilter: string;
  setSearchFilter: React.Dispatch<React.SetStateAction<string>>;
}

export default function Search({ searchFilter, setSearchFilter }: Props) {
  return (
    <div className={styles.search}>
      <input
        value={searchFilter}
        onChange={(e) => setSearchFilter(e.target.value)}
        placeholder="Pesquisar..."
      />
      <CgSearch size={20} color="#131313" cursor={"pointer"} />
    </div>
  );
}
