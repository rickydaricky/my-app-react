import React from 'react'
import { useState } from 'react'
import baguette from './images/baguette.jpg'
import toast from './images/toast.png'
import cheese from './images/cheese.jpg'
import waffle from './images/waffle.jpg'
import './App.css'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={baguette} className="Baguette-logo" alt="logo" />
      </header>
      <Cart />
    </div>
  )
}

function Cart() {
  const [toast_count, toast_setcount] = useState(0)
  const [cheese_count, cheese_setcount] = useState(0)
  const [waffle_count, waffle_setcount] = useState(0)

  const toast_price = 5
  const cheese_price = 10
  const waffle_price = 100

  return (
    <>
      <h1>Total Cost: ${toast_count * toast_price + cheese_count * cheese_price + waffle_count * waffle_price}</h1>
      <h2>Your shopping cart: {toast_count} pieces of Toast, {cheese_count} pieces of Cheese, and {waffle_count} pieces of Waffles</h2>

      
      <div className="flex-parent">
        <Food
          className="inline"
          img={toast}
          count={toast_count}
          setCount={toast_setcount}
        />
        <Food
          className="inline"
          img={cheese}
          count={cheese_count}
          setCount={cheese_setcount}
        />
        <Food
          className="inline"
          img={waffle}
          count={waffle_count}
          setCount={waffle_setcount}
        />
      </div>
    </>
  )
}

function Food(prop) {
  const { img, count, setCount } = prop

  return (
    <div>
      <img src={img} className="Item-small" />
      <p className="smull">You have {count} of this item</p>
      <button onClick={() => setCount(count + 1)}>Add 1 to Cart</button>

      {count > 0 && (
        <button onClick={() => setCount(count - 1)}>Remove 1 from Cart</button>
      )}
    </div>
  )
}

export default App

// non_zero ? (
//   <button onClick={() => setCount(count - 1)}>Remove 1 from Cart</button>
// ) :
// {/* <button onClick={() => setCount(count - 1)}>Remove 1 from Cart</button> */}
