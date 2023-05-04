import AppHeader from "../appHeader/AppHeader";
import CharInfo from "../charInfo/CharInfo";
import CharList from "../charList/CharList";
import RandomChar from "../randomChar/RandomChar";
import "./app.scss";
import altronh from "../../resources/img/bg_asset.png";

function App() {
  return (
    <div className="App">
      <AppHeader />
      <main>
        <RandomChar />
        <section className="char__content">
          <div className="container">
            <div className="char__wrapper">
              <CharList />
              <div>
                <CharInfo />
              </div>
              <img src={altronh} alt="altron" className="char__bg-img" />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
