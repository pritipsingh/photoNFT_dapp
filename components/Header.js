import React from 'react'
import Image from 'next/image'
import cam from  '../assets/cam.svg'
import { useContext } from 'react'
import { PhotoContext } from '../context/PhotoContext'

const style={
  wrapper: `h-24 py-11 text-white flex items-center sm:w-100% md:w-100% lg:w-100% xl:w-100%`,
  main: `flex items-center gap-4`,
  logo: `text-5xl font-semibold ml-5 mr-8 cursor-pointer hover:scale-110 duration-300 hover:text-teal-500`,
  leftNav: `flex gap-8 text-lg`,
  navItem: `cursor-pointer hover:text-teal-400 duration-300 hover:scale-110 `,
  rightNav: `flex gap-3 items-center `,
  authButton: `flex justify-end bg-white font-bold text-yellow-900 px-6 py-3 items-center ml-4 rounded-lg hover:bg-teal-500 duration-300 hover:text-white`,
  currentAccount: `px-2 py-1 ml-auto border border-gray-500 rounded-full flex items-center`,
  accountAddress:`ml-auto`
}



const Header = () => {
  const { connectWallet, disconnectWallet, currentAccount } = useContext(PhotoContext)

  return (
    <div className={`${style.wrapper} ${
      currentAccount ? 'bg-gray-900' : 'bg-transparent fixed'
    }`}>
        <div className={style.main}>
          <Image src={cam} alt='cam' height={45} width={45} className={style.logo}/>
          <h1 className={style.logo}>PhotoApp</h1>
          <div className={style.leftNav}>
            <div className={style.navItem}>Learn</div>
            <div className={style.navItem}>Safety</div>
            <div className={style.navItem}>Supports</div>
            <div className={style.navItem}>Downloads</div>
          </div>
          <div className={style.rightNav}>


            {/* When the user is logged in the button is swapped for the currentAccount */}
          

            {currentAccount ? (
              <>
                <div className={style.currentAccount}>
                  <Image 
                    src= {'https://moralis.io/wp-content/uploads/2021/05/moralisWhiteLogo.svg'}
                    alt='moralis'
                    height={20}
                    width={20}
                  />
                  <span className={style.accountAddress}>
                    {currentAccount.slice(0,6)}...{currentAccount.slice(39)}
                  </span>
                </div>
                <button 
                className={style.authButton}
                onClick={()=> disconnectWallet()} >Logout</button>

              </>
            ) : (
              <button className={style.authButton}
              onClick={() => connectWallet()}>
                Login
              </button>
            )}
            </div>
        </div>
    </div>
  )
}

export default Header