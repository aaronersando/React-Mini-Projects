import React, {useState, useRef, useEffect} from "react"

function Stopwatch(){

    const [isRunning, setIsRunning]= useState(false)
    const [elapsedTime, setElapsedTime] = useState(0)
    const intervalIdRef = useRef(null)
    const startTimeRef = useRef(0)

    useEffect(() => {

        if(isRunning){
            intervalIdRef.current = setInterval(() => {
                setElapsedTime(Date.now() - startTimeRef.current)
            }, 10);
        }

        return () => {
            clearInterval(intervalIdRef.current)
        }

    }, [isRunning])

    function handleStart(){
        setIsRunning(true)
        startTimeRef.current = Date.now() - elapsedTime
    }

    function handleStop(){
        setIsRunning(false)
    }
    
    function handleReset(){
        setElapsedTime(0)
        setIsRunning(false)
    }

    function timeFormat(){

        let hours = Math.floor(elapsedTime / (1000*60*60))
        let mins = Math.floor(elapsedTime / (1000*60) % 60)
        let secs = Math.floor(elapsedTime / (1000) % 60)
        let millisecs = Math.floor(elapsedTime % (1000) / 10)
        
        hours = String(hours).padStart(2, "0")
        mins = String(mins).padStart(2, "0")
        secs = String(secs).padStart(2, "0")
        millisecs = String(millisecs).padStart(2, "0")

        return `${hours}:${mins}:${secs}:${millisecs}`
    }

    return(
        <>
        <div className="main-con">
            <h2 className="timer">{timeFormat()}</h2>
            <div className="btn-grp">
                <button className="start btn" onClick={handleStart}>Start</button>
                <button className="Stop btn" onClick={handleStop}>Stop</button>
                <button className="Reset btn" onClick={handleReset}>Reset</button>
            </div>
        </div>
        </>
    )
}

export default Stopwatch