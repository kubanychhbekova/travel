import './App.scss';
import Header from "./components/header";
import Footer from "./components/footer/footer";
import {Route, Routes} from "react-router-dom";
import Pages from "./components/pages/pages";

function App() {
    return (
        <div className="App">
            <Header/>
            <Routes>
                <Route path={"/"} element={<Pages/>}/>
            </Routes>
            <Footer/>
        </div>
    );
}

export default App;
