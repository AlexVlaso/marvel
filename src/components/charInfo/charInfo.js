import "./charInfo.scss";
import { useState, useEffect } from "react";
import useCharacterService from "../../services/CharacterService";
import ErrorMessage from "../errorMessage/ErrorMessage";
import { CSSTransition } from "react-transition-group";
import Spinner from "../spinner/Spinner";
import Skeleton from "../skeleton/Skeleton";
const CharInfo = (props) => {
  const [char, setChar] = useState(null);
  const { error, loading, getCharacter } = useCharacterService();

  useEffect(() => {
    undateChar();
  }, [props.charId]);

  const undateChar = () => {
    const { charId } = props;
    if (!charId) {
      return;
    }
    getCharacterData(charId);
  };
  const getCharacterData = (id) => {
    getCharacter(id).then((char) => {
      setChar(char);
    });
  };

  const skeleton = error || loading || char ? null : <Skeleton />;
  const errorMessage = error ? <ErrorMessage /> : null;
  const spinner = loading ? <Spinner /> : null;
  const content = !(loading || error || !char) ? <View char={char} /> : null;
  return (
    <div className="char__info">
      {skeleton}
      {spinner}
      <CSSTransition
        in={content ? true : false}
        timeout={500}
        classNames={"char__info"}
      >
        <div>{content}</div>
      </CSSTransition>
      {errorMessage}
    </div>
  );
};

const View = ({ char }) => {
  const { name, description, thumbnail, homepage, wiki, comics } = char;
  const limitComics = comics.length > 10 ? comics.slice(0, 10) : comics;
  const emptyComicsMessage =
    limitComics.length === 0 ? <p>No one comics found</p> : null;
  const comicsElements = limitComics.map((item, i) => {
    return <li key={i}>{item.name}</li>;
  });
  return (
    <>
      <div className="char__info-wrapper">
        <img src={thumbnail} alt={name} className="char__info-img" />
        <div>
          <h3 className="char__info-name">{name}</h3>
          <div className="char__info-btns">
            <a href={homepage} className="btn btn_red">
              HOMEPAGE
            </a>
            <a href={wiki} className="btn btn_grey btn_mt-10">
              WIKI
            </a>
          </div>
        </div>
      </div>
      <p className="char__info-desc">{description}</p>
      <h4 className="char__info-subtitle">Comics:</h4>
      {emptyComicsMessage}
      <ul className="char__info-comics">{comicsElements}</ul>
    </>
  );
};
export default CharInfo;
