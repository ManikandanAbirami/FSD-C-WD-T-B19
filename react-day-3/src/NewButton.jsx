import React from 'react'

function NewButton(props) {
    let x = 10;
    let y = 20;
    let z = x + y;
    return (
        <div>
            {
            }
            <button style={{ background: "Orange", color: "black" }}>{props.name}</button>
            <label htmlFor="input" className="name">Name: </label>
            <input type="text" id="input" value={z} onChange={(e) => { console.log(e.target.value) }} />
        </div>
    )
}

export default NewButton