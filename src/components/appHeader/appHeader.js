import "./appHeader.scss";

function AppHeader() {
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <h1 className="header__title">
            <span className="header__text_red">Marvel</span> information portal
          </h1>
          <div className="header__desc">
            <span className="header__text_red">Characters</span> /
            <span>Comics</span>
          </div>
        </div>
      </div>
    </header>
  );
}

export default AppHeader;
