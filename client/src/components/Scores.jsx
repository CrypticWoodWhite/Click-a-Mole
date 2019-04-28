import React from "react";

const Scores = ({currentScore, topScore}) => {
    return (
        <ul>
            <li>
                Current Score: {currentScore}
            </li>
            <li>
                Top Score: {topScore}
            </li>
        </ul>
    );
}

export default Scores;