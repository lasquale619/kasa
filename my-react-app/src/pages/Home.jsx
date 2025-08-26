import Banner from "@/Components/Banner";
import banner  from"@/assets/banner.png";

export default function Home() {
    return (
    <>
      <Banner image={banner} text="Chez vous, partout et ailleurs" />
      {/* le reste de ta page ici (cartes, etc.) */}
    </>
  );
}
