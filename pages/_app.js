import { XircusChakraProvider } from "@xircus-web3/components"
import './globals.css'
import './Home.module.css'

function MyApp({ Component, pageProps }) {
  return (
    <XircusChakraProvider autoConnect={true}>
      <Component {...pageProps} />
    </XircusChakraProvider>
  )
}

export default MyApp
