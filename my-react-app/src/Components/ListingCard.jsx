import { Link } from "react-router-dom";
import "@/Components/styles/property-cards.css"; 

export default function ListingCard({ id, title, cover }) {
  return (
    <Link to={`/logement/${id}`} className="k-card">
      <img className="k-card__img" src={cover} alt={title}  />
      <div className="k-card__overlay" />
      <div className="k-card__title">{title}</div>
    </Link>
  );
}
