import "./App.css";
import Header from "./components/navbar/navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./components/home/home";
import Aboutus from "./components/about us/about us";
import Contactus from "./components/contact us/contact us";
import Products from "./components/products/products";
import Join from "./components/join/join";
import Notfound from "./components/not found/not found";
// import SignUp from "./components/sign up/sign up";
import LogIn from "./components/login/login";
import Movies from "./components/movies/movies";
import  Pagination  from "./components/pagination/pag";
import MoviesDetails  from "./components/details/details";





// backgroundColor
//camal case
function App() {
  return (
    <>
      <Header data={"app"} />
      <div className="container">
        <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/movies" element={<Movies/>}/>
      <Route path="/details/:id" element={<MoviesDetails/>}/>


      {/* <Route path="/aboutus" element={<Aboutus/>}/> */}
      {/* <Route path="/contactus" element={<Contactus/>}/> */}
      {/* <Route path="/products" element={<Products/>}/> */}
      <Route path="/join" element={<Join />}>
            <Route path="" element={<LogIn />} />
            <Route path="login" element={<LogIn />} />
            
          </Route>
      


        </Routes>
      </div>
    </>
  );
}

export default App;