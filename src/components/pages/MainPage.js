import CharInfo from "../charInfo/CharInfo";
import CharList from "../charList/CharList";
import RandomChar from "../randomChar/RandomChar";
import altronh from "../../resources/img/bg_asset.png";
import { useState } from "react";
const MainPage = () => {
  const [selectedCharId, setCharId] = useState(null);

  const onUpdateSelectedChar = (id) => {
    setCharId(id);
  };

  return (
    <>
      <RandomChar />
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
      </section>
    </>
  );
};

export default MainPage;
