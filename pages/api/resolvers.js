import admin from 'firebase-admin'; 
import firebaseAccountCredentials from '../service-account.json' assert {type: "json"};
import { GraphQLError } from 'graphql';
const serviceAccount = firebaseAccountCredentials 
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAqOF7Hmt6ra3rf4T9AZB6ORGiqSBKhztA",
  authDomain: "hackathon-d5b34.firebaseapp.com",
  databaseURL: "https://hackathon-d5b34-default-rtdb.firebaseio.com",
  projectId: "hackathon-d5b34",
  storageBucket: "hackathon-d5b34.appspot.com",
  messagingSenderId: "764231125362",
  appId: "1:764231125362:web:c2bdb7b471a4a9565635eb"
};


if (!admin.apps.length) {
    admin.initializeApp({ 
      credential: admin.credential.cert(serviceAccount),
      databaseURL: firebaseConfig.databaseURL 
  });
  }
  
 


async function getCollecs(collectionName){
    const collections = await admin
            .firestore()
            .collection(collectionName)
            .get();
    return collections; 
}


async function getCollecsEq(collectionName,field,  id){
    const collections = await admin
            .firestore()
            .collection(collectionName).where(field, "==", id)
            .get();
    return collections; 
}
async function getDoc(doc){
    return (await admin
    .firestore()
    .doc(doc)
    .get()).data(); 

}


async function uploadData(collection, vals){
    var refs = (await admin.firestore().collection(collection).add({id: 0})).id; 
    var news = {...vals, id: refs}; 
    await admin.firestore().doc(collection + '/' + refs).set(news); 
    return refs; 
}

async function modifyData(collection, docId, vals){
    await admin.firestore().doc(collection + '/' + docId).set(vals); 

}
export const resolvers = { 
    Query: {
        async posts() {
          return (await getCollecs('Posts')).docs.map(tweet => tweet.data());
        },
        async user(_, args) {
          try {
            const users = (await getDoc(`Users/${args.id}`));  
            return users || new GraphQLError('User ID not found');
          } catch (error) {
            console.log("error"); 
          }
        },
        async transaction() {
            return (await getCollecs('Transactions')).docs.map(tweet => tweet.data());  
          
      }},
      User: {
        async transactions(user) {
          try {
            var one = (await getCollecsEq('Transactions', 'useridone', user.id)).docs.map(posts => posts.data()); 
            var two = (await getCollecsEq('Transactions', 'useridtwo', user.id)).docs.map(posts => posts.data());
            one.concat(two); 
            return one;
          } catch (error) {
            console.log("error"); 
        }
          
        },
        async posts(user) {
          try {
            return (await getCollecsEq('Posts','userid', user.id)).docs.map(posts => posts.data());
          } catch (error) {
            console.log("error"); 
        }
      }},
      Posts: {
        async user(post) {
          try {
        
            const users = (await getDoc(`Users/${post.userid}`)); 
            return users || new GraphQLError('User ID not found');
          } catch (error) {
            console.log("error"); 
          }
        },
        async transaction(post) {
          try {
            const transactions = (await getDoc(`Transactions/${post.transactionId}`)); 
            return transactions;
          } catch (error) {
            console.log("error"); 
          }
        }
      },
      Transactions: {
        async userOne(transaction) {
          try {
            const user = (await getDoc(`Users/${transaction.useridone}`));
            return user || new GraphQLError('User not found');
          } catch (error) {
            console.log("error"); 
          }
        },
        async userTwo(transaction) {
          try {
            const user = (await getDoc(`Users/${transaction.useridtwo}`));
            return user;
          } catch (error) {
            console.log("error"); 
          }
        },
        async posts(transaction) {
          try {
              var vals = (await getCollecsEq('Posts','transactionId', transaction.id)).docs.map(posts => posts.data());
              if(vals == undefined)
                return vals; 
              return vals[0];
          } catch (error) {
            console.log("error"); 
          }
        }
      },
      Mutation : {
        async addUsers(_, args){
            try{
                
                await uploadData("Users",args); 
                return {text: "success"};
            }
            catch{ 
                console.log("LMAO"); 
                return {text: "Fail"};
            }
        }
      , 
      async addPosts(_, args){
        try{
            var newArgs = {...args, likes: 0, isJobOffer: false};
            await uploadData("Posts",newArgs); 
            return {text: "success"};
        }
        catch{ 
            console.log("LMAO"); 
            return {text: "Fail"};
        }
      },

      async addLike(_, args){
        try{
            var val = await getDoc(`Posts/${args.id}`); 
            val.likes += 1; 
             
            await modifyData('Posts', args.id, val);
            return {text: "Success"};
        }
        catch{
            return {text: "Fail"};
        }
      }, 

      async addTransaction(_, args){
        try{
            
            var newArgsTwo = {
                useridone: args.useridone,
                price: args.price,
                blockChain: args.blockChain,
                isAccepted: false};
            var valsss = await uploadData("Transactions",newArgsTwo); 
            var newArgs = {text: args.text,likes: 0, isJobOffer: true, userid: args.useridone, transactionId: valsss};
            await uploadData("Posts",newArgs); 
            return {text: "success"};
        }
        catch{ 
            console.log("LMAO"); 
            return {text: "Fail"};
        }
      },
      async signTransaction(_, args){
        try{
            var val = await getDoc(`Transactions/${args.id}`); 
            var valnew = {...val, useridtwo: args.useridtwo}
             
            await modifyData('Transactions', args.id, valnew);
            return {text: "Success"};
        }
        catch{
            return {text: "Fail"};
        }
      },
      async rateTransaction(_, args){
        try{
            var val = await getDoc(`Transactions/${args.id}`); 
            var valnew = {...val, ratingone: args.ratingone, ratingtwo: args.ratingtwo}
             
            await modifyData('Transactions', args.id, valnew);
            return {text: "Success"};
        }
        catch{
            return {text: "Fail"};
        }
      }
}};