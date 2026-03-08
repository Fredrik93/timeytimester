// time counter 
// start button 
// pause 
// reset 
// set time, 5,15,30 minutes
// yellow background 

import { useEffect, useState } from "react"


const Counter = () => {

    const [timer, setTimer] = useState(5)
    const start = () => {
        // no logic yet, only decrementing counter 
        setTimer(timer - 1)
    }
    useEffect(() => {
        setInterval(() => {
            console.log("timer:", timer)
            if (timer >= 0) {
                setTimer(prev => prev - 1)
            }

        }, 1000)

    }, [])

    return (
        <>
            <h1> Time left: {timer} </h1>
            <button onClick={start}> Start </button>
        </>
    )
}

export default Counter