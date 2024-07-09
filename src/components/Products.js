import React from "react"
import Product from "./Product.js";
import products from "./products.json"
import { Button, Flex } from 'antd';
import Storeproducts from "./products.json"


export default function Products(){        
    const storeproductgotten = Storeproducts.map(product => {
        return <Product 
            key={product.id}
            {...product}
        />
    })

      const ViewButton = () => (
        <Flex wrap gap="small">
          <Button type="primary" className="my--viewmore--button">
            View More Gadjets
          </Button>
        </Flex>)


    return (
        <div className="products">
            <div className="my--products">
                {storeproductgotten}
            </div>
        </div>
        
    )
}

