import React from 'react'
import pic from '../pic.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
function Info() {
  return (
    <Info>
       <img src={pic} alt='pic' className='info--image'/>
       <h2 className='info--name'>Venivici Carna</h2>
       <h3 className='info--title'>Frontend Developer</h3>
       <p className='info--link'>venzcarna.website</p>
       <button className='info--btn'><FontAwesomeIcon icon="fa-solid fa-envelope" /> Email</button>
    </Info>
  )
}

export default Info