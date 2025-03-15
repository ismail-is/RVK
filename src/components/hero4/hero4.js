import React from "react";
import { Navigation, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Link } from 'react-router-dom'
import hero4 from '../../images/slider/slide-4.jpg'
import hero5 from '../../images/slider/slide-5.jpg'
import hero06 from '../../images/slider/slide-6.jpg'


const Hero4 = (props) => {
    return (

        <section className={"" + props.hclass} >
            <Swiper
                // install Swiper modules
                modules={[Navigation, A11y]}
                spaceBetween={0}
                slidesPerView={1}
                loop={true}
                speed={1800}
                parallax={true}
                navigation
            >
                <SwiperSlide>
                    <div className="slide-inner slide-bg-image" style={{ backgroundImage: `url(${hero4})` }}>
                        <div className="container-fluid">
                            <div className="slide-content">
                                <div className="slide-title">
                                    <h2>We Build Your Dream</h2>
                                </div>
                                <div className="slide-text">
                                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt illum
                                        cupiditate rem at earum voluptatem tempore quae pariatur sed inventore error
                                        ducimus,</p>
                                </div>
                                <div  className="slide-btns">
                                    <Link to="/about" className="theme-btn">About Us</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slide-inner slide-bg-image" style={{ backgroundImage: `url(${hero5})` }}>
                        <div className="container-fluid">
                            <div className="slide-content">
                                <div className="slide-title">
                                    <h2>we are industry factory solution</h2>
                                </div>
                                <div className="slide-text">
                                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt illum
                                        cupiditate rem at earum voluptatem tempore quae pariatur sed inventore error
                                        ducimus,</p>
                                </div>
                                <div className="slide-btns">
                                    <Link to="/about" className="theme-btn">About Us</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slide-inner slide-bg-image" style={{ backgroundImage: `url(${hero06})` }}>
                        <div className="container-fluid">
                            <div className="slide-content">
                                <div className="slide-title">
                                    <h2>We Are The Best In The Industry</h2>
                                </div>
                                <div className="slide-text">
                                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt illum
                                        cupiditate rem at earum voluptatem tempore quae pariatur sed inventore error
                                        ducimus,</p>
                                </div>
                                <div className="slide-btns">
                                    <Link to="/about" className="theme-btn">About Us</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

                ...
            </Swiper>
        </section>
    )
}

export default Hero4;