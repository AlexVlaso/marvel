import { Link } from "react-router-dom";
import ErrorMessage from "../errorMessage/ErrorMessage";
import "./page404.scss";
const Page404 = () => {
  return (
    <div className="page404">
      <div className="page404__wrapper">
        <h3 className="page404__title">Error: 404</h3>
        <ErrorMessage />
        <Link className="btn btn_red btn_big" to="/">
          Back to main page
        </Link>
      </div>
    </div>
  );
};
export default Page404;
