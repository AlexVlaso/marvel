import { Link } from "react-router-dom";
import "./comicItem.scss";
import { Helmet } from "react-helmet";
const ComicItem = ({ data }) => {
  const { title, description, pageCount, price, thumbnail, language } = data;
  return (
    <div className="comic">
      <Helmet>
        <meta name="description" content={`Single page ${title}`} />
        <title>{title}</title>
      </Helmet>
      <div className="container">
        <div className="comic__wrapper">
          <img src={thumbnail} alt={title} />
          <div className="comic__info">
            <h2 className="comic__title">{title}</h2>
            <p className="comic__desc">{description}</p>
            <div className="comic__pages">{pageCount}</div>
            <div className="comic__language">{`Language: ${language}`}</div>
            <div className="comic__price">{price}</div>
          </div>
          <Link className="comic__link-back" to="/comics">
            Back to all
          </Link>
        </div>
      </div>
    </div>
  );
};
export default ComicItem;
