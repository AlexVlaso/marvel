import "./charList.scss";
import placeholder from "../../resources/img/hero_placehorder.jpg";
function CharList() {
  return (
    <div className="char__list">
      <div className="char__list-item">
        <img src={placeholder} alt="hero" className="char__img" />
        <h3 className="char__name">ABYSS</h3>
      </div>
      <div className="char__list-item char__list-item_active">
        <img src={placeholder} alt="hero" className="char__img" />
        <h3 className="char__name">ABYSS</h3>
      </div>
      <div className="char__list-item">
        <img src={placeholder} alt="hero" className="char__img" />
        <h3 className="char__name">ABYSS</h3>
      </div>
      <div className="char__list-item">
        <img src={placeholder} alt="hero" className="char__img" />
        <h3 className="char__name">ABYSS</h3>
      </div>
      <div className="char__list-item">
        <img src={placeholder} alt="hero" className="char__img" />
        <h3 className="char__name">ABYSS</h3>
      </div>
      <div className="char__list-item">
        <img src={placeholder} alt="hero" className="char__img" />
        <h3 className="char__name">ABYSS</h3>
      </div>
      <div className="char__list-item">
        <img src={placeholder} alt="hero" className="char__img" />
        <h3 className="char__name">ABYSS</h3>
      </div>
      <div className="char__list-item">
        <img src={placeholder} alt="hero" className="char__img" />
        <h3 className="char__name">ABYSS</h3>
      </div>
      <div className="char__list-item">
        <img src={placeholder} alt="hero" className="char__img" />
        <h3 className="char__name">ABYSS</h3>
      </div>
      <button className="btn btn_red btn_big">LOAD MORE</button>
    </div>
  );
}
export default CharList;
