import Spinner from "../components/spinner/Spinner";

import ErrorMessage from "../components/errorMessage/ErrorMessage";
const setListContent = (state, Component, newGroupLoading) => {
  switch (state) {
    case "waiting":
      return;
    case "loading":
      return newGroupLoading ? null : <Spinner />;
    case "complete":
      return <Component />;
    case "error":
      return <ErrorMessage />;
    default:
      throw Error("Unexpected process state");
  }
};
export default setListContent;
