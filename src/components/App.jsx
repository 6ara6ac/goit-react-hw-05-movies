import { Routes, Route } from "react-router-dom";
import { SharedLayout } from "./Other/SharedLayout";
import { lazy } from "react";


const Home = lazy(()=> import("../pages/Home"))
const Movies = lazy(()=> import("../pages/Movies"))
const MovieDetais = lazy(()=> import("./MovieDetails/MovieDetais"))
const Credits = lazy(()=> import("./Credits/Credits"))
const Reviews = lazy(()=>import("./Reviews/Reviews"))





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
