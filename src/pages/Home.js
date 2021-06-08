import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {loadGames} from '../actions/gamesActions';
//Lets import everything framer motion related
import {motion} from 'framer-motion';
import styled from 'styled-components';
//Importing our components
import Game from '../components/Game';



const Home = () => {
  const dispatch = useDispatch();

  useEffect( () => {
    dispatch(loadGames());
  }, [dispatch])

  //Pull data from the store
  const {popular, upcoming, newGames} = useSelector(state => state.games);
  
  return (
    <GameList>
      <h2>Upcoming Games</h2>
      <Games>
        {upcoming.map( game => (
          <Game 
            name={game.name} 
            released={game.released} 
            id={game.id}
            key={game.id}
            image={game.background_image}/>
        ))}
      </Games>

      <h2>Popular Games</h2>
      <Games>
        {popular.map( game => (
          <Game 
            name={game.name} 
            released={game.released} 
            id={game.id}
            key={game.id}
            image={game.background_image}/>
        ))}
      </Games>

      <h2>New Games</h2>
      <Games>
        {newGames.map( game => (
          <Game 
            name={game.name} 
            released={game.released} 
            id={game.id}
            key={game.id}
            image={game.background_image}/>
        ))}
      </Games>
    </GameList>
  );
}

const GameList = styled(motion.div)`
  padding: 0rem 5rem;
  h2{
    padding: 5rem 0rem;
  }
`;

const Games = styled(motion.div)`
  min-height: 80vh;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
  grid-column-gap: 3rem;
  grid-row-gap: 5rem;
`;

export default Home;
