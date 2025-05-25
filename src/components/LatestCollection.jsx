import { useContext, useEffect, useState } from "react"
import { ShopContext } from "../context/ShopContext";

import ProductItem from "./ProductItem";


const LatestCollection = () => {


    const {products} = useContext(ShopContext);

    const [latestProducts, setLatestProducts] = useState([]);


    useEffect(() => {
       setLatestProducts(products.slice(0,10));
    }, []);

    console.log(products);
  return (
    <div className="mt-10">

        <div className="flex flex-col justify-center items-center gap-4 mb-4">
            <h1 className="text-3xl font-bold text-center">Latest Collection</h1>
            <p className="text-lg font-medium text-gray-600"> Here is our latest collection</p>

        </div>


            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5  gap-4">
                {latestProducts.map((product,index) => (
                    <ProductItem key={index} {...product} />
                ))}
            </div>

       

      
    </div>
  )
}

export default LatestCollection
