
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Autoplay,
  Mousewheel,
  Keyboard,
} from "swiper/modules";
import HeroSlide from "./HeroSlide";
import men from "../assets/frontend_assets/man.png";
import women from "../assets/frontend_assets/man.png";
import couple from "../assets/frontend_assets/man.png";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Hero = () => {
  const sliders = [
    {
      _id: "6729fdd1e2e16b2676212ec8",
      heading: "Bobbie Le",
      image: men,
      details:
        "Nisi culpa do ipsum dolore irure eiusmod magna. Et culpa et Lorem et laboris incididunt sint sit non duis dolor adipisicing sint. Ea est quis exercitation id laboris cillum fugiat anim enim ad labore nostrud.",
    },
    {
      _id: "6729fdd1fc054150576200ee",
      heading: "Mattie Dalton",
      image: women,
      details:
        "Anim labore in ullamco commodo consectetur aute id eu tempor nisi. Esse fugiat non nulla non laborum mollit mollit. Elit deserunt duis non do ad adipisicing. Veniam ullamco sit nostrud non adipisicing cupidatat nostrud nulla cupidatat exercitation.",
    },
    {
      _id: "6729fdd184fdee1c0b01bc4e",
      heading: "Sweeney Roy",
      image: couple,
      details:
        "Sint nisi cillum ullamco qui minim. Tempor enim proident velit deserunt duis nostrud velit occaecat qui est reprehenderit. Voluptate deserunt ad id nisi cillum deserunt amet est. Ullamco nulla id mollit aute aliqua. Sunt sint dolore ex magna reprehenderit ex ut in ut. Excepteur tempor magna nostrud nulla.",
    },
  ];

  return (
    <div className="my-8">
      <Swiper
        style={{
          "--swiper-navigation-color": "#1E3A8A",
        }}
        className="xl:w-[1280px] m-auto"
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        mousewheel={false}
        keyboard={{
          enabled: true,
        }}
        navigation
        pagination={{
          dynamicBullets: true,
        }}
        loop
        modules={[Navigation, Pagination, Autoplay, Mousewheel, Keyboard]}
      >
        {sliders.map((slide) => (
          <SwiperSlide key={slide._id}>
            <HeroSlide slide={slide} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Hero;
