import React from 'react';
//Let's import axios
import axios from 'axios';
import {popularGamesURL} from '../api';

//Action Creator

export const loadGames = () => async (dispath) => {
    //Fetch data with axios
    const popularData = await axios.get(popularGamesURL());
    dispath({
        type: 'FETCH_GAMES',
        payload: {
            popular: popularData.data.results,
        }
    })
}