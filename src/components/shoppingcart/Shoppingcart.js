import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import Cart from "./Cart";

export default function Shoppingcart({ selectedProduct }) {
    return (
        <div className="shoppingcart">
            <Navbar />
            {selectedProduct ? <Cart product={selectedProduct} /> : <p>No product selected.</p>}
            <Footer />
        </div>
    );
}
