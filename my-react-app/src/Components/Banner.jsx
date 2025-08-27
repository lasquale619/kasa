import "@/Components/styles/banner.css";


export default function Banner({ text }) {
    return (
        <section className="banner">
            <h1 className="banner-text">{text}</h1>
        </section>
    );
}
