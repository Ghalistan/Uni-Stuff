import React, { Component } from 'react';
import { Container, Form, InputGroup, Row, Col, Carousel, CardDeck, Card, ProgressBar, Pagination } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Slider from 'rc-slider';

import 'rc-slider/assets/index.css';
import './proyek.scss';

import Landing from '../Assets/Landing-background3.png';
import Kepiting from '../Assets/Kepiting.png';

const profitslider = [0,20];

function Sidebar() {
    return (
        <Form>
            <Form.Label className="Subtitle" for="kategori">Kategori</Form.Label>
            <Form.Control as="select" id="kategori">
                <option>Semua Komoditas</option>
                <option>Semua Komoditas 1</option>
                <option>Semua Komoditas 2</option>
            </Form.Control>

            <Form.Label className="Subtitle" for="keuntungan">Keuntungan</Form.Label>
            <Slider.Range allowCross={false} defaultValue={profitslider} max="50" />
            <Form.Row>
                <Col>
                    <InputGroup>
                        <InputGroup.Prepend>
                            <InputGroup.Text>%</InputGroup.Text>
                        </InputGroup.Prepend>
                        <Form.Control className="ProfitInput" defaultValue={profitslider[0]} />
                    </InputGroup>
                </Col>
                <Col>
                    <InputGroup>
                        <InputGroup.Prepend>
                            <InputGroup.Text>%</InputGroup.Text>
                        </InputGroup.Prepend>
                        <Form.Control className="ProfitInput" defaultValue={profitslider[1]} />
                    </InputGroup>
                </Col>
            </Form.Row>
        </Form>
    )
}

function AdsCarousel() {
    return(
        <Carousel nextIcon="" prevIcon="">
            <Carousel.Item>
                <img className="d-block w-100" src={Landing} />
            </Carousel.Item>
            <Carousel.Item>
                <img className="d-block w-100" src={Landing} />
            </Carousel.Item>
            <Carousel.Item>
                <img className="d-block w-100" src={Landing} />
            </Carousel.Item>
        </Carousel>
    )
}

class DataCard extends Component {
    CardTemplate() {
        return (
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={Kepiting} />
                <Card.Body>
                    <Card.Title><Link className="card-title stretched-link" to="/DetailProyek">Budidaya ikan kerapu babe supradi</Link></Card.Title>
                    <Card.Text>
                        <a className="risk-type">Resiko Tinggi</a><a className="project-place"> - Kab. Tasikmalaya</a>
                        <Row>
                            <Col>
                                <p className="Card-prop">Harga Investasi</p>
                                <a className="Card-num-data">Rp500.000</a> / slot
                            </Col>
                            <Col className="text-right">
                                <p className="Card-prop">Est. Keuntungan</p>
                                <a className="Card-num-data">14.5%</a>
                            </Col>
                        </Row>
                        <ProgressBar variant="success" now={40} />
                        <Row>
                            <Col>
                                <p className="Card-prop">Terkumpul</p>
                                <a className="Card-num-data">Rp25.000.000</a>
                            </Col>
                            <Col className="text-right">
                                <p className="Card-prop">Tersisa</p>
                                <a className="Card-proj-slot">35 Slot</a>
                            </Col>
                        </Row>
                    </Card.Text>
                </Card.Body>
            </Card>
        )
    }

    render() {
        return (
            <CardDeck className="py-2">
                <this.CardTemplate />
                <this.CardTemplate />
                <this.CardTemplate />
            </CardDeck>
        )
    }
}

export default class Proyek extends Component {
    render() {
        return (
            <>
                <Container className="py-5">
                    <Row>
                        <Col md={3}>
                            <Sidebar />
                        </Col>
                        <Col md={9} >
                            <label className="Subtitle">Menampilkan 8 dari 8 Proyek</label>
                            <AdsCarousel />
                            <DataCard />
                            <DataCard />
                            <DataCard />
                            <Container className="d-flex justify-content-center">
                                <Pagination >
                                    <Pagination.First />
                                    <Pagination.Prev />
                                    <Pagination.Item active>{1}</Pagination.Item>
                                    <Pagination.Next />
                                    <Pagination.Last />
                                </Pagination>
                            </Container>
                        </Col>
                    </Row>
                </Container>
            </>
        )
    }
}