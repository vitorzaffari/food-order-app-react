import './Menu.css'
import MENU from '../../dummyData.js'
import FoodCard from '../FoodCard/FoodCard.jsx';

const Menu = () => {
    console.log(MENU);
  return (
    <section className='menu-component'>
        {MENU.map(item => (
          <FoodCard key={item.id} {...item}/>
        ))}
    </section>
  )
}

export default Menu