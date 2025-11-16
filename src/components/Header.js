import { useState } from "react";

function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

    return (
        <header>
            <div class="header-container">
                <img className="logo" src={`${process.env.PUBLIC_URL}/assets/2026_FIFA_World_Cup.svg`} alt="WorldCup26" />
                <button class="menu-toggle" aria-label="Ouvrir le menu" onClick={toggleMenu}>&#9776;</button>
                <nav class={`menu ${menuOpen ? "show" : ""}`}>
                    <button className="defaultPage">Accueil</button>
                    <button>Stades et villes</button>
                    <button>Matchs</button>
                    <button>Equipes</button>
                    <button>Billetterie</button>
                </nav>
            </div>
        </header>
    );
}

export default Header;
