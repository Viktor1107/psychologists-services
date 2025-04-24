import { Routes, Route } from "react-router-dom";
// import SharedLayout from "./components/SharedLayout/SharedLayout";
import HomePage from "./pages/HomePage/HomePage";
import Psychologists from "./pages/Psychologists/Psychologists";
import Favorites from "./pages/Favorites/Favorites";
import NotFound from "./pages/NotFound/NotFound";
import WelcomePage from "./pages/WelcomePage/WelcomePage";
import AppBar from "./components/AppBar/AppBar";
import SvgSprite from "./components/SvgSprite/SvgSprite";

function App() {
  return (
    <>
      <SvgSprite />
      <AppBar />
      <WelcomePage />
      <Routes>
        <Route path="/" element={<HomePage />}>
          <Route path="psychologists" element={<Psychologists />} />
          <Route path="favorites" element={<Favorites />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
