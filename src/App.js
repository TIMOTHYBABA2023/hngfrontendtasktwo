import React, { useState } from "react";
import './App.css';
import Homescreen from '../src/components/herosection/Homescreen';
import Phonecategory from "./components/phonecategory/Phonecategory";
import Shoppingcart from "./components/shoppingcart/Shoppingcart"

import Phonecatalog from "./components/phonecategory/Phonecatalog";

export default function App() {
    const [selectedProduct, setSelectedProduct] = useState(null);

    const handleProductSelect = (product) => {
        setSelectedProduct(product);
    };

    return (
        <div className="App">
                <Homescreen />
                {/* <Phonecategory /> */}
                {/* <Shoppingcart selectedProduct={selectedProduct} /> */}
        </div>
    );
}

