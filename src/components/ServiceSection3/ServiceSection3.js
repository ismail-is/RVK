import React from 'react';
import Services from "../../api/Services";
import { Link } from 'react-router-dom';

const ServiceSection3 = (props) => {
    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }
    return (
        <section className={"" + props.hclass}>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-6 col-12">
                        <div className="wpo-section-title-s2">
                            <h2>What We Offer</h2>
                            <h3>Our Services</h3>
                        </div>
                    </div>
                </div>
                <div className="row">
                    {Services.slice(0, 4).map((service, index) => (
                    <div className="col-lg-6 col-12" key={index}>
                        <div className="service-card">
                            <div className="content">
                                <div className="icon">
                                    <img src={service.icon} alt=""/>
                                </div>
                                <div className="text">
                                        <h2><Link onClick={ClickHandler} to={`/service-single/${service.slug}`}>Power & Energy Sectors</Link></h2>
                                    <p>Sagittis fringilla a scelerisque sitro consetetur nunc. Urna est eget
                                        pellentesque.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServiceSection3;