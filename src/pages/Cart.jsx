import { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  emptyCartIteams,
  removeSingleIteams,
  removeToCart,
} from "../redux/features/cardSlice";


const CartDetails = () => {
  const { carts } = useSelector((state) => state.allCart);

  const [totalPrice, setTotalPrice] = useState(0);
  const [totalQuantity, setTotalQuantity] = useState(0);

  const dispatch = useDispatch();

  const handleIncrement = (product) => {
    dispatch(addToCart(product));
  };

  const handleDecrement = (product) => {
    dispatch(removeSingleIteams(product));
  };

  // Delete single item
  const handleDelete = (id) => {
    dispatch(removeToCart(id));
  };

  // Clear all items
  const handleClear = () => {
    dispatch(emptyCartIteams());
  };

  // Calculate Total Price
  const total = () => {
    let total = 0;
    carts.forEach((product) => {
      total += product.price * product.qnty;
    });
    setTotalPrice(total);
  };

  useEffect(() => {
    total();
  }, [carts]);

  // Calculate Total Quantity
  const totalQuantityInCart = () => {
    let totalQuantity = 0;
    carts.forEach((product) => {
      totalQuantity += product.qnty;
    });
    setTotalQuantity(totalQuantity);
  };

  useEffect(() => {
    totalQuantityInCart();
  }, [carts]);

  return (
    <>
      <div className="bg-gray-50 xl:w-[1280px] m-auto rounded-md py-8 h-[70vh]">
        <section className="relative  flex justify-center  ">
          <div className="bg-white shadow-md rounded-lg w-[60%] mx-auto">
            <div className=" bg-gray-500 p-3 border-b border-gray-200 flex justify-between items-center rounded-t-lg">
              <h1 className="text-2xl text-white font-semibold ">
                Cart Details
              </h1>

              {carts.length > 0 ? (
                <button
                  onClick={() => handleClear()}
                  className="bg-red-500 hover:bg-red-600 text-white font-semibold px-4 py-2 rounded-lg"
                >
                  <i className="fa-solid fa-trash mr-2"></i>
                  Clear Cart
                </button>
              ) : null}
            </div>

            <div className="p-5">
              {carts.length === 0 ? (
                <div className="flex flex-col justify-center items-center h-40">
                  <i className="fa-solid fa-cart-plus text-6xl text-gray-300"></i>
                  <h2 className="text-xl font-semibold text-gray-600 mt-4">
                    No items in the cart
                  </h2>
                </div>
              ) : (
                <div className="overflow-x-auto">
                  <table className="min-w-full border-collapse">
                    <thead>
                      <tr className="bg-gray-100 text-left">
                        <th className="px-4 py-2 text-gray-700 font-medium">
                          Action
                        </th>
                        <th className="px-4 py-2 text-gray-700 font-medium">
                          Product
                        </th>
                        <th className="px-4 py-2 text-gray-700 font-medium">
                          Name
                        </th>
                        <th className="px-4 py-2 text-gray-700 font-medium">
                          Price
                        </th>
                        <th className="px-10 py-2 text-gray-700 font-medium">
                          Quantity
                        </th>
                        <th className="px-4 py-2 text-gray-700 font-medium">
                          Total
                        </th>
                      </tr>
                    </thead>

                    <tbody>
                      {carts.map((product) => (
                        <tr
                          key={product._id}
                          className=" border-b hover:bg-gray-50"
                        >
                          <td className="px-4 py-2">
                            <button
                              onClick={() => handleDelete(product._id)}
                              className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600"
                            >
                              <i className="fa-solid fa-trash"></i>
                            </button>
                          </td>
                          <td className="px-4 py-2">
                            <img
                              src={product.image}
                              alt={product.title}
                              className="w-16 h-16 object-cover rounded-lg"
                            />
                          </td>
                          <td className="px-4 py-2 text-gray-800">
                            {product.title}
                          </td>
                          <td className="px-4 py-2 text-gray-800">
                            ${product.price}
                          </td>
                          <td className=" py-2 flex-col items-center ">
                            <button
                              className="bg-gray-200 text-gray-700 mr-3 px-3 py-1 rounded-md hover:bg-gray-300"
                              type="button"
                              onClick={
                                product.qnty <= 1
                                  ? () => handleDelete(product._id)
                                  : () => handleDecrement(product)
                              }
                            >
                              <i className="fa fa-minus"></i>
                            </button>

                            <input
                              type="text"
                              className="w-12 h-8 text-center mr-3 border rounded-md focus:outline-none"
                              value={product.qnty}
                              readOnly
                            />

                            <button
                              className="bg-gray-200 text-gray-700 px-3 py-1 rounded-md hover:bg-gray-300"
                              type="button"
                              onClick={() => handleIncrement(product)}
                            >
                              <i className="fa fa-plus"></i>
                            </button>
                          </td>
                          <td className="px-4 py-2 text-gray-800">
                            ${product.price * product.qnty}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}

              {carts.length > 0 && (
                <div className="mt-6 flex justify-between items-center border-t pt-4">
                  <div className="text-lg">
                    <span className="font-semibold text-gray-700">Items:</span>{" "}
                    {carts.length}
                  </div>
                  <div className="text-lg">
                    <span className="font-semibold text-gray-700">
                      Total Quantity:
                    </span>{" "}
                    {totalQuantity}
                  </div>
                  <div className="text-lg font-semibold text-gray-800">
                    Total Price:{" "}
                    <span className="text-green-600">${totalPrice}</span>
                  </div>
                  <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-5 py-2 rounded-lg">
                    Proceed to Payment
                  </button>
                </div>
              )}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default CartDetails;
