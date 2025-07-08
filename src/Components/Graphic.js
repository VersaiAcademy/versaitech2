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

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

import img1 from '../Components/img1.svg';
import img2 from '../Components/img2.svg';

const Graphic = () => {
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
      {/* <!-- header-area -start--> */}
    <header>
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
        {/* <!-- Mobile Menu  --> */}
        <div class="tgmobile__menu">
            <nav class="tgmobile__menu-box">
                <div class="close-btn"><i class="fa-sharp fa-regular fa-xmark"></i></div>
                <div class="nav-logo">
                    <a href="index.html">
                         <img className="img-fluid" src={img2} alt="img2"/>
                    </a>
                </div>
                <div class="tgmobile__menu-outer">
                    {/* <!--Here Menu Will Come Automatically Via Javascript / Same Menu as in Header--> */}
                </div>

            </nav>
        </div>
        <div class="tgmobile__menu-backdrop"></div>
        {/* <!-- End Mobile Menu --> */}


   

    <main>
        {/* <!-- breadcrumb-area-start --> */}
        <div class="tg-breadcrumb-area app-dev-hero tg-breadcrumb-height"
            >
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <div class="tg-breadcrumb__content z-index-3 text-center">
                            <h3 class="tg-breadcrumb__title">Graphic Designs</h3>
                            <div class="tg-breadcrumb__list">
                                <span><a href="Home.js">Home</a></span>
                                <span class="dvdr"><i class="fa-solid fa-chevron-right"></i></span>
                                <span><a href="#">Graphic Design</a></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- breadcrumb-area-end --> */}
        <div class="text-center mt-50 mb-50">
            <h2 class="mb-3 use-gradi">Our Graphic Design</h2>
            <h2 class="our-graphicserv">Services</h2>
        </div>
        
        <div class="container">
            <div class="row">

                 <div class="col-xxl-3 col-xl-3 col-lg-4 col-md-6 col-sm-6 mb-5">
                    <div class="card card-graphic">
                        
                        <div class="card-body">
                            <p class="poster-text"><i class="far fa-arrow-alt-circle-right"></i> Logo Design
                            </p>
                        </div>
                    </div>
                </div>
                <div class="col-xxl-3 col-xl-3 col-lg-4 col-md-6 col-sm-6 mb-5">
                    <div class="card card-graphic">
                        
                        <div class="card-body">
                            <p class="poster-text"><i class="far fa-arrow-alt-circle-right"></i> Poster Design</p>
                        </div>
                    </div>
                </div>


                <div class="col-xxl-3 col-xl-3 col-lg-4 col-md-6 col-sm-6 mb-5">
                    <div class="card card-graphic">
                        
                        <div class="card-body">
                            <p class="poster-text"><i class="far fa-arrow-alt-circle-right"></i> Banner Design</p>
                        </div>
                    </div>
                </div>



                <div class="col-xxl-3 col-xl-3 col-lg-4 col-md-6 col-sm-6 mb-5">
                    <div class="card card-graphic">
                        
                        <div class="card-body">
                            <p class="poster-text"><i class="far fa-arrow-alt-circle-right"></i> Visiting Card Design</p>
                        </div>
                    </div>
                </div>



                <div class="col-xxl-3 col-xl-3 col-lg-4 col-md-6 col-sm-6 mb-5">
                    <div class="card card-graphic">
                        
                        <div class="card-body">
                            <p class="poster-text"><i class="far fa-arrow-alt-circle-right"></i> Profile Design</p>
                        </div>
                    </div>
                </div>



                <div class="col-xxl-3 col-xl-3 col-lg-4 col-md-6 col-sm-6 mb-5">
                    <div class="card card-graphic">
                        
                        <div class="card-body">
                            <p class="poster-text"><i class="far fa-arrow-alt-circle-right"></i> Portfolio Design</p>
                        </div>
                    </div>
                </div>


                <div class="col-xxl-3 col-xl-3 col-lg-4 col-md-6 col-sm-6 mb-5">
                    <div class="card card-graphic">
                        
                        <div class="card-body">
                            <p class="poster-text"><i class="far fa-arrow-alt-circle-right"></i> Brochure Design</p>
                        </div>
                    </div>
                </div>

                <div class="col-xxl-3 col-xl-3 col-lg-4 col-md-6 col-sm-6 mb-5">
                    <div class="card card-graphic">
                        
                        <div class="card-body">
                            <p class="poster-text"><i class="far fa-arrow-alt-circle-right"></i> T-Shirt Design</p>
                        </div>
                    </div>
                </div>


                <div class="col-xxl-3 col-xl-3 col-lg-4 col-md-6 col-sm-6 mb-5">
                    <div class="card card-graphic">
                        
                        <div class="card-body">
                            <p class="poster-text"><i class="far fa-arrow-alt-circle-right"></i> Template Design</p>
                        </div>
                    </div>
                </div>


                <div class="col-xxl-3 col-xl-3 col-lg-4 col-md-6 col-sm-6 mb-5">
                    <div class="card card-graphic">
                        
                        <div class="card-body">
                            <p class="poster-text"><i class="far fa-arrow-alt-circle-right"></i> Flex Design</p>
                        </div>
                    </div>
                </div>


                <div class="col-xxl-3 col-xl-3 col-lg-4 col-md-6 col-sm-6 mb-5">
                    <div class="card card-graphic">
                        
                        <div class="card-body">
                            <p class="poster-text"><i class="far fa-arrow-alt-circle-right"></i> Sticker Design</p>
                        </div>
                    </div>
                </div>


                <div class="col-xxl-3 col-xl-3 col-lg-4 col-md-6 col-sm-6 mb-5">
                    <div class="card card-graphic">
                        
                        <div class="card-body">
                            <p class="poster-text"><i class="far fa-arrow-alt-circle-right"></i> Booklet Design</p>
                        </div>
                    </div>
                </div>

               


            </div>
        </div>
    </main>

   
{/* <!-- pricing-section --> */}
<section class="pt-50 pb-50 bg-light" id="pricing">
    <div class="our-graphicdiv">
        <h2 class="use-gradi text-center">What We Offer & Pricing</h2>
        <p class="lead text-center">Comprehensive solutions for every digital need</p>
    </div>
        
    <div class="container">
        <div class="row g-4">
            <div class="col-md-4">
                <div class="feature-card">
                    <div class="d-flex flex-column align-items-center gap-2">
                        <h4 class="custom-webhead">Basic Logo</h4>
                        <h4 class="custom-webprice">&#8377;&nbsp;999</h4>
                    </div>

                    <ul class="list-unstyled mb-4">
                        <li class="mb-3"><i class="fas fa-check text-primary me-2"></i> Kickstart Your Brand</li>
                        <li class="mb-3"><i class="fas fa-check text-primary me-2"></i> Simple & Clean Design</li>
                        <li class="mb-3"><i class="fas fa-check text-primary me-2"></i> Smart Logo Solution </li>
                        <li class="mb-3"><i class="fas fa-check text-primary me-2"></i> Concept Based on Your Brand</li>
                        <li class="mb-3"><i class="fas fa-check text-primary me-2"></i> High-Resolution Files (PNG, JPG, PDF)</li>
                        <li class="mb-3"><i class="fas fa-check text-primary me-2"></i> 1 Week Post-Delivery Support</li>
                    </ul>
                    <div class="text-center">
                        <a href="#contact" class="btn btn-outline-primary w-100">Get Started</a>
                    </div>
                </div>
            </div>

            <div class="col-md-4">
                <div class="feature-card">
                    <div class="d-flex flex-column align-items-center gap-2">
                        <h4 class="custom-webhead">Banner Design</h4>
                        <h4 class="custom-webprice">&#8377;&nbsp;499</h4>
                    </div>
                        
                    <ul class="list-unstyled mb-4">
                        <li class="mb-3"><i class="fas fa-check text-primary me-2"></i> Impactful Banner Design That Speaks</li>
                        <li class="mb-3"><i class="fas fa-check text-primary me-2"></i> Bold Banners, Big Impressions</li>
                        <li class="mb-3"><i class="fas fa-check text-primary me-2"></i> Custom Banners That Get Clicks</li>
                        <li class="mb-3"><i class="fas fa-check text-primary me-2"></i> Social Media & Web Banner Experts</li>
                        <li class="mb-3"><i class="fas fa-check text-primary me-2"></i> From Concept to Click – Perfect Banners</li>

                    </ul>
                    <div class="text-center">
                        <a href="#contact" class="btn btn-outline-primary w-100">Get Started</a>
                    </div>
                </div>
            </div>

            <div class="col-md-4">
                <div class="feature-card">
                    <div class="d-flex flex-column align-items-center gap-2">
                        <h4 class="custom-webhead">Enterprise Poster</h4>
                        <h4 class="custom-webprice">&#8377;&nbsp;999</h4>
                    </div>
                  
                    
                    <ul class="list-unstyled mb-4">
                        <li class="mb-3"><i class="fas fa-check text-primary me-2"></i> Professional Poster Designs for Enterprises</li>
                        <li class="mb-3"><i class="fas fa-check text-primary me-2"></i> Enterprise-Class Posters for Impact & Clarity</li>
                        <li class="mb-3"><i class="fas fa-check text-primary me-2"></i> Corporate Communication, Creatively Delivered</li>
                        <li class="mb-3"><i class="fas fa-check text-primary me-2"></i> Strategic Poster Design for Visionary Brands</li>
                    </ul>
                    
                    <div class="text-center">
                        <a href="#contact" class="btn btn-outline-primary w-100">Get Started</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

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

export default Graphic;
