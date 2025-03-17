import React from 'react'

function Kid({ sendMessageToMom }) {
    const handleClick = () => {
        sendMessageToMom("I want chocolate icecream!!!");
    };

    return (
        <div>
            <h3>Kid</h3>
            <button onClick={handleClick}>Ask Mom for Ice Cream</button>
        </div>
    )
}

export default Kid