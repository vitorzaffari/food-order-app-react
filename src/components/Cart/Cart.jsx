import { useContext } from 'react'
import Modal from '../Modal/Modal'
import './Cart.css'
import CartContext from '../../contexts/CartContext'
import { currencyFormatter } from '../../utils/formatter'
import UIStatusContext from '../../contexts/UIStatusContext'
const Cart = () => {

    const cartContext = useContext(CartContext)
    const cartItems = cartContext.items
    const addItemToCart = cartContext.addItem
    const removeItemFromCart = cartContext.removeItem
    const totalPrice = cartItems.reduce((acc, item) => (item.price * item.quantity) + acc, 0)


    const uiStatus = useContext(UIStatusContext)
    const isModalOpen = uiStatus.status === 'modal-open'
    const hasItemsInCart = cartItems.length > 0
    const closeModal = uiStatus.closeModal
    const showCheckout = uiStatus.showCheckout

    function handleKewDown(e) {
        if (e.keyCode === 27) {
            closeModal();
        }
    }

    function handleClick(e) {
        if (e.target.id === 'modal') {
            closeModal();
        }
    }



    return (
        <Modal open={isModalOpen} handleKewDown={handleKewDown} handleClick={handleClick}>
            <div className="cart-component">

                <h2 className='cart-title'>Your Order</h2>
                <div className="cart-items">
                    {cartItems.map(item => (
                        <div className="item" key={item.id}>
                            <img className='item-img' src={item.image} alt="" />
                            <div className="item-info">
                                <p className='item-name'>{item.name}</p>
                                <p className='item-quantity'>Quantity: {item.quantity}</p>
                                <p className="individual-price">{currencyFormatter.format(item.price)} x {item.quantity} = {currencyFormatter.format(item.price*item.quantity)}</p>
                            </div>
                            <div className="item-actions">
                                <button onClick={() => addItemToCart(item)}>+</button>
                                <button onClick={() => removeItemFromCart(item.id)}>-</button>
                            </div>

                        </div>
                    ))}
                </div>
                <p className="total-price">Your total price: {currencyFormatter.format(totalPrice)}</p>
                <div className="modal-buttons">
                    <button className='close' onClick={closeModal}>Close</button>
                    <button disabled={!hasItemsInCart} onClick={showCheckout}>Go to checkout</button>
                </div>
            </div>
        </Modal>
    )
}

export default Cart