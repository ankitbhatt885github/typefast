import React, { useEffect, useState } from 'react'
import "../styles/MainScreen.css"
import { Words } from '../assets/Words';

const MainScreen = () => {
    const [data, setData] = useState([]);
    //2D array 
    const [segmentedData, setSegmentedData] = useState([])
    const[input,setInput] = useState("")

    //get 50 random words into an array
    useEffect(() => {
        const fiftyWords = [];
        for (let i = 0; i < 50; i++) {
            fiftyWords.push(Words[Math.floor(Math.random() * Words.length)])
            setData(fiftyWords);

        }

    }, [])
    //adding 5 rows with 10 words each
    useEffect(() => {
        if (data.length === 0) return;
        const bufferSegmentedData = [];
        var counter = 0;

        while (counter + 10 <= data.length) {
            const rowData = []
            for (let i = counter; i < counter + 10; i++) {
                //add 10 words into rowData
                rowData.push(data[i]);
            }
            bufferSegmentedData.push(rowData);
            counter += 10;

        }
        setSegmentedData(bufferSegmentedData);


    }, [data]);

    function handleInput( ){

    }

    

    return (
        <React.Fragment>
            <div id="main-screen">
                {/* we get each row  */}
                {segmentedData.map((row, rowIndex) =>
                    <div key={rowIndex} className={rowIndex + " screen-row"} >
                        {row.map((value, valueIndex) => <div id={valueIndex} key={valueIndex} className="display-value">{value}</div>)}
                    </div>)
                }
            </div>
            <div>
                <input type = "text" id="main-input" placeholder="Start Typing Here" autoComplete="off" value = {input} onChange={handleInput} ></input>
            </div>


        </React.Fragment>

    )
}

export default MainScreen