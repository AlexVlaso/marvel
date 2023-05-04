import React from "react";
import ReactDOM from "react-dom/client";
import "./style/style.scss";
import App from "./components/app/App";
import CharacterService from "./services/CharacterService";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
const service = new CharacterService();
service.getAllCharacters().then((data) => console.log(data.data.results));
