import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import {Start} from "./Start";
import {Rating} from "./Rating";
import {NotFound} from "./NotFound";

const App = props => {
    return (
        <Routes>
            <Route path="/" element={<Start />} />
            <Route path="/rating" element={<Rating />} />
            <Route path='*' element={<NotFound />} />
        </Routes>
    )
}

export default App
