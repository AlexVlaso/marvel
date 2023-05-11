import AppHeader from "../appHeader/AppHeader";
import "./app.scss";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { MainPage, ComicsPage } from "../pages";

const App = () => {
  return (
    <div className="App">
      <Router>
        <AppHeader />
        <main>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/comics" element={<ComicsPage />} />
          </Routes>
        </main>
      </Router>
    </div>
  );
};

export default App;
