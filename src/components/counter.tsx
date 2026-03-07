// time counter 
// start button 
// pause 
// reset 
// set time, 5,15,30 minutes
// yellow background 

import { useEffect, useState } from "react"


const Counter = () => {

    const [timer, setTimer] = useState(50)
    const start = () => {
        // no logic yet, only decrementing counter 
        setTimer(timer - 1)
    }
    useEffect(() => {
        const timer = setInterval(() => {
            setTimer(prev => prev - 1)
        }, 1000)

        return () => clearInterval(timer)
    }, [])

    return (
        <>
            <h1> Time left: {timer} </h1>
            <button onClick={start}> Start </button>
        </>
    )
}

export default Counter