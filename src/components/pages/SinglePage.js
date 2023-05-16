import "./singleComicPage.scss";
import ComicItem from "../comicItem/ComicItem";
import AppBanner from "../appBanner/AppBanner";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import useCharacterService from "../../services/CharacterService";
import Spinner from "../spinner/Spinner";
import Page404 from "../page404/Page404";
import { CSSTransition } from "react-transition-group";
import { Helmet } from "react-helmet";

const SinglePage = ({ Component, dataType }) => {
  const [data, setData] = useState();
  const { id } = useParams();
  const { loading, error, getComic, clearError, getCharacter } =
    useCharacterService();
  useEffect(() => {
    getData();
  }, [id]);
  const getData = () => {
    clearError();
    if (dataType === "comic") {
      getComic(id).then((data) => {
        setData(data);
      });
    }
    if (dataType === "char") {
      getCharacter(id).then((data) => {
        setData(data);
      });
    }
  };
  const spinner = loading ? <Spinner /> : null;
  const errorMessage = error ? <Page404 /> : null;
  const content =
    !(loading || error) && data ? <Component data={data} /> : null;
  return (
    <>
      <AppBanner />
      {spinner}
      {errorMessage}
      <CSSTransition
        in={content ? true : false}
        timeout={500}
        classNames={"node"}
      >
        <div>{content}</div>
      </CSSTransition>
    </>
  );
};
export default SinglePage;
