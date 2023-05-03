import AppHeader from "../appHeader/appHeader";
import CharInfo from "../charInfo/charInfo";
import CharList from "../charList/charList";
import RandomChar from "../randomChar/randomChar";
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
