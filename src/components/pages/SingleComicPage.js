import ComicItem from "../comicItem/ComicItem";
import AppBanner from "../appBanner/AppBanner";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import useCharacterService from "../../services/CharacterService";
import Spinner from "../spinner/Spinner";
import Page404 from "../page404/Page404";

const SingleComicPage = () => {
  const [comic, setComic] = useState();
  const { id } = useParams();
  const { loading, error, getComic, clearError } = useCharacterService();
  useEffect(() => {
    getComicData();
  }, [id]);
  const getComicData = () => {
    clearError();
    getComic(id).then((comic) => {
      setComic(comic);
    });
  };
  const spinner = loading ? <Spinner /> : null;
  const errorMessage = error ? <Page404 /> : null;
  const content =
    !(loading || error) && comic ? <ComicItem comic={comic} /> : null;
  return (
    <>
      <AppBanner />
      {spinner}
      {errorMessage}
      {content}
    </>
  );
};
export default SingleComicPage;
