import Header from "../components/Header"
import Card from "../components/Card"
import Body from "../components/Body"
import { useContext } from 'react'
import { PhotoContext } from "../context/PhotoContext"

const style = {
  wrapper: `h-screen w-screen flex flex-col bg-[#222229]`,
  cardsContainer: `mt-[8rem] flex flex-col items-center justify-center`,
}

export default function Home() {
  const {currentAccount} = useContext(PhotoContext)
  return (
    <div className={style.wrapper}>
      <Header />
      <div className={style.cardsContainer}>

    
   <Card />
  


        </div>
    </div>
  )
}
