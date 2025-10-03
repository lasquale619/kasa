import { useEffect, useState } from "react";
import Banner from "@/Components/Banner";
import Homebanner from "@/assets/Homebanner.png";
import ListingsGrid from "@/Components/ListingsGrid";

export default function Home() {
  const [items, setItems] = useState([]);

useEffect(() => {
  (async () => {
    try {
      const res = await fetch("http://localhost:8080/api/properties");
      const data = await res.json();

      // les champs nécessaires aux cards
      setItems(
        (Array.isArray(data) ? data : []).map(({ id, title, cover }) => ({
          id,
          title,
          cover,
        }))
      );
    } catch (err) {
      console.error("Erreur lors du fetch :", err);
    }
  })();
}, []);

  return (
    <>
      <Banner image={Homebanner} text="Chez vous, partout et ailleurs" />
      <ListingsGrid items={items} />
    </>
  );
}
