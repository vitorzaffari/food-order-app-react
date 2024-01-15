import './Header.css'
import CartSvg from '../../assets/svgs/CartSvg'
import ICON from '../../assets/ic.png'
import { useContext } from 'react'
import CartContext from '../../contexts/CartContext'
import UIStatusContext from '../../contexts/UIStatusContext'

const Header = () => {

    const qtyItemsInCart = useContext(CartContext).items.reduce((total, item) => total + item.quantity, 0)
    const openModal = useContext(UIStatusContext).openModal;

    return (
        <header className='header-component'>
            <div className="header-bg"></div>
            <div className="width-limit-div">
                <div className="icon">
                    <img className='app-icon-img' src={ICON} alt="App Food Icon" name="App Food Icon" />
                    <span>Super Food Ordering App</span></div>
                <div className="cart-icon"><button className='cart-icon-btn' onClick={openModal}>
                    <CartSvg /><span className='cart-btn-span'>{qtyItemsInCart}</span></button></div>
            </div>
        </header>
    )
}

export default Header