import { useState } from "react";

const NewLetterBox = () => {
    const [email, setEmail] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        
        console.log(email);
    }
  return (
    <div className=" mt-10">
      <div className="flex flex-col items-center justify-center text-lg font-medium gap-4">
        <div className="flex flex-col items-center justify-center text-center">
          <h2 className="text-xl font-bold">Subscribe & get 20% off</h2>
          <p className="text-base text-gray-600">
            Sign up for our weekly industry updates, insider perspectives and
            in-depth market analysis.
          </p>
        </div>

  
          <form onChange={handleSubmit} className="flex sm:w-1/2  items-center justify-center text-lg font-medium gap-3 mx-auto border pl-3">
            <input type="email" name="email" onChange={(e)=>setEmail(e.target.value)} placeholder="Enter your email" required className="w-full sm:flex-1 outline-none"/>
            <button type="submit" className="bg-slate-800 text-white py-2 px-3">Subscribe</button>
          </form>
        
      </div>
    </div>
  );
};

export default NewLetterBox;
