import Spinner from "../components/spinner/Spinner";
import ErrorMessage from "../components/errorMessage/ErrorMessage";
const setContent = (state, Component, data) => {
  switch (state) {
    case "waiting":
      return;
    case "loading":
      return <Spinner />;
    case "complete":
      return <Component data={data} />;
    case "error":
      return <ErrorMessage />;
    default:
      throw Error("Unexpected process state");
  }
};
export default setContent;
