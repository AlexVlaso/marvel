import AppHeader from "../appHeader/AppHeader";
import CharInfo from "../charInfo/CharInfo";
import CharList from "../charList/CharList";
import RandomChar from "../randomChar/RandomChar";
import "./app.scss";
import altronh from "../../resources/img/bg_asset.png";
import { useState } from "react";
import AppBanner from "../appBanner/AppBanner";
import ComicsList from "../comicsList/ComicsList";

const App = () => {
  const [selectedCharId, setCharId] = useState(null);

  const onUpdateSelectedChar = (id) => {
    setCharId(id);
  };

  return (
    <div className="App">
      <AppHeader />
      <main>
        <AppBanner />
        <ComicsList />
        {/* <RandomChar />
        <section className="char__content">
          <div className="container">
            <div className="char__wrapper">
              <CharList onUpdateSelectedChar={onUpdateSelectedChar} />
              <div>
                <CharInfo charId={selectedCharId} />
              </div>
              <img src={altronh} alt="altron" className="char__bg-img" />
            </div>
          </div>
        </section> */}
      </main>
    </div>
  );
};

export default App;
