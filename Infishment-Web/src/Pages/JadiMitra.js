import React, { Component } from 'react';
import { Row, Col, Form, Container, Image, Button } from 'react-bootstrap';
import placeholder from '../Assets/Mitra-placeholder.png';

import './JadiMitra.css';

export default class JadiMitra extends Component {
    render() {
        return (
            <Container className="py-5">
                <Row>
                    <Col>
                        <Container fluid>
                            <Image src={placeholder} />
                            <a className="teks-image">Besar gambar yang dimasukkan maksimum berukuran 5mb dengan format .png , .jpg atau .jpeg</a>
                            <Button variant="primary" block>Unggah Foto</Button>
                        </Container>
                    </Col>
                    <Col>
                        <h1 className="Mitra-title">Jadi Mitra InFishment</h1>
                        <h2 className="Mitra-subtitle">Masukkan data yang valid saat melakukan pengisian form.</h2>

                        <Form>
                            <Form.Group controlId="NamaLengkap">
                                <Form.Label className="Form-title">Nama Lengkap</Form.Label>
                                <Form.Control className="form-box" type="text" />
                            </Form.Group>
                            <Form.Group controlId="NamaLengkap">
                                <Form.Label className="Form-title">Alamat Email</Form.Label>
                                <Form.Control className="form-box" type="text" />
                            </Form.Group>
                            <Form.Group controlId="NamaLengkap">
                                <Form.Label className="Form-title">Nomor Telepon</Form.Label>
                                <Form.Control className="form-box" type="text" />
                            </Form.Group>
                            <Form.Group controlId="NamaLengkap">
                                <Form.Label className="Form-title">Lokasi Lahan</Form.Label>
                                <Form.Control className="form-box" type="text" />
                            </Form.Group>
                            <Form.Group controlId="NamaLengkap">
                                <Form.Label className="Form-title">Luas Lahan</Form.Label>
                                <Form.Control className="form-box" type="text" />
                            </Form.Group>
                            <Form.Group controlId="NamaLengkap">
                                <Form.Label className="Form-title">Komoditas Perikanan</Form.Label>
                                <Form.Control className="form-box" type="text" />
                            </Form.Group>
                            <Button variang="primary" type="submit" block>Kirim Pengajuan</Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        )
    }
}