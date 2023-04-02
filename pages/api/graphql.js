
import { startServerAndCreateNextHandler } from '@as-integrations/next';
import {ApolloServer} from '@apollo/server'; 


import {resolvers} from './resolvers'; 





const typeDefs = `#graphql
    type User{ 
        id: ID!
        name: String!
        screenName: String! 
        rating: Int! 
        posts: [Posts]
        transactions: [Transactions]
        skills: String!
    }

    type Posts { 
        id: ID!
        text: String! 
        userid: String! 
        user: User! 
        likes: Int! 
        isJobOffer: Boolean!
        transactionId: String
        transaction: Transactions
    }
    type Transactions{
      id: ID!
      useridone: String!
      useridtwo: String
      userone: User! 
      usertwo: User
      price: Int!
      blockChain: Int!
      isAccepted: Boolean! 
      ratingone: Int
      ratingtwo: Int 
      userOne: User! 
      userTwo: User 
      posts: Posts! 
    }
    type SuccessMessage{
      text: String
    }

    type Query {
        posts: [Posts]
        user(id: String!) : User 
        transaction: [Transactions] 
    }
    
    type Mutation{
      addUsers(name: String!,screenName: String!,rating: Int!,skills: String!): SuccessMessage
      addPosts(text: String!,userid: String!): SuccessMessage 
      addLike(id: ID!): SuccessMessage 
      addTransaction(useridone: String!,price: Int!,blockChain: Int!, text: String!): SuccessMessage
      signTransaction(id:ID!, useridtwo: String!): SuccessMessage
      rateTransaction(id:ID!, ratingone: Int!, ratingtwo: Int!): SuccessMessage
    }



`;





const server = new ApolloServer({
    typeDefs,
    resolvers,
    introspection: true
  });
  export default startServerAndCreateNextHandler(server);