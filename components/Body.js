import React from 'react'
import { useContext } from 'react'
import { PhotoContext } from '../context/PhotoContext'
import Card from './Card'
import Image from 'next/image'
import photo from '../assets/photo.jpg'

const style = { 
  wrapper: `h-screen w-screen`,
}

const Body = () => {

  return (
    <div className={style.wrapper}>
        <Image src={photo} alt='photo' />
  
    
    </div>
  )
}

export default Body