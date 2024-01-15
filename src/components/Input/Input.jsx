import './Input.css'

import React from 'react'

const Input = ({ id, label, ...props})  => {
    return (
        <div className="input-wrap">
            <label htmlFor={id}>{label}</label>
            <input id={id} name={id} {...props} />
        </div>
    )
}

export default Input