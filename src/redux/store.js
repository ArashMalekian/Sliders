import { createStore , applyMiddleware } from "redux";
import thunk from 'redux-thunk'
import {rootReducers} from './rootreducers'

export const store = createStore( rootReducers ,applyMiddleware(thunk))