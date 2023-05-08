import "./charList.scss";
import CharacterService from "../../services/CharacterService";
import React from "react";
import { Component } from "react";
import Spinner from "../spinner/Spinner";
import ErrorMessage from "../errorMessage/ErrorMessage";
class CharList extends Component {
  state = {
    charsList: [],
    loading: true,
    error: false,
    offset: 305,
    newGroupLoading: false,
    lastGroup: false,
  };
  characterService = new CharacterService();
  refItems = [];

  componentDidMount() {
    this.getListOfCharactersData();
  }
  addRefItem = (ref) => {
    this.refItems.push(ref);
  };
  selectItem(index) {
    this.refItems.forEach((item) =>
      item.classList.remove("char__list-item_active")
    );
    this.refItems[index].classList.add("char__list-item_active");
  }

  getListOfCharactersData = () => {
    this.setState({ newGroupLoading: true });
    this.characterService
      .getAllCharacters(this.state.offset)
      .then((newList) => {
        this.setState((state) => ({
          charsList: [...state.charsList, ...newList],
          loading: false,
          newGroupLoading: false,
          offset: state.offset + 9,
          lastGroup: newList.length < 9,
        }));
      })
      .catch((error) => {
        this.setState({ error: true, loading: false });
      });
  };

  renderCharacters(arr) {
    const results = arr.map((char, i) => {
      return (
        <div
          tabIndex={0}
          className="char__list-item"
          key={char.id}
          ref={this.addRefItem}
          onClick={() => {
            this.props.onUpdateSelectedChar(char.id);
            this.selectItem(i);
            window.scrollTo(0, 350);
          }}
        >
          <img src={char.thumbnail} alt={char.name} className="char__img" />
          <h3 className="char__name">{char.name}</h3>
        </div>
      );
    });
    return results;
  }
  render() {
    const { charsList, loading, error, newGroupLoading, lastGroup } =
      this.state;
    const spinner = loading ? <Spinner /> : null;
    const errorMessage = error ? <ErrorMessage /> : null;
    const characters = !(loading || error)
      ? this.renderCharacters(charsList)
      : null;
    return (
      <div className="char__list">
        {spinner}
        {errorMessage}
        {characters}
        <button
          className="btn btn_red btn_big"
          disabled={newGroupLoading}
          style={{ display: lastGroup ? "none" : "block" }}
          onClick={this.getListOfCharactersData}
        >
          LOAD MORE
        </button>
      </div>
    );
  }
}
export default CharList;
