import { Link } from "react-router-dom";
import ErrorMessage from "../errorMessage/ErrorMessage";
import { Helmet } from "react-helmet";
import "./page404.scss";
const Page404 = () => {
  return (
    <div className="page404">
      <Helmet>
        <meta name="description" content={`Page not found`} />
        <title>{"Page 404"}</title>
      </Helmet>
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
