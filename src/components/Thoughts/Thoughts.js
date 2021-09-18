import React, { useState, useEffect } from 'react';
import "./Thoughts.css";

function Thoughts () {

    const [thoughts, setThoughts] = useState([]);

    useEffect(() => {
        // Pull thoughts from DB
        setThoughts([
            {
                thought: 'random thought'
            },
            {
                thought: 'random thought 2'
            }
        ]);
    }, []);

    // onWithdraw(() => {
    //     console.log("withdraw");
    // });

    return (
        <div className="thoughts">
            <h1>Thoughts</h1>
            {console.log(thoughts)}

            {/* <button onClick={this.onWithdraw}>Withdraw</button> */}
            
            <div className="thought">
                {thoughts.map((t, i) => {
                    return <p key={i}>{t.thought}</p>
                })}
            </div>
        </div>
    );
};

export default Thoughts;