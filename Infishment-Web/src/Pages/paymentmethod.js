import React, { Component } from 'react';
import { Col, Row, Image, InputGroup, FormControl, Form, Button } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { FaWallet } from 'react-icons/fa';

import thumbnail from '../Assets/thumbnail.png';
import './paymentmethod.css';
import { Link } from 'react-router-dom';

export default class PaymentMethod extends Component {
    render() {
        return (
            <>
                <Container>
                    <Row>
                        <Col md={6}>
                            <Container>
                                <Row>
                                    <Col>
                                        <Image src={thumbnail} />
                                        
                                    </Col>
                                </Row>
                                <Row>
                                <a>Budidaya ikan kerapu babe supradi</a>
                                        <Row>
                                            <Col>
                                                <a>Resiko</a>
                                            </Col>
                                            <Col>
                                                <a>Lokasi</a>
                                            </Col>
                                            <Col>
                                                <a>Estimasi Keuntungan</a>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col>
                                                <a>Resiko Rendah</a>
                                            </Col>
                                            <Col>
                                                <a>Kab. Tasikmalaya</a>
                                            </Col>
                                            <Col>
                                                <a>14.5%</a>
                                            </Col>
                                        </Row>
                                </Row>
                            </Container>
                        </Col>
                        <Col>
                            <h1 className="payment-title">Metode Pembayaran</h1>
                            <h2 className="payment-subtitle">Pilih metode pembayaran yang akan digunakan.</h2>
                            <InputGroup>
                                <InputGroup.Prepend>
                                    <InputGroup.Checkbox />
                                </InputGroup.Prepend>
                                <FaWallet />
                            </InputGroup>
                            <InputGroup>
                                <InputGroup.Prepend>
                                    <InputGroup.Checkbox />
                                </InputGroup.Prepend>
                                <FaWallet />
                            </InputGroup>
                            <Row>
                                <Col>
                                    <Form.Check type="checkbox" label="Syarat & Ketentuan" />
                                </Col>
                                <Col>
                                    <Link to="prosesPembayaran"><Button variant="primary">Bayar</Button></Link>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </>
        )
    }
}