import React from 'react'
import '../styles/loader.css'

export default function Loader() {
  return (
    <div className='load'>
         <div className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
    </div>
  )
}
