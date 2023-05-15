import "./charList.scss";
import useCharacterService from "../../services/CharacterService";
import { useState, useEffect } from "react";
import Spinner from "../spinner/Spinner";
import ErrorMessage from "../errorMessage/ErrorMessage";
import { CSSTransition, TransitionGroup } from "react-transition-group";

const CharList = (props) => {
  const [charsList, setCharsList] = useState([]);
  const [offset, setOffset] = useState(305);
  const [newGroupLoading, setNewGroupLoading] = useState(false);
  const [lastGroup, setLastGroup] = useState(false);

  const { loading, error, getAllCharacters, clearError } =
    useCharacterService();
  const refItems = [];
  useEffect(() => {
    getListOfCharactersData(true);
  }, []);

  const addRefItem = (ref) => {
    refItems.push(ref);
  };
  const selectItem = (index) => {
    refItems.forEach((item) => item.classList.remove("char__list-item_active"));
    refItems[index].classList.add("char__list-item_active");
  };

  const getListOfCharactersData = (init) => {
    clearError();
    setNewGroupLoading(!init);
    getAllCharacters(offset).then((newList) => {
      setCharsList((charsList) => [...charsList, ...newList]);
      setNewGroupLoading(false);
      setOffset((offset) => offset + 9);
      setLastGroup(newList.length < 9);
    });
  };

  const renderCharacters = (arr) => {
    const results = arr.map((char, i) => {
      return (
        <CSSTransition
          key={char.id}
          timeout={1000}
          classNames="char__list-item"
        >
          <div
            tabIndex={0}
            className="char__list-item"
            key={char.id}
            ref={addRefItem}
            onClick={() => {
              props.onUpdateSelectedChar(char.id);
              selectItem(i);
              window.scrollTo(0, 350);
            }}
          >
            <img src={char.thumbnail} alt={char.name} className="char__img" />
            <h3 className="char__name">{char.name}</h3>
          </div>
        </CSSTransition>
      );
    });
    return results;
  };

  const spinner = loading && !newGroupLoading ? <Spinner /> : null;
  const errorMessage = error ? <ErrorMessage /> : null;
  const characters = renderCharacters(charsList);
  return (
    <div className="char__list">
      {spinner}
      {errorMessage}
      <TransitionGroup component={null}>{characters}</TransitionGroup>
      <button
        className="btn btn_red btn_big"
        disabled={newGroupLoading}
        style={{ display: lastGroup ? "none" : "block" }}
        onClick={() => getListOfCharactersData(false)}
      >
        LOAD MORE
      </button>
    </div>
  );
};
export default CharList;
