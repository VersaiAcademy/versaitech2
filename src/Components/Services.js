import React from 'react';
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
import { useRef, useEffect } from 'react';
import PureCounter from '@srexi/purecounterjs';

import img1 from '../Components/img1.svg';


const Services = () => {
    const swiperRef = useRef(null);

    useEffect(() => {
        new PureCounter();
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
        {/* <!-- header-area -start--> */}
        <div id="sticky-header" className="tg-header__area black-bg-2 tg-header__mob-space">
                   <div className="container">
                       <div className="row align-items-center">
                           <div className="col-xl-2 col-lg-4 col-md-4 col-6">
                               <div className="logo">
                                   <a href="Home.js">
                                       <img className="img-fluid" src={img1} alt="img1"/>
       
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

        {/* <!-- Mobile Menu  --> */}
        <div class="tgmobile__menu">
            <nav class="tgmobile__menu-box">
                <div class="close-btn"><i class="fa-sharp fa-regular fa-xmark"></i></div>
                <div class="nav-logo">
                    <a href="index.html">
                        {/* <img src="assets/img/logo/logo-white.svg" alt="Nerko"> */}
                    </a>
                </div>
                <div class="tgmobile__menu-outer">
                    {/* <!--Here Menu Will Come Automatically Via Javascript / Same Menu as in Header--> */}
                </div>

            </nav>
        </div>
        <div class="tgmobile__menu-backdrop"></div>
        {/* <!-- End Mobile Menu --> */}


    </header>

    <main>
        {/* <!-- breadcrumb-area-start --> */}
        <div class="tg-breadcrumb-height services-first">
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <div class="tg-breadcrumb__content z-index-3 text-center">
                            <h3 class="tg-breadcrumb__title">Service</h3>
                            <div class="tg-breadcrumb__list">
                                <span><a href="index.html">Home</a></span>
                                <span class="dvdr"><i class="fa-solid fa-chevron-right"></i></span>
                                <span>Service</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- breadcrumb-area-end --> */}

        <div class="terms-service">
            <div class="container">
                <div class="terms-cond">
                    <h6 class="what-we use-gradi">What We Can Do for You</h6>
                    <div>
                        <p class="tersm-para">We Provide Best IT Solutions For Your Business</p>
                    </div>


                    <p class="term-parades">Smart, secure, and scalable IT solutions designed to simplify operations,
                        boost growth, and take your business forward.</p>

                </div>
            </div>
        </div>



        {/* <!-- service-area-start --> */}
        <div class="tg-service-3-area tg-service-3-inner-style  pt-50 pb-50">
            <div class="container">
                <div class="row">
                    <div class="col-xl-4 col-lg-4 col-md-6 col-sm-6 mb-30">
                        <div class="tg-service-3-item text-center">
                            <a href="web-devlopment.html">
                                <div class="tg-service-3-icon mb-25">
                                    <span>
                                        <i class="flaticon flaticon-040-laptop"></i>
                                    </span>
                                </div>
                            </a>
                            <div class="tg-service-3-content">
                                <h5 class="tg-service-3-title pb-20"> <a href="web-devlopment.html">Web design &
                                        development</a>
                                </h5>
                                <p>Empowering businesses with modern, sleek, and high-performance web development,
                                    seamless UX, and lightning-fast performance.</p>
                            </div>
                            <a class="use-gradi btn" href="web-devlopment.html">Read more<i
                                    class="ms-1 fa-solid fa-arrow-right"></i></a>
                        </div>
                    </div>


                    <div class="col-xl-4 col-lg-4 col-md-6 col-sm-6 mb-30">
                        <div class="tg-service-3-item text-center">
                            <a href="app-devlopment.html">
                                <div class="tg-service-3-icon pl mb-25">
                                <span>
                                    <i class="flaticon-028-smartphone"></i>
                                </span>
                            </div>
                            </a>
                            <div class="tg-service-3-content">
                                <h5 class="tg-service-3-title pb-20"> <a href="app-devlopment.html">App Development</a>
                                </h5>
                                <p>"Innovative, high-performance app development seamless, secure, scalable, and
                                    optimized for Android, iOS, and web platforms</p>
                            </div>
                            <a class="use-gradi btn" href="app-devlopment.html">Read more<i
                                    class="ms-1 fa-solid fa-arrow-right"></i></a>
                        </div>
                    </div>


                    <div class="col-xl-4 col-lg-4 col-md-6 col-sm-6 mb-30">
                        <div class="tg-service-3-item text-center">
                            <a href="solution.html">
                                <div class="tg-service-3-icon mb-25">
                                <span>
                                    <i class="flaticon-001-laptop"></i>
                                </span>
                            </div>
                            </a>
                            <div class="tg-service-3-content">
                                <h5 class="tg-service-3-title pb-20"> <a href="solution.html">Graphic Designing</a>
                                </h5>
                                <p>Blending creativity with precision, we design eye-catching visuals that captivate,
                                    communicate, and elevate your brand to the next level.</p>
                            </div>
                            <a class="use-gradi btn" href="solution.html">Read more<i
                                    class="ms-1 fa-solid fa-arrow-right"></i></a>
                        </div>
                    </div>

                    <div class="col-xl-4 col-lg-4 col-md-6 col-sm-6 mb-30">
                        <div class="tg-service-3-item text-center">
                            <a href="Data-Backup.html">
                                <div class="tg-service-3-icon mb-25">
                                <span>
                                    <i class="flaticon-006-cloud-computing"></i>
                                </span>
                            </div>
                            </a>
                            <div class="tg-service-3-content">
                                <h5 class="tg-service-3-title pb-20"> <a href="Data-Backup.html">Data Backup</a>
                                </h5>
                                <p>Reliable, secure, and automated data backup protecting your valuable information from
                                    loss, corruption, and cyber threats effortlessly.</p>
                            </div>
                            <a class="use-gradi btn" href="Data-Backup.html">Read more<i
                                    class="ms-1 fa-solid fa-arrow-right"></i></a>
                        </div>
                    </div>
                    <div class="col-xl-4 col-lg-4 col-md-6 col-sm-6 mb-30">
                        <div class="tg-service-3-item text-center">
                            <a href="IT-Consultation.html">
                                <div class="tg-service-3-icon mb-25">
                                <span>
                                    <i class="flaticon-004-server"></i>
                                </span>
                            </div>
                            </a>
                            <div class="tg-service-3-content">
                                <h5 class="tg-service-3-title pb-20"> <a href="IT-Consultation.html"> IT
                                        Consultation</a>
                                </h5>
                                <p>Expert IT consultation innovative solutions, strategic planning, and cutting-edge
                                    technology to optimize business growth and efficiency.</p>
                            </div>
                            <a class="use-gradi btn" href="IT-Consultation.html">Read more<i
                                    class="ms-1 fa-solid fa-arrow-right"></i></a>
                        </div>
                    </div>
                    <div class="col-xl-4 col-lg-4 col-md-6 col-sm-6 mb-30">
                        <div class="tg-service-3-item text-center">
                            <a href="Data-Backup.html">
                                <div class="tg-service-3-icon mb-25">
                                <span>
                                    <i class="flaticon-015-email"></i>
                                </span>
                            </div>
                            </a>
                            <div class="tg-service-3-content">
                                <h5 class="tg-service-3-title pb-20"> <a href="Data-Backup.html#tech-solution">Tech
                                        Solutions Pro</a>
                                </h5>
                                <p>Tech Solutions Pro delivering innovative, scalable, efficient, reliable, and secure
                                    technology solutions to empower businesses in the digital era</p>
                            </div>
                            <a class="use-gradi btn" href="Data-Backup.html#tech-solution">Read more<i
                                    class="ms-1 fa-solid fa-arrow-right"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- service-area-end --> */}

    </main>

    {/* <!-- funfact area start --> */}
    <div class="tg-funfact-area z-index-1 p-relative">
        <div class="tg-funfact-bg"><span></span></div>
        <div class="tg-funfact-shape-2">
            {/* <img src="assets/img/funfact/shape-2.png" alt=""> */}
        </div>
        <div class="container">
            <div class="tg-funfact-wrap p-relative">
                <div class="tg-funfact-shape">
                    {/* <img src="assets/img/funfact/shape.png" alt=""> */}
                </div>
                <div class="row gx-0">
                    <div class="col-xl-3 col-lg-3 col-md-4 col-sm-6">
                        <div class="tg-funfact-item text-center">
                            <i class="flaticon-009-laptop icon"></i>
                            <h5 class="tg-funfact-number"><i class="purecounter" data-purecounter-duration="1"
                                    data-purecounter-end="100">0</i>+</h5>
                            <span>Team member</span>
                        </div>
                    </div>
                    <div class="col-xl-3 col-lg-3 col-md-4 col-sm-6">
                        <div class="tg-funfact-item text-center">
                            <i class="flaticon-016-sync icon"></i>
                            <h5 class="tg-funfact-number"><i class="purecounter" data-purecounter-duration="1"
                                    data-purecounter-end="20">0</i>+</h5>
                            <span>Winning award</span>
                        </div>
                    </div>
                    <div class="col-xl-3 col-lg-3 col-md-4 col-sm-6">
                        <div class="tg-funfact-item text-center">
                            <i class="flaticon-030-laptop icon"></i>
                            <h5 class="tg-funfact-number"><i class="purecounter" data-purecounter-duration="1"
                                    data-purecounter-end="106">0</i>+</h5>
                            <span>Complete project</span>
                        </div>
                    </div>
                    <div class="col-xl-3 col-lg-3 col-md-4 col-sm-6">
                        <div class="tg-funfact-item text-center">
                            <i class="flaticon-023-hifi icon"></i>
                            <h5 class="tg-funfact-number"><i class="purecounter" data-purecounter-duration="1"
                                    data-purecounter-end="900">0</i>+</h5>
                            <span>Client review</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- funfact area end --> */}


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

export default Services;
