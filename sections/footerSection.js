import React from "react";
import {
  Box,
  Container,
  Row,
  Column,
  FooterLink,
  Heading,
} from "./footerStyles";
  
const FooterSection = () => {
  return (
    <Box>
      <Container>
        <Row>
          <Column>
            <Heading>About Us</Heading>
            <FooterLink href="#">Aim</FooterLink>
            <FooterLink href="#">Vision</FooterLink>
            <FooterLink href="#">Testimonials</FooterLink>
          </Column>
          <Column>
            <Heading>Services</Heading>
            <FooterLink href="/browseJobs">Jobs Board</FooterLink>
            <FooterLink href="/browseFreelancer">Freelancers Tavern</FooterLink>
            <FooterLink href="/browseProjects">Projects Saloon</FooterLink>
          </Column>
          <Column>
            <Heading>Contact Us</Heading>
            <FooterLink href="#" style={{fontSize:"9px"}}>matira.nealbartonjames@gmail.com</FooterLink>
            <FooterLink href="#" style={{fontSize:"9px"}}>carlodominiquetolin@gmail.com</FooterLink>
            <FooterLink href="#" style={{fontSize:"9px"}}>cjeremyreuel@gmail.com</FooterLink>
            <FooterLink href="#" style={{fontSize:"9px"}}>kimberlypangilinan2001@gmail.com</FooterLink>
          </Column>
          <Column>
            <Heading>Social Media</Heading>
            <FooterLink href="#">
              <i className="fab fa-facebook-f">
                <span style={{ marginLeft: "10px" }}>
                  Facebook
                </span>
              </i>
            </FooterLink>
            <FooterLink href="#">
              <i className="fab fa-instagram">
                <span style={{ marginLeft: "10px" }}>
                  Instagram
                </span>
              </i>
            </FooterLink>
            <FooterLink href="#">
              <i className="fab fa-twitter">
                <span style={{ marginLeft: "10px" }}>
                  Twitter
                </span>
              </i>
            </FooterLink>
            <FooterLink href="#">
              <i className="fab fa-youtube">
                <span style={{ marginLeft: "10px" }}>
                  Youtube
                </span>
              </i>
            </FooterLink>
          </Column>
        </Row>
      </Container>
    </Box>
  );
};
export default FooterSection;