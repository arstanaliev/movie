import logo from './logo.svg';
import './App.css';
import Header from "./components/Header";
import {Route, Routes} from "react-router-dom";
import Popular from "./components/Popular/Popular";
import Playing from "./components/Playing/Playing";
import Rated from "./components/Rated/Rated";
import DetailPage from "./components/DedailPage/DetailPage";
import MovieActors from "./components/DedailPage/Actors/MovieActors";

function App() {
    return (
        <div className="App">
            <Header/>
            <Routes>
                <Route path={"/"} element={<Popular/>}/>
                <Route path={"/popular"} element={<Popular/>}/>
                <Route path={"/playing"} element={<Playing/>}/>
                <Route path={"/rated"} element={<Rated/>}/>
                <Route path={"/movie/:id"} element={<DetailPage/>}/>
                <Route path={"/movie/movie-results/:movieId"} element={<MovieActors/>}/>
            </Routes>
        </div>
    );
}

export default App;
