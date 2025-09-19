import "@/Components/styles/footer.css";
import footerImg from "@/assets/footer.png";
import footerImgM from "@/assets/m_footer.png";

export default function Footer() {
  return (
    <footer className="footer-img" aria-label="footer kasa">
      <picture>
        {/* Mobile / tablette */}
        <source media="(max-width: 1024px)" srcSet={footerImgM} />
        {/* Desktop  */}
        <img src={footerImg} alt="Kasa footer" />
      </picture>
    </footer>
  );
}