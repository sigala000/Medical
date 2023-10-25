import React from 'react'

const CardMed= (props) => {
  return (
   <div className='card'>
       <img src={props.path} alt="Logo"  height={190} width={150} style={{marginBottom:36, paddingLeft:58, paddingTop:50}}/>
       <p style={{paddingRight:110}}>{props.Name}</p>
       <p style={{fontSize: 15, textAlign:'left', paddingLeft:35, marginBottom:20}}>Extra Strength Pain Relief Acetaminophen 500mg EZTabs</p>
       <b style={{paddingLeft:150}}>$13.99 CAD</b>
   </div>
  )
}

export default CardMed