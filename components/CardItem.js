import React, {useContext} from 'react'
import {PhotoContext} from '../context/PhotoContext'
import { FaUndoAlt } from 'react-icons/fa'
import { AiOutlineClose } from 'react-icons/ai'
import { AiFillStar } from 'react-icons/ai'
import { BsFillLightningChargeFill } from 'react-icons/bs'
import TinderCard from 'react-tinder-card'

const style = {
  CardWrapper: 'w-full h-full absolute',
  wrapper: `w-full h-full overflow-hidden bg-no-repeat bg-cover bg-center relative px-8 py-4`,
  cardMain: `flex justify-between h-3/4 items-end mb-3`,
  name: `flex text-gray-900 text-3xl font-extrabold items-center -mb-4`,
  Age: `ml-4 font-semibold text-xl`,
  walletAddress: `font-bolder text-xl text-gray-800 mb-2`,
  reactions: `flex justify-between w-full px-2 gap-5`,
  backColors: `border-black text-gray-600`,
  buttonContainer: `h-16 w-16 rounded-full flex items-center justify-center cursor-pointer border-2`,
  buttonSymbol: `text-3xl`,
  xColors: `border-teal-500 text-red-500`,
  starColors: `border-blue-400 text-blue-400`,
  lightningColors: `border-purple-500 text-purple-500`,

}

const CardItem = ({card}) => {
  const { handleRightSwipe, currentAccount } = useContext(PhotoContext)
  const onSwipe = (dir) => {
    if (dir === 'right'){
      handleRightSwipe(card, currentAccount)
    }
  }

  return (
    <TinderCard
    className={style.CardWrapper}
    preventSwipe={['up', 'down']}
    onSwipe={onSwipe}
    >
      <div className={style.wrapper}
        style= {{backgroundImage: `url('${card.imageUrl}')`}}
      >
        <div className={style.cardMain}>
          <div className={style.name}>
          {card.name}
            <span className={style.Age}>{card.age}</span>
          </div>
          </div>
          <div className={style.walletAddress}>
           {console.log(typeof card.walletAddress)}
          {/* {card.walletAddress.slice(0, 6)}...{card.walletAddress.slice(39)} */}
          </div>
  
          <div className={style.reactions}>
          <div className={`${style.backColors} ${style.buttonContainer}`}>
            <FaUndoAlt
              className={`${style.backColors} ${style.buttonSymbol}`}
              onClick={() => goBack()}
            />
            </div>
          <div className={`${style.xColors} ${style.buttonContainer}`}>
            <AiOutlineClose
              className={`${style.xColors} ${style.buttonSymbol}`}
            />
          </div>
        
          <div className={`${style.lightningColors} ${style.buttonContainer}`}>
            <BsFillLightningChargeFill
              className={`${style.lightningColors} ${style.buttonSymbol}`}
            />
         

          </div>
        </div>
      </div>
    </TinderCard>
    
  )
}

export default CardItem