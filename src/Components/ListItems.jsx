import Item from "./Item";
import NoItem from "./NoItem";

export default function ListItems({
  urunler,
  onDeleteItems,
  onUpdateItem,
  filterButton,
}) {
  return (
    <ul className="shopping-list list-unstyled">
      {urunler.length > 0 ? (
        urunler.map((urun, index) => (
          <Item
            urun={urun}
            key={index}
            onDeleteItems={onDeleteItems}
            onUpdateItem={onUpdateItem}
            filterButton={filterButton}
          />
        ))
      ) : (
        <NoItem />
      )}
    </ul>
  );
}
