import AppHeader from "../appHeader/AppHeader";
import "./app.scss";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { MainPage, ComicsPage, Page404, SingleComicPage } from "../pages";

const App = () => {
  return (
    <div className="App">
      <Router>
        <AppHeader />
        <main>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/comics" element={<ComicsPage />} />
            <Route path="/comics/:id" element={<SingleComicPage />} />
            <Route path="*" element={<Page404 />} />
          </Routes>
        </main>
      </Router>
    </div>
  );
};

export default App;
