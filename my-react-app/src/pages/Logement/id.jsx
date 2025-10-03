import { useEffect, useState } from "react";              
import { useNavigate, useParams } from "react-router-dom"; 
import "@/Components/styles/logement.css";
import Collaps from "@/Components/Collaps";
import Carrousel from "@/Components/Carrousel";

export default function LogementId() {
    const { id } = useParams();           
    const navigate = useNavigate();     
    const [logement, setLogement] = useState(null);              

    
    useEffect(() => {        
        fetch("http://localhost:8080/api/properties")
            .then((r) => r.json())                                        
            .then((arr) => arr.find((x) => String(x.id) === String(id)))  
            .then((item) => (item ? setLogement(item) : navigate("/not-found", { replace: true })))
            
            .catch((err) => {
            console.error("Erreur lors du fetch :", err);
        }); 

    }, [id, navigate]); 

    // Tant que "logement" est null, on montre un petit loader
    if (!logement) return <div className="lodg__loading">Chargement…</div>;

    // Prépare les images du carrousel : pictures > cover > rien
    const pictures = logement.pictures?.length
        ? logement.pictures
        : logement.cover
            ? [logement.cover]
            : [];
    const total = pictures.length;          

    // Note bornée entre 0 et 5 + découpe du nom de l'hôte (prénom / reste)
    const rating = Math.min(5, Math.max(0, Number(logement.rating) || 0));
    const [first, ...rest] = (logement.host?.name || "").split(" ");

    return (
        <main className="lodg">
            <Carrousel
                images={pictures}
                alt={`${logement.title || "Logement"} – ${logement.location || ""}`}
            />

            
            <section className="lodg__top">
                <div>
                    <h1 className="lodg__title">{logement.title}</h1>
                    <p className="lodg__location">{logement.location}</p>
                    <div className="lodg__tags">
                        {(logement.tags || []).map((t) => (
                            <span className="tag" key={t}>{t}</span> 
                        ))}
                    </div>
                </div>

                <div className="lodg__right">
                    {/* Bloc hôte si présent : prénom/nom + avatar */}
                    {logement.host && (
                        <div className="host">
                            <div className="host__name">
                                <div>{first || ""}</div>
                                <div>{rest.join(" ") || ""}</div>
                            </div>
                            <img className="host__avatar" src={logement.host.picture} alt={logement.host.name} />
                        </div>
                    )}

                    {/* 5 étoiles : on colorie celles en-dessous de "rating" */}
                    <div className="rating">
                        {Array.from({ length: 5 }, (_, i) => (
                            <span key={i} className={i < rating ? "on" : "off"}>★</span>
                        ))}
                    </div>
                </div>
            </section>

            {/* === PANNEAUX INFOS : deux Collaps (Description / Équipements) === */}
            <section className="lodg__cols">
                <Collaps title={<span className="lodg__collapsTitle">Description</span>}>
                    <p>{logement.description}</p>
                </Collaps>

                <Collaps title={<span className="lodg__collapsTitle">Équipements</span>}>
                    <ul>
                        {(logement.equipments || []).map((e) => <li key={e}>{e}</li>)}
                    </ul>
                </Collaps>
            </section>
        </main>
    );
}
