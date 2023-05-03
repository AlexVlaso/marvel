import "./charInfo.scss";
import placeholder from "../../resources/img/loki.jpg";
function CharInfo() {
  return (
    <div className="char__info">
      <div className="char__info-wrapper">
        <img src={placeholder} alt="hero" className="char__info-img" />
        <div>
          <h3 className="char__info-name">LOKI</h3>
          <div className="char__info-btns">
            <button className="btn btn_red">HOMEPAGE</button>
            <button className="btn btn_grey btn_mt-10">WIKI</button>
          </div>
        </div>
      </div>
      <p className="char__info-desc">
        In Norse mythology, Loki is a god or jötunn (or both). Loki is the son
        of Fárbauti and Laufey, and the brother of Helblindi and Býleistr. By
        the jötunn Angrboða, Loki is the father of Hel, the wolf Fenrir, and the
        world serpent Jörmungandr. By Sigyn, Loki is the father of Nari and/or
        Narfi and with the stallion Svaðilfari as the father, Loki gave birth—in
        the form of a mare—to the eight-legged horse Sleipnir. In addition, Loki
        is referred to as the father of Váli in the Prose Edda.
      </p>
      <h4 className="char__info-subtitle">Comics:</h4>
      <ul className="char__info-comics">
        <li>All-Winners Squad: Band of Heroes (2011) #3</li>
        <li>All-Winners Squad: Band of Heroes (2011) #3</li>
        <li>All-Winners Squad: Band of Heroes (2011) #3</li>
        <li>All-Winners Squad: Band of Heroes (2011) #3</li>
        <li>All-Winners Squad: Band of Heroes (2011) #3</li>
        <li>All-Winners Squad: Band of Heroes (2011) #3</li>
        <li>All-Winners Squad: Band of Heroes (2011) #3</li>
      </ul>
    </div>
  );
}
export default CharInfo;
