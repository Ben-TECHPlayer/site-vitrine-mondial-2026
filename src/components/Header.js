function Header() {
  return (
    <header>
      <div className="header-container">
        <img className="logo" src="/assets/2026_FIFA_World_Cup.svg" alt="WorldCup26" />
        <div className="menu">
          <button className="defaultPage">Accueil</button>
          <button>Stades et villes</button>
          <button>Matchs</button>
          <button>Equipes</button>
          <button>Billetterie</button>
        </div>
      </div>
    </header>
  );
}

export default Header;
