import { useState } from "react"
import "./tictoc.css"

export default function TicTocToe () {
    const [winner, setWinner] = useState("")
    const [values, setValues] = useState([])
    const [isXNext, setIsXNext] = useState(true)


    // 0 1 2
    // 3 4 5
    // 6 7 8

    const probability = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [2, 4, 6],
        [0, 4, 8]
    ]

    const calculateWinner = (values) => {
        probability.forEach((condition) => {
          let [a,b,c] = condition
          console.log("abc", a,b,c, values, values?.[a] === values[b] && values[a] === values[c])
          if(values[a] && values?.[a] === values[b] && values[a] === values[c]){
              setWinner(values[a])
              return true
          }else{
            return false
          }
          
        })
    }

    const handleClick = (index) => {
        if(!winner){
            if(isXNext){
                values[index] = "X"
                setIsXNext(false)
            }else{
                values[index] = "O"
                setIsXNext(true)
            }
            calculateWinner(values)
            setValues(values)
        }
    
    }

  
    let status;
    console.log('winner', winner)
    if (winner) {
      status = "Winner: " + winner;
    } else {
      status = "Next player: " + (isXNext ? "X" : "O");
    }

    return (
        <><h2>Tic Toc Toe game: Status {status}</h2>
        <h2>Tic Toc Toe game Winner: {winner}</h2>

        <div>
            <button className={"btnStyle"} onClick={() => handleClick(0)}>{values[0]}</button>
            <button className={"btnStyle"} onClick={() => handleClick(1)}>{values[1]}</button>
            <button className={"btnStyle"} onClick={() => handleClick(2)}>{values[2]}</button>
        </div>
        <div>
            <button className={"btnStyle"} onClick={() => handleClick(3)}>{values[3]}</button>
            <button className={"btnStyle"} onClick={() => handleClick(4)}>{values[4]}</button>
            <button className={"btnStyle"} onClick={() => handleClick(5)}>{values[5]}</button>
        </div>
        <div>
            <button className={"btnStyle"} onClick={() => handleClick(6)}>{values[6]}</button>
            <button className={"btnStyle"} onClick={() => handleClick(7)}>{values[7]}</button>
            <button className={"btnStyle"} onClick={() => handleClick(8)}>{values[8]}</button>
        </div>
        </>
    )
}