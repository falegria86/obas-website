import { useState } from 'react';
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const ImageModalSlider = ({ slides }: { slides: string[] }) => {
    const [modalOpen, setModalOpen] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);

    const openModal = (index: number) => {
        setCurrentIndex(index);
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
    };

    return (
        <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 sm:gap-5 mt-8 mb-5 sm:mb-0">
                {slides.map((bgImage, index) => (
                    <div key={index}>
                        {index < 8 && (
                            <div
                                className="aspect-square bg-cover bg-center w-full cursor-pointer"
                                style={{ backgroundImage: `url(${bgImage})` }}
                                onClick={() => openModal(index)}
                            />
                        )}
                    </div>
                ))}
            </div>

            {modalOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-75 hidden lg:flex items-center justify-center z-20"
                    onClick={closeModal}
                >
                    <div className="relative w-full max-w-4xl mx-auto" onClick={(e) => e.stopPropagation()}>
                        <Swiper
                            initialSlide={currentIndex}
                            modules={[Navigation, Autoplay]}
                            navigation={{ nextEl: ".arrow-right", prevEl: ".arrow-left" }}
                            autoplay={{ delay: 3000 }}
                            spaceBetween={50}
                            slidesPerView={1}
                            loop={true}
                        >
                            {slides.map((bgImage, index) => (
                                <SwiperSlide key={index}>
                                    <div className="flex items-center justify-center h-screen">
                                        <img src={bgImage} alt={`Slide ${index}`} className="max-h-full max-w-full object-contain" />
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                    <button
                        className="arrow-left absolute top-1/2 transform -translate-y-1/2 left-4 bg-white rounded-full p-2 z-30"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <IoIosArrowBack size={40} />
                    </button>
                    <button
                        className="arrow-right absolute top-1/2 transform -translate-y-1/2 right-4 bg-white rounded-full p-2 z-30"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <IoIosArrowForward size={40} />
                    </button>
                </div>
            )}
        </>
    );
};

export default ImageModalSlider;
