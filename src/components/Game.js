import React from 'react';
//Lets import everything framer related
import {motion} from 'framer-motion';
import styled from 'styled-components';

const Game = ({name, released, image}) => {
    return(
        <StyledGame>
            <h3>{name}</h3>
            <p>{released}</p>
            <img src={image} alt={name} />
        </StyledGame>
    );
}

const StyledGame = styled(motion.div)`
    min-height: 30vh;
    box-shadow: 0px 5px 30px rgba(0,0,0,0.1);
    text-align: center;
    border-radius: 5px;
    img{
        width: 100%;
        height: 40vh;
        object-fit: cover;
    }
`;

export default Game;