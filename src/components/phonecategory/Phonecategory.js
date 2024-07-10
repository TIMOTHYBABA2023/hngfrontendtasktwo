import React from "react";
import Product from "../Product";
import products from "../products.json";
import { Pagination, Button, Flex } from 'antd';
import Phonesection from "./Phonesection";

export default function Phonecategory({ selectedProduct, onProductSelect }) {
    const categoryProducts = products.filter(product => product.category === selectedProduct.category && product.id !== selectedProduct.id).slice(0, 5);

    return (
        <div className="phonecategory">
            <Phonesection className="phone--sec" />
            <div className="selected--product">
                <Product {...selectedProduct} />
                {categoryProducts.map(product => (
                    <div key={product.id} className="product-item" onClick={() => onProductSelect(product)}>
                        <Product {...product} />
                    </div>
                ))}
            </div>
        </div>
    );
}

