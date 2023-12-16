import './App.css'
import logo from './assets/logo-white.png'
import AllPosts from "./pages /all-posts/all-posts.jsx";
import Error from "./pages /error/error.jsx";
import Home from "./pages /home/home.jsx";
import NewPost from "./pages /new-post/new-post.jsx";
import {NavLink, Route, Routes} from "react-router-dom";
import Navigation from "./components/navigation/navigation.jsx";
import React from "react";

////////////////////////////////////////////////////////////////// pagina voor losse blogposts maken met link van de titel naar de pagina

function App() {
    return (
        <>
            <Navigation/>
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/newpost" element={<NewPost />}/>
                <Route path="/allposts" element={<AllPosts />}/>
                <Route path="*" element={<Error />}/>
            </Routes>

        </>


        // <div className="page-container">
        //     <img src={logo} alt="Company logo"/>
        //     <h1>Begin hier met het maken van jouw blog-applicatie!</h1>
        // </div>
    )
}

export default App
