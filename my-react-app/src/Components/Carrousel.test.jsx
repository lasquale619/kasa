import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Carrousel from "./Carrousel";

describe("Composant Carrousel", () => {
  const IMGS = ["/img1.jpg", "/img2.jpg", "/img3.jpg"];

  it("retourne null si la liste d'images est vide", () => {
    render(<Carrousel images={[]} />);
    // Le carrousel ne rend rien => pas de region nommée "Galerie photos"
    expect(
      screen.queryByRole("region", { name: /galerie photos/i })
    ).toBeNull();
  });

  it("rend une région accessible nommée 'Galerie photos' quand il y a au moins une image", () => {
    render(<Carrousel images={[IMGS[0]]} alt="Photo unique" />);
    // Présence du landmark
    const region = screen.getByRole("region", { name: /galerie photos/i });
    expect(region).toBeInTheDocument();

    // L'image affichée est la première
    const img = screen.getByAltText("Photo unique");
    expect(img).toHaveAttribute("src", IMGS[0]);

    // Avec une seule image, pas de boutons ni de compteur
    expect(
      screen.queryByRole("button", { name: /photo précédente/i })
    ).not.toBeInTheDocument();
    expect(
      screen.queryByRole("button", { name: /photo suivante/i })
    ).not.toBeInTheDocument();
    expect(screen.queryByText(/1\/1/)).not.toBeInTheDocument();
  });

  it("affiche la bonne image initiale (index par défaut 0)", () => {
    render(<Carrousel images={IMGS} alt="Galerie" />);
    const img = screen.getByAltText("Galerie");
    expect(img).toHaveAttribute("src", IMGS[0]);
  });

  it("respecte le initialIndex", () => {
    render(<Carrousel images={IMGS} alt="Galerie" initialIndex={2} />);
    const img = screen.getByAltText("Galerie");
    expect(img).toHaveAttribute("src", IMGS[2]);
  });

  it("navigue vers l'image suivante quand on clique sur 'Photo suivante'", () => {
    render(<Carrousel images={IMGS} alt="Galerie" />);
    const img = screen.getByAltText("Galerie");
    const nextBtn = screen.getByRole("button", { name: /photo suivante/i });

    // 0 -> 1
    fireEvent.click(nextBtn);
    expect(img).toHaveAttribute("src", IMGS[1]);

    // 1 -> 2
    fireEvent.click(nextBtn);
    expect(img).toHaveAttribute("src", IMGS[2]);

    // 2 -> 0 (bouclage)
    fireEvent.click(nextBtn);
    expect(img).toHaveAttribute("src", IMGS[0]);
  });

  it("navigue vers l'image précédente quand on clique sur 'Photo précédente'", () => {
    render(<Carrousel images={IMGS} alt="Galerie" />);
    const img = screen.getByAltText("Galerie");
    const prevBtn = screen.getByRole("button", { name: /photo précédente/i });

    // 0 -> 2 (bouclage arrière)
    fireEvent.click(prevBtn);
    expect(img).toHaveAttribute("src", IMGS[2]);

    // 2 -> 1
    fireEvent.click(prevBtn);
    expect(img).toHaveAttribute("src", IMGS[1]);
  });

  it("affiche le compteur '1/N' quand showCount est true et qu'il y a plusieurs images", () => {
    render(<Carrousel images={IMGS} alt="Galerie" showCount={true} />);
    // État initial : index 0 => "1/3"
    expect(screen.getByText("1/3")).toBeInTheDocument();

    // Après un clic suivant : "2/3"
    const nextBtn = screen.getByRole("button", { name: /photo suivante/i });
    fireEvent.click(nextBtn);
    expect(screen.getByText("2/3")).toBeInTheDocument();
  });

  it("n'affiche pas le compteur quand showCount est false", () => {
    render(<Carrousel images={IMGS} alt="Galerie" showCount={false} />);
    // Pas de compteur, même s'il y a plusieurs images
    expect(screen.queryByText(/\/\d+$/)).not.toBeInTheDocument();
  });

  it("n'affiche ni boutons ni compteur quand il n'y a qu'une seule image", () => {
    render(<Carrousel images={[IMGS[0]]} alt="Unique" />);
    expect(
      screen.queryByRole("button", { name: /photo précédente/i })
    ).not.toBeInTheDocument();
    expect(
      screen.queryByRole("button", { name: /photo suivante/i })
    ).not.toBeInTheDocument();
    expect(screen.queryByText(/1\/1/)).not.toBeInTheDocument();
  });

  it("conserve l'attribut alt transmis pour l'image affichée", () => {
    render(<Carrousel images={IMGS} alt="Appartement T2" />);
    // On récupère par alt => garantit que l'attribut alt est bien appliqué
    const img = screen.getByAltText("Appartement T2");
    expect(img).toHaveAttribute("src", IMGS[0]);
  });
});
