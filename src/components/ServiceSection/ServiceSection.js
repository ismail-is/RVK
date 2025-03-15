import React from "react";
import { Link } from 'react-router-dom'
import SectionTitle from "../SectionTitle/SectionTitle";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Services from "../../api/Services";

const ClickHandler = () => {
    window.scrollTo(10, 0);
}

const ServiceSection = (props) => {


    const settings = {
        dots: false,
        arrows: true,
        speed: 1200,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        responsive: [
            {
                breakpoint: 1199,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                }
            },
        ]
    };



    return (
        <section className={"" + props.hclass}>
            <div className="service-wrap">
                <SectionTitle title="What We Offer" subtitle="Our Services" />
                <div className="service-slider">
                    <Slider {...settings}>
                        {Services.slice(0, 5).map((service, index) => (
                            <div className="item" key={index}>
                                <div className="image">
                                    <img src={service.image} alt="" />
                                    <span>{index + 1}</span>
                                    <div className="line-one"></div>
                                    <div className="line-two"></div>
                                </div>
                                <div className="content">
                                    <div className="icon">
                                        <img src={service.icon} alt="" />
                                    </div>
                                    <h2><Link onClick={ClickHandler} to={`/service-single/${service.slug}`}>{service.title}</Link></h2>
                                    <p>{service.description}</p>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </section>
    );
}

export default ServiceSection;




