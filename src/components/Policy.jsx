import { assets } from "../assets/frontend_assets/assets"


const Policy = () => {
  return (
    <div className="flex flex-col sm:flex-row justify-around gap-10 sm:gap-2 text-center py-8 ">

        <div className="flex flex-col justify-center items-center">
            <img src={assets.exchange_icon} alt="exchange_icon"/>
            <h1 className="text-xl font-bold">Free Shipping</h1>
            <p className="text-base text-gray-500">On all orders over $75.00</p>
            <p className="text-base text-gray-500">We ship worldwide</p>
            <p className="text-base text-gray-500"> We offer hassle free exchange </p>
        </div>
        <div className="flex flex-col justify-center items-center">
            <img src={assets.quality_icon} alt="exchange_icon"/>
            <p className="text-xl font-bold">One week return policy</p>
            <p className="text-base text-gray-500">We provide 7 days return policy</p>
    
        </div>
        <div className="flex flex-col justify-center items-center">
            <img src={assets.support_img} alt="exchange_icon"/>
            
            <p className="text-xl font-bold">Best customer support</p>
            <p className="text-base text-gray-500">We provide 24 hours customer service</p>
            
        </div>
      
    </div>
  )
}

export default Policy
