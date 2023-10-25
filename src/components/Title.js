import React from 'react'

const Title = () => {
  return (
    <div className='title'>
        <div><p style={{fontWeight:'bolder', fontSize: 25}}>All Medications</p></div>
        <div>
        <input
        type="search"
        placeholder="Search here"  style={{height: 45, width:250, borderRadius:15, paddingLeft:10, borderColor:'#C2C2C2'}}/>
        </div>
    </div>
  )
}

export default Title