import React from "react";
import Navbar from "../Navbar";
import Phonesection from "./Phonesection";
import Phonescatalog from "./Phonecatalog";
import Footer from "../Footer";

export default function Homecategory(){
    return(
        <div className="homecategory">
            <Navbar />
            <Phonesection />
            <Phonescatalog />
            <Footer />
        </div>
        
    )
}