import React, { Fragment } from 'react';
import Navbar from '../../components/Navbar/Navbar'
import Hero from '../../components/hero/hero';
import FunFact from '../../components/FunFact/FunFact';
import About from '../../components/about/about';
import ServiceSection from '../../components/ServiceSection/ServiceSection';
import HistorySection from '../../components/HistorySection/HistorySection';
import TeamSection from '../../components/TeamSection/TeamSection';
import ProjectSection from '../../components/ProjectSection/ProjectSection';
import Testimonial from '../../components/Testimonial/Testimonial';
import BlogSection from '../../components/BlogSection/BlogSection';
import Footer from '../../components/footer/Footer';
import Scrollbar from '../../components/scrollbar/scrollbar';
import Logo from '../../images/allimg/logo/RVKlogo.png'
import HeaderTopbar from '../../components/HeaderTopbar/HeaderTopbar';
import Hero2 from '../../components/hero2/Hero2';
import About2 from '../../components/about2/about2';
import ServiceSection2 from '../../components/ServiceSection2/ServiceSection2';

const HomePage = () => {
    return (
        <Fragment>
            <HeaderTopbar/>
            <Navbar hclass={'wpo-site-header wpo-site-header-s3'}  Logo={Logo} />
            <Hero2/>
            {/* <FunFact hclass={'wpo-feature-section'} /> */}
            <About2 hclass={'wpo-about-section-s2 section-padding'} />
            {/* <ServiceSection hclass={"wpo-service-section section-padding"} /> */}
            <ServiceSection2 hclass={'wpo-service-section-s2 s2 section-padding'}  />
            <HistorySection hclass={'wpo-history-section'}/>
            {/* <TeamSection hclass={'wpo-team-section section-padding'}/> */}
            {/* <ProjectSection hclass={'wpo-project-section'}/> */}
            <Testimonial tClass={'wpo-testimonial-section section-padding'} />
            {/* <BlogSection tClass={'wpo-blog-section section-padding'}/> */}
            <Footer />
            <Scrollbar />
        </Fragment>
    )
};
export default HomePage;