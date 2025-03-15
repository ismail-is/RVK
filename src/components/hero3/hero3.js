import React from 'react';
import Slider from "react-slick";
import { Link } from 'react-router-dom'
import VideoModal from "../ModalVideo/VideoModal";


/* images */
import Slider1 from '../../images/slider/slide-img-1.jpg'
import Slider2 from '../../images/slider/slide-img-2.jpg'
import Slider3 from '../../images/slider/slide-img-3.jpg'

const Hero3 = () => {

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    const settings = {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        dots: true,
        speed: 1000,
        autoplay: true,
        fade: true,
        responsive: [{
            breakpoint: 599,
            settings: {
                arrows: false,
            }
        }

        ]

    };

    return (
        <section className="static-hero-s3">
            <div className="container">
                <div className="content">
                    <h2>Welcome to Sailo</h2>
                    <h3>We will provide the best Industrial service</h3>
                    <p>Dapibus aliquet lacus sem egestas netus vestibulum sit turpis scelerisque pharetra pelque diam
                        pharetra curabitur.</p>
                    <div className="hero-btn">
                        <Link onClick={ClickHandler} to="/about" className="theme-btn">Discover More</Link>
                        <VideoModal />
                    </div>
                </div>
            </div>
            <Slider {...settings} className="hero-slider">
                <div className="item">
                    <div className="image">
                        <img src={Slider1} alt="" />
                    </div>
                </div>
                <div className="item">
                    <div className="image">
                        <img src={Slider2} alt="" />
                    </div>
                </div>
                <div className="item">
                    <div className="image">
                        <img src={Slider3} alt="" />
                    </div>
                </div>
            </Slider>

            <div className="line"></div>
            <div className="line-2"></div>
        </section>
    )
}

export default Hero3;