import React from 'react'
import SideBar from '../SideBar'
import CardMed from '../Card'
import Title from '../Title'

const FirstTab = () => {
  return (
    <div>
         <Title/>
         <div className="FirstTab">
          <SideBar/>
          <div style={{display:'flex', flexWrap:'wrap'}}>
          <CardMed Name={'Tylenol'} path={require('../assets/1.png')}/>
          <CardMed Name={'Advil'} path={require('../assets/2.png')}/>
          <CardMed Name={'Gravol'} path={require('../assets/3.png')}/>
          <CardMed Name={'Polysporin'} path={require('../assets/4.png')}/>
          <CardMed Name={'Advil'} path={require('../assets/2.png')}/>
          <CardMed Name={'Polysporin'} path={require('../assets/4.png')}/>
          <CardMed Name={'Tylenol'} path={require('../assets/1.png')}/>
          <CardMed Name={'Tylenol'} path={require('../assets/1.png')}/>
          <CardMed Name={'Tylenol'} path={require('../assets/1.png')}/>
          </div>
          
         </div>
    </div>
  )
}

export default FirstTab