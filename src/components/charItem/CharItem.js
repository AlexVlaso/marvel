import "./charItem.scss";
const CharItem = ({ data }) => {
  const { thumbnail, name, description } = data;
  return (
    <div className="char-item">
      <div className="container">
        <div className="char-item__wrapper">
          <img src={thumbnail} alt={name} className="char-item__img" />
          <div className="char-item__info">
            <h2 className="char-item__title">{name}</h2>
            <p className="char-item__desc">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CharItem;
