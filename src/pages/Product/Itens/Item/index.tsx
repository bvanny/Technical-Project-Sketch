import styles from "./item.module.scss";
import logo from "assets/logo.svg";
import classNames from "classnames";

interface PropsItem {
  title: string;
  description: string;
  photo: string;
  size: number;
  serving: number;
  price: number;
  id: number;
  category: {
    id: number;
    label: string;
  };
}

export default function Item(props: PropsItem) {
  const { title, description, category, photo, serving, price, size, id } =
    props;
  return (
    <div className={styles.item}>
      <div className={styles.item__image}>
        <img src={photo} alt={title} />
      </div>
      <div className={styles.item__description}>
        <div className={styles.item__title}>
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
        <div className={styles.item__tags}>
          <div
            className={classNames({
              [styles.item__type]: true,
              [styles[`item__type__${category.label.toLocaleLowerCase()}`]]:
                true,
            })}
          >
            {category.label}
          </div>
          <div className={styles.item__portion}>{size}g</div>
          <div className={styles.item__qtdpeople}>
            Serve {serving} pessoa{serving === 1 ? "" : "s"}
          </div>
          <div className={styles.item__price}>R$ {price.toFixed(2)}</div>
        </div>
      </div>
    </div>
  );
}
