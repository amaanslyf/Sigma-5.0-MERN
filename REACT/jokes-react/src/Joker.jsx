import {useState, useEffect} from 'react';
export default function Joker() {
    let [joke, setJoke] = useState({});
    const URL="https://official-joke-api.appspot.com/random_joke";

    const getNewJoke = async () => {
        let response = await fetch(URL);
        let jsonResponse = await response.json();
        setJoke({setup:jsonResponse.setup, punchline:jsonResponse.punchline});
    }

    useEffect (() => {
        async function getFirstJoke() {
            let response = await fetch(URL);
            let jsonResponse = await response.json();
            setJoke({setup:jsonResponse.setup, punchline:jsonResponse.punchline});
        }
        getFirstJoke();
    }, []); //empty array means this will only run once
   
    return (
    <div>
        {(joke.setup === undefined) ? (<h3>Loading...</h3>) : ""}
        <h3>Jokes!</h3>
        <h2>{joke.setup}</h2><br/>
        <h2>{joke.punchline}</h2>
        <button onClick={getNewJoke}>New joke</button>
    </div>
    );
}
