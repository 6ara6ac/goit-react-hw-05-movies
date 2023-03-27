import { Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import Movies from "pages/Movies";
import { SharedLayout } from "./SharedLayout";
import MovieDetais from "./MovieDetais";
import Credits from "./Credits";
import Reviews from "./Reviews";

export const App = () => {


  return (
    <Routes>
    <Route path="/" element={<SharedLayout/>}>
    <Route index element={<Home/>}/>
    <Route path="/movies" element={<Movies/>}/>
    <Route path="/movies/:id" element={<MovieDetais/>}>
      <Route path='cast' element={<Credits/>}/>
      <Route path='reviews' element={<Reviews/>}/>
    </Route>
    </Route>
    </Routes>
  );
};
