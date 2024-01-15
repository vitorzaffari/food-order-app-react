import Cart from './components/Cart/Cart'
import Checkout from './components/Checkout/Checkout'
import Header from './components/Header/Header'
import Menu from './components/Menu/Menu'
function App() {

  return (
    <main>
      <div className="bg"></div>
      <Header />
      <h1 className='menu-title'>Our Menu</h1>
      <Menu />
      <Cart />
      <Checkout />
    </main>
  )
}

export default App
