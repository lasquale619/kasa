import { Link } from "react-router-dom";
import "@/Components/styles/notfound.css";

export default function NotFound() {
    return(
        <section className="not-found">
            <h1>404</h1>
            <p>Oups! La page que vous demandez n'existe pas.</p>
            <Link to="/" className="nf-link">Retourner sur la page d’accueil</Link>
        </section>
    )
}