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
  };

  characterService = new CharacterService();

  componentDidMount() {
    this.getListOfCharactersData();
  }

  getListOfCharactersData() {
    this.characterService
      .getAllCharacters()
      .then((charsList) => {
        this.setState({ charsList: charsList, loading: false });
      })
      .catch((error) => {
        this.setState({ error: true, loading: false });
      });
  }

  renderCharacters(arr) {
    const results = arr.map((char) => {
      return (
        <div
          className="char__list-item"
          key={char.id}
          onClick={() => this.props.onUpdateSelectedChar(char.id)}
        >
          <img src={char.thumbnail} alt={char.name} className="char__img" />
          <h3 className="char__name">{char.name}</h3>
        </div>
      );
    });
    return results;
  }
  render() {
    const { charsList, loading, error } = this.state;
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
        <button className="btn btn_red btn_big">LOAD MORE</button>
      </div>
    );
  }
}
export default CharList;
