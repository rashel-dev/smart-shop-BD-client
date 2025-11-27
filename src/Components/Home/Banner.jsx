"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// Import banner images
import banner1 from "../../assets/1c6f4ad6-3a03-4cb2-bb2a-eaaac2a27504_BD-1976-688.jpg_2200x2200q80.jpg_.avif";
import banner2 from "../../assets/2489f786-1702-4621-a9e2-d7c2535475c5_BD-1976-688.jpg_2200x2200q80.jpg_.avif";
import banner3 from "../../assets/2ca30ed1-44bb-4425-9fcc-50dce79845dd_BD-1976-688.jpg_2200x2200q80.jpg_.avif";
import banner4 from "../../assets/82015288-cab5-4488-8874-9790941c51f6_BD-1976-688.jpg_2200x2200q80.jpg_.avif";
import banner5 from "../../assets/b05279e5-25b3-43b3-875e-3544e22dbd5d_BD-1976-688.jpg_2200x2200q80.jpg_.avif";
import banner6 from "../../assets/d4ebba8a-71a6-4f3a-b42c-9975f017636d_BD-1976-688.jpg_2200x2200q80.jpg_.avif";
import banner7 from "../../assets/e7df3f91-225f-4ba0-a4a2-a3024bf74b83_BD-1976-688.jpg_2200x2200q80.jpg_.avif";

const Banner = () => {
    const slides = [
        { id: 1, image: banner1 },
        { id: 2, image: banner2 },
        { id: 3, image: banner3 },
        { id: 4, image: banner4 },
        { id: 5, image: banner5 },
        { id: 6, image: banner6 },
        { id: 7, image: banner7 },
    ];

    return (
        <div className="container mx-auto px-4 my-8">
            <div className="rounded-3xl overflow-hidden shadow-2xl relative group">
                <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{
                        delay: 5000,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                        dynamicBullets: true,
                    }}
                    loop={true}
                    modules={[Autoplay, Pagination]}
                    className="mySwiper"
                >
                    {slides.map((slide) => (
                        <SwiperSlide key={slide.id}>
                            <div className="relative w-full h-[200px] sm:h-[300px] md:h-[400px] lg:h-[500px]">
                                <Image
                                    src={slide.image}
                                    alt={`Banner ${slide.id}`}
                                    fill
                                    className="object-cover"
                                    priority={slide.id === 1}
                                    quality={100}
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
                                />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default Banner;
