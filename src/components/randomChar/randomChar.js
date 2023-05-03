import "./randomChar.scss";
import thor from "../../resources/img/thor.jpg";
import mjolnir from "../../resources/img/mjolnir.png";
function RandomChar() {
  return (
    <section className="random">
      <div className="container">
        <div className="random__wrapper">
          <div className="random__info">
            <img src={thor} alt="random" className="random__info-img" />
            <div className="random__info-desc">
              <h2 className="random__info-title">THOR</h2>
              <p className="random__info-text">
                As the Norse God of thunder and lightning, Thor wields one of
                the greatest weapons ever made, the enchanted hammer Mjolnir.
                While others have described Thor as an over-muscled, oafish
                imbecile, he's quite smart and compassionate...
              </p>
              <div className="random__info-btns">
                <button className="btn btn_red">HOMEPAGE</button>
                <button className="btn btn_grey">WIKI</button>
              </div>
            </div>
          </div>
          <div className="random__choice">
            <h2 className="random__choice-title">
              Random character for today! Do you want to get to know him better?
            </h2>
            <h3 className="random__choice-subtitle">Or choose another one</h3>
            <img src={mjolnir} alt="mjolnir" className="random__choice-img" />
            <button className="btn btn_red random__choice__btn">TRY IT</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default RandomChar;
