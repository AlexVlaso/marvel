import "./appBanner.scss";
import avanger from "../../resources/img/avengers.png";
import avangerLogo from "../../resources/img/avengers_logo.png";
function AppBanner() {
  return (
    <div className="banner">
      <div className="container">
        <div className="banner__wrapper">
          <img src={avanger} alt="avangers" />
          <div className="banner__text">
            New comics every week! <br />
            Stay tuned!
          </div>
          <img src={avangerLogo} alt="avangers_logo" />
        </div>
      </div>
    </div>
  );
}
export default AppBanner;
