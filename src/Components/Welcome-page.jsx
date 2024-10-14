import React from 'react'
import './Css/Home-E-comm.css'
import { Link } from 'react-router-dom'



export default function Welcomepage() {
  return (
    <>
       <div className="welcome">
      <h1>Welcome to Worlds Biggest Ecommerce Website</h1>
      <h2>Look More !</h2>
      <h2 id='gmore'>Grab More !</h2>
      <h3>Buy More !</h3>
      <Link to='/Home'>
      <i id='arrow' class="fa-solid fa-circle-arrow-right fa-bounce fa-2xl"></i>
      </Link>
      </div>
    </>
  )
}
