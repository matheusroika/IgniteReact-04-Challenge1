import { Swiper as SwiperSwiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Mousewheel, Keyboard, SwiperOptions } from 'swiper/core';

import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css"
import "swiper/components/pagination/pagination.min.css"
import { SwiperImage } from "./SwiperImage";

SwiperCore.use([Navigation, Pagination, Mousewheel, Keyboard]);

export function Swiper({ ...rest }: SwiperOptions) {
  return (
    <>
    <SwiperSwiper
      cssMode={true}
      navigation={true}
      pagination={true}
      mousewheel={true}
      keyboard={true}
      className="mySwiper"
      {...rest}
    >
      <SwiperSlide>
        <SwiperImage continent='Europa' description='Conhecido como velho mundo.' />
      </SwiperSlide>
      <SwiperSlide>
        <SwiperImage continent='Ásia' description='O continente mais antigo.' />
      </SwiperSlide>
      <SwiperSlide>
        <SwiperImage continent='América do Sul' description='Muitas belezas naturais.' />
      </SwiperSlide>
      <SwiperSlide>
        <SwiperImage continent='América do Norte' description='Tem de tudo um pouco.' />
      </SwiperSlide>
      <SwiperSlide>
        <SwiperImage continent='Oceania' description='Paisagens exóticas.' />
      </SwiperSlide>
    </SwiperSwiper>
    </>
  )
}