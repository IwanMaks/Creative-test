import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import {NotFound} from "../Screens/NotFound";
import {Home} from "../Screens/Home";
import './style.css'
import {Game} from "../Screens/Game";

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Home screen={'Game'}/>} exact />
            <Route path="/game" element={<Home screen={'Game'}/>} exact />
            <Route path="/rating" element={<Home screen={'Rating'}/>} exact />
            <Route path='*' element={<NotFound />} />
        </Routes>
    )
}

export default App
