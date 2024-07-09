import React from "react"
import { Pagination } from 'antd';
import { Button, Flex } from 'antd';
import categoryitems from "../../components/categoryitems.json"
import Product from "../Product";
import Products from "../Products";

export default function Phonecatalog(){
    const Demo = () => (
        <Flex wrap gap="small">
          {categoryitems.map((item) => (
            <Button key={item.id} type="default" align="center">
              {item.label}
            </Button>
          ))}
        </Flex>
      );

      const ViewButton = () => (
        <Flex wrap gap="small">
          <Button type="primary" className="bigbutton">
            View All
          </Button>
        </Flex>)

    const Pagenumbering = () => <Pagination defaultCurrent={6} total={500} className="position-center"/>;


    return (
        <div className="phonecatalog">
        <div>
            <div>
                <div>Home/ Phones</div>
                <div>CATEGORIES</div>
            </div>
            <div>
                <div><img src="" alt="" /></div>
                <div><img src="" alt="" /></div>
                <div>2</div>
            </div>
        </div>
        <div className="demo">
            <Demo />
        </div>
        <div className="product-display">
            <div className="product-stack">
                <Products />
                <Pagenumbering />
                <ViewButton />
            </div>
        </div>

        </div>
    )
}
