import './FoodCard.css'
import { currencyFormatter } from '../../utils/formatter'

const FoodCard = ({ id, name, description,price, images, category }) => {
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

        <button className="add-to-cart-btn">Add to cart</button>
      </div>
    </div>
  )
}

export default FoodCard