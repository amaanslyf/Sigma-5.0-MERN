import { useState } from 'react';
export default function LudoBoard() {
    let [moves, setMoves] = useState({
        blue: 0,
        yellow: 0,
        red: 0,
        green: 0
    });

    let updateBlue= () => {
        setMoves((prevMoves) => {
            return {
                ...prevMoves,           // to change the objects key:value we use spread operator as the spread operator will create a copy of the object
                blue: prevMoves.blue + 1};
        });
    };

    let updateYellow = () => {
        setMoves((prevMoves) => {
            return {
                ...prevMoves,
                yellow: prevMoves.yellow + 1};
        });
    };

    let updateRed = () => {
        setMoves((prevMoves) => {
            return {
                ...prevMoves,
                red: prevMoves.red + 1};
        });
    };

    let updateGreen = () => {
        setMoves((prevMoves) => {
            return {
                ...prevMoves,
                green: prevMoves.green + 1};
        });
    };


    return (
        <div>
            <p>Game Begins</p>
            <div className="board">
                <p>BLUE moves = {moves.blue} </p>
                <button style={{backgroundColor: "blue"}} onClick={updateBlue}>+1</button>
                <p>YELLOW moves = {moves.yellow} </p>
                <button style={{backgroundColor: "yellow"}} onClick={updateYellow}>+1</button>
                <p>RED moves = {moves.red} </p>
                <button style={{backgroundColor: "red"}} onClick={updateRed}>+1</button>
                <p>GREEN moves = {moves.green} </p>
                <button style={{backgroundColor: "green"}} onClick={updateGreen}>+1</button>
            </div>
        </div>
    );
}