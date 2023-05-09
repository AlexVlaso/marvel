import "./charList.scss";
import CharacterService from "../../services/CharacterService";
import { useState, useEffect } from "react";
import Spinner from "../spinner/Spinner";
import ErrorMessage from "../errorMessage/ErrorMessage";
const CharList = (props) => {
  const [charsList, setCharsList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [offset, setOffset] = useState(305);
  const [newGroupLoading, setNewGroupLoading] = useState(false);
  const [lastGroup, setLastGroup] = useState(false);

  const characterService = new CharacterService();
  const refItems = [];
  useEffect(() => {
    getListOfCharactersData();
  }, []);

  const addRefItem = (ref) => {
    refItems.push(ref);
  };
  const selectItem = (index) => {
    refItems.forEach((item) => item.classList.remove("char__list-item_active"));
    refItems[index].classList.add("char__list-item_active");
  };

  const getListOfCharactersData = () => {
    setNewGroupLoading(true);
    characterService
      .getAllCharacters(offset)
      .then((newList) => {
        setCharsList((charsList) => [...charsList, ...newList]);
        setLoading(false);
        setNewGroupLoading(false);
        setOffset((offset) => offset + 9);
        setLastGroup(newList.length < 9);
      })
      .catch((error) => {
        setError(true);
        setLoading(false);
      });
  };

  const renderCharacters = (arr) => {
    const results = arr.map((char, i) => {
      return (
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
      );
    });
    return results;
  };

  const spinner = loading ? <Spinner /> : null;
  const errorMessage = error ? <ErrorMessage /> : null;
  const characters = !(loading || error) ? renderCharacters(charsList) : null;
  return (
    <div className="char__list">
      {spinner}
      {errorMessage}
      {characters}
      <button
        className="btn btn_red btn_big"
        disabled={newGroupLoading}
        style={{ display: lastGroup ? "none" : "block" }}
        onClick={getListOfCharactersData}
      >
        LOAD MORE
      </button>
    </div>
  );
};
export default CharList;
