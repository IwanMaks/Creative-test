import React, {useEffect} from "react";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {loadFilm} from "../store/actions/user";

export const Start = props => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(loadFilm())
    }, [])

    const store = useSelector(state => state)

    console.log(store)

    return (
        <div>
            <h1>Start</h1>
        </div>
    )
}
