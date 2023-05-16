import "./singleComicPage.scss";
import AppBanner from "../appBanner/AppBanner";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import useCharacterService from "../../services/CharacterService";
import { CSSTransition } from "react-transition-group";
import setContent from "../../utils/setContent";

const SinglePage = ({ Component, dataType }) => {
  const [data, setData] = useState();
  const { id } = useParams();
  const { process, setProcess, getComic, clearError, getCharacter } =
    useCharacterService();
  useEffect(() => {
    getData();
  }, [id]);
  const getData = () => {
    clearError();
    if (dataType === "comic") {
      getComic(id)
        .then((data) => {
          setData(data);
        })
        .then(() => setProcess("complete"));
    }
    if (dataType === "char") {
      getCharacter(id)
        .then((data) => {
          setData(data);
        })
        .then(() => setProcess("complete"));
    }
  };

  return (
    <>
      <AppBanner />
      <CSSTransition
        in={process === "complete" ? true : false}
        timeout={500}
        classNames={"node"}
      >
        <div>{setContent(process, Component, data)}</div>
      </CSSTransition>
    </>
  );
};
export default SinglePage;
