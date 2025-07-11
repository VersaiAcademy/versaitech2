import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import "../assets/css/bootstrap.min.css";
import "../assets/css/animate.min.css";
import "../assets/css/custom-animation.css";
import "../assets/css/fontawesome-all.min.css";
import "../assets/css/swiper-bundle.min.css";
import "../assets/css/magnific-popup.css";
import "../assets/css/flaticon.css";
import "../assets/css/spacing.css";
import "../assets/css/main.css";
import "../assets/css/versaicommon.css";




// gallery images import : - 

import img1 from '../Components/img1.svg';
import img2 from '../Components/img2.svg';
import img30 from '../Components/img30.jpg';
import img31 from '../Components/img31.jpg';
import img32 from '../Components/img32.jpg';
import img33 from '../Components/img33.jpg';
import img34 from '../Components/img34.jpg';
import img35 from '../Components/img35.jpg';
import img36 from '../Components/img36.jpg';
import img37 from '../Components/img37.jpg';
import img38 from '../Components/img38.jpg';
import img39 from '../Components/img39.jpg';
import img40 from '../Components/img40.jpg';
import img41 from '../Components/img41.jpg';
import img42 from '../Components/img42.jpg';
import img43 from '../Components/img43.jpg';
import img44 from '../Components/img44.jpg';
import img45 from '../Components/img45.jpg';
import img46 from '../Components/img46.jpg';
import img47 from '../Components/img47.jpg';
import img48 from '../Components/img48.jpg';
import img49 from '../Components/img49.jpg';
import img50 from '../Components/img50.jpg';
import img51 from '../Components/img51.jpg';
import img52 from '../Components/img52.jpg';
import img53 from '../Components/img53.jpg';
import img54 from '../Components/img54.jpg';
import img55 from '../Components/img55.jpg';
import img56 from '../Components/img56.jpg';
import img57 from '../Components/img57.jpg';
import img58 from '../Components/img58.jpg';
import img59 from '../Components/img59.jpg';
import img60 from '../Components/img60.jpg';
import img61 from '../Components/img61.jpg';
import img62 from '../Components/img62.jpg';
import img63 from '../Components/img63.jpg';
import img64 from '../Components/img64.jpg';
import img65 from '../Components/img65.jpg';
import img66 from '../Components/img66.jpg';
import img67 from '../Components/img67.jpg';
import img68 from '../Components/img68.jpg';
import img69 from '../Components/img69.jpg';
import img70 from '../Components/img70.jpg';
import img71 from '../Components/img71.jpg';
import img72 from '../Components/img72.jpg';
import img73 from '../Components/img73.jpg';
import img74 from '../Components/img74.jpg';












const Gallery = () => {
    useEffect(() => {
        // Back to top button functionality
        const backToTop = document.querySelector(".back-to-top-wrapper");
        
        const handleScroll = () => {
            if (window.scrollY > 300) {
                backToTop.classList.add("back-to-top-btn-show");
            } else {
                backToTop.classList.remove("back-to-top-btn-show");
            }
        };

        window.addEventListener("scroll", handleScroll);

        // Cleanup event listener on component unmount
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };
    return (
        <>
            {/* <!-- back to top start --> */}
            <div className="back-to-top-wrapper" onClick={scrollToTop}>
                <button id="back_to_top" type="button" className="back-to-top-btn">
                    <svg width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11 6L6 1L1 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"
                            strokeLinejoin="round" />
                    </svg>
                </button>
            </div>
            {/* <!-- back to top end --> */}
            <header>
                <div id="sticky-header" className="tg-header__area black-bg-2 tg-header__mob-space">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-xl-2 col-lg-4 col-md-4 col-6">
                                <div className="logo">
                                    <a href="Home.js">
                                        <img className="img-fluid" src={img1} alt="img1" />

                                    </a>
                                </div>
                            </div>
                            <div className="col-xl-6  d-none d-xl-block">
                                <div className="tgmenu__wrap">
                                    <div className="tgmenu__navbar-wrap tgmenu__main-menu">
                                        <nav className="tgmenu__nav">
                                            <ul className="navigation d-xl-flex gap-2 justify-content-center">
                                                <li className=""><a href="Home.js">Home</a></li>

                                                {/* <a className="dropdown dropdown-toggle" type="" data-bs-toggle="dropdown" aria-expanded="false" >
                                         About Us
                                        </a> */}

                                                <li ClassName="menu-item-has-children"><a className="dropdown dropdown-toggle" type="" data-bs-toggle="dropdown" href="/AboutUs.js">About Us<i
                                                    ClassName="ms-1 fa-solid fa-caret-down"></i></a>


                                                    <ul className="dropdown-menu">
                                                        <li><Link className="dropdown-item" to="/AboutUs.js">About Us</Link></li>
                                                        <li><Link className="dropdown-item" to="/Ourteam.js">Team</Link></li>
                                                        <li><Link className="dropdown-item" to="/Portfolio.js">Our Portfolio</Link></li>
                                                        <li><Link className="dropdown-item" to="/Gallery.js">Gallery</Link></li>
                                                    </ul>
                                                </li>

                                                <li className="">
                                                    <a href="/Services.js">Services</a>

                                                </li>

                                                <li className=""><a href="/Contact.js">Contact</a></li>
                                            </ul>
                                        </nav>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-8 col-md-8 col-6">
                                <div className="tgmenu__action-wrap d-flex justify-content-between">

                                    <div className="d-none d-md-flex d-flex gap-3 align-items-center">
                                        <a className="apply-btn apply-career" href="Career.js">Career at Versai</a>
                                        <a className="apply-btn apply-intern apply-active"
                                            href="https://docs.google.com/forms/d/e/1FAIpQLSds9WaOXtaIeKDZBG7o7tqGeDbSy7PASFqcPtnEVBmi9xiLlw/viewform?usp=sharing&ouid=117424442439504764324"
                                            target="_blank" rel="noopener noreferrer">Apply for Internship</a>
                                    </div>
                                    <div className="mobile-nav-toggler d-xl-none ms-auto">
                                        <i className="text-dark fas fa-bars"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <!-- header-area-end --> */}

                {/* { <!-- Mobile Menu  --> } */}
                <div className="tgmobile__menu">
                    <nav className="tgmobile__menu-box">
                        <div className="close-btn"><i className="fa-sharp fa-regular fa-xmark"></i></div>
                        <div className="nav-logo">
                            <a href="Home.js">
                                <img className="img-fluid" src={img2} alt="img2" />
                            </a>
                        </div>
                        <div className="tgmobile__menu-outer">
                            {/* <!--Here Menu Will Come Automatically Via Javascript / Same Menu as in Header--> */}
                        </div>

                    </nav>
                </div>
                <div className="tgmobile__menu-backdrop"></div>
                {/* {/* <!-- End Mobile Menu --> } */}


            </header>
           

    <main>

        {/* <!-- breadcrumb-area-start --> */}
        <div className="tg-breadcrumb-area tg-breadcrumb-height tg-breadcrumb-overley black-bg p-relative"
            data-background="assets/img/breadcrumb/breadcrumb-1-1.jpg">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="tg-breadcrumb__content z-index-3 text-center">
                            <h3 className="tg-breadcrumb__title">Our <span className="use-gradi">Gallery</span></h3>
                            <div className="tg-breadcrumb__list">
                                <span><a href="index.html">Home</a></span>
                                <span className="dvdr"><i className="fa-solid fa-chevron-right"></i></span>
                                <span>Gallery</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- breadcrumb-area-end --> */}

        {/* <!-- projejct-area-start --> */}
        <div class="tg-project-masonary-area pt-120 pb-90">
            <div class="container">
                <div class="row">
                    <div class="col-xl-12">
                        <div class="row">
                            <div class="col-xl-8 col-lg-8 col-md-12 mb-30">
<div class="tg-project-masonary-item">
                                     <img className="img-fluid" src={img30} alt="img30" style={{width: '100%', objectFit: 'cover'}}/>
                                </div>
                            </div>
                            <div class="col-xl-4 col-lg-4 col-md-12 col-sm-6 mb-30">
                                <div class="row flex-lg-column">
                                    <div class="col-12 mb-30">
<div class="tg-project-masonary-item">
                                            <img className="img-fluid" src={img31} alt="img31" style={{width: '100%', objectFit: 'cover'}}/>
                                        </div>
                                    </div>
 <div class="col-12">
                                        <div class="tg-project-masonary-item">
                                              <img className="img-fluid" src={img32} alt="img32" style={{width: '100%', objectFit: 'cover'}}/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                    <div class="col-xl-4 col-lg-4 col-md-6 col-sm-6 mb-30">
                        <div class="tg-project-masonary-item">
                             <img src={img74} alt="img74" style={{width: '100%', objectFit: 'cover'}}/>
                        </div>
                    </div>
<div class="col-xl-4 col-lg-4 col-md-6 col-sm-6 mb-30">
                                <div class="tg-project-masonary-item">
                                      <img src={img34} alt="img34" style={{width: '100%', objectFit: 'cover'}}/>
                                </div>
                            </div>
<div class="col-xl-4 col-lg-4 col-md-6 col-sm-6 mb-30">
                                <div class="tg-project-masonary-item">
                                     <img src={img35} alt="img35" style={{width: '100%', objectFit: 'cover'}}/>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                <div class="row">

<div class="col-xl-4 col-lg-4 col-md-6 col-sm-6 mb-30">
                        <div class="tg-project-masonary-item">
                              <img src={img36} alt="img36" style={{width: '100%', objectFit: 'cover'}}/>
                        </div>
                    </div>


<div class="col-xl-4 col-lg-4 col-md-6 col-sm-6 mb-30">
                        <div class="tg-project-masonary-item">
                              <img src={img37} alt="img37" style={{width: '100%', objectFit: 'cover'}}/>
                        </div>
                    </div>


<div class="col-xl-4 col-lg-4 col-md-6 col-sm-6 mb-30">
                        <div class="tg-project-masonary-item">
                              <img src={img38} alt="img38" style={{width: '100%', objectFit: 'cover'}}/>
                        </div>
                    </div>


<div class="col-xl-4 col-lg-4 col-md-6 col-sm-6 mb-30">
                        <div class="tg-project-masonary-item">
                              <img src={img39} alt="img39" style={{width: '100%', objectFit: 'cover'}}/>
                        </div>
                    </div>


                    <div class="col-xl-4 col-lg-4 col-md-6 col-sm-6 mb-30">
                        <div class="tg-project-masonary-item">
                              <img src={img40} alt="img40" style={{width: '100%', objectFit: 'cover'}}/>
                        </div>
                    </div>


                    <div class="col-xl-4 col-lg-4 col-md-6 col-sm-6 mb-30">
                        <div class="tg-project-masonary-item">
                              <img src={img41} alt="img41" style={{width: '100%', objectFit: 'cover'}}/>
                        </div>
                    </div>

                    <div class="col-xl-4 col-lg-4 col-md-6 col-sm-6 mb-30">
                        <div class="tg-project-masonary-item">
                             <img src={img42} alt="img42" style={{width: '100%', objectFit: 'cover'}}/>
                        </div>
                    </div>

                    <div class="col-xl-4 col-lg-4 col-md-6 col-sm-6 mb-30">
                        <div class="tg-project-masonary-item">
                             <img src={img43} alt="img43" style={{width: '100%', objectFit: 'cover'}}/>
                        </div>
                    </div>

                    <div class="col-xl-4 col-lg-4 col-md-6 col-sm-6 mb-30">
                        <div class="tg-project-masonary-item">
                             <img src={img44} alt="img44" style={{width: '100%', objectFit: 'cover'}}/>
                        </div>
                    </div>


                    <div class="col-xl-4 col-lg-4 col-md-6 col-sm-6 mb-30">
                        <div class="tg-project-masonary-item">
                             <img src={img45} alt="img45" style={{width: '100%', objectFit: 'cover'}}/>
                        </div>
                    </div>


                    <div class="col-xl-4 col-lg-4 col-md-6 col-sm-6 mb-30">
                        <div class="tg-project-masonary-item">
                             <img src={img46} alt="img46" style={{width: '100%', objectFit: 'cover'}}/>
                        </div>
                    </div>


                    <div class="col-xl-4 col-lg-4 col-md-6 col-sm-6 mb-30">
                        <div class="tg-project-masonary-item">
                             <img src={img47} alt="img47" style={{width: '100%', objectFit: 'cover'}}/>
                        </div>
                    </div>



                    <div class="col-xl-4 col-lg-4 col-md-6 col-sm-6 mb-30">
                        <div class="tg-project-masonary-item">
                             <img src={img48} alt="img48" style={{width: '100%', objectFit: 'cover'}}/>
                        </div>
                    </div>

                    <div class="col-xl-4 col-lg-4 col-md-6 col-sm-6 mb-30">
                        <div class="tg-project-masonary-item">
                             <img src={img49} alt="img49" style={{width: '100%', objectFit: 'cover'}}/>
                        </div>
                    </div>


                    <div class="col-xl-4 col-lg-4 col-md-6 col-sm-6 mb-30">
                        <div class="tg-project-masonary-item">
                            <img src={img50} alt="img50" style={{width: '100%', objectFit: 'cover'}}/>
                        </div>
                    </div>


                    <div class="col-xl-4 col-lg-4 col-md-6 col-sm-6 mb-30">
                        <div class="tg-project-masonary-item">
                             <img src={img51} alt="img51" style={{width: '100%', objectFit: 'cover'}}/>
                        </div>
                    </div>


                    <div class="col-xl-4 col-lg-4 col-md-6 col-sm-6 mb-30">
                        <div class="tg-project-masonary-item">
                             <img src={img52} alt="img52" style={{width: '100%', objectFit: 'cover'}}/>
                        </div>
                    </div>


                    <div class="col-xl-4 col-lg-4 col-md-6 col-sm-6 mb-30">
                        <div class="tg-project-masonary-item">
                             <img src={img53} alt="img53" style={{width: '100%', objectFit: 'cover'}}/>
                        </div>
                    </div>


                    <div class="col-xl-4 col-lg-4 col-md-6 col-sm-6 mb-30">
                        <div class="tg-project-masonary-item">
                             <img src={img54} alt="img54" style={{width: '100%', objectFit: 'cover'}}/>
                        </div>
                    </div>


                    <div class="col-xl-4 col-lg-4 col-md-6 col-sm-6 mb-30">
                        <div class="tg-project-masonary-item">
                             <img src={img55} alt="img55" style={{width: '100%', objectFit: 'cover'}}/>
                        </div>
                    </div>


                    <div class="col-xl-4 col-lg-4 col-md-6 col-sm-6 mb-30">
                        <div class="tg-project-masonary-item">
                             <img src={img56} alt="img56" style={{width: '100%', objectFit: 'cover'}}/>
                        </div>
                    </div>


                    <div class="col-xl-4 col-lg-4 col-md-6 col-sm-6 mb-30">
                        <div class="tg-project-masonary-item">
                           <img src={img57} alt="img57" style={{width: '100%', objectFit: 'cover'}}/>
                        </div>
                    </div>


                    <div class="col-xl-4 col-lg-4 col-md-6 col-sm-6 mb-30">
                        <div class="tg-project-masonary-item">
                           <img src={img58} alt="img58" style={{width: '100%', objectFit: 'cover'}}/>
                        </div>
                    </div>


                    <div class="col-xl-4 col-lg-4 col-md-6 col-sm-6 mb-30">
                        <div class="tg-project-masonary-item">
                           <img src={img59} alt="img59" style={{width: '100%', objectFit: 'cover'}}/>
                        </div>
                    </div>


                    <div class="col-xl-4 col-lg-4 col-md-6 col-sm-6 mb-30">
                        <div class="tg-project-masonary-item">
                             <img src={img60} alt="img60" style={{width: '100%', objectFit: 'cover'}}/>
                        </div>
                    </div>


                    <div class="col-xl-4 col-lg-4 col-md-6 col-sm-6 mb-30">
                        <div class="tg-project-masonary-item">
                             <img src={img61} alt="img61" style={{width: '100%', objectFit: 'cover'}}/>
                        </div>
                    </div>

                    <div class="col-xl-4 col-lg-4 col-md-6 col-sm-6 mb-30">
                        <div class="tg-project-masonary-item">
                             <img src={img62} alt="img62" style={{width: '100%', objectFit: 'cover'}}/>
                        </div>
                    </div>


                    <div class="col-xl-4 col-lg-4 col-md-6 col-sm-6 mb-30">
                        <div class="tg-project-masonary-item">
                             <img src={img63} alt="img63" style={{width: '100%', objectFit: 'cover'}}/>
                        </div>
                    </div>


                    <div class="col-xl-4 col-lg-4 col-md-6 col-sm-6 mb-30">
                        <div class="tg-project-masonary-item">
                             <img src={img64} alt="img64" style={{width: '100%', objectFit: 'cover'}}/>
                        </div>
                    </div>

                    <div class="col-xl-4 col-lg-4 col-md-6 col-sm-6 mb-30">
                        <div class="tg-project-masonary-item">
                             <img src={img65} alt="img65" style={{width: '100%', objectFit: 'cover'}}/>
                        </div>
                    </div>


                    <div class="col-xl-4 col-lg-4 col-md-6 col-sm-6 mb-30">
                        <div class="tg-project-masonary-item">
                             <img src={img66} alt="img66" style={{width: '100%', objectFit: 'cover'}}/>
                        </div>
                    </div>



                    <div class="col-xl-4 col-lg-4 col-md-6 col-sm-6 mb-30">
                        <div class="tg-project-masonary-item">
                             <img src={img67} alt="img67" style={{width: '100%', objectFit: 'cover'}}/>
                        </div>
                    </div>



                    <div class="col-xl-4 col-lg-4 col-md-6 col-sm-6 mb-30">
                        <div class="tg-project-masonary-item">
                             <img src={img68} alt="img68" style={{width: '100%', objectFit: 'cover'}}/>
                        </div>
                    </div>



                    <div class="col-xl-4 col-lg-4 col-md-6 col-sm-6 mb-30">
                        <div class="tg-project-masonary-item">
                             <img src={img69} alt="img69" style={{width: '100%', objectFit: 'cover'}}/>
                        </div>
                    </div>



                    <div class="col-xl-4 col-lg-4 col-md-6 col-sm-6 mb-30">
                        <div class="tg-project-masonary-item">
                             <img src={img70} alt="img70" style={{width: '100%', objectFit: 'cover'}}/>
                        </div>
                    </div>


                    <div class="col-xl-4 col-lg-4 col-md-6 col-sm-6 mb-30">
                        <div class="tg-project-masonary-item">
                             <img src={img71} alt="img71" style={{width: '100%', objectFit: 'cover'}}/>
                        </div>
                    </div>


                    <div class="col-xl-4 col-lg-4 col-md-6 col-sm-6 mb-30">
                        <div class="tg-project-masonary-item">
                             <img src={img72} alt="img72" style={{width: '100%', objectFit: 'cover'}}/>
                        </div>
                    </div>


                    <div class="col-xl-4 col-lg-4 col-md-6 col-sm-6 mb-30">
                        <div class="tg-project-masonary-item">
                             <img src={img73} alt="img73" style={{width: '100%', objectFit: 'cover'}}/>
                        </div>
                    </div>


                    <div class="col-xl-4 col-lg-4 col-md-6 col-sm-6 mb-30">
                        <div class="tg-project-masonary-item">
                             <img src={img74} alt="img74" style={{width: '100%', objectFit: 'cover'}}/>
                        </div>
                    </div>

                    {/* <!-- modal images --> */}
                    {/* <div class="modal" id="imageModal">
                        <img id="modalImage" src="" alt="Large view"/>
                    </div> */}

                    {/* <!-- second-modal --> */}
                    {/* <div class="mymodal" id="myimageModal">
                        <img id="mymodalImage" src="" alt="Large view"/>
                    </div> */}
                </div>
            </div>
        </div>
        {/* <!-- projejct-area-end --> */}

        {/* <!-- cta-area-start --> */}

        {/* <!-- cta-area-end --> */}

    </main>

    <footer className="mt-5">
        {/* <!-- footer area start --> */}
        <div className="tg-footer-area fix p-relative z-index black-bg pt-80">

            <div className="container">
                <div className="row">
                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 mb-50  wow tgfadeUp" data-wow-duration=".9s"
                        data-wow-delay=".5s">
                        <div className="tg-footer-widget footer-col-2">
                            <h4 className="tg-footer-widget-title">Useful Links</h4>
                            <div className="tg-footer-list">
                                <ul>
                                    <li><a href="Home.js"><i className="fa-regular fa-angle-right"></i>Home</a></li>
                                    <li><a href="AboutUs.js"><i className="fa-regular fa-angle-right"></i>About Us</a>
                                    </li>
                                    <li><a href="Ourteam.js"><i className="fa-regular fa-angle-right"></i>Team</a></li>

                                    <li><a href="Gallery.js"><i className="fa-regular fa-angle-right"></i>Gallery</a></li>


                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 mb-50  wow tgfadeUp" data-wow-duration=".9s"
                        data-wow-delay=".5s">
                        <div className="tg-footer-widget footer-col-2">
                            <h4 className="tg-footer-widget-title">Resources</h4>
                            <div className="tg-footer-list">
                                <ul>
                                    <li><a href="https://docs.google.com/forms/d/e/1FAIpQLSds9WaOXtaIeKDZBG7o7tqGeDbSy7PASFqcPtnEVBmi9xiLlw/viewform?usp=sharing&ouid=117424442439504764324"
                                            target="_blank" rel="noopener noreferrer"><i className="fa-regular fa-angle-right"></i>Apply for
                                            Internship</a>
                                    </li>
                                    <li><a href="Career.js"><i className="fa-regular fa-angle-right"></i>Career at
                                            Versai</a></li>
                                    <li><a href="Contact.js"><i className="fa-regular fa-angle-right"></i>Contact Us</a>
                                    </li>
                                    <li><a href="Services.js"><i className="fa-regular fa-angle-right"></i>Services</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 mb-50  wow tgfadeUp" data-wow-duration=".9s"
                        data-wow-delay=".3s">
                        <div className="tg-footer-widget footer-col-2">
                            <h4 className="tg-footer-widget-title">Support</h4>
                            <div className="tg-footer-list">
                                <ul>
                                    <li><a href="Termcondition.js"><i className="fa-regular fa-angle-right"></i>Terms &
                                            Condition</a></li>
                                    <li><a href="Cancellation.js"><i
                                                className="fa-regular fa-angle-right"></i>Cancellation and Refund</a>
                                    </li>
                                    <li><a href="Privacy.js"><i className="fa-regular fa-angle-right"></i>Privacy
                                            Policy</a></li>
                                    <li><a href="Privacy.js"><i className="fa-regular fa-angle-right"></i>FAQs</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 mb-50  wow tgfadeUp" data-wow-duration=".9s"
                        data-wow-delay=".7s">
                        <div className="tg-footer-widget footer-col-3">
                            <h4 className="tg-footer-widget-title">Contact Us</h4>
                            <div className="tg-footer-Office-info mb-20">
                                <span>
                                    <a href="#"><i className="fa-solid fa-location-dot"></i>First Floor, Office No 102,
                                        Vishwakarma plaza, Nai Sarak, Opp. Axis Bank, Churu(Raj.) 331001</a>
                                </span>
                                <span>
                                    <a href="tel:+918619708196"><i className="fa-solid fa-phone"></i>+91 8619708196</a>
                                </span>
                                <span>
                                    <a href="mailto:technologyversai01@gmail.com">technologyversai01@gmail.com<i
                                            className="fa-solid fa-envelope"></i></a>
                                </span>


                            </div>


                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- footer area end --> */}
        {/* <!-- copy-right area start --> */}
        <div className="tg-copyright-area">
            <div className="container">
                <div className="tg-copyright-border tg-copyright-ptb">
                    <div className="d-flex flex-column align-items-center">
                        <div className="wow tgfadeUp" data-wow-duration=".9s" data-wow-delay=".3s">
                            <div className="tg-copyright-right text-center text-md-end">
                                <a className="text-anim-2" href="https://www.facebook.com/profile.php?id=61576737841115"
                                    target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a> <a className="text-anim-2"
                                    href="https://www.instagram.com/versai_technology/reels/" target="_blank" rel="noopener noreferrer"><i
                                        className="fab fa-instagram"></i></a>
                                <a className="text-anim-2" href="https://www.youtube.com/@versaiAcademy94"
                                    target="_blank" rel="noopener noreferrer"><i className="fab fa-youtube"></i></a>
                                <a className="text-anim-2"
                                    href="https://www.linkedin.com/company/versaitechnology/posts/?feedView=all"
                                    target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in"></i></a>
                            </div>
                        </div>
                        <div className="wow tgfadeUp" data-wow-duration=".9s" data-wow-delay=".3s">
                            <div className="tg-copyright-left text-center text-md-start">
                                <p>Copyright &#169; 2024 Versai Teachnology OPC Pvt. Ltd. All Right Reserved</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
        {/* <!-- copy-right area end --> */}
    </footer>

    

    </>
  );
};

export default Gallery;
