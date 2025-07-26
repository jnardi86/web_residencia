import React from "react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { homeGaleriaItems } from "./HomeGaleriaItems";
import { useTranslation } from "react-i18next";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const HomeGaleriaSwiper = () => {
  const { t } = useTranslation("translation", { keyPrefix: "home" });

  return (
    <>
      <div className="w-full flex items-center justify-center">
        <h2 className="font-Poppins text-center text-5xl font-ExtraBold text-Black px-4 leading-snug mb-4">
          {t("home_gallery_title_1")}
        </h2>
      </div>

      <div className="w-full">
        <Swiper
          loop={true}
          spaceBetween={10}
          speed={1500}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="w-full flex justify-center"
          breakpoints={{
            320: { slidesPerView: 1, centeredSlides: true }, 
            768: { slidesPerView: 1, centeredSlides: true }, 
            1024: { slidesPerView: 3, centeredSlides: false }, 
            1280: { slidesPerView: 4, centeredSlides: false }, 
          }}
        >
          {homeGaleriaItems.map((item) => (
            <SwiperSlide key={item.id} className="flex justify-center items-center">
              <img
                className="w-full h-[300px] tablet:h-[480px] object-cover transition-transform duration-500 ease-in-out hover:scale-105"
                src={`/images/galeria/${item.imageName}`}
                alt="Imagen de galería"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default HomeGaleriaSwiper;
