import React, {useContext} from 'react'
import {AiFillCamera} from 'react-icons/ai'
import CardHeader from './CardHeader'
import CardFooter from './CardFooter'
import CardItem from './CardItem'
import  { PhotoContext } from '../context/PhotoContext'
import photo from '../assets/photo.jpg'
import Image from 'next/image'

const style = {
  wrapper: `h-[42rem] w-[35rem] flex flex-col rounded-lg overflow-hidden`,
  cardMain: `w-full h-full relative flex flex-col justify-center items-center bg-pink-100`,
  noMoreWrapper: `flex flex-col justify-center items-center absolute`,
  logo: `text-5xl text-teal-900 mb-4`,
  noMoreText: `text-xl text-gray-800`,
  swipesContainer: `w-full h-full overflow-hidden`,

}

const Card = () => {
  const { cardsData, currentAccount } = useContext(PhotoContext)

  return (
    !currentAccount ? (<Image src={photo} alt='photo' />) :
    (<div className={style.wrapper}>
      <CardHeader />
      <div className={style.cardMain}>
        <div className={style.noMoreWrapper}>
          <AiFillCamera className={style.tinderLogo} />
          <div className={style.noMoreText}>
            No More Profiles in your Location...
          </div>
        </div>
        <div className={style.swipesContainer}>
          {cardsData.map((card, index) => (
            <CardItem card={card} key={index} />
          ))}
        </div>
      </div>
      <CardFooter />
    </div>)
  )
}

export default Card