import React from 'react'
import '../App.css'


const Footer = () => {
  return (
    <footer className="footer">
        <p style={{marginLeft:80}}>(0) Items in Cart</p>
        <p>Total $0</p>
        <button style={{height: 50, width:150, backgroundColor:'#857FF0', borderRadius:10, color:'#fff',  borderColor:'#857FF0', marginRight: 80}}>View Cart</button>
 
    </footer>
  )
}

export default Footer