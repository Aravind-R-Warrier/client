import React from 'react'
import bg from './assets/bg.png'
function Menu() {
  return (
    <div className='container-fluid d-flex align-items-center justify-content-center' 
     style={{
       background: `url(${bg})`, 
       width: '100%', 
       height: '79px'
     }}
>
  <button 
    className="styled-button"
    style={{
      fontSize: '16px', 
      border: '0.5px solid #0796EF', 
      width: '114.25px', 
      height: '49.98px', 
      fontWeight: '600', 
      lineHeight: '23.73px',
      fontFamily:'oswald',
      margin:'5px',
      textShadow: '0.97px 1.3px #800020',
      color:'#FFFFFF',
      background:'#000000',
      letterSpacing:'0.03em'
    }}
  >
    FOOD
  </button>
  <button 
    className="styled-button"
    style={{
      fontSize: '16px', 
      border: '0.5px solid #0796EF', 
      width: '114.25px', 
      height: '49.98px', 
      fontWeight: '600', 
      lineHeight: '23.73px',
      fontFamily:'oswald',
        margin:'5px',
        textShadow: '0.97px 1.3px #800020',
        color:'#FFFFFF',
        background:'#0796EF',
        letterSpacing:'0.03em'
    }}
  >
    DRINKS
  </button>
  <button 
    className="styled-button"
    style={{
      fontSize: '16px', 
      border: '0.5px solid #0796EF', 
      width: '114.25px', 
      height: '49.98px', 
      fontWeight: '600', 
      lineHeight: '23.73px',
      fontFamily:'oswald',
      margin:'5px',
      textShadow: '0.97px 1.3px #800020',
      color:'#FFFFFF',
      background:'#000000',
      letterSpacing:'0.03em'
    }}
  >
    BRUNCH
  </button>

  {/* Add */}
  <button 
    className="styled-button"
    style={{
      fontSize: '16px', 
      border: '0.5px solid #0796EF', 
      width: '114.25px', 
      height: '49.98px', 
      fontWeight: '600', 
      lineHeight: '23.73px',
      fontFamily:'oswald',
      margin:'5px',
      textShadow: '0.97px 1.3px #800020',
      color:'#FFFFFF',
      background:'#000000',
      letterSpacing:'0.03em'
    }}
  >
    Add
  </button>
</div>

  )
}

export default Menu
