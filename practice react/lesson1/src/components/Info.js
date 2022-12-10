import React from 'react'
import pic from '../pic.png';
import {MdEmail} from 'react-icons/md';
function Info() {
  return (
    <div>
       <img src={pic} alt='pic' className='info--image'/>
       <h2 className='info--name'>Venivici Carna</h2>
       <h3 className='info--title'>Frontend Developer</h3>
       <p className='info--link'>venzcarna.website</p>
       <button className='info--btn'><MdEmail/> Email</button>
       <button className='info--btn1'>LinkedIn</button>
    </div>
  )
}

export default Info