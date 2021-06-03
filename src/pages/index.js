import React, { Component } from 'react';
import Header from '../components/Header'
import Watch from '../components/Watch'
import Download from '../components/Download'
import Everywhere from '../components/Everywhere'
import KidsProfile from '../components/KidsProfile'
import FAQ from '../components/FAQ'
import Footer from '../components/Footer'
import Faq from "react-faq-component";
class Main extends Component 
{
    render()
    {
        return (
            <div>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
                <Header />
                <Watch/>
                <Download />
                <Everywhere />
                <KidsProfile />
                <FAQ />
                <Footer />

            </div>
        )
    }
}

export default Main;