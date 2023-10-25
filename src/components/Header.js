import React from 'react'
import '../App.css'

const Header = () => {
  return (
    <div className='Nav'>
       <div>
       <img src={require('../components/assets/logo.png')} alt="Logo" />
       </div>
       <div style={{display:'flex', flexDirection:'row'}}>
         <div style={{paddingTop: 20, textAlign:'right', marginRight:10}}>
          <p style={{color:'white'}}>9.55AM</p>
          <p style={{color:'white'}}>April 17th, 2023</p>
         </div>
         <img src={require('../components/assets/user.jpg')} alt="Logo" height={80} width={80} style={{borderRadius:60}} />
       </div>
    </div>
  )
}

export default Header