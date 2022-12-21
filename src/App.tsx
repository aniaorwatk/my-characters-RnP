import { Route, Routes } from "react-router-dom";
import MainPage from "./components/MainPage/MainPage";
import SinglePage from "./components/SinglePage/SinglePage";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/my-characters-RnP" element={<MainPage />} />
        <Route path="/:id" element={<SinglePage />} />
      </Routes>
    </>
  );
}

export default App;
