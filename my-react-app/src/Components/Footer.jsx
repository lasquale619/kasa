import "@/Components/styles/footer.css";
import footerImg from "@/assets/footer.png";

export default function footer() {
    return(
        <footer className="footer-img" aria-label="footer kasa">
            <img src={footerImg} alt="" />
        </footer>    
    )
}