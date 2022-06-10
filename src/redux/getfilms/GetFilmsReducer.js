const initialState = {
    loading : false,
    data : [],
    error : ""
}

export const getFilmsReducer = (state = initialState , action) => {
    switch(action.type) {
        case "GET-FILMS-REQUEST" :
            return {
                ...state,
                loading :true
            }
        case "GET-FILMS-SUCCESS" :
            return {
                ...state,
                loading :false,
                data : action.payload
            }
        case "GET-FILMS-FAILURE" :
            return {
                ...state,
                loading : false ,
                error : action.payload
            }
        default : return state;
    }
}