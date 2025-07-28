import React, { Component, useState } from 'react';
import { Modal, Form, Row, Col, Container, Navbar, Nav } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { IconContext } from 'react-icons';
import { GiHamburgerMenu } from 'react-icons/gi'

import './header.scss';
import logo from '../Assets/Infishment-white.png';
import logo2 from '../Assets/Infishment-black.png';
import { Link } from 'react-router-dom';

function Regist() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button className="daftarButton px-5" onClick={handleShow} block="true">Daftar</Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton className="pb-0" style={{border:'none'}}>
                    <Modal.Title>Daftar Akun Pengguna</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p className="modal-txt">Masukkan data diri yang valid saat melakukan pengisian form.</p>
                    <Form>
                        <Form.Group controlId="NamaLengkap">
                            <Form.Label>Nama Lengkap</Form.Label>
                            <Form.Control type="text"/>
                        </Form.Group>
                        <Form.Group controlId="EmailInput">
                            <Form.Label>Alamat Email</Form.Label>
                            <Form.Control type="email" />
                        </Form.Group>
                        <Form.Group controlId="PasswordInput">
                            <Form.Label>Kata Sandi</Form.Label>
                            <Form.Control type="password" />
                        </Form.Group>
                        <Button className="daftarButton" variant="primary" type="submit" block>Daftar</Button>
                        <Container className="px-0 py-3">
                            <Row>
                                <Col>
                                    <Button className="daftarButton" variant="outline-primary" type="submit" block>Facebook</Button>
                                </Col>
                                <Col>
                                    <Button className="daftarButton" variant="outline-success" type="submit" block>Google</Button>
                                </Col>
                            </Row>
                        </Container>
                    </Form>
                </Modal.Body>
            </Modal>
        </>
    );
}

function Login(props) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Nav.Link className={props.condition+" px-4"} onClick={handleShow} block="true">Masuk</Nav.Link>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton className="pb-0" style={{border:'none'}}>
                    <Modal.Title>Masuk Akun Pengguna</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p className="modal-txt">Masukkan data diri yang valid saat melakukan pengisian form.</p>
                    <Form>
                        <Form.Group controlId="EmailInput">
                            <Form.Label>Alamat Email</Form.Label>
                            <Form.Control type="email" />
                        </Form.Group>
                        <Form.Group controlId="PasswordInput">
                            <Form.Label>Kata Sandi</Form.Label>
                            <Form.Control type="password" />
                        </Form.Group>
                        <Button className="daftarButton" variant="primary" type="submit" block>Daftar</Button>
                        <Container className="px-0 py-3">
                            <Row>
                                <Col>
                                    <Button className="daftarButton" variant="outline-primary" type="submit" block>Facebook</Button>
                                </Col>
                                <Col>
                                    <Button className="daftarButton" variant="outline-success" type="submit" block>Google</Button>
                                </Col>
                            </Row>
                        </Container>
                    </Form>
                </Modal.Body>
            </Modal>
        </>
    );
}

export default class Header extends Component {
    constructor(props) {
        super(props);

        if (this.props.landpage) {
            this.state = {
                startPos: 0,
                above: true,
                bg: "",
                navlogo: logo,
                navmenu: "NavMenu",
                navsep: "headerSep"
            }   
        } else {
            this.state = {
                startPos: 0,
                above: true,
                bg: "light",
                navlogo: logo2,
                navmenu: "NavMenu2",
                navsep: "headerSep2"
            }   
        }
    }
    
    componentDidUpdate(prevProps) {
        if (this.props.landpage !== prevProps.landpage && !this.props.landpage) {
            this.setState({
                startPos: 0,
                above: true,
                bg: "light",
                navlogo: logo2,
                navmenu: "NavMenu2",
                navsep: "headerSep2"
            });
        } else if (this.props.landpage !== prevProps.landpage && this.props.landpage) {
            this.setState({
                startPos: 0,
                above: true,
                bg: "",
                navlogo: logo,
                navmenu: "NavMenu",
                navsep: "headerSep"
            });
        }
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll = () => {
        if(this.props.landpage) {
            const { startPos } = this.state;

            const currentScrollPos = window.pageYOffset;
            const above = startPos >= currentScrollPos;
            const bg = above? "":"light";
            const navlogo = above? logo:logo2;
            const navmenu = above? "NavMenu":"NavMenu2";
            const navsep = above? "headerSep":"headerSep2";

            this.setState({
                above,
                bg,
                navlogo,
                navmenu,
                navsep
            });
        }
    }

    render() {
        var shdw = "";
        if (!this.state.above || !this.props.landpage) {
            shdw = "shadow";
        }

        return (
            <>
                <Navbar bg={this.state.bg} className={shdw} fixed={this.props.landpage? "top":""} expand="lg">
                    <Navbar.Brand><Link to="/"><img id="titleLogo" src={this.state.navlogo} alt="Infishment"/></Link></Navbar.Brand>
                    <Navbar.Toggle aria-controls="drop-nav">
                        <IconContext.Provider value={{ color: this.state.above? "white":"" }}>
                            <GiHamburgerMenu />
                        </IconContext.Provider>
                    </Navbar.Toggle>
                    <Navbar.Collapse id="drop-nav" className="justify-content-end">
                        <Nav>
                            <Nav.Item>
                                <Link className={this.state.navmenu+" nav-link px-4"} to="/Proyek">Proyek Investasi</Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link className={this.state.navmenu+" px-4"} href="#">Tentang Kami</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link className={this.state.navmenu+" px-4"} href="#">Pertanyaan</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Link className={this.state.navmenu+" nav-link px-4"} to="/JadiMitra">Jadi Mitra</Link>
                            </Nav.Item>

                            <Nav.Item className={this.state.navsep} />

                            <Nav.Item>
                                <Login condition={this.state.navmenu} />
                            </Nav.Item>
                            <Nav.Item>
                                <Regist />
                            </Nav.Item>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </>
        )
    }
}