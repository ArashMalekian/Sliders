const initialState = {
    loading : false,
    data : [],
    error : ""
}

export const getFilmsReducer = (state = initialState , action) => {
    switch(action.type) {
        case "GET-FILMS-REQUEST" :
            return {
                loading :true
            }
        case "GET-FILMS-SUCCESS" :
            return {
                ...state,
                loading :false,
                data : action.pyload
            }
        case "GET-FILMS-FAILURE" :
            return {
                ...state,
                loading : false ,
                error : action.pyload
            }
        default : return state
    }
}