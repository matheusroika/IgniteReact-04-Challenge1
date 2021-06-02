import { Swiper as SwiperSwiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/core';

import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css"
import "swiper/components/pagination/pagination.min.css"
import { SwiperImage } from "./SwiperImage";
import { WidescreenProp } from "../../types/components";

SwiperCore.use([Navigation, Pagination, Mousewheel, Keyboard]);

export function Swiper({ isWidescreen }: WidescreenProp) {
  return (
    <>
    <SwiperSwiper
      cssMode={true}
      navigation={true}
      pagination={true}
      mousewheel={true}
      keyboard={true}
      className="mySwiper"
      autoHeight
    >
      <SwiperSlide>
        <SwiperImage continent='Europa' description='Conhecido como velho mundo.' isWidescreen={isWidescreen} />
      </SwiperSlide>
      <SwiperSlide>
        <SwiperImage continent='Ásia' description='O continente mais antigo.' isWidescreen={isWidescreen} />
      </SwiperSlide>
      <SwiperSlide>
        <SwiperImage continent='América do Sul' description='Muitas belezas naturais.' isWidescreen={isWidescreen} />
      </SwiperSlide>
      <SwiperSlide>
        <SwiperImage continent='América do Norte' description='Tem de tudo um pouco.' isWidescreen={isWidescreen} />
      </SwiperSlide>
      <SwiperSlide>
        <SwiperImage continent='Oceania' description='Paisagens exóticas.' isWidescreen={isWidescreen} />
      </SwiperSlide>
      <SwiperSlide>
        <SwiperImage continent='África' description='Cultura impressionante.' isWidescreen={isWidescreen} />
      </SwiperSlide>
    </SwiperSwiper>
    </>
  )
}