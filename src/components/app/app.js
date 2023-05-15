import AppHeader from "../appHeader/AppHeader";
import Spinner from "../spinner/Spinner";
import "./app.scss";
import { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { MainPage } from "../pages";
import ComicItem from "../comicItem/ComicItem";
import CharItem from "../charItem/CharItem";

const ComicsPage = lazy(() => import("../pages/ComicsPage"));
const Page404 = lazy(() => import("../page404/Page404"));
const SinglePage = lazy(() => import("../pages/SinglePage"));

const App = () => {
  return (
    <div className="App">
      <Router>
        <AppHeader />
        <main>
          <Suspense fallback={<Spinner />}>
            <Routes>
              <Route path="/" element={<MainPage />} />
              <Route path="/comics" element={<ComicsPage />} />
              <Route
                path="/comics/:id"
                element={<SinglePage Component={ComicItem} dataType="comic" />}
              />
              <Route
                path="/characters/:id"
                element={<SinglePage Component={CharItem} dataType="char" />}
              />
              <Route path="*" element={<Page404 />} />
            </Routes>
          </Suspense>
        </main>
      </Router>
    </div>
  );
};

export default App;
