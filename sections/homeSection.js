import React from 'react'
import { Container } from '@chakra-ui/react'
import Btn from '../components/btn'
import Link from 'next/link'
import {useWallet} from '@xircus-web3/react'
import { useQuery, gql } from '@apollo/client';

const HomeSection = () => {
  var account = useWallet().account.toLowerCase();
  console.log(account);
  var get_users = gql`{user(id: "${account}") {id}}`;
  const { loading, error, data } = useQuery(get_users);
  console.log(loading, error, data);
  if(!loading && !error && account){
    
    if(data != null){
      return (
        <section className="homeSection">
          <div className="image-washer"></div>
          <div className="landing-contents">
            <h1 className="heading">Welcome to The DecentraHire</h1>
            <h2 className="subheading">Empower transactions, one block at a time.</h2>
            <div className="btn-group">
            <Btn title={"Already Signed Up!"} type={"btn-primary"}/>
            </div>
          </div>
        </section>
      );
    }
   
  }
  return (
    <section className="homeSection">
      <div className="image-washer"></div>
      <div className="landing-contents">
        <h1 className="heading">Welcome to The DecentraHire</h1>
        <h2 className="subheading">Empower transactions, one block at a time.</h2>
        <div className="btn-group">
        <Link href={"/signUp"}><Btn title={"Sign in as Freelancer"} type={"btn-primary"}/></Link>
        <Link href={"/signUpClient"}> <Btn title={"Sign in as Client"} type={"btn-secondary"}/></Link>
        </div>
      </div>
    </section>
  )
}

export default HomeSection
