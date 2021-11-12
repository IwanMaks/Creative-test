import {LOAD_IMG} from "../types";

export const loadImg = () => async dispatch => {
    const response = await fetch('https://api.unsplash.com/photos/?client_id=j3oT33Xix18OzZSQiPV1YcuUHTQfC1PxvzrmEzDjv-M&per_page=18')
    const data = await response.json()

    const sortData = data.map(imgObj => imgObj.urls.thumb)
    dispatch({
        type: LOAD_IMG,
        payload: sortData
    })
}
