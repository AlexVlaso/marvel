import "./charList.scss";
import CharacterService from "../../services/CharacterService";
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

  componentDidMount() {
    this.getListOfCharactersData();
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
    const results = arr.map((char) => {
      return (
        <div
          className="char__list-item"
          key={char.id}
          onClick={() => {
            this.props.onUpdateSelectedChar(char.id);
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
