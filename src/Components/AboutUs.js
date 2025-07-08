 import React from 'react';
 import ReactDOM from 'react-dom';
 import {Link } from 'react-router-dom';
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
 // import 'bootstrap/dist/css/bootstrap.min.css';
 import 'bootstrap/dist/js/bootstrap.bundle.min';
 import 'animate.css';


import img1 from '../Components/img1.svg';
import img8 from '../Components/img8.jpg';
import img19 from '../Components/img19.jpg';
import img20 from '../Components/img20.jpg';
import img89 from '../Components/img89.png';
import img90 from '../Components/img90.png';
import img91 from '../Components/img91.png';

const AboutUs = () => {
  return (
    <>
      {/* Back to Top Button */}
      <div className="back-to-top-wrapper">
        <button id="back_to_top" type="button" className="back-to-top-btn">
          <svg width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11 6L6 1L1 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>

      {/* Header Placeholder */}
      <header>
        {/* <script src="http://localhost:8097"></script> */}
        {/* Add <Header /> component here if modularized */}
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
      </header>

      <main>
        {/* Breadcrumb */}
        <div className="about-first">
          <div className="tg-breadcrumb__content z-index-3 text-center">
            <h3 className="tg-breadcrumb__title">
              About <span className="use-gradi">Us</span>
            </h3>
            <div className="tg-breadcrumb__list">
               <span className="dr-link"><a href="Home.js"> Home </a></span>

              <span className="dr-link"> 
                <i className="fa-solid fa-chevron-right"></i>
              </span>
              <span className="dr-link"><a href="/AboutUs.js"> About US </a></span>
            </div>
          </div>
        </div>

        {/* About Section */}
        <div className="tg-about-area tg-about-inner-style fix p-relative pt-40 pb-40">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-xl-6 col-lg-6 wow tgfadeLeft" data-wow-duration=".9s" data-wow-delay=".5s">
                <div className="tg-about-right-box">
                  <div className="tg-about-title-box mb-15">
                    <span className="tg-section-subtitle">About Our Company</span>
                    <h4 className="tg-section-title">Smart IT Solutions to Drive Your Tech Success</h4>
                  </div>
                  <div className="tg-about-text mb-40">
                    <p>
                      Versai Technology has been delivering top-notch services for over a decade, building a strong track record in the industry and consistently exceeding client expectations with innovative solutions.
                    </p>
                  </div>
                  <div className="tg-hero-button">
                    {/* <Link className="tg-btn-gradient" to="/about-us"> */}
                      Read More
                      <span>
                        <svg width="17" height="12" viewBox="0 0 17 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M15.6875 6.71875L11.6875 10.7188C11.3125 11.125 10.6562 11.125 10.2812 10.7188C9.875 10.3438 9.875 9.6875 10.2812 9.3125L12.5625 7H1C0.4375 7 0 6.5625 0 6C0 5.40625 0.4375 5 1 5H12.5625L10.2812 2.71875C9.875 2.34375 9.875 1.6875 10.2812 1.3125C10.6562 0.90625 11.3125 0.90625 11.6875 1.3125L15.6875 5.3125C16.0938 5.6875 16.0938 6.34375 15.6875 6.71875Z" fill="white" />
                        </svg>
                      </span>
                    {/* </Link> */}
                  </div>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 wow tgfadeRight" data-wow-duration=".9s" data-wow-delay=".7s">
                <div className="tg-about-left">
                  <div className="tg-about-thumb-box text-center text-lg-end p-relative">
                    <div className="tg-about-thumb">
                      <img src={img19} alt="img19"/>
                    </div>
                    <div className="tg-about-thumb-sm">
                       <img src={img20} alt="img20"/>
                    </div>
                    <div className="tg-about-experience-box"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Add other sections here like FAQ, Services, Testimonials, Footer */}

        <div class="tg-faq-2-area pb-50 fix p-relative">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-xl-6 col-lg-6">
                        <div class="tg-faq-2-left">
                            <div class="tg-faq-title-box mb-60">
                                <span class="tg-section-subtitle">Ask Question</span>
                                <h4 class="tg-section-title">Revolutionizing For Technology Future</h4>
                            </div>
                            <div class="tg-custom-accordion-2">
                                <div class="accordion" id="accordionExample">
                                    <div class="accordion-items">
                                        <h2 class="accordion-header" id="headingOne">
                                            <button class="accordion-buttons " type="button" data-bs-toggle="collapse"
                                                data-bs-target="#collapseOne" aria-expanded="true"
                                                aria-controls="collapseOne">
                                                What does an IT consulting firm do?
                                            </button>
                                        </h2>
                                        <div id="collapseOne" class="accordion-collapse collapse"
                                            aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                            <div class="accordion-body">
                                               Versai Technology is a forward-thinking IT consulting firm dedicated to empowering businesses through smart, scalable technology solutions. We specialize in digital transformation, cybersecurity, cloud infrastructure, and custom software development, helping our clients stay competitive in a rapidly evolving digital landscape. 
                                            </div>
                                        </div>
                                    </div>
                                    <div class="accordion-items">
                                        <h2 class="accordion-header" id="headingTwo">
                                            <button class="accordion-buttons collapsed" type="button"
                                                data-bs-toggle="collapse" data-bs-target="#collapseTwo"
                                                aria-expanded="false" aria-controls="collapseTwo">
                                                How can your IT services benefit my business?
                                            </button>
                                        </h2>
                                        <div id="collapseTwo" class="accordion-collapse collapse show"
                                            aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                            <div class="accordion-body">
                                                Whether you're a startup building your tech foundation or an established enterprise seeking optimization, Versai Technology is your trusted partner in turning complex IT challenges into competitive advantages.
                                            </div>
                                        </div>
                                    </div>
                                    <div class="accordion-items">
                                        <h2 class="accordion-header" id="headingThree">
                                            <button class="accordion-buttons collapsed" type="button"
                                                data-bs-toggle="collapse" data-bs-target="#collapseThree"
                                                aria-expanded="false" aria-controls="collapseThree">
                                                Do you offer cybersecurity services?
                                            </button>
                                        </h2>
                                        <div id="collapseThree" class="accordion-collapse collapse"
                                            aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                            <div class="accordion-body">
                                                As cybersecurity threats grow more complex, our expert team ensures your data, operations, and reputation remain protected. With tailored strategies, 24/7 monitoring, and industry-grade defenses, we help businesses stay resilient in an increasingly connected world.
                                            </div>
                                        </div>
                                    </div>
                                    <div class="accordion-items">
                                        <h2 class="accordion-header" id="headingFour">
                                            <button class="accordion-buttons collapsed" type="button"
                                                data-bs-toggle="collapse" data-bs-target="#collapseFour"
                                                aria-expanded="false" aria-controls="collapseFour">
                                                What is the process for developing custom software?
                                            </button>
                                        </h2>
                                        <div id="collapseFour" class="accordion-collapse collapse"
                                            aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                                            <div class="accordion-body">
                                                From concept to code, we design software tailored to your exact needs whether you're launching a new product, optimizing internal operations, or replacing legacy systems. Our team combines technical expertise with a business first mindset to build tools that drive growth, efficiency, and innovation.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-6 col-lg-6  wow tgfadeRight" data-wow-duration=".9s" data-wow-delay=".7s">
                        <div class="tg-faq-2-thumb-box text-center text-lg-end p-relative">
                            <div class="tg-faq-2-thumb">
                                <img src={img8} alt="img8"/> 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- faq-area-end --> */}
    </main>


    {/* <!-- expart area start --> */}
    <div class="tg-exp-2-area pt-50">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-xl-6 col-lg-7 col-md-6">
                    <div class="tg-exp-2-title-box text-center mb-50">
                        <span class="tg-section-subtitle">Digital Solutions</span>
                        <h4 class="tg-section-title">Drive Efficiency with IT the Expertise </h4>
                    </div>
                </div>
            </div>
            <div class="tg-exp-2-main-wrap">
                <div class="row">
                    <div class="col-xl-12 mb-30  wow tgfadeUp" data-wow-duration=".9s" data-wow-delay=".3s">
                        <div class="tg-exp-2-item p-relative">
                            <div class="row align-items-center">
                                <div class="col-xl-6 col-lg-5 col-md-8">
                                    <div class="tg-exp-content">
                                        <h4 class="tg-exp-title-sm"><a href="#">Web Development</a></h4>
                                        <p>We provide top-notch web development services, crafting responsive, dynamic, and user-friendly websites for business growth.</p>
                                    </div>
                                </div>
                                <div class="col-xl-6 col-lg-7 col-md-4">
                                    <div class="tg-exp-2-right d-flex justify-content-md-end justify-content-start align-items-center">
                                        <div class="tg-exp-2-button d-none d-lg-block">
                                            <a class="tg-btn-grey-border" href="web-devlopment.html">
                                                <span>
                                                    Read More
                                                    <svg width="17" height="12" viewBox="0 0 17 12" fill="none"
                                                        xmlns="http://www.w3.org/2000/svg">
                                                        <path
                                                            d="M15.6875 6.71875L11.6875 10.7188C11.3125 11.125 10.6562 11.125 10.2812 10.7188C9.875 10.3438 9.875 9.6875 10.2812 9.3125L12.5625 7H1C0.4375 7 0 6.5625 0 6C0 5.40625 0.4375 5 1 5H12.5625L10.2812 2.71875C9.875 2.34375 9.875 1.6875 10.2812 1.3125C10.6562 0.90625 11.3125 0.90625 11.6875 1.3125L15.6875 5.3125C16.0938 5.6875 16.0938 6.34375 15.6875 6.71875Z"
                                                            fill="currentcolor" />
                                                    </svg>
                                                </span>
                                            </a>
                                        </div>
                                        <div class="tg-exp-2-thumb">
                                            <img src={img89} alt="img89"/> 
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-12 mb-30  wow tgfadeUp" data-wow-duration=".9s" data-wow-delay=".5s">
                        <div class="tg-exp-2-item p-relative">
                            <div class="row align-items-center">
                                <div class="col-xl-6 col-lg-5 col-md-8">
                                    <div class="tg-exp-content">
                                        <h4 class="tg-exp-title-sm"><a href="#" >App Development</a></h4>
                                        <p>We deliver high-quality app development services, creating seamless, innovative, and user-friendly mobile applications.</p>
                                    </div>
                                </div>
                                <div class="col-xl-6 col-lg-7 col-md-4">
                                    <div class="tg-exp-2-right d-flex justify-content-md-end justify-content-start align-items-center">
                                        <div class="tg-exp-2-button d-none d-lg-block">
                                            <a class="tg-btn-grey-border" href="app-devlopment.html">
                                                <span>
                                                    Read More
                                                    <svg width="17" height="12" viewBox="0 0 17 12" fill="none"
                                                        xmlns="http://www.w3.org/2000/svg">
                                                        <path
                                                            d="M15.6875 6.71875L11.6875 10.7188C11.3125 11.125 10.6562 11.125 10.2812 10.7188C9.875 10.3438 9.875 9.6875 10.2812 9.3125L12.5625 7H1C0.4375 7 0 6.5625 0 6C0 5.40625 0.4375 5 1 5H12.5625L10.2812 2.71875C9.875 2.34375 9.875 1.6875 10.2812 1.3125C10.6562 0.90625 11.3125 0.90625 11.6875 1.3125L15.6875 5.3125C16.0938 5.6875 16.0938 6.34375 15.6875 6.71875Z"
                                                            fill="currentcolor" />
                                                    </svg>
                                                </span>
                                            </a>
                                        </div>
                                        <div class="tg-exp-2-thumb">
                                            <img src={img90} alt="img90"/> 
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-12 mb-30  wow tgfadeUp" data-wow-duration=".9s" data-wow-delay=".7s">
                        <div class="tg-exp-2-item p-relative">
                            <div class="row align-items-center">
                                <div class="col-xl-6 col-lg-5 col-md-8">
                                    <div class="tg-exp-content">
                                        <h4 class="tg-exp-title-sm"><a href="#">Graphic Design</a></h4>
                                        <p>We design intuitive, engaging, and visually stunning Graphic Design experiences that enhance user satisfaction and business success.</p>
                                    </div>
                                </div>
                                <div class="col-xl-6 col-lg-7 col-md-4">
                                    <div class="tg-exp-2-right d-flex justify-content-md-end justify-content-start align-items-center">
                                        <div class="tg-exp-2-button d-none d-lg-block">
                                            <a class="tg-btn-grey-border" href="solution.html">
                                                <span>
                                                    Read More
                                                    <svg width="17" height="12" viewBox="0 0 17 12" fill="none"
                                                        xmlns="http://www.w3.org/2000/svg">
                                                        <path
                                                            d="M15.6875 6.71875L11.6875 10.7188C11.3125 11.125 10.6562 11.125 10.2812 10.7188C9.875 10.3438 9.875 9.6875 10.2812 9.3125L12.5625 7H1C0.4375 7 0 6.5625 0 6C0 5.40625 0.4375 5 1 5H12.5625L10.2812 2.71875C9.875 2.34375 9.875 1.6875 10.2812 1.3125C10.6562 0.90625 11.3125 0.90625 11.6875 1.3125L15.6875 5.3125C16.0938 5.6875 16.0938 6.34375 15.6875 6.71875Z"
                                                            fill="currentcolor" />
                                                    </svg>
                                                </span>
                                            </a>
                                        </div>
                                        <div class="tg-exp-2-thumb">
                                          <img src={img91} alt="img91"/> 
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

   

      {/* Footer Placeholder */}
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

export default AboutUs;
