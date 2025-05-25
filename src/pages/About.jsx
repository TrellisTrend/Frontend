import { Component } from "react";
import logo from "../assets/frontend_assets/logo.png";
import curated from "../assets/frontend_assets/curated.png";
import seem from "../assets/frontend_assets/seem.png";
import sustain from "../assets/frontend_assets/sustain.png";

export default class AboutUs extends Component {
  render() {
    return (
      <div>
        <div className="xl:w-[1280px] m-auto flex-col">
          <div className="flex-col p-10">
            <h1 className="text-3xl text-center">About Us</h1>
          </div>
          <div className="flex flex-col sm:flex-row gap-10 ml-10 mr-10">
            <div className="flex justify-center items-center">
              <div className="relative w-30 h-30 sm:w-44 md:w-56 lg:w-80">
                <img
                  src={logo}
                  alt="logo"
                  className="rounded-3xl hover:shadow-2xl "
                />
              </div>
            </div>
            <div className="flex justify-center items-center">
              <p className="font-roboto">
                Welcome to TrellisTrend, your ultimate destination for trendy
                and stylish clothing! At TrellisTrend, we believe that fashion
                should be accessible to everyone. Our curated collection
                features a diverse range of apparel, from casual wear to chic
                outfits, ensuring that you find the perfect pieces to express
                your unique style. We are passionate about quality and
                sustainability, sourcing our materials responsibly and
                supporting ethical practices. Our mission is to empower
                individuals to embrace their fashion journey while providing an
                exceptional shopping experience. Join us at Urban Closet and
                elevate your wardrobe with the latest trends, all from the
                comfort of your home!
              </p>
            </div>
          </div>
        </div>

        <div className="xl:w-[1280px] m-auto rounded-xl shadow-2xl mt-10">
          <div className="flex m-4">
            <div className="flex-col p-6">
              <div className="mb-4 flex justify-center relative w-20 h-20 sm:w-44 md:w-56 lg:w-80">
                <img
                  src={curated}
                  alt="logo"
                  className="rounded-3xl"
                />
              </div>
              <div className="text-center text-xl py-5">Curated Fashion</div>
              <div className="font-roboto">
                At Urban Closet, we&#39;ve carefully curated a collection of fashion
                essentials that cater to a wide range of styles. From timeless
                basics to the latest trends, our online store offers
                high-quality apparel, accessories, and footwear to help you
                build a wardrobe that reflects your unique sense of style.
              </div>
            </div>
            <div className="flex-col p-6">
              <div className="mb-4 flex justify-center relative w-20 h-20 sm:w-44 md:w-56 lg:w-80">
                <img
                  src={seem}
                  alt="logo"
                  className=""
                />
              </div>
              <div className="text-center text-xl py-5">Seamless Shopping</div>
              <div className="font-roboto">
                Seamless Shopping We&#39;ve designed our website to provide a
                seamless and user-friendly experience. With intuitive
                navigation, detailed product descriptions, and high-quality
                imagery, you can easily browse our collection, find the perfect
                items, and complete your purchase with just a few clicks.
              </div>
            </div>
            <div className="flex-col p-6">
              <div className="mb-4 flex justify-center relative w-20 h-20 sm:w-44 md:w-56 lg:w-80">
                <img
                  src={sustain}
                  alt="logo"
                  className=""
                />
              </div>
              <div className="text-center text-xl py-5">Sustainable Commitment</div>
              <div className="font-roboto">
                At Urban Closet, we&#39;re passionate about sustainability. We
                source our materials and partner with ethical manufacturers to
                ensure our products are not only stylish but also
                environmentally conscious. By supporting our brand, you&#39;re
                contributing to a more sustainable future for the fashion
                industry.
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
