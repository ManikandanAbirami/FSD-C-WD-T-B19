import { useState, useEffect } from 'react'

function Clock() {
    const [time, setTime] = useState(new Date().toLocaleTimeString());

    useEffect(() => {
        console.log("Calling - clock component!!!!");
        const timer = setInterval(() => {
            setTime(new Date().toLocaleTimeString());
        }, 1000);

        // cleanup
        return () => {
            console.log("Cleaning up - clock component!!!!");
            clearInterval(timer)
        };
    }, [])

    return (
        <h1>{time}</h1>
    )
}

export default Clock