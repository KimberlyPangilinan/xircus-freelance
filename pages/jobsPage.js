import React from 'react'
import Header from '../components/header'
import { TabList, TabPanels, TabPanel, Tabs,Tab,Heading,Container } from '@chakra-ui/react'
import FreelancerCard from '../components/freelancerCard'
const FreelancerOage = () => {
  return (
    <div >
      <Header/> 
      <section className="freelancerList">
        <Heading>Browse Jobs</Heading>
        <Tabs width='80%' size='md' height='100vh' variant='enclosed'>
            <TabList>
                <Tab>All</Tab>
                <Tab>Programmers</Tab>
                <Tab>Designer</Tab>
                <Tab>Web 3 Dev</Tab>
                <Tab>Artist</Tab>
            </TabList>
            <TabPanels>
                <TabPanel>
                    <div className="projectItems">
                        <FreelancerCard
                            img ={"data:image/jpeg;base64,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"}
                            alt={"landing website template"}
                            freelancer={"Jane Doe"}
                            productName={"Landing Website Template"}
                            description={"This template is created using React Native, with different components"}
                        />

                        <FreelancerCard
                            img ={"https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1115&q=80"}
                            alt={"landing website template"}
                            freelancer={"by Jane Doe"}
                            productName={"Landing Website Template"}
                            description={"This template is created using React Native, with different components"}
                        />

                        <FreelancerCard
                            img ={"https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80"}
                            alt={"landing website template"}
                            freelancer={"by Jane Doe"}
                            productName={"Landing Website Template"}
                            description={"This template is created using React Native, with different components"}
                        />
                        
                        <FreelancerCard
                            img ={"https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"}
                            alt={"landing website template"}
                            freelancer={"by Jane Doe"}
                            productName={"Landing Website Template"}
                            description={"This template is created using React Native, with different components"}

                        />
                        <FreelancerCard
                            img ={"https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"}
                            alt={"landing website template"}
                            freelancer={"by Jane Doe"}
                            productName={"Landing Website Template"}
                            description={"This template is created using React Native, with different components"}
                        />
                    </div> 
                </TabPanel>
                <TabPanel>
                <p>two!</p>
                </TabPanel>
            </TabPanels>
        </Tabs>
        
      </section>
    </div>
  )
}

export default FreelancerOage
