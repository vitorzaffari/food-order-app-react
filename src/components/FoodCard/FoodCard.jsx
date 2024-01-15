import './FoodCard.css'
import { currencyFormatter } from '../../utils/formatter'
import { useContext } from 'react'
import CartContext from '../../contexts/CartContext'

const FoodCard = ({ id, name, description, price, images, category }) => {

  const addToCart = useContext(CartContext).addItem
  const item = {
    name,
    price,
    image: images[0],
    category,
    id
  }

  return (
    <div className='food-card-component'>
      <img className='food-image' src={images[0]} alt={name} />
      <div className="food-bg">
        <img src={images[0]} alt={name} />
      </div>
      <div className='food-info'>
        <h3 className='food-name'>
          {name}
        </h3>
        <p className='description'>{description}</p>
        <p className='category'>Type: {category}</p>
        <span className='food-price'>{currencyFormatter.format(price)}</span>

        <button className="add-to-cart-btn" onClick={()=>addToCart(item)}>Add to cart</button>
      </div>
    </div>
  )
}

export default FoodCard