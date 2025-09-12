// src/Components/Carrousel.jsx
import { useState } from "react";
import Chevron from "@/assets/chevron-down.svg";
import "@/Components/styles/carroussel.css";

export default function Carrousel({
  images = [],          // tableau des URLs d'images
  alt = "",             // alt pour l'image affichée
  showCount = true,     // afficher "1/N" en bas
  initialIndex = 0,     // index de départ
}) {
  const [idx, setIdx] = useState(initialIndex);
  const total = images.length;
  if (!total) return null;

  const prev = () => setIdx((i) => (i - 1 + total) % total);
  const next = () => setIdx((i) => (i + 1) % total);

  return (
    <div className="car" role="region" aria-label="Galerie photos">
      <img className="car__img" src={images[idx]} alt={alt} />

      {total > 1 && (
        <>
          <button
            className="car__navBtn car__navBtn--left"
            onClick={prev}
            aria-label="Photo précédente"
          >
            <img src={Chevron} className="car__chev car__chev--left" alt="" />
          </button>

          <button
            className="car__navBtn car__navBtn--right"
            onClick={next}
            aria-label="Photo suivante"
          >
            <img src={Chevron} className="car__chev car__chev--right" alt="" />
          </button>

          {showCount && <div className="car__count">{idx + 1}/{total}</div>}
        </>
      )}
    </div>
  );
}
