import React, { Component } from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import { MdEmail } from 'react-icons/md';
import { IoLogoWhatsapp } from 'react-icons/io';
import './footer.css';
import logo2 from '../Assets/Infishment-black.png';
import fb from '../Assets/facebook.png';
import insta from '../Assets/instagram.png';
import twit from '../Assets/twitter.png';
import linkedin from '../Assets/linkedin.png';

class Footer extends Component {
    render() {
        return (
            <footer className=" d-flex align-items-center footer py-5">
                <Container fluid className="my-5" style={{paddingLeft: '8%', paddingRight: '8%'}}>
                    <Row>
                        <Col sm={2}>
                            <Container className="mb-5">
                                <Image src={logo2} className="d-block w-100" />
                            </Container>
                            <Row>
                                <Col>
                                    <Image src={fb} style={{height: '3vh'}} />
                                </Col>
                                <Col>
                                    <Image src={insta} style={{height: '3vh'}} />
                                </Col>
                                <Col>
                                    <Image src={twit} style={{height: '3vh'}} />
                                </Col>
                                <Col>
                                    <Image src={linkedin} style={{height: '3vh'}} />
                                </Col>
                            </Row>
                            <Container className="my-5">
                                <p className="footer-txt">Copyright &copy; 2020</p>
                                <p className="footer-txt">inFishment Indonesia</p>
                            </Container>
                        </Col>
                        <Col sm={2} md={{offset: 1}}>
                            <p className="footer-title">Alamat dan Kontak</p>
                            <p className="footer-txt">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut blandit mauris et.</p>
                            <div className="d-flex align-items-center">
                                <MdEmail />
                                <a className="footer-txt" style={{paddingLeft: '1rem'}}>hi@infishment.id</a>
                            </div>
                            <div className="d-flex align-items-center">
                                <IoLogoWhatsapp />
                                <a className="footer-txt" style={{paddingLeft: '1rem'}}>(+62)812 1234 1234</a>
                            </div>
                        </Col>
                        <Col sm={2} md={{offset: 1}}>
                            <p className="footer-title">Halaman</p>
                            <p className="footer-txt">Blog</p>
                            <p className="footer-txt">Kebijakan Privasi</p>
                            <p className="footer-txt">Syarat & Ketentuan</p>
                        </Col>
                        <Col sm={2} md={{offset: 1}}>
                            <p className="footer-title">Dapatkan Info & Penawaran Terbaru dari kami.</p>
                        </Col>
                    </Row>
                </Container>
            </footer>
        )
    }
}

export default Footer;