import { useState } from 'react';
import { genTicket, sum } from './helper';
import './Lottery.css';
import Ticket from'./Ticket';

export default function Lottery({n=3,winningSum=15}) {
    let [ticket, setTicket] = useState(genTicket(n));
    let isWinning = sum(ticket) === winningSum; // Check if the sum of the ticket numbers is 15


    let buyTicket = () => {
        setTicket(genTicket(n));
    }


    return (
        <div>
            <h1>Lottery Game!</h1>
           <Ticket ticket={ticket}/>
            <h4>Sum: {sum(ticket)}</h4>
            <h4>Winning Sum: {winningSum}</h4>
            <button onClick={buyTicket}>Regenerate Ticket</button>
            <h3>{isWinning ? "You win!" : "You lose!"}</h3>
        </div>
    )
}