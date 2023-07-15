import "./App.scss";
import Header from "./components/header";
import Footer from "./components/footer/footer";
import { Route, Routes } from "react-router-dom";
import Pages from "./components/pages/pages";
import AboutRoutes from "./components/aboutRoutes/aboutRoutes";
function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path={"/"} element={<Pages />} />
        <Route path="/route" element={<AboutRoutes />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
