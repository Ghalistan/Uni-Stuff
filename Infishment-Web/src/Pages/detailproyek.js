import React, { Component } from 'react';
import ImageGallery from 'react-image-gallery';
import GoogleMapReact from 'google-map-react';

import './detailproyek.scss';
import { Container, Col, Row, Form, Button, Nav, Tabs, Tab } from 'react-bootstrap';
import { GoLocation } from 'react-icons/go';
import { IconContext } from 'react-icons/lib/cjs';
import { FaRegUser } from "react-icons/fa";
import { MdShowChart } from "react-icons/md";
import { Link } from 'react-router-dom';

const images =[
    {
        original: 'https://picsum.photos/id/1018/1000/600/',
        thumbnail: 'https://picsum.photos/id/1018/1000/600/',
    },
    {
        original: 'https://picsum.photos/id/1018/1000/600/',
        thumbnail: 'https://picsum.photos/id/1018/1000/600/',
    },
    {
        original: 'https://picsum.photos/id/1018/1000/600/',
        thumbnail: 'https://picsum.photos/id/1018/1000/600/',
    },
];

function Gallery() {
    return (
        <ImageGallery
            infinite={false}
            showNav={false}
            showFullscreenButton={false}
            useBrowserFullscreen={false}
            showPlayButton={false}
            items={images}
        />
    )
}

function Maps() {
    return (
        <Container className="p-0 m-0" style={{height: '50vh'}}>
            <GoogleMapReact
                bootstrapURLKeys={{ key: 'AIzaSyDPxOZxiB15GyKyTmxnHpt7cVuEfEI8RLQ' }}
                defaultCenter={{ lat: 59.95, lng: 30.33 }}
                defaultZoom={11}
            />
        </Container>
    )
}

export default class DetailProyek extends Component {
    render() {
        return(
            <>
            <Container>
                <Row>
                    <Col md={3}>
                        <Gallery />
                    </Col>
                    <Col md={6}>
                        <Container>
                            <h1 className="Proyek-name">Budidaya ikan kerapu babe supradi</h1>
                            <Container className="border-bottom">
                                <Row>
                                    <Col>
                                        <IconContext.Provider value={{ color: '#grey' }}>
                                            <MdShowChart         />
                                        </IconContext.Provider>
                                        <a className="Risk-type">Resiko Rendah</a>
                                    </Col>
                                    <Col>
                                        <IconContext.Provider value={{ color: '#grey' }}>
                                            <GoLocation />
                                        </IconContext.Provider>
                                        <a className="Proyek-loc">Kab. Tasikmalaya</a>
                                    </Col>
                                    <Col>
                                        <IconContext.Provider value={{ color: '#grey !important' }}>
                                            <FaRegUser />
                                        </IconContext.Provider>
                                        <a className="Proyek-owner">Bpk. Supradi</a>
                                    </Col>
                                </Row>
                            </Container>
                            <Container className="border-bottom">
                                <Row>
                                    <Col>
                                        <a className="Prop-titles">Pendanaan Dibuka</a>
                                    </Col>
                                    <Col>
                                        <a className="Prop-titles">Pendanaan Ditutup</a>
                                    </Col>
                                    <Col>
                                        <a className="Prop-titles">Proyek Dimulai</a>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <a className="Prop-info">9 Mei 2019</a>
                                    </Col>
                                    <Col>
                                        <a className="Prop-info">20 Mei 2019</a>
                                    </Col>
                                    <Col>
                                        <a className="Prop-info-green">24 Mei 2019</a>
                                    </Col>
                                </Row>
                            </Container>
                            <Container>
                                <Row>
                                    <Col>
                                        <a className="Prop-titles">Total Kuota</a>
                                    </Col>
                                    <Col>
                                        <a className="Prop-titles">Kuota Terisi</a>
                                    </Col>
                                    <Col>
                                        <a className="Prop-titles">Kuota Tersisa</a>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <a className="Prop-info">120 Slot</a>
                                    </Col>
                                    <Col>
                                        <a className="Prop-info">80 Slot</a>
                                    </Col>
                                    <Col>
                                        <a className="Prop-info-green">40 Slot</a>
                                    </Col>
                                </Row>
                            </Container>
                            <Container>
                                <Row>
                                    <Col>
                                        <a className="Prop-titles">Luas Area</a>
                                    </Col>
                                    <Col>
                                        <a className="Prop-titles">Periode Investasi</a>
                                    </Col>
                                    <Col>
                                        <a className="Prop-titles">Estimasi Return</a>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <a className="Prop-info">500 m2</a>
                                    </Col>
                                    <Col>
                                        <a className="Prop-info">6 Bulan</a>
                                    </Col>
                                    <Col>
                                        <a className="Prop-info-green">9 - 14.5%</a>
                                    </Col>
                                </Row>
                            </Container>
                        </Container>
                    </Col>
                    <Col md={3}>
                        <a className="Mulai-investasi">Mulai Investasi</a>
                        <Form>
                            <Form.Group controlId="InvestNumber">
                                <Form.Label>Jumlah Slot</Form.Label>
                                <Form.Control type="number" min="1" defaultValue="1" />
                            </Form.Group>
                            <Form.Group controlId="TotalInvestPrice">
                                <Form.Label>Total Harga Investasi</Form.Label>
                                <Form.Control type="text" value="Rp 500.000,00" readOnly />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Perkiraan Total Pengembelian</Form.Label>
                                <Form.Control type="text" value="Rp 550.000,00" readOnly />
                            </Form.Group>
                            <Button variant="outline-primary" block>Rincian Investasi</Button>
                            <Link variant="primary" to="/paymentmethod" block>Mulai Investasi</Link>
                        </Form>
                    </Col>
                </Row>
                <Row>
                    <Col md={9}>
                        <Tabs defaultActiveKey="Deskripsi">
                            <Tab eventKey="Deskripsi" title="Deskripsi">
                                <a className="Desc-Proyek">Lokasi Proyek</a>
                                <Maps />
                                <a className="Desc-Proyek">Deskripsi Proyek</a>
                                <p className="text-justify">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam aliquam vitae amet cras mattis nibh mauris. Nisl a tellus molestie faucibus et pellentesque turpis cursus non. Fringilla amet pharetra, ante ac duis lacus. Ultricies sed molestie sed praesent sit. Justo sit fermentum mattis tristique ac tristique sit non. Semper amet donec volutpat non turpis ultrices massa. Ultrices egestas adipiscing morbi ipsum proin euismod. Volutpat velit quam purus, pellentesque. Sagittis, ultrices aenean auctor aliquam aliquam in ac. Morbi et et pellentesque eget. Malesuada eu congue molestie interdum. Quis tellus vel sollicitudin eleifend sed proin. Faucibus nibh mattis pharetra vivamus at nec tempor massa. Elementum commodo vitae suspendisse quis. Lectus molestie augue erat enim dictum. Accumsan dictumst phasellus lorem venenatis eget mi nullam. Rutrum faucibus at nunc lorem lacus fames cras bibendum. Rutrum proin vel, risus, nullam tellus ornare faucibus ac orci. Nec justo, placerat feugiat mauris mi varius pellentesque at non. Tristique mauris molestie tristique vitae odio volutpat pretium, tellus. Placerat id habitasse quis sit leo mauris. Vitae urna, interdum ut at nam est felis, elementum nisi. Tellus sollicitudin commodo interdum sit quam tincidunt ornare amet. Viverra et lacus nisl dignissim ut enim lorem. Est ut amet dis in enim elementum. Arcu venenatis aenean sit id nunc mi potenti sed tortor. Neque tincidunt nisl accumsan sed sed condimentum ut. Quam vel, eu turpis arcu nulla. Proin ac lectus aliquam mi dignissim neque quis leo tortor. Eget donec sed vel interdum ullamcorper imperdiet. Magnis pellentesque id rutrum dignissim nibh cursus tempus cras urna. Scelerisque elementum turpis fusce hendrerit in.
                                </p>
                            </Tab>
                            <Tab eventKey="Aktivitas" title="Aktivitas">
                                <h1>ayy</h1>
                            </Tab>
                        </Tabs>
                    </Col>
                </Row>
            </Container>
            </>
        )
    }
}