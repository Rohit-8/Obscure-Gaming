import React, { useState } from 'react'
import "./style.css"
import Games from "./gameApi"
import GameCard from "./GameCard";
import Navbar from "./Navbar.js";
import Header from './Header';
import Footer from './Footer';

const uniqueList = [
    ...new Set(
        Games.map((curElem)=>{
            return curElem.category;
        })
),
    "All",
];

const GamePlay = (category) => {
    
    const [gameData, setMenuData] = useState(Games);
    const [gameList, setGameList] = useState(uniqueList);

    const filterItem = (category) =>{

        if(category === "All"){
            setMenuData(Games);
            return;
        }

        const updatedList = Games.filter((curElem)=>{
            return curElem.category === category;
        });
        setMenuData(updatedList);
    };

  return (
    <>
        <Header />
        <Navbar filterItem = {filterItem} gameList = {gameList}/>
        <GameCard gameData = {gameData}/>
       <Footer />
    </>
  );
};

export default GamePlay;