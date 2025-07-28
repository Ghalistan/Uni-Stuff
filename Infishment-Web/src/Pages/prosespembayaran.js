import React, { Component } from 'react';
import { Container } from 'react-bootstrap';

export default class ProsesPembayaran extends Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col>
                        <Container fluid>
                            <h1>Batas waktu pembayaran</h1>
                        </Container>
                    </Col>
                </Row>
            </Container>
        )
    }
}