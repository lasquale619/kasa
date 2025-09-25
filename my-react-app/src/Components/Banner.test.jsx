// src/Components/Banner.test.jsx
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import Banner from './Banner'

// Suite de tests regroupée autour du composant Banner
describe('Composant Banner', () => {
  const mockImage = '/test-image.jpg'

  // 1. Vérifier le rendu de base (section présente avec rôle region)
  it('s’affiche correctement sans planter', () => {
    render(<Banner image={mockImage} />)

    const banner = screen.getByRole('region', { name: /Banniere/i })
    expect(banner).toBeInTheDocument()
  })

  // 2. Vérifier que la classe CSS "banner" est appliquée
  it('a la classe CSS "banner"', () => {
    render(<Banner image={mockImage} />)

    const banner = screen.getByRole('region', { name: /Banniere/i })
    expect(banner).toHaveClass('banner')
  })

  // 3. Vérifier que le style de fond contient bien le Dégradé et l’image
  it('applique un style de fond avec gradient et image', () => {
    render(<Banner image={mockImage} />)

    const banner = screen.getByRole('region', { name: /Banniere/i })
    expect(banner.style.backgroundImage).toContain('linear-gradient')
    expect(banner.style.backgroundImage).toContain(mockImage)
  })

  // 4. Vérifier que le texte s’affiche quand il est fourni
  it('affiche le texte passé en prop', () => {
    const texte = 'Bienvenue sur notre site'
    render(<Banner image={mockImage} text={texte} />)

    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading).toBeInTheDocument()
    expect(heading).toHaveTextContent(texte)
    expect(heading).toHaveClass('banner-text')
  })

  // 5. Vérifier que rien ne s’affiche si text n’est pas fourni
  it('n’affiche pas de titre si la prop text est absente', () => {
    render(<Banner image={mockImage} />)

    const heading = screen.queryByRole('heading', { level: 1 })
    expect(heading).not.toBeInTheDocument()
  })

  // 6. Vérifier que rien ne s’affiche si text est une chaîne vide
  it('n’affiche pas de titre si la prop text est une chaîne vide', () => {
    render(<Banner image={mockImage} text="" />)

    const heading = screen.queryByRole('heading', { level: 1 })
    expect(heading).not.toBeInTheDocument()
  })

  // 7. Vérifier que aria-label est bien présent sur la section
  it('possède un aria-label pour l’accessibilité', () => {
    render(<Banner image={mockImage} />)

    const banner = screen.getByRole('region', { name: /banniere/i })
    expect(banner).toHaveAttribute('aria-label', 'Banniere')
  })
})
