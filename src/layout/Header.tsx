const Header = () => {
  return (
    <header>
      <div>
        <h1 className="text-4xl font-bold text-center">Massage</h1>
        <nav className="flex justify-center">
          <ul className="flex space-x-4">
            <li>
              <a href="/">Accueil</a>
            </li>
            <li>
              <a href="/about">A Propos</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
