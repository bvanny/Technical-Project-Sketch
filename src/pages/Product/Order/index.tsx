import { useState } from "react";
import styles from "./Order.module.scss";
import options from "./options.json";
import classNames from "classnames";
import { MdKeyboardArrowUp } from "react-icons/md";
import { MdKeyboardArrowDown } from "react-icons/md";

interface PropsOrder {
  order: string;
  setOrder: React.Dispatch<React.SetStateAction<string>>;
}

export default function Order({ order, setOrder }: PropsOrder) {
  const [opened, setOpened] = useState(false);
  const nameOrder = order && options.find((item) => item.value === order)?.name;

  return (
    <div>
      <button
        className={classNames({
          [styles.order]: true,
          [styles["order--active"]]: order !== "",
        })}
        onClick={() => setOpened(!opened)}
        onBlur={() => setOpened(false)}
      >
        <span>{nameOrder || "Ordenar Por"}</span>
        {opened ? (
          <MdKeyboardArrowUp size={20} />
        ) : (
          <MdKeyboardArrowDown size={20} />
        )}
        <div
          className={classNames({
            [styles.order__options]: true,
            [styles["order__options--active"]]: opened,
          })}
        >
          {options.map((item) => (
            <div
              className={styles.order__option}
              key={item.value}
              onClick={() => setOrder(item.value)}
            >
              {item.name}
            </div>
          ))}
        </div>
      </button>
    </div>
  );
}
