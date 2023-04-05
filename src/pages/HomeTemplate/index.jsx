import React, { Component } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './_Components/Header';
import Footer from "./_Components/Footer/";
import HomePages from './HomePages';
// import Loading from "../../components/Loader/Loader";
export default class HomeTemplate extends Component {
    render() {
        return (
            <>
                <Header />
                <HomePages />
                <Footer />
                <Outlet />
            </>
        )
    }
};
