import React, { Component } from 'react';
import { Container, Row, Col, Button, Card, ProgressBar, Carousel, Image, CardDeck } from 'react-bootstrap';
import fishicon from '../Assets/fishicon.png';
import deviceicon from '../Assets/deviceicon.png';
import profiticon from '../Assets/profiticon.png';
import Scale from '../Assets/Scale.png';
import Growth from '../Assets/Growth.png';
import Profit from '../Assets/Profit.png';
import Care from '../Assets/Care.png';
import Reviewpfp from '../Assets/Review-pfp.png';
import Kepiting from '../Assets/Kepiting.png';
import './landingMain.scss';
import { Link } from 'react-router-dom';


function LandingBase() {
    return (
        <Container fluid className="LandingBox1 d-flex align-items-center p-0">
            <Container className="LandingWrap m-0 ml-5">
                <p className="LandingPhrase py-3">InFishMent hadir untuk mensejahterakan petambak</p>
                <Button className="Invest-Button p-2 px-4">Mulai Investasi</Button>
            </Container>
        </Container>
    )
}

function LandingBase2() {
    return (
        <Container fluid className="LandingBox2">
            <Container className="py-5">
                <h1 className="LandingTitle">Apa Itu InFishment ?</h1>
            </Container>
            <Container>
                <iframe
                    id="youtube"
                    width="744"
                    height="418"
                    src="https://www.youtube.com/embed/gt35NBEUeIY"
                    frameBorder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen />
            </Container>
            <Container className="my-5">
                <Row className="text-center">
                    <Col md>
                        <h2 className="LB2-numb">200</h2>
                        <p className="LB2-txt">Mitra Tambak</p>
                    </Col>
                    <Col md>
                        <h2 className="LB2-numb">1 Rb</h2>
                        <p className="LB2-txt">Pemodal</p>
                    </Col>
                    <Col md>
                        <h2 className="LB2-numb">Rp 4.7M</h2>
                        <p className="LB2-txt">Dana Tersalurkan</p>
                    </Col>
                    <Col md>
                        <h2 className="LB2-numb">15.6%</h2>
                        <p className="LB2-txt">Avg. Keuntungan</p>
                    </Col>
                </Row>
            </Container>
        </Container>
    )
}

function LandingBase3() {
    return (
        <Container fluid className="LB3">
            <Container className="py-5">
                <h1 className="LandingTitle">Cara Kerja InFishment</h1>
            </Container>
            <Container>
                <Row className="text-center">
                    <Col xs={4}>
                        <img src={fishicon} className="w-50" alt="Dana" />
                        <p className="LB3-txt">Danai Proyek yang Tersedia</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut blandit mauris et habitasse mattis fringilla.</p>
                    </Col>
                    <Col xs={4}>
                        <img src={deviceicon} className="w-50" alt="Perkembangan" />
                        <p className="LB3-txt">Pantau Perkembangan Proyek</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut blandit mauris et habitasse mattis fringilla.</p>
                    </Col>
                    <Col xs={4}>
                        <img src={profiticon} className="w-50" alt="Untung" />
                        <p className="LB3-txt">Dapatkan Keuntungan Proyek</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut blandit mauris et habitasse mattis fringilla.</p>
                    </Col>
                </Row>
                <Row className="d-flex justify-content-center">
                    <Button variant="primary">Pelajari Lebih Lanjut</Button>
                </Row>
            </Container>
        </Container>
    )
}

function LandingBase4() {
    return (
        <Container fluid className="LB-4">
            <Container className="py-5">
                <h1 className="LandingTitle2">Mengapa Investasi di InFishment?</h1>
            </Container>
            <Container>
                <Row className="text-center">
                    <Col md={3}>
                        <img className="LB4-Icon" src={Scale} />
                        <p className="LB4-txt">Proses yang Adil dan Kredibel</p>
                        <p className="LB4-subtxt">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut blandit mauris et habitasse mattis fringilla.</p>
                    </Col>
                    <Col xs={3}>
                        <img className="LB4-Icon" src={Growth} />
                        <p className="LB4-txt">Transparansi Progress Proyek</p>
                        <p className="LB4-subtxt">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut blandit mauris et habitasse mattis fringilla.</p>
                    </Col>
                    <Col xs={3}>
                        <img className="LB4-Icon" src={Profit} />
                        <p className="LB4-txt">Mendapatkan Return yang Tinggi</p>
                        <p className="LB4-subtxt">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut blandit mauris et habitasse mattis fringilla.</p>
                    </Col>
                    <Col xs={3}>
                        <img className="LB4-Icon" src={Care} />
                        <p className="LB4-txt">Memiliki Dampak Sosial</p>
                        <p className="LB4-subtxt"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut blandit mauris et habitasse mattis fringilla.</p>
                    </Col>
                </Row>
            </Container>
        </Container>
    )
}

class LandingBase5 extends Component {
    DataCard() {
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
            <Container fluid className="LB5-main pb-5">
                <Container>
                    <h1 className="LandingTitle py-5">Rekomendasi Proyek</h1>
                </Container>
                <Container>
                    <CardDeck>
                        <this.DataCard />
                        <this.DataCard />
                        <this.DataCard />
                        <this.DataCard />
                    </CardDeck>
                </Container>
            </Container>
        )
    }
}

class LandingBase6 extends Component {
    render () {
        return (
            <Container fluid className="p-0 y-0">
                <Container>
                    <h1 className="LandingTitle py-5">Pendapat Pengguna</h1>
                </Container>
                <Carousel style={{paddingBottom: 60}}>
                    <Carousel.Item>
                        <Container className="d-flex align-items-center py-5">
                            <Image rounded src={Reviewpfp} className="review-pict mx-auto" />
                        </Container>
                        <Container>
                            <p className="review-txt">“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tempor nec id ultrices vulputate. Sollicitudin eu morbi in molestie dolor euismod tincidunt dictumst interdum. Amet aliquam dui sed ullamcorper aliquet mattis ut. Convallis ante felis blandit dui elit, varius cras scelerisque.”</p>
                        </Container>
                        <Container>
                            <p className="reviewer-name">Ryo Alif R</p>
                        </Container>
                        <Container>
                            <p className="reviewer-job">Mahasiswa</p>
                        </Container>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Container className="d-flex align-items-center py-5">
                            <Image rounded src={Reviewpfp} className="review-pict mx-auto" />
                        </Container>
                        <Container>
                            <p className="review-txt">“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tempor nec id ultrices vulputate. Sollicitudin eu morbi in molestie dolor euismod tincidunt dictumst interdum. Amet aliquam dui sed ullamcorper aliquet mattis ut. Convallis ante felis blandit dui elit, varius cras scelerisque.”</p>
                        </Container>
                        <Container>
                            <p className="reviewer-name">Ryo Alif R</p>
                        </Container>
                        <Container>
                            <p className="reviewer-job">Mahasiswa</p>
                        </Container>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Container className="d-flex align-items-center py-5">
                            <Image rounded src={Reviewpfp} className="review-pict mx-auto" />
                        </Container>
                        <Container>
                            <p className="review-txt">“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tempor nec id ultrices vulputate. Sollicitudin eu morbi in molestie dolor euismod tincidunt dictumst interdum. Amet aliquam dui sed ullamcorper aliquet mattis ut. Convallis ante felis blandit dui elit, varius cras scelerisque.”</p>
                        </Container>
                        <Container>
                            <p className="reviewer-name">Ryo Alif R</p>
                        </Container>
                        <Container>
                            <p className="reviewer-job">Mahasiswa</p>
                        </Container>
                    </Carousel.Item>
                </Carousel>
            </Container>
        )
    }
}

class LandingMain extends Component {
    render () {
        return (
            <>
                <LandingBase />
                <LandingBase2 />
                <LandingBase3 />
                <LandingBase4 />
                <LandingBase5 />
                <LandingBase6 />
            </>
        )
    }
}

export default LandingMain;