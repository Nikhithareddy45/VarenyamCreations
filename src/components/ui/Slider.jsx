// src/components/Slider.jsx
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

// Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// Image assets
import Slider1 from "../../assets/images/1.png";
import Slider2 from "../../assets/images/2.png";
import Slider3 from "../../assets/images/3.png";
import Slider4 from "../../assets/images/4.png";
import Slider5 from "../../assets/images/5.png";
import Slider6 from "../../assets/images/6.png";

export default function Slider() {
  return (
    <Swiper
      pagination={{ dynamicBullets: true }}
      // autoplay={{ delay: 2000, disableOnInteraction: false }}
      // modules={[Pagination, Autoplay]}
      className="mySwiper w-[80%] m-auto h-auto  [@media(max-width:430px)]:w-[90%] [@media(min-width:1000px)]:h-[400px] rounded"
    >
      <SwiperSlide>
        <img src={Slider2} alt="Earrings-banner" className="w-full h-full object-cover" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={Slider1} alt="Rings-banner" className="w-full h-full object-cover" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={Slider3} alt="Necklace-banner" className="w-full h-full object-cover" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={Slider4} alt="Chains-banner" className="w-full h-full object-cover" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={Slider5} alt="Bangles-banner" className="w-full h-full object-cover" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={Slider6} alt="Bracelets banner" className="w-full h-full object-cover" />
      </SwiperSlide>
    </Swiper>
  );
}
