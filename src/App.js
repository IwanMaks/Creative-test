import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import {NotFound} from "./Screens/NotFound";
import {Base} from "./Screens/Base";
import './style.css'
import {Game} from "./Screens/Game";

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Base screen={'Game'}/>} exact />
            <Route path="/game" element={<Base screen={'Game'}/>} exact />
            <Route path="/rating" element={<Base screen={'Rating'}/>} exact />
            <Route path='*' element={<NotFound />} />
        </Routes>
    )
}

export default App
