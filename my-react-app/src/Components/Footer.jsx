import "@/Components/styles/footer.css";
import footerImgM from "@/assets/LogoKF.svg";

export default function Footer() {
  return (
    <footer className="Footer" aria-label="footer kasa">          
        <img src={footerImgM} alt="Kasa footer" />
        <p>© 2020 Kasa. All<br className="mobile-break" />rights reserved</p>
    </footer>
  );
}