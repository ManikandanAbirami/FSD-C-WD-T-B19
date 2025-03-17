import { useState } from 'react'
import Kid from './Kid';

function Mom() {
    const [messageFromKid, setMessageFromKid] = useState("");

    const handleKidMessage = (message) => {
        setMessageFromKid(message);
    }
    return (
        <div>
            <h2>Mom</h2>
            <p>Message from Kid: {messageFromKid}</p>
            <Kid sendMessageToMom={handleKidMessage} />
        </div>
    )
}

export default Mom