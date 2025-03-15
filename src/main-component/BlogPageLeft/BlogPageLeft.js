import React, { Fragment } from 'react';
import HeaderTopbar from '../../components/HeaderTopbar/HeaderTopbar';
import PageTitle from '../../components/pagetitle/PageTitle'
import BlogList from '../../components/BlogList/BlogList.js'
import Scrollbar from '../../components/scrollbar/scrollbar'
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/footer/Footer';

import logo from '../../images/logo-3.svg';

const BlogPageLeft = () => {
    return (
        <Fragment>
            <HeaderTopbar />
            <Navbar hclass={'wpo-site-header wpo-site-header-s3'} Logo={logo} />
            <PageTitle pageTitle={'Latest News'} pagesub={'Blog'} />
            <BlogList blLeft={'order-lg-1'} blRight={'order-lg-2'} />
            <Footer/>
            <Scrollbar />
        </Fragment>
    )
};
export default BlogPageLeft;

