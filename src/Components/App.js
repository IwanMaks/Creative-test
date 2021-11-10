import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import {Rating} from "./Rating";
import {NotFound} from "./NotFound";
import {Home} from "../Screens/Home";
import './style.css'

const App = props => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/rating" element={<Rating />} />
            <Route path='*' element={<NotFound />} />
        </Routes>
    )
}

export default App
