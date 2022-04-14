import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper';

import { useTranslation } from 'react-i18next';

import 'swiper/css';
import 'swiper/css/bundle'

const Carroucel = () => {

    const [t, i18n] = useTranslation("global")
    
    
    return(
        
        <Swiper className="swiper pt-44"
        
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={100}
        slidesPerView={3}
        centeredSlides={true}
        loop={true}
        speed={800}
        autoplay={{delay: 8000}}
        pagination={{el: '.swiper-pagination', clickable: true }}
        
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
        
        >


                <SwiperSlide class="swiper-slide pt-0">
                    <div class="flex flex-col text-center justify-center px-4">
                        <div class="bg-meta-orange w-14 h-3.5 self-center mb-2"></div>
                        <p class="font-metafont1 text-meta-white font-medium text-2xl">{t("carroucel.one")}</p>
                    </div>
                </SwiperSlide>

                <SwiperSlide class="swiper-slide pt-0">
                    <div class="flex flex-col text-center justify-center px-4">
                        <div class="bg-meta-orange w-14 h-3.5 self-center mb-2"></div>
                        <p class="font-metafont1 text-meta-white font-medium text-2xl">{t("carroucel.loyalty")}</p>
                    </div>
                </SwiperSlide>

                <SwiperSlide class="swiper-slide pt-0">
                    <div class="flex flex-col text-center justify-center px-4">
                        <div class="bg-meta-orange w-14 h-3.5 self-center mb-2"></div>
                        <p class="font-metafont1 text-meta-white font-medium text-2xl">{t("carroucel.compromise")}</p>
                    </div>
                </SwiperSlide>

                <SwiperSlide class="swiper-slide pt-0">
                    <div class="flex flex-col text-center justify-center px-4">
                        <div class="bg-meta-orange w-14 h-3.5 self-center mb-2"></div>
                        <p class="font-metafont1 text-meta-white font-medium text-2xl">{t("carroucel.honesty")}</p>
                    </div>
                </SwiperSlide>

                <SwiperSlide class="swiper-slide pt-0">
                    <div class="flex flex-col text-center justify-center px-4">
                        <div class="bg-meta-orange w-14 h-3.5 self-center mb-2"></div>
                        <p class="font-metafont1 text-meta-white font-medium text-2xl">{t("carroucel.teamwork")}</p>
                    </div>
                </SwiperSlide>

                <SwiperSlide class="swiper-slide pt-0">
                    <div class="flex flex-col text-center justify-center px-4">
                        <div class="bg-meta-orange w-14 h-3.5 self-center mb-2"></div>
                        <p class="font-metafont1 text-meta-white font-medium text-2xl">{t("carroucel.community")}</p>
                    </div>
                </SwiperSlide>

                <SwiperSlide class="swiper-slide pt-0">
                    <div class="flex flex-col text-center justify-center px-4">
                        <div class="bg-meta-orange w-14 h-3.5 self-center mb-2"></div>
                        <p class="font-metafont1 text-meta-white font-medium md:text-2xl">{t("carroucel.modesty")}</p>
                    </div>
                </SwiperSlide>
             
            <div class="swiper-pagination mb-28 md:mb-20"></div>
        </Swiper>
         

    
)}

export default Carroucel

 
                
              