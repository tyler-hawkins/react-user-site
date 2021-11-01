import React from 'react'
import Button from './Button'

const Buttons = (props) => {
    return (
        <div className="buttons-container">
            <Button text="Generate User" onClick={props.functions.generateUser} />
            <Button text="Clear Users" onClick={props.functions.clearUsers} />
        </div>
    )
}

export default Buttons
