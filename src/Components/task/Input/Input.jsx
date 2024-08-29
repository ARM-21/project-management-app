import React, { forwardRef } from 'react'

const Input = forwardRef(function Input(props, ref) {

    return (

        <span className="input-wrapper">
            <label htmlFor="">{props.label}</label>
            {props.istextarea == "true" ? <textarea ref={ref} {...props} ></textarea> : <input ref={ref} {...props} />}
        </span>

    )
}
)
export default Input;
