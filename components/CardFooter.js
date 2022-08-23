import React from 'react'
import {AiFillCamera} from 'react-icons/ai'
import { FaSearch } from 'react-icons/fa'
import { GiDiamonds } from 'react-icons/gi'
import { TiMessages } from 'react-icons/ti'

const style = {
  wrapper: `w-full h-16 flex items-center justify-around py-5 px-4 bg-white`,
  logo: `text-3xl text-teal-900 cursor-pointer`,
}

const CardFooter = () => {
  return (
    <div className={style.wrapper}>
      <AiFillCamera className={style.logo} />
      <FaSearch className={style.logo} />
      <GiDiamonds className={style.logo} />
      <TiMessages className={style.logo} />
    </div>
  )
}

export default CardFooter