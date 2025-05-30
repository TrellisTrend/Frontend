import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";

const Product = () => {
  const [productData, setProductData] = useState(false);
  const [image, setImage] = useState("");

  const { productId } = useParams();

  const { products } = useContext(ShopContext);
  // console.log(products)

  const fetchProduct = async () => {
    products.map((product) => {
      if (product._id === productId) {
        setProductData(product);
        setImage(product.image[0]);
        return null;
      }
    });
  };

  useEffect(() => {
    fetchProduct();
  }, [productId]);

  return productData ? (
    <div className="transition-opacity ease-in-out duration-100 opacity-100 mt-10 px-4  md:px-[6vw] lg:px-[8vw]">
      {/* product data */}
      <div className="flex flex-col sm:flex-row  sm:gap-12  gap-2">
        {/* product image */}
        <div className="flex-1 flex flex-col-reverse sm:flex-row">
          <div className="flex justify-between overflow-x-auto w-full sm:flex-col gap-2 sm:justify-normal sm:w-[19%]">
            {productData.image.map((img, index) => (
              <img
                onClick={() => setImage(img)}
                key={index}
                src={img}
                alt="image"
                className="w-[47%] h-auto sm:object-cover cursor-pointer"
              />
            ))}
          </div>
          <div className="w-[37%] ">
            <img src={image} alt="product" className="w-full h-auto " />
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div className="opacity-0"></div>
  );
};

export default Product;
