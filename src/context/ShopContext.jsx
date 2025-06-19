import { createContext } from "react";
import PropTypes from 'prop-types';
import { products } from "../assets/frontend_assets/assets";

export const ShopContext = createContext();  // Add export here

const ShopContextProvider = (props) => {
    const currency = "$";
    const deliveryPrice = 10;

    const value = {
        products, currency, deliveryPrice
    };

    return (
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    );
}
ShopContextProvider.propTypes = {
    children: PropTypes.node.isRequired
};

export default ShopContextProvider;
