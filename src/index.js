import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

import {BrowserRouter, Routes, Route} from 'react-router-dom'
import GamePage from './pages/GamePage';
import HowTo from './pages/HowTo';
import AddFilm from './pages/AddFilm';
import Layout from './pages/Layout';





function BannerHeader() {
  return (
    <div id="bannerDiv">
      <h1>Flop Trumps</h1>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
            <Route index element={<GamePage/>}/>
          <Route path="GamePage" element={<GamePage />} />
          <Route path="HowTo" element={<HowTo />} />
          <Route path="AddFilm" element={<AddFilm />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
