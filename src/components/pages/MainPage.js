import CharInfo from "../charInfo/CharInfo";
import CharList from "../charList/CharList";
import RandomChar from "../randomChar/RandomChar";
import altronh from "../../resources/img/bg_asset.png";
import { useState } from "react";
import SearchForm from "../searchForm/SearchForm";
import { Helmet } from "react-helmet";
const MainPage = () => {
  const [selectedCharId, setCharId] = useState(null);

  const onUpdateSelectedChar = (id) => {
    setCharId(id);
  };

  return (
    <>
      <RandomChar />
      <section className="char__content">
        <Helmet>
          <meta name="description" content="Main page" />
          <title>Characters page</title>
        </Helmet>
        <div className="container">
          <div className="char__wrapper">
            <CharList onUpdateSelectedChar={onUpdateSelectedChar} />
            <div>
              <CharInfo charId={selectedCharId} />
              <SearchForm />
            </div>
            <img src={altronh} alt="altron" className="char__bg-img" />
          </div>
        </div>
      </section>
    </>
  );
};

export default MainPage;
