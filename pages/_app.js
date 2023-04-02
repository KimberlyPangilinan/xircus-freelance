import { XircusChakraProvider } from "@xircus-web3/components"
import './../styles/globals.css'
import './../styles/home-section.css'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

const client = new ApolloClient({

  uri: 'http://localhost:3000/api/graphql',

  cache: new InMemoryCache(),

});


function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
    <XircusChakraProvider autoConnect={true}>
      <Component {...pageProps} />
    </XircusChakraProvider>
    </ApolloProvider>
  )
}

export default MyApp
