import "./Banner.css";

export default function Banner({ image, text }) {
    return (
        <section className="banner">
            <h1 className="banner-text">{text}</h1>
        </section>
    );
}
