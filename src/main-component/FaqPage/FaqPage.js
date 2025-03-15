import React, { Fragment } from 'react';
import HeaderTopbar from '../../components/HeaderTopbar/HeaderTopbar';
import Navbar from '../../components/Navbar/Navbar';
import PageTitle from '../../components/pagetitle/PageTitle'
import FaqSection from '../../components/FaqSection/FaqSection';
import Footer from '../../components/footer/Footer';
import Scrollbar from '../../components/scrollbar/scrollbar';
import Logo from '../../images/logo-3.svg'


const ProjectPage = () => {
    return (
        <Fragment>
            <HeaderTopbar />
            <Navbar hclass={'wpo-site-header wpo-site-header-s3'} Logo={Logo} />
            <PageTitle pageTitle={'Faq'} pagesub={'Faq'} />
            <FaqSection />
            <Footer />
            <Scrollbar />

        </Fragment>
    )
};
export default ProjectPage;





