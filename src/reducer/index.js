import React from 'react';
//Let's combine our reducers
import {combineReducers} from 'redux';
import gamesReducer from './gamesReducer';


const rootReducer = combineReducers({
    games: gamesReducer,
})

export default rootReducer;