import React, { useState } from 'react'
import "../stylesMainScreen.css"
import { Words } from '../assets/Words';

const MainScreen = () => {
    const[data, setData] = useState([]);
    const [formattedData, setFormattedData] = useState([]);

    //get 50 random words into an array
    useEffect(()=>{
        const fiftyWords = [];
        for(let i=0;i<50;i++){
            fiftyWords.push(Words[Math.floor(Math.random()*Words.length)])
            setData(fiftyWords);
            
        }

    },[])
  return (
    <div>MainScreen</div>
  )
}

export default MainScreen