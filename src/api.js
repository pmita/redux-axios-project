
/*
    We need dates in order for our api calls to work. Correct
    format is key
*/
const getCurrentMonth = () => {
    const month = new Date().getMonth();
    if(month < 10){
        return `0${month}`
    } else {
        return month;
    }
}

const getCurrentDay = () => {
    const day = new Date().getDate();
    if(day < 10){
        return `0${day}`
    } else {
        return day;
    }
}

const currentYear = new Date().getFullYear();
const currentMonth = getCurrentMonth();
const currentDay = getCurrentDay();
/*
    Below we are getting the correct format for last year, 
    current, and next year dates
*/
const currentDate = `${currentYear}-${currentMonth}-${currentDay}`; 
const lastYear = `${currentYear - 1}-${currentMonth}-${currentDay}`;
const nextYear = `${currentYear + 1}-${currentMonth}-${currentDay}`;

//Setting our base api url
const base_url = 'https://api.rawg.io/api/'; 

//Setting our explicit queries
const popular_games = `games?key=8787cea324f74954ab434c7d334b191b&dates=${lastYear},${currentDate}&ordering=-rating&page_size=10`;
const upcoming_games = `games?key=8787cea324f74954ab434c7d334b191b&dates=${currentDate},${nextYear}&ordering=-added&page_size=10`;
const newGames = `games?key=8787cea324f74954ab434c7d334b191b&dates=${lastYear},${currentDate}&ordering=-released&page_size=10`;

//Combining base with explicit url string
export const popularGamesURL = () => `${base_url}${popular_games}`;
export const upcomingGamesURL = () => `${base_url}${upcoming_games}`;
export const newGamesURL = () => `${base_url}${newGames}`;

