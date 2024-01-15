import { createPortal } from 'react-dom'
import './Modal.css'
import { useEffect, useRef } from 'react'

const Modal = ({ children, open, handleKewDown, handleClick }) => {
    
    const dialogRef = useRef()

    useEffect(() => {
        if(open){
            dialogRef.current.showModal();
        }
        return () => {
            dialogRef.current.close();
        }
    }, [open])
    


    
    return createPortal(
        <dialog id='modal' onKeyDown={handleKewDown} onClick={handleClick} className='modal-component' ref={dialogRef}>{children}</dialog>
        , document.getElementById("modal"))
}

export default Modal