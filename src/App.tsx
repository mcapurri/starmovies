import { Routes, Route } from "react-router-dom";

import { FilmsList } from "./components/FilmsList";
import { FilmsShow } from "./components/FilmsShow";
import { Layout } from "./components/Layout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<FilmsList />} />
        <Route path="films/:filmId" element={<FilmsShow />} />
        <Route path="films" element={<FilmsList />} />
      </Route>
    </Routes>
  );
}

export default App;
