import React from "react"
import { Button, Container } from "react-bootstrap"

const Footer = () => (
    <Container className="py-5" fluid style={{ backgroundColor: "#FAFAFA" }}>
        <Container className="d-flex flex-column align-items-center my-5">
            <h1 className="pb-3" style={{textAlign:"center"}}>Want to collaborate?</h1>
            <p style={{textAlign:"center"}}>You can shoot me an email or we could have a quick chat.</p>
        </Container>
        <Container className="d-flex justify-content-center">
            <Button className=" resume-btn rounded-0 px-4" variant="outline-dark">GET IN TOUCH</Button>
        </Container>
        <Container fluid className="d-flex flex-row justify-content-center my-5">
            <a href="#" target="_blank">Linkedin</a>
            <a className="px-5" href="#" target="_blank">Dribble</a>
            <a href="#" target="_blank">Instagram</a>
        </Container>
    </Container>
)

export default Footer