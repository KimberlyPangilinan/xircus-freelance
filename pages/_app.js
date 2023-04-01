import { XircusChakraProvider } from "@xircus-web3/components"
import './../styles/globals.css'
import './../styles/home-section.css'

function MyApp({ Component, pageProps }) {
  return (
    <XircusChakraProvider autoConnect={true}>
      <Component {...pageProps} />
    </XircusChakraProvider>
  )
}

export default MyApp
