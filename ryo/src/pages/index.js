import React from "react"

import Layout from "../components/layout"
import { Button, Container, Image } from "react-bootstrap"
import mainpict from "../images/main-picture.png"


const tagline = "I’m an UI/UX Designer based in Indonesia. I love to solve design problems and create amazing stuff that focuss on user needs."

const IndexPage = () => (
  <Layout>
    <Container fluid className="py-5" style={{ backgroundColor: "#FAFAFA" }}>
        <Container className="d-flex flex-column" >
          <Container className="d-flex justify-content-center pb-5">
            <Image src={mainpict} fluid />
          </Container>
          <Container className="tagline-container pb-2">
            <p className="tagline">{tagline}</p>
          </Container>
          <Container className="d-flex justify-content-center">
            <Button className=" resume-btn rounded-0 px-4" variant="outline-dark">My Resume</Button>
          </Container>
        </Container>
      </Container>
  </Layout>
)

export default IndexPage
