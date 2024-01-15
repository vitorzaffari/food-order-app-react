import './Checkout.css'
import Modal from '../Modal/Modal.jsx'
import Input from '../Input/Input.jsx'
import { useContext } from 'react'
import CartContext from '../../contexts/CartContext.jsx'
import { currencyFormatter } from '../../utils/formatter.js'
import UIStatusContext from '../../contexts/UIStatusContext.jsx'

const Checkout = () => {

    const cartTotal = useContext(CartContext).items.reduce((acc, curr) => acc + curr.price * curr.quantity, 0);

    const uiStatus = useContext(UIStatusContext)
    const goBackToCart = uiStatus.hideCheckout
    const isCheckoutOpen = uiStatus.status === 'checkout-open'
    const closeModal = uiStatus.closeModal

    function handleSubmit(e){
        e.preventDefault();
        const formData = new FormData(e.target)
        const customerData = Object.fromEntries(formData.entries());
        console.log(customerData)
        for(let data in customerData){
            if(customerData[data].trim() === ''){
                return
            } 
        }
       
        closeModal();
    }
    function handleKewDown(e) {
        if (e.keyCode === 27) {
            closeModal();
        }
    }
    function handleClick(e) {
        if (e.target.id === 'modal') {
            goBackToCart();
        }
    }


    return (
        <Modal open={isCheckoutOpen} handleKewDown={handleKewDown} handleClick={handleClick}>
            <form className='checkout-form-component' onSubmit={(e) => handleSubmit(e)}>
                <h2 className='checkout-title'>Checkout</h2>
                <p className='checkout-total-price'>Total amount: {currencyFormatter.format(cartTotal)}</p>
                <Input label="Full Name" type="text" placeholder="Full name" id="full-name"  required/>
                <Input label="Email" type="email" placeholder="Email" id="email"  required autoComplete='on'/>
                <Input label="Street" type="text" placeholder="Street name" id="street"  required/>
                <div className="row-control">
                    <Input label="Postal Code" type="text" placeholder="Postal code" id="postal-code"  required/>
                    <Input label="City" type="text" placeholder="City" id="city"  required/>

                </div>
                <div className="form-actions">
                    <button type='button' className='close' onClick={goBackToCart}>Back</button>
                    <button type='submit'>Proceed</button>
                </div>
            </form>
        </Modal>
    )
}

export default Checkout