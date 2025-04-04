import React, {useState, useEffect} from "react"

function Clock(){

    const [time, setTime] = useState(new Date())

    useEffect(() =>{
        const intervalId = setInterval(() =>{
            setTime(new Date())
        }, 1000)

        return () => {
            clearInterval(intervalId)
        }
    }, [])

    const handleTime = () => {
        let hours = time.getHours()
        const mins = time.getMinutes()
        const secs = time.getSeconds()
        const meridiem = hours >= 12 ? "PM" : "AM"

        hours = hours % 12 || 12

        return `${addPad(hours)}:${addPad(mins)}:${addPad(secs)} ${addPad(meridiem)}`
    }

    function addPad(num){
        return (num < 10 ? "0" : "") + num
    }
 
    return(
        <>
        <div className="main-con">
            <div className="clock">
                <span className="time">{handleTime()}</span>
            </div>
        </div>
        </>
    )
}

export default Clock
