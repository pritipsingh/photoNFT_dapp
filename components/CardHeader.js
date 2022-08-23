import React from 'react'
import cam from '../assets/cam.svg'
import Image from 'next/image'
import profilePic from '../assets/profile-pic.avif'
import {IoIosNotifications} from 'react-icons/io'

const style = { 
  wrapper: `flex items-center bg-white w-full h-20 justify-evenly`,
  profilePic: `object-cover rounded-full`,
  logo: `h-[0.5rem] w-[0.5rem]`,
  notificationIcon: `text-3xl cursor-pointer text-gray-400 absolute`,
  notification:`h-2 w-2 flex rounded-full relative bg-teal-700 -top-3 -right-5`
}

const CardHeader = () => {
  return (
    <div className={style.wrapper}>
      <Image 
        src={profilePic}
        width={40}
        height={40}
        alt='profile pic'
        className={style.profilePic}     
      />
      <Image 
        src={cam}
        width={200}
        height={150}
        alt="logo"
        className={style.logo}
      />
      <div className='flex items-center'>
        <IoIosNotifications className={style.notificationIcon}/>
        <div className={style.notification}/>
      </div>
    </div>
  )
}

export default CardHeader