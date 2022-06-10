import axios from 'axios'

const getFilmsRequest = () => {
    return {
        type : "GET-FILMS-REQUEST"
    }
}

const getFilmsSuccess = (data) => {
    return {
        type : "GET-FILMS-SUCCESS",
        payload : data
    }
}

const getFilmsFailure = (error) => {
    return {
        type : "GET-FILMS-FAILURE",
        payload : error
    }
}

export const getFilms = (i) => {
    return (dispatch) => {
        dispatch(getFilmsRequest());
        axios.get(`http://moviesapi.ir/api/v1/movies?page=${i}`)
        .then(response =>{
            dispatch(getFilmsSuccess(response.data.data))
             console.log(response.data.data);
        })
        .catch(error => dispatch(getFilmsFailure(error.massage)))
    }
}