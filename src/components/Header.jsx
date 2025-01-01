import React, { useState, useEffect } from 'react'
import "../styles/Header.css"

const Header = () => {

    const [wpm, setWpm] = useState(0);

    //store highscore using local storage
    useEffect(() => {
        if (localStorage.getItem("HIGHSCORE") === undefined) {
            //if there is no high score set it as 0. It is basically similar to a HashMap
            localStorage.setItem('HIGHSCORE', "0");
        }
        //show highscore through wpm
        setWpm(Number(localStorage.getItem("HIGHSCORE")))

        //runs on first render
    }, [])

    return (
        <React.Fragment>

            <div className="stat-box">
                <div>
                    Time Remaining: {} secs
                </div>

                <div>
                    Best Speed: {} WPM
                </div>
            </div>



        </React.Fragment>
    )
}

export default Header