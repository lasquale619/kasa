// src/Components/ListingsGrid.jsx
import ListingCard from "./ListingCard";

export default function ListingsGrid({ items = [] }) {
  if (!items.length) return null;

  return (
    <section className="grid-wrap">
      {items.map(({ id, title, cover }) => (
        <ListingCard key={id} id={id} title={title} cover={cover} />
      ))}
    </section>
  );
}
