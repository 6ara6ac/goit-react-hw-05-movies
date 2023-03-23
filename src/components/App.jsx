import { Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import Movies from "pages/Movies";
import { SharedLayout } from "./SharedLayout";
import MovieDetais from "./MovieInfo";

export const App = () => {


  return (
    <Routes>
    <Route path="/" element={<SharedLayout/>}>
    <Route index element={<Home/>}/>
    <Route path="/movies" element={<Movies/>}/>
    <Route path="/movies/:id" element={<MovieDetais/>}/>
    </Route>
    </Routes>
  );
};
