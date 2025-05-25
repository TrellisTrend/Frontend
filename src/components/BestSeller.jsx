import { useEffect, useState } from "react";
import { useContext } from "react"
import { ShopContext } from "../context/ShopContext";
import ProductItem from "./ProductItem";


const BestSeller = () => {

    const [bestSeller, setBestSeller] = useState([]);

    const {products} = useContext(ShopContext);

    const bestProduct = products.filter(product => product.bestseller === true);

    useEffect(() => {
        setBestSeller(bestProduct.slice(0, 5));
    }, [])
  
  return (
    <div className="mt-10">
         <div className="flex flex-col justify-center items-center gap-4 mb-4">
            <h1 className="text-3xl font-bold text-center">Best Seller</h1>
            <p className="text-lg font-medium text-gray-600"> Here is our Best Seller</p>

        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5  gap-4">
                {bestSeller.map((product,index) => (
                    <ProductItem key={index} {...product} />
                ))}
            </div>

      
    </div>
  )
}

export default BestSeller
