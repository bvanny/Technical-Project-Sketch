import { useEffect, useState } from "react";
import styles from "./itens.module.scss";
import itens from "./itens.json";
import Item from "./Item";

interface PropsFilterRelative {
  searchFilter: string;
  filter: number | null;
  order: string;
}

export default function Itens(props: PropsFilterRelative) {
  const [listing, setListing] = useState(itens);
  const { searchFilter, filter, order } = props;

  function testSearchFilter(title: string) {
    const regex = new RegExp(searchFilter, "i");
    return regex.test(title);
  }

  function testFilter(id: number) {
    if (filter !== null) return filter === id;

    return true;
  }

  function orderList(newList: typeof itens) {
    switch (order) {
      case "type":
        return newList.sort((a, b) => (a.size > b.size ? 1 : -1));
      case "qtd":
        return newList.sort((a, b) => (a.serving > b.serving ? 1 : -1));
      case "price":
        return newList.sort((a, b) => (a.price > b.price ? 1 : -1));
      default:
        return newList;
    }
  }

  useEffect(() => {
    const newList = itens.filter(
      (item) => testSearchFilter(item.title) && testFilter(item.category.id)
    );
    setListing(orderList(newList));
  }, [searchFilter, filter, order]);

  return (
    <div className={styles.itens}>
      {listing.map((item) => (
        <Item key={item.id} {...item} />
      ))}
    </div>
  );
}
