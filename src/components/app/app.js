import AppHeader from "../appHeader/AppHeader";
import CharInfo from "../charInfo/CharInfo";
import CharList from "../charList/CharList";
import RandomChar from "../randomChar/RandomChar";
import "./app.scss";
import altronh from "../../resources/img/bg_asset.png";
import { Component } from "react";

class App extends Component {
  state = {
    selectedCharId: null,
  };
  onUpdateSelectedChar = (id) => {
    this.setState({
      selectedCharId: id,
    });
  };
  render() {
    return (
      <div className="App">
        <AppHeader />
        <main>
          <RandomChar />
          <section className="char__content">
            <div className="container">
              <div className="char__wrapper">
                <CharList onUpdateSelectedChar={this.onUpdateSelectedChar} />
                <div>
                  <CharInfo charId={this.state.selectedCharId} />
                </div>
                <img src={altronh} alt="altron" className="char__bg-img" />
              </div>
            </div>
          </section>
        </main>
      </div>
    );
  }
}

export default App;
