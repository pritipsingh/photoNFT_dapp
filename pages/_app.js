import '../styles/globals.css'
import { PhotoProvider } from '../context/PhotoContext'
import { MoralisProvider } from 'react-moralis'

function MyApp({ Component, pageProps }) {

  return (
    <MoralisProvider
    serverUrl='https://p8dl9e1oiblz.usemoralis.com:2053/server'
    appId='Bwx3YJxvsb9iIK8mVOJb1rUgPNFPk8k4ddkwvUZB'
    >
    <PhotoProvider>
      <Component {...pageProps} />
    </PhotoProvider>

    </MoralisProvider>
    
  )
}

export default MyApp
