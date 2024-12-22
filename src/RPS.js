import React, {useState } from 'react'
import './RPS.css'
import rock from './rock.png'
import scissors from './scissors.png'
import paper from './paper.png'
function RPS(){
  let [userScore, setUserScore] = useState(0); 
  let [compScore, setCompScore] = useState(0); 
  let [bgcolor,setbackground]=useState("blue");
  const [message, setMessage] = useState('Select your choice'); 
  const compGen = (userChoice) => { 
    let options = ["paper", "rock", "scissors"]; 
    let compChoice = options[Math.floor(Math.random() * 3)]; 
    console.log(userChoice);
    console.log(compChoice);
    if (userChoice === compChoice) { setMessage('Match Draw'); 
      setbackground("blue");
    } 
    else if ((userChoice === "rock" && compChoice === "paper") || (userChoice === "paper" && compChoice === "scissors") || (userChoice === "scissors" && compChoice === "rock")) { 
      setMessage(`You lost, ${userChoice} beaten by ${compChoice}`); 
      setCompScore(++compScore); 
      setbackground("red");
    } else { 
      setMessage(`You won, ${userChoice} beats ${compChoice}`); 
      setUserScore(++userScore); 
      setbackground("green");
    }};
  return (
    <div className='bodyRPS'> 
      <header className="heading">Rock-Paper-Scissors</header> 
      <div className="choices"> 
        <div className="choice" id="paper" onClick={()=>{compGen("paper")}}> <img src={paper} alt="paper" /> </div> 
        <div className="choice" id="rock"  onClick={()=>{compGen("rock")}}> <img src={rock} alt="rock" /> </div> 
        <div className="choice" id="scissors"  onClick={()=>{compGen("scissors")}}> <img src={scissors} alt="scissors" /> 
        </div>
      </div> 
      <div className="scorediv"> 
        <div className="userscore">{userScore}</div> 
        <div className="compscore">{compScore}</div> 
      </div> 
      <div className="names"> 
        <div className="user">You</div> 
        <div className="comp">Comp</div> 
      </div> 
      <div className="msg"> 
        <p className="messege" style={{backgroundColor:`${bgcolor}`}}>{message}</p> 
        </div>
    </div>
  )
}

export default RPS
