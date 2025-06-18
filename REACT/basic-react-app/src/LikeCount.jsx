import { useState } from 'react';
export default function LikeButton() {
    let [isLiked, setIsLiked] = useState(false);  //initial state is false
    // useState returns an array with two elements: the current state and a function to update it
    let [clicks, setClicks] = useState(0); // initial clicks is 0

    let toggleLike = () => {
        setIsLiked(!isLiked); //setIsLiked is a function that updates the state
        if (!isLiked) {
            setClicks(clicks+ 1);
        } else {
            setClicks(clicks - 1);
        }
    }
let likestyle = {color: "red"};

    return (
        <div>
            <p>Clicks= {clicks}</p>
            <p onClick={toggleLike}>
                {isLiked ? (
                    <i className='fa-solid fa-heart' style={likestyle}></i> 
                ): (
                    <i className="fa-regular fa-heart"></i>
                )}
                </p>
        </div>
    );
}