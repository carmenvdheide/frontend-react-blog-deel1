import './App.css'
import logo from './assets/logo-white.png'
import AllPosts from "./pages /all-posts/all-posts.jsx";
import Error from "./pages /error/error.jsx";
import Home from "./pages /home/home.jsx";
import NewPost from "./pages /new-post/new-post.jsx";
import {NavLink, Route, Routes} from "react-router-dom";
import Navigation from "./components/navigation/navigation.jsx";
import React from "react";
import BlogPost from "./pages /blog-post/blog-post.jsx";



function App() {
    return (
        <>
            <Navigation/>
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/newpost" element={<NewPost />}/>
                <Route path="/allposts" element={<AllPosts />}/>
                <Route path="*" element={<Error />}/>
                <Route path="/post/:id" element={<BlogPost />} />
            </Routes>

        </>
    )
}

export default App
