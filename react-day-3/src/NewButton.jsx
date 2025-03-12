import React from 'react'

function NewButton(props) {
    return (
        <div>
            <button style={{ background: "Orange", color: "black" }}>{props.name}</button>
        </div>
    )
}

export default NewButton