import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

const ProductComponent = () => {
    const products = useSelector((state: RootState) => state.allProducts.product);
    console.log('products', products)

    return (
        <div>
            {products.map((d, i) => (
                <div key={i}>
                    <span>{d.category}</span>
                </div>
            ))}
        </div>
    );
}

export default ProductComponent;