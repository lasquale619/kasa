import "@/Components/styles/banner.css";


export default function Banner({ image,text }) {
    const bannerStyle ={
        backgroundImage:`
        linear-gradient(0deg, rgba(0,0,0,0.45),rgba(0,0,0,0.45)),
        url(${image})`,
    };
    return (
        <section className="banner" style={bannerStyle} aria-label="Banniere">
            {text && <h1 className="banner-text">{text}</h1>}
        </section>
    );
}
