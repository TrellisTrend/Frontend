import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/shopContext";
import ProductItem from "../components/ProductItem";
import { assets } from "../assets/frontend_assets/assets";


const Collection = () => {

  const {products} = useContext(ShopContext);
  const [showFilter, setShowFilter] = useState(false);
  const [filterProducts, setFilterProducts] = useState(products);
  const [sortType, setSortType] = useState("relevant");


  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);


  const toggleCategory = (e) => {
    if (category.includes(e.target.value)) {
      setCategory(prev => prev.filter((item) => item !== e.target.value));
    } else {
      setCategory(prev =>[...prev, e.target.value]);
    }
  }

  const toggleSubCategory = (e) => {

    if (subCategory.includes(e.target.value)) {
      setSubCategory(prev => prev.filter((item) => item !== e.target.value));
    } else {
      setSubCategory(prev =>[...prev, e.target.value]);
    }

  }

  const applyFilter = () => {
    let productCopy = products.slice()
    if(category.length>0){
      productCopy = productCopy.filter(product => category.includes(product.category));
    }
    if(subCategory.length>0){
      productCopy = products.filter(product => subCategory.includes(product.subCategory));
    }
    setFilterProducts(productCopy);
  }

  const sortFilter = () => {

    let filterCopy = filterProducts.slice();

    switch(sortType){
      case "low to high":
        filterCopy.sort((a,b) => a.price - b.price);
        break;
      case "high to low":
        filterCopy.sort((a,b) => b.price - a.price);
        break;
      default: applyFilter();
        break;
    }
    setFilterProducts(filterCopy);
  }
    



  useEffect(() => {
    applyFilter();
  },[category,subCategory]);

  useEffect(() => {
    sortFilter();
  },[sortType]);



  return (
    <div className="flex flex-col sm:flex-row justify-between gap-10 mt-10 px-4  md:px-[6vw] lg:px-[8vw]">
      {/* // Filter */}

      <div className="min-w-40">
        <div className="flex items-center gap-2">
          <h1 className="text-2xl font-bold">Filter</h1>
          <img src={assets.dropdown_icon} onClick={() => setShowFilter(!showFilter)} className={`h-4  sm:hidden text-2xl font-bold text-gray-600 ${showFilter ? 'rotate-90': ""}`}/>
             
        </div>

        {/* Category */}
        <div className={`mt-4 border border-gray-300 p-4  sm:block ${showFilter ? '':'hidden'}`}>
          <h2 className="text-lg font-bold ">Category</h2>
          <div className="flex gap-2 text-gray-400">
            <input type="checkbox" className="w-3" value={'Men'} onChange={toggleCategory}/> Men
          </div>
          <div className="flex gap-2 text-gray-400">
            <input type="checkbox" className="w-3" value={'Women'} onChange={toggleCategory}/> Women
          </div>
          <div className="flex gap-2 text-gray-400">
            <input type="checkbox" className="w-3" value={'Kids'} onChange={toggleCategory}/> Kids
          </div>
        </div>

        {/* Sub Category */}

        <div className={`mt-4 border border-gray-300 p-4  sm:block ${showFilter ? '':'hidden'}`}>
          <h2 className="text-lg font-bold ">Type</h2>
          <div className="flex gap-2 text-gray-400">
            <input type="checkbox" className="w-3" value={'Topwear'} onChange={toggleSubCategory}/> Top wear
          </div>
          <div className="flex gap-2 text-gray-400">
            <input type="checkbox" className="w-3" value={'Bottomwear'} onChange={toggleSubCategory}/> Bottom wear
          </div>
          <div className="flex gap-2 text-gray-400">
            <input type="checkbox" className="w-3" value={'Winterwear'} onChange={toggleSubCategory}/> Winter wear
          </div>
        </div>
      </div>

      {/* // Collection */}

      <div className="flex-1 ">

        <div className="flex justify-between">
          <h1 className="text-2xl font-bold"> ALL Collections</h1>

          {/* Sort dropdown */}
          <div className="relative">
            <select onChange={(e)=>setSortType(e.target.value)} className=" appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
              <option value="relevant">Sort by: Relevant </option>
              <option value="low to high">Price: Low to High</option>
              <option value="high to low">Price: High to Low</option>
            </select>
          </div>
        </div>
          
          {/* Product */}

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">

          {filterProducts.map((product,index) => (
            <ProductItem key={index}  {...product}/>
          ))}
          
        </div>
      </div>
    </div>
  );
};

export default Collection;
