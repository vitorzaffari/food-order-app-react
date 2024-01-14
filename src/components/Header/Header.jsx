import './Header.css'
import CartSvg from '../../assets/svgs/CartSvg'
import ICON from '../../assets/ic.png'

const Header = () => {
    return (
        <header className='header-component'>
            <div className="header-bg"></div>
            <div className="width-limit-div">
                <div className="icon">
                    <img className='app-icon-img' src={ICON} alt="App Food Icon" name="App Food Icon" />
                    <span>Super Food Ordering App</span></div>
                <div className="cart-icon"><button className='cart-icon-btn'>
                    <CartSvg fill='white'/><span className='cart-btn-span'>0</span></button></div>
            </div>
        </header>
    )
}

export default Header