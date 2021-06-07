import React from 'react';
//Let's import axios
import axios from 'axios';
import {popularGamesURL, upcomingGamesURL, newGamesURL} from '../api';

//Action Creator

export const loadGames = () => async (dispath) => {
    //Fetch data with axios
    const popularData = await axios.get(popularGamesURL());
    const upcomingData = await axios.get(upcomingGamesURL());
    const newGamesData = await axios.get(newGamesURL());
    dispath({
        type: 'FETCH_GAMES',
        payload: {
            popular: popularData.data.results,
            upcoming: upcomingData.data.results,
            newGames: newGamesData.data.results
        }
    })
}