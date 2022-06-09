import {combineReducers} from 'redux'
import { getFilmsReducer } from './getfilms/GetFilmsReducer'

export const rootReducers = combineReducers({
    filmsState : getFilmsReducer
})