import filters from "./filter.json";
import styles from "./Filter.module.scss";
import classNames from "classnames";

// Opção alternativo para tipagem
// type PropItem = typeof filter[0];

interface PropItem {
  label: string;
  id: number;
}

interface PropFilterState {
  filter: number | null;
  setFilter: React.Dispatch<React.SetStateAction<number | null>>;
}

export default function Filter({ filter, setFilter }: PropFilterState) {
  function SelectFilter(item: PropItem) {
    if (filter === item.id) return setFilter(null);
    return setFilter(item.id);
  }

  return (
    <div className={styles.filters}>
      {filters.map((item) => (
        <button
          className={classNames({
            [styles.filters__filter]: true,
            [styles["filters__filter--active"]]: filter === item.id,
          })}
          key={item.id}
          onClick={() => SelectFilter(item)}
        >
          {item.label}
        </button>
      ))}
    </div>
  );
}
