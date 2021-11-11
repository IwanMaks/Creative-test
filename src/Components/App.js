import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import {Rating} from "./Rating";
import {NotFound} from "./NotFound";
import {Home} from "../Screens/Home";
import './style.css'
import {Game} from "../Screens/Game";

const App = props => {
    return (
        <Routes>
            <Route path="/" element={<Home />} exact />
            <Route path="/game" element={<Game />} exact />
            <Route path='*' element={<NotFound />} />
        </Routes>
    )
}

export default App
