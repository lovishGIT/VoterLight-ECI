import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function Hero() {
    return (
        <>
            <Swiper
                modules={[Autoplay, Pagination, Navigation]}
                keyboard={{
                    enabled: true,
                }}
                pagination={{
                    clickable: true,
                }}
                autoplay={{
                    delay: 4000,
                }}
                spaceBetween={50}
                slidesPerView={1}
                navigation
            >
                <SwiperSlide>
                    <div className="w-full h-[350px] bg-[url(https://www.eci.gov.in/eci-backend/public/banner/March/15UP2uCGymOTr4O1710523300.jpg)] bg-cover bg-center"></div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="w-full h-[350px] bg-[url(https://www.eci.gov.in/eci-backend/public/banner/April/cg1wvFMPLChgIFV1712124541.jpg)] bg-cover bg-center"></div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="w-full h-[350px] bg-[url(https://www.eci.gov.in/eci-backend/public/banner/January/2rEFXb3Z7BOAx6G1706514283.jpg)] bg-cover bg-center"></div>
                </SwiperSlide>
            </Swiper>
        </>
    );
}
