import React from 'react'
import Classes from './Modal.css'
const Modal = (props) => {
    return (
        <div className={Classes.Modal}>
            {props.children}
        </div>
    )
}

export default Modal;