import React from "react";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import AppHeader from "../component/AppHeader"
import AboutComponent from "../component/AboutComponent";
const HomePage = () =>
{
    return (<main className="flex-shrink-0">
               <Navbar />
               <AppHeader />
               <AboutComponent />
               <Footer />
            </main>)
}

export default HomePage