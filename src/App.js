import './App.scss';
import Header from "./components/header";
import Footer from "./components/footer/footer";
import {Route, Routes} from "react-router-dom";
import Pages from "./components/pages/pages";
import Hotels from "./components/hotels/hotels";
import Detail from "./components/popular/popularDetails/detail";
import HotelDetail from "./components/hotels/hotelDetail/hotelDetail";


function App() {
    return (
        <div className="App">
            <Header/>
            <Routes>
                <Route path={"/"} element={<Pages/>}/>
                <Route path={"/hotels"} element={<Hotels/>}/>
                <Route path={"/popular/:id"} element={<Detail/>}/>
                <Route path={"/hotels/:id"} element={<HotelDetail/>}/>
            </Routes>
            <Footer/>
        </div>
    );
}

export default App;
