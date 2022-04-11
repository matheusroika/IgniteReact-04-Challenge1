import { Swiper as SwiperSwiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/core';

import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css"
import "swiper/components/pagination/pagination.min.css"
import { SwiperImage } from "./SwiperImage";
import { WidescreenProp } from "../../types/components";

SwiperCore.use([Navigation, Pagination, Mousewheel, Keyboard]);

interface Continent {
  name: string;
  sliderDescription: string;
}

interface SwiperProps extends WidescreenProp {
  continents: Continent[];
}

export function Swiper({ isWidescreen, continents }: SwiperProps) {
  return (
    <>
    <SwiperSwiper
      cssMode={true}
      navigation={true}
      pagination={true}
      mousewheel={true}
      keyboard={true}
      className="mySwiper"
    >
      { continents.map(continent => (
        <SwiperSlide key={ continent.name }>
          <SwiperImage continent={ continent.name } description={ continent.sliderDescription } isWidescreen={isWidescreen} />
        </SwiperSlide>
      ))}
    </SwiperSwiper>
    </>
  )
}