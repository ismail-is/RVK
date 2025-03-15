import React, {Fragment} from 'react';
import HeaderTopbar from '../../components/HeaderTopbar/HeaderTopbar';
import Navbar from '../../components/Navbar/Navbar';
import PageTitle from "../../components/pagetitle/PageTitle";
import CheckoutSection from '../../components/CheckoutSection'
import Scrollbar from '../../components/scrollbar/scrollbar'
import {connect} from "react-redux";
import Footer from '../../components/footer/Footer';
import logo from '../../images/logo-3.svg';
const CheckoutPage =({cartList}) => {
    return(
        <Fragment>
            <HeaderTopbar />
            <Navbar hclass={'wpo-site-header wpo-site-header-s3'} Logo={logo} />
            <PageTitle pageTitle={'Checkout'} pagesub={'Checkout'}/> 
            <CheckoutSection cartList={cartList}/>
            <Footer/>
            <Scrollbar/>
        </Fragment>
    )
};
const mapStateToProps = state => {
    return {
        cartList: state.cartList.cart,
        symbol: state.data.symbol
    }
};

export default connect(mapStateToProps)(CheckoutPage);
