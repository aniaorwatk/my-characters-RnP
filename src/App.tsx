import { Route, Routes } from "react-router-dom";
import MainPage from "./components/MainPage";
import SinglePage from "./components/SinglePage/SinglePage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/:id" element={<SinglePage />} />
      </Routes>
    </>
  );
}

export default App;
