import React, { useEffect, useState } from 'react'
import "../stylesMainScreen.css"
import { Words } from '../assets/Words';

const MainScreen = () => {
    const[data, setData] = useState([]);
    //2D array 
    const [segmentedData , setSegmentedData] = useState([])

    //get 50 random words into an array
    useEffect(()=>{
        const fiftyWords = [];
        for(let i=0;i<50;i++){
            fiftyWords.push(Words[Math.floor(Math.random()*Words.length)])
            setData(fiftyWords);
            
        }

    },[])
    //adding 5 rows with 10 words each
    useEffect(()=>{
        if(data.length == 0) return;
        const bufferSegmentedData = [];
        var counter = 0;

        while(counter+10 <= data.length){
            const rowData = []
            for(let i=counter;i<counter+10;i++){
                //add 10 words into rowData
                rowData.push(data[i]);
            }
                bufferSegmentedData.push(rowData);
                counter +=10;
            
        }
        setSegmentedData(bufferSegmentedData);


    },[data]);
    
  return (
    <div>MainScreen</div>
  )
}

export default MainScreen