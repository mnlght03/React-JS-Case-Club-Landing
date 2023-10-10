import React from 'react'

import '../../assets/styles/mobile-nav-button.css';

export default function MobileNavButton({...props}) {
  return (
    <button {...props} className='text-white ml-auto mr-2 mobile-nav-button'>
      <span></span>
    </button>
  )
}
