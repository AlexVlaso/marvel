import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./comicsList.scss";
import useCharacterService from "../../services/CharacterService";
import Spinner from "../spinner/Spinner";
import ErrorMessage from "../errorMessage/ErrorMessage";
const ComicsList = () => {
  const [comicsList, setComicsList] = useState([]);
  const [newGroupLoading, setNewGroupLoading] = useState(false);
  const [offset, setOffset] = useState(200);
  const { error, loading, getAllComics, clearError } = useCharacterService();
  useEffect(() => {
    getListOfComics(true);
  }, []);
  const getListOfComics = (isInit) => {
    clearError();
    setNewGroupLoading(!isInit);
    getAllComics(offset).then((newList) => {
      setComicsList((prevList) => [...prevList, ...newList]);
      setNewGroupLoading(false);
      setOffset((offset) => offset + 8);
    });
  };
  const renderComics = () => {
    const results = comicsList.map((item, i) => {
      return (
        <li className="comics__item" key={i}>
          <Link to={`/comics/${item.id}`}>
            <img src={item.thumbnail} alt={item.title} />
            <h3 className="comics__item-title">{item.title}</h3>
            <div className="comics__item-price">{item.price}</div>
          </Link>
        </li>
      );
    });
    return results;
  };
  const comicsItems = renderComics();
  const spinner = loading ? <Spinner /> : null;
  const errorMessage = error ? <ErrorMessage /> : null;
  return (
    <section className="comics__content">
      <div className="container">
        {spinner}
        {errorMessage}
        <ul className="comics__list">{comicsItems}</ul>
        <button
          style={{ display: false ? "none" : "block" }}
          className="btn btn_red btn_big"
          disabled={newGroupLoading}
          onClick={() => {
            getListOfComics(false);
          }}
        >
          LOAD MORE
        </button>
      </div>
    </section>
  );
};
export default ComicsList;
