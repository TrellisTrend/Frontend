
import { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import { Link } from 'react-router-dom';

const ProductItem = (product) => {

    const {currency} = useContext(ShopContext);
  return (
    <Link className='text-gray-700 cursor-pointer' to={`/product/${product._id}`}>
        
        <div className='overflow-hidden'>
            <img src={product.image[0]} alt={product.name} className='hover:scale-110 transition ease-in-out w-[484px]'/>
        </div>

        <div className='text-center'>
                <h2 className=''>{product.name}</h2>
                <p>{currency}{product.price}</p>
        </div>

      
    </Link>
  )
}

export default ProductItem
