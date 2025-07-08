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
// import Dropdown from 'react-bootstrap/Dropdown';


import img1 from '../Components/img1.svg';
import img2 from '../Components/img2.svg';
import img87 from '../Components/img87.jpg';
import img88 from '../Components/img88.jpg';



const Appdevelopment = () => {
  return (
    <>

   
        {/* <!-- back to top start --> */}
    <div className="back-to-top-wrapper">
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

                                        <li className="menu-item-has-children"><a href="AboutUs.js">About Us<i
                                                    className="ms-1 fa-solid fa-caret-down"></i></a>

                                            <ul className="mydrop-item">

                                                <li><a className="dr-link" href="AboutUs.js">About Us</a></li>
                                                <li><a className="dr-link" href="ourteam.html">Team</a></li>
                                                <li><a className="dr-link" href="portfolio.html">Our Portfolio</a></li>
                                                <li><a className="dr-link" href="gallery.html">Gallery</a></li>
                                            </ul>

                                        </li>
                                        <li className="">
                                            <a href="Services.js">Services</a>

                                        </li>

                                        <li className=""><a href="Contact.js">Contact</a></li>
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
                                    target="_blank">Apply for Internship</a>
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
        <div className="tgmobile__menu">
            <nav className="tgmobile__menu-box">
                <div className="close-btn"><i className="fa-sharp fa-regular fa-xmark"></i></div>
                <div className="nav-logo">
                    <a href="index.html">
                        <img className="img-fluid" src={img2} alt="img2"/>
                    </a>
                </div>
                <div className="tgmobile__menu-outer">
                    {/* <!--Here Menu Will Come Automatically Via Javascript / Same Menu as in Header--> */}
                </div>

            </nav>
        </div>
        <div className="tgmobile__menu-backdrop"></div>
        {/* <!-- End Mobile Menu --> */}


    </header>

    <main>
        {/* <!-- breadcrumb-area-start --> */}
        <div className="app-dev-hero tg-breadcrumb-area tg-breadcrumb-height p-relative">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="tg-breadcrumb__content z-index-3 text-center">
                            <h1 className="tg-breadcrumb__title display-4 fw-bold mb-4">App Development</h1>
                            <div className="tg-breadcrumb__list">
                                <span><a href="Home.js">Home</a></span>
                                <span className="dvdr"><i className="fa-solid fa-chevron-right"></i></span>
                                <span><a href="Services.js">Services</a></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- breadcrumb-area-end --> */}

        {/* <!-- service-intro-section --> */}
        <section className="pt-50">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 mb-4 mb-lg-0">
                        <h2 className="mb-4">Custom Mobile App Development</h2>
                        <p className="lead">We create innovative mobile applications that solve real business problems and
                            deliver exceptional user experiences.</p>
                        <p>Our app development services cover the entire lifecycle from concept to deployment and
                            beyond. Whether you need a native iOS/Android app, a cross-platform solution, or a
                            progressive web app, we have the expertise to bring your vision to life with cutting-edge
                            technologies and industry best practices.</p>
                        <div className="mt-4">
                            <a href="#" className="tg-btn-gradient">Get Started</a>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="app-showcase">
                            <div className="row g-0">
                                <div className="col-6">
                                    <div className="app-screen">
                                         <img src={img87} alt="App Screen"
                                            className="img-fluid rounded"/> 
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="app-screen">
                                       <img src={img88} alt="App Screen"
                                            className="img-fluid rounded"/> 
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* <!-- platforms-section --> */}
        <section className="pt-50 bg-light">
            <div className="container">
                <div className="text-center mb-60">
                    <h2 className="mb-3">Our App Development Platforms</h2>
                    <p className="lead">We build for all major platforms and devices</p>
                </div>

                <div className="row g-4">
                    <div className="col-md-4">
                        <div className="platform-card">
                            <div className="icon mb-4 text-center">
                                <i className="fab fa-apple fa-4x mb-3"></i>
                            </div>
                            <h4 className="text-center mb-4">iOS App Development</h4>
                            <p>Native iOS applications built with Swift and Objective-C, optimized for iPhones and iPads
                                with seamless integration across Apple's ecosystem.</p>
                            <ul className="list-unstyled mt-4">
                                <li className="mb-2"><i className="fas fa-check text-primary me-2"></i> Swift & Objective-C</li>
                                <li className="mb-2"><i className="fas fa-check text-primary me-2"></i> UIKit & SwiftUI</li>
                                <li className="mb-2"><i className="fas fa-check text-primary me-2"></i> ARKit integration</li>
                                <li className="mb-2"><i className="fas fa-check text-primary me-2"></i> Apple Watch apps</li>
                                <li className="mb-2"><i className="fas fa-check text-primary me-2"></i> App Store submission
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="platform-card">
                            <div className="icon mb-4 text-center">
                                <i className="fab fa-android fa-4x mb-3"></i>
                            </div>
                            <h4 className="text-center mb-4">Android App Development</h4>
                            <p>Native Android applications developed with Kotlin and Java, designed for optimal
                                performance across all Android devices and versions.</p>
                            <ul className="list-unstyled mt-4">
                                <li className="mb-2"><i className="fas fa-check text-primary me-2"></i> Kotlin & Java</li>
                                <li className="mb-2"><i className="fas fa-check text-primary me-2"></i> Jetpack Components</li>
                                <li className="mb-2"><i className="fas fa-check text-primary me-2"></i> Material Design</li>
                                <li className="mb-2"><i className="fas fa-check text-primary me-2"></i> Android Auto/TV</li>
                                <li className="mb-2"><i className="fas fa-check text-primary me-2"></i> Play Store submission
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="platform-card">
                            <div className="icon mb-4 text-center">
                                <i className="fas fa-mobile-alt fa-4x mb-3"></i>
                            </div>
                            <h4 className="text-center mb-4">Cross-Platform Development</h4>
                            <p>Single codebase applications that run on both iOS and Android, reducing development time
                                and cost while maintaining native-like performance.</p>
                            <ul className="list-unstyled mt-4">
                                <li className="mb-2"><i className="fas fa-check text-primary me-2"></i> Flutter framework</li>
                                <li className="mb-2"><i className="fas fa-check text-primary me-2"></i> React Native</li>
                                <li className="mb-2"><i className="fas fa-check text-primary me-2"></i> Xamarin/.NET MAUI</li>
                                <li className="mb-2"><i className="fas fa-check text-primary me-2"></i> 90% code sharing</li>
                                <li className="mb-2"><i className="fas fa-check text-primary me-2"></i> Native performance</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* <!-- services-offered-section --> */}
        <section className="pt-50">
            <div className="container">
                <div className="text-center mb-60">
                    <h2 className="mb-3">Our App Development Services</h2>
                    <p className="lead">End-to-end solutions for your mobile strategy</p>
                </div>

                <div className="row g-4">
                    <div className="col-md-6 col-lg-4">
                        <div className="feature-card">
                            <div className="icon mb-4 text-primary">
                                <i className="flaticon flaticon-028-smartphone fa-3x"></i>
                            </div>
                            <h4>Custom Mobile Apps</h4>
                            <p>Tailored mobile applications designed specifically for your business needs and target
                                audience.</p>
                            <ul className="list-unstyled">
                                <li><i className="fas fa-check text-primary me-2"></i> Business apps</li>
                                <li><i className="fas fa-check text-primary me-2"></i> Lifestyle apps</li>
                                <li><i className="fas fa-check text-primary me-2"></i> Utility apps</li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-md-6 col-lg-4">
                        <div className="feature-card">
                            <div className="icon mb-4 text-primary">
                                <i className="flaticon flaticon-006-cloud-computing fa-3x"></i>
                            </div>
                            <h4>E-Commerce Apps</h4>
                            <p>Mobile shopping experiences with seamless checkout, product catalogs, and payment
                                integrations.</p>
                            <ul className="list-unstyled">
                                <li><i className="fas fa-check text-primary me-2"></i> Product management</li>
                                <li><i className="fas fa-check text-primary me-2"></i> Payment gateways</li>
                                <li><i className="fas fa-check text-primary me-2"></i> Order tracking</li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-md-6 col-lg-4">
                        <div className="feature-card">
                            <div className="icon mb-4 text-primary">
                                <i className="flaticon flaticon-001-laptop fa-3x"></i>
                            </div>
                            <h4>Enterprise Apps</h4>
                            <p>Secure business applications that streamline operations and improve workforce
                                productivity.</p>
                            <ul className="list-unstyled">
                                <li><i className="fas fa-check text-primary me-2"></i> CRM integration</li>
                                <li><i className="fas fa-check text-primary me-2"></i> ERP solutions</li>
                                <li><i className="fas fa-check text-primary me-2"></i> Field service apps</li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-md-6 col-lg-4">
                        <div className="feature-card">
                            <div className="icon mb-4 text-primary">
                                <i className="flaticon flaticon-004-server fa-3x"></i>
                            </div>
                            <h4>IoT & Wearable Apps</h4>
                            <p>Applications that connect with smart devices, wearables, and IoT ecosystems.</p>
                            <ul className="list-unstyled">
                                <li><i className="fas fa-check text-primary me-2"></i> Health & fitness</li>
                                <li><i className="fas fa-check text-primary me-2"></i> Smart home control</li>
                                <li><i className="fas fa-check text-primary me-2"></i> Bluetooth integration</li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-md-6 col-lg-4">
                        <div className="feature-card">
                            <div className="icon mb-4 text-primary">
                                <i className="flaticon flaticon-015-email fa-3x"></i>
                            </div>
                            <h4>On-Demand Apps</h4>
                            <p>Platforms that connect service providers with customers in real-time.</p>
                            <ul className="list-unstyled">
                                <li><i className="fas fa-check text-primary me-2"></i> Ride-sharing</li>
                                <li><i className="fas fa-check text-primary me-2"></i> Food delivery</li>
                                <li><i className="fas fa-check text-primary me-2"></i> Service booking</li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-md-6 col-lg-4">
                        <div className="feature-card">
                            <div className="icon mb-4 text-primary">
                                <i className="flaticon flaticon-040-laptop fa-3x"></i>
                            </div>
                            <h4>App Maintenance</h4>
                            <p>Ongoing support and updates to keep your app secure and performing optimally.</p>
                            <ul className="list-unstyled">
                                <li><i className="fas fa-check text-primary me-2"></i> Bug fixes</li>
                                <li><i className="fas fa-check text-primary me-2"></i> OS updates</li>
                                <li><i className="fas fa-check text-primary me-2"></i> Feature enhancements</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>







        {/* <!-- development-process-section --> */}
        <section className="pt-50 bg-light">
            <div className="container">
                <div className="text-center mb-60">
                    <h2 className="mb-3">Our App Development Process</h2>
                    <p className="lead">A proven methodology to deliver successful mobile applications</p>
                </div>

                <div className="row">
                    <div className="col-lg-11 mx-auto">
                        <div className="process-step">
                            <div className="process-step-number">1</div>
                            <div className="process-step-content">
                                <h4>Discovery & Strategy</h4>
                                <p>We begin by understanding your business objectives, target audience, and technical
                                    requirements. Our team conducts market research and creates a comprehensive app
                                    strategy including feature set, technology stack, and roadmap.</p>
                            </div>
                        </div>

                        <div className="process-step">
                            <div className="process-step-number">2</div>
                            <div className="process-step-content">
                                <h4>UI/UX Design</h4>
                                <p>Our designers create wireframes and prototypes focusing on intuitive navigation and
                                    engaging user experiences. We follow platform-specific design guidelines (Material
                                    Design for Android, Human Interface for iOS) while maintaining your brand identity.
                                </p>
                            </div>
                        </div>

                        <div className="process-step">
                            <div className="process-step-number">3</div>
                            <div className="process-step-content">
                                <h4>Development</h4>
                                <p>Using agile methodologies, our developers build your app with clean, maintainable
                                    code. We implement continuous integration and conduct regular code reviews to ensure
                                    quality. Features are developed in sprints with regular demos.</p>
                            </div>
                        </div>

                        <div className="process-step">
                            <div className="process-step-number">4</div>
                            <div className="process-step-content">
                                <h4>Quality Assurance</h4>
                                <p>We conduct rigorous testing including functional testing, performance testing,
                                    security testing, and usability testing across multiple devices. Our QA process
                                    ensures your app works flawlessly in all scenarios.</p>
                            </div>
                        </div>

                        <div className="process-step">
                            <div className="process-step-number">5</div>
                            <div className="process-step-content">
                                <h4>Deployment</h4>
                                <p>We handle all aspects of app store submission including preparing assets, writing
                                    descriptions, and managing the review process. For enterprise apps, we implement
                                    secure distribution methods.</p>
                            </div>
                        </div>

                        <div className="process-step">
                            <div className="process-step-number">6</div>
                            <div className="process-step-content">
                                <h4>Post-Launch Support</h4>
                                <p>After launch, we monitor app performance, gather user feedback, and release updates.
                                    Our analytics integration provides insights to guide future enhancements and
                                    marketing strategies.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

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
                                    <li><a href="index.html"><i className="fa-regular fa-angle-right"></i>Home</a></li>
                                    <li><a href="about-us.html"><i className="fa-regular fa-angle-right"></i>About Us</a>
                                    </li>
                                    <li><a href="ourteam.html"><i className="fa-regular fa-angle-right"></i>Team</a></li>

                                    <li><a href="gallery.html"><i className="fa-regular fa-angle-right"></i>Gallery</a></li>


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
                                            target="_blank"><i className="fa-regular fa-angle-right"></i>Apply for
                                            Internship</a>
                                    </li>
                                    <li><a href="career.html"><i className="fa-regular fa-angle-right"></i>Career at
                                            Versai</a></li>
                                    <li><a href="contact.html"><i className="fa-regular fa-angle-right"></i>Contact Us</a>
                                    </li>
                                    <li><a href="service.html"><i className="fa-regular fa-angle-right"></i>Services</a>
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
                                    <li><a href="termscond.html"><i className="fa-regular fa-angle-right"></i>Terms &
                                            Condition</a></li>
                                    <li><a href="cancellation.html"><i
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
                                <a className="text-anim-2" href="https://www.facebook.com/profile.php?id=61576737841115" target="_blank"><i className="fab fa-facebook-f"></i></a>                                <a className="text-anim-2" href="https://www.instagram.com/versai_technology/reels/" target="_blank"><i className="fab fa-instagram"></i></a>
                                <a className="text-anim-2" href="https://www.youtube.com/@versaiAcademy94" target="_blank"><i className="fab fa-youtube"></i></a>
                                <a className="text-anim-2" href="https://www.linkedin.com/company/versaitechnology/posts/?feedView=all" target="_blank"><i className="fab fa-linkedin-in"></i></a>
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

export default Appdevelopment;