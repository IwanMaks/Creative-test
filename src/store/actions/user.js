export const loadFilm = () => async dispatch => {
    const response = await fetch('https://swapi.dev/api/films/1/')
    const data = await response.json()

    dispatch({
        type: 'LOAD_FILM',
        payload: data
    })
}
