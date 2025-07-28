import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    useLocation
  } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import Footer from './common/footer.js';
import Header from './common/header.js';
import LandingMain from './landingPage/landingMain.js';
import Proyek from './Pages/proyek.js';
import DetailProyek from './Pages/detailproyek.js';
import PaymentMethod from './Pages/paymentmethod.js';
import JadiMitra from './Pages/JadiMitra.js';
import ProsesPembayaran from './Pages/prosespembayaran.js';

export default class App extends Component {
    render() {
        return (
            <Router basename="/Infishment-Web">
                <Switch>
                    <Route exact path="/">
                        <Header landpage={true} />
                        <LandingMain />
                    </Route>
                    <Route path="/Proyek">
                        <Header landpage={false} />
                        <Proyek />
                    </Route>
                    <Route path="/DetailProyek">
                        <Header landpage={false} />
                        <DetailProyek />
                    </Route>
                    <Route path="/PaymentMethod">
                        <Header landpage={false} />
                        <PaymentMethod />
                    </Route>
                    <Route path="/JadiMitra">
                        <Header landpage={false} />
                        <JadiMitra />
                    </Route>
                    <Route path="/prosesPembayaran">
                        <Header landpage={false} />
                        <ProsesPembayaran />
                    </Route>
                </Switch> 
                <Footer />
            </Router>
        )
    }
}