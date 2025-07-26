import React from "react";
import { Autoplay, EffectFade } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { homeHeroItems } from "./homeHeroItems";
import { homeHeroItems as homeHeroItemsMobile } from "./homeHeroItemsMobile";
import { useGlobal } from "../../../../hooks/useGlobal";
import "swiper/css";
import "swiper/css/effect-fade";

const HomeHeroSwiper = () => {
  const { mobileView } = useGlobal();
  const itemsToShow = mobileView ? homeHeroItemsMobile : homeHeroItems;

  return (
    <div className="relative w-full h-[600px]">
      <Swiper
        loop={true}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        speed={1500} // Transición más suave
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, EffectFade]}
        className="absolute top-0 left-0 w-full h-full bg-Blue"
      >
        {itemsToShow.map((item) => (
          <SwiperSlide key={item.id} className="relative">
            {/* Imagen de fondo */}
            <img
              src={`/images/${item.imageName}`}
              alt="Imagen Hero"
              className="w-full h-full object-cover"
            />

            {/* Capa de opacidad (Siempre aplicada) */}
            <div className="absolute top-0 left-0 w-full h-full bg-Blue opacity-80"></div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HomeHeroSwiper;


