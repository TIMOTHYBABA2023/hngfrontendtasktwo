// import React, { useState } from "react";
// import './App.css';
// import Homescreen from '../src/components/herosection/Homescreen';
// import Phonecategory from "./components/phonecategory/Phonecategory";
// import Shoppingcart from "./components/shoppingcart/Shoppingcart"

// import Phonecatalog from "./components/phonecategory/Phonecatalog";
// import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";

// export default function App() {
//     const [selectedProduct, setSelectedProduct] = useState(null);

//     const handleProductSelect = (product) => {
//         setSelectedProduct(product);
//     };

//     return (
//         <div className="App">
//                 <Navbar />
//                 <Homescreen />
//                 {/* <Phonecategory /> */}
//                 {/* <Shoppingcart selectedProduct={selectedProduct} /> */}
//                 <Footer />
//         </div>
//     );
// }

import React, { useState } from "react";
import './App.css';
import Homescreen from './components/herosection/Homescreen';
import Phonecategory from "./components/phonecategory/Phonecategory";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function App() {
    const [selectedProduct, setSelectedProduct] = useState(null);

    const handleProductSelect = (product) => {
        setSelectedProduct(product);
    };

    return (
        <div className="App">
            <Navbar />
            {!selectedProduct ? (
                <Homescreen onProductSelect={handleProductSelect} />
            ) : (
                <Phonecategory selectedProduct={selectedProduct} onProductSelect={handleProductSelect} />
            )}
            <Footer />
        </div>
    );
}

