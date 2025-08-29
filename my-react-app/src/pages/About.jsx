import Banner from "@/Components/Banner";
import Aboutbanner  from"@/assets/Aboutbanner.png";
import Collaps from "@/Components/Collaps";
import "@/Components/styles/collaps.css";

export default function About() {
    return (
    <>
      <Banner image={Aboutbanner}  />

      <section className="about-collaps" aria-label="À propos de Kasa">
        <Collaps title="Fiabilité">
          Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.
        </Collaps>

        <Collaps title="Respect">
          La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.
        </Collaps>

        <Collaps title="Service">
          La qualité du service est au cœur de notre engagement chez Kasa. Nous veillons à ce que chaque interaction, que ce soit avec nos hôtes ou nos locataires, soit empreinte de respect et de bienveillance.
        </Collaps>

        <Collaps title="Sécurité">
          La sécurité est la priorité de Kasa. Nous vérifions que les standards sont bien respectés et organisons des ateliers sur la sécurité domestique pour nos hôtes.
        </Collaps>
      </section>
      
    </>
  );
}
