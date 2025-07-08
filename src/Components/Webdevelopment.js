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


import img1 from '../Components/img1.svg';
import img2 from '../Components/img2.svg';
import img92 from '../Components/img92.jpg';


const Webdevelopment = () => {
  return (
    <>
       {/* <!-- back to top start --> */}
    <div class="back-to-top-wrapper">
        <button id="back_to_top" type="button" class="back-to-top-btn">
            <svg width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11 6L6 1L1 6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                    stroke-linejoin="round" />
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
        <div class="web-dev-hero app-dev-hero tg-breadcrumb-area tg-breadcrumb-height p-relative">
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <div class="tg-breadcrumb__content z-index-3 text-center">
                            <h1 class="tg-breadcrumb__title display-4 fw-bold mb-4">Web Development Services</h1>
                            {/* <!-- <p class="lead mb-4">Transform your digital presence with our cutting-edge web solutions</p> --> */}
                            <div class="tg-breadcrumb__list">
                                <span><a href="Home.js">Home</a></span>
                                <span class="dvdr"><i class="fa-solid fa-chevron-right"></i></span>
                                <span><a href="Webdevelopment.js">Web Development</a></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- breadcrumb-area-end --> */}

        {/* <!-- service-intro-section --> */}
        <section class="py-80">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-lg-6 mb-4 mb-lg-0">
                        <h2 class="mb-4">Custom Web Development Solutions</h2>
                        <p class="lead">We build responsive, high-performance websites that drive results and engage
                            your audience.</p>
                        <p>Our web development services are designed to create digital experiences that not only look
                            stunning but also perform exceptionally. From simple brochure websites to complex web
                            applications, we combine technical expertise with creative design to deliver solutions that
                            align with your business goals.</p>
                        <div class="mt-4">
                            <a href="#contact" class="tg-btn-gradient">Get Started</a>
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <img className="img-fluid" src={img92} alt="img92"/>
                    </div>
                </div>
            </div>
        </section>


        {/* <!-- service-area-start --> */}
        <div class="tg-sv-details-area fix">
            <div class="container">
                <div class="d-flex justify-content-center pb-20">
                    <a class="tg-btn-gradient" href="#">Website Template</a>
                </div>
                
            </div>
        </div>
        {/* <!-- service-area-end --> */}

        {/* <!-- services-offered-section --> */}
        <section class="bg-light">
            <div class="container">
                <div class="text-center mb-60">
                    <h2 class="mb-3">Our Web Development Services</h2>
                    <p class="lead">Comprehensive solutions for every digital need</p>
                </div>

                <div class="row g-4">
                    <div class="col-md-6 col-lg-4">
                        <div class="feature-card">
                            <div class="icon mb-4">
                                <i class="flaticon flaticon-040-laptop fa-3x"></i>
                            </div>
                            <h4>Custom Website Development</h4>
                            <p>Tailored websites built from scratch to match your unique brand identity and business
                                requirements.</p>
                            <ul class="list-unstyled">
                                <li><i class="fas fa-check me-2"></i> Responsive design</li>
                                <li><i class="fas fa-check me-2"></i> CMS integration</li>
                                <li><i class="fas fa-check me-2"></i> SEO-friendly structure</li>
                            </ul>
                        </div>
                    </div>

                    <div class="col-md-6 col-lg-4">
                        <div class="feature-card">
                            <div class="icon mb-4">
                                <i class="flaticon flaticon-006-cloud-computing fa-3x"></i>
                            </div>
                            <h4>E-Commerce Solutions</h4>
                            <p>Powerful online stores with seamless checkout, inventory management, and payment
                                integrations.</p>
                            <ul class="list-unstyled">
                                <li><i class="fas fa-check me-2"></i> WooCommerce/Shopify</li>
                                <li><i class="fas fa-check me-2"></i> Payment gateways</li>
                                <li><i class="fas fa-check me-2"></i> Product management</li>
                            </ul>
                        </div>
                    </div>

                    <div class="col-md-6 col-lg-4">
                        <div class="feature-card">
                            <div class="icon mb-4">
                                <i class="flaticon flaticon-001-laptop fa-3x"></i>
                            </div>
                            <h4>Web Applications</h4>
                            <p>Custom web applications that streamline your business processes and improve efficiency.
                            </p>
                            <ul class="list-unstyled">
                                <li><i class="fas fa-check me-2"></i> CRM systems</li>
                                <li><i class="fas fa-check me-2"></i> SaaS platforms</li>
                                <li><i class="fas fa-check me-2"></i> Dashboard solutions</li>
                            </ul>
                        </div>
                    </div>

                    <div class="col-md-6 col-lg-4">
                        <div class="feature-card">
                            <div class="icon mb-4">
                                <i class="flaticon flaticon-004-server fa-3x"></i>
                            </div>
                            <h4>API Development</h4>
                            <p>Secure and scalable API solutions to connect your systems and enable seamless data
                                exchange.</p>
                            <ul class="list-unstyled">
                                <li><i class="fas fa-check me-2"></i> RESTful APIs</li>
                                <li><i class="fas fa-check me-2"></i> GraphQL</li>
                                <li><i class="fas fa-check me-2"></i> Third-party integrations</li>
                            </ul>
                        </div>
                    </div>

                    <div class="col-md-6 col-lg-4">
                        <div class="feature-card">
                            <div class="icon mb-4">
                                <i class="flaticon flaticon-028-smartphone fa-3x"></i>
                            </div>
                            <h4>Progressive Web Apps</h4>
                            <p>Web applications that deliver app-like experiences with offline capabilities and push
                                notifications.</p>
                            <ul class="list-unstyled">
                                <li><i class="fas fa-check me-2"></i> Offline functionality</li>
                                <li><i class="fas fa-check me-2"></i> Installable on devices</li>
                                <li><i class="fas fa-check me-2"></i> Push notifications</li>
                            </ul>
                        </div>
                    </div>

                    <div class="col-md-6 col-lg-4">
                        <div class="feature-card">
                            <div class="icon mb-4">
                                <i class="flaticon flaticon-015-email fa-3x"></i>
                            </div>
                            <h4>Website Maintenance</h4>
                            <p>Ongoing support and updates to keep your website secure, fast, and up-to-date.</p>
                            <ul class="list-unstyled">
                                <li><i class="fas fa-check me-2"></i> Security updates</li>
                                <li><i class="fas fa-check me-2"></i> Performance optimization</li>
                                <li><i class="fas fa-check me-2"></i> Content updates</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        

        {/* <!-- development-process-section --> */}
        <section class="py-80 bg-light">
            <div class="container">
                <div class="text-center mb-60">
                    <h2 class="mb-3">Our Development Process</h2>
                    <p class="lead">A structured approach to deliver exceptional results</p>
                </div>

                <div class="row">
                    <div class="col-lg-10 mx-auto">
                        <div class="process-step">
                            <div class="process-step-number">1</div>
                            <div class="process-step-content">
                                <h4>Discovery & Planning</h4>
                                <p>We start by understanding your business goals, target audience, and project
                                    requirements. Our team conducts thorough research to create a detailed project plan,
                                    including timelines, milestones, and deliverables.</p>
                            </div>
                        </div>

                        <div class="process-step">
                            <div class="process-step-number">2</div>
                            <div class="process-step-content">
                                <h4>UI/UX Design</h4>
                                <p>Our designers create wireframes and prototypes to visualize the user journey. We
                                    focus on creating intuitive interfaces that enhance user experience while aligning
                                    with your brand identity.</p>
                            </div>
                        </div>

                        <div class="process-step">
                            <div class="process-step-number">3</div>
                            <div class="process-step-content">
                                <h4>Development</h4>
                                <p>Using agile methodologies, our developers build your website or application with
                                    clean, maintainable code. We implement responsive design principles to ensure
                                    optimal performance across all devices.</p>
                            </div>
                        </div>

                        <div class="process-step">
                            <div class="process-step-number">4</div>
                            <div class="process-step-content">
                                <h4>Testing & Quality Assurance</h4>
                                <p>We conduct rigorous testing across multiple browsers and devices to identify and fix
                                    any issues. Our QA process includes functionality testing, performance testing, and
                                    security audits.</p>
                            </div>
                        </div>

                        <div class="process-step">
                            <div class="process-step-number">5</div>
                            <div class="process-step-content">
                                <h4>Deployment & Launch</h4>
                                <p>We handle all aspects of deployment, ensuring a smooth transition to production. Our
                                    team provides comprehensive documentation and training to help you manage your new
                                    website.</p>
                            </div>
                        </div>

                        <div class="process-step">
                            <div class="process-step-number">6</div>
                            <div class="process-step-content">
                                <h4>Ongoing Support</h4>
                                <p>Our relationship continues after launch. We offer maintenance packages to keep your
                                    website secure, updated, and performing at its best.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>

    <footer class="mt-5">
        {/* <!-- footer area start --> */}
        <div class="tg-footer-area fix p-relative z-index black-bg pt-80">
            
            <div class="container">
                <div class="row">
                    <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6 mb-50  wow tgfadeUp" data-wow-duration=".9s"
                        data-wow-delay=".5s">
                        <div class="tg-footer-widget footer-col-2">
                            <h4 class="tg-footer-widget-title">Useful Links</h4>
                            <div class="tg-footer-list">
                                <ul>
                                    <li><a href="index.html"><i class="fa-regular fa-angle-right"></i>Home</a></li>
                                    <li><a href="about-us.html"><i class="fa-regular fa-angle-right"></i>About Us</a>
                                    </li>
                                    <li><a href="ourteam.html"><i class="fa-regular fa-angle-right"></i>Team</a></li>

                                    <li><a href="gallery.html"><i class="fa-regular fa-angle-right"></i>Gallery</a></li>


                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6 mb-50  wow tgfadeUp" data-wow-duration=".9s"
                        data-wow-delay=".5s">
                        <div class="tg-footer-widget footer-col-2">
                            <h4 class="tg-footer-widget-title">Resources</h4>
                            <div class="tg-footer-list">
                                <ul>
                                    <li><a href="https://docs.google.com/forms/d/e/1FAIpQLSds9WaOXtaIeKDZBG7o7tqGeDbSy7PASFqcPtnEVBmi9xiLlw/viewform?usp=sharing&ouid=117424442439504764324" target="_blank"><i class="fa-regular fa-angle-right"></i>Apply for Internship</a>
                                    </li>
                                    <li><a href="career.html"><i class="fa-regular fa-angle-right"></i>Career at Versai</a></li>
                                    <li><a href="contact.html"><i class="fa-regular fa-angle-right"></i>Contact Us</a></li>
                                    <li><a href="service.html"><i class="fa-regular fa-angle-right"></i>Services</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6 mb-50  wow tgfadeUp" data-wow-duration=".9s"
                        data-wow-delay=".3s">
                        <div class="tg-footer-widget footer-col-2">
                            <h4 class="tg-footer-widget-title">Support</h4>
                            <div class="tg-footer-list">
                                <ul>
                                    <li><a href="termscond.html"><i class="fa-regular fa-angle-right"></i>Terms & Condition</a></li>
                                    <li><a href="cancellation.html"><i class="fa-regular fa-angle-right"></i>Cancellation and Refund</a>
                                    </li>
                                    <li><a href="Privacy.js"><i class="fa-regular fa-angle-right"></i>Privacy Policy</a></li>
                                    <li><a href="Privacy.js"><i class="fa-regular fa-angle-right"></i>FAQs</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6 mb-50  wow tgfadeUp" data-wow-duration=".9s"
                        data-wow-delay=".7s">
                        <div class="tg-footer-widget footer-col-3">
                            <h4 class="tg-footer-widget-title">Contact Us</h4>
                            <div class="tg-footer-Office-info mb-20">
                                <span>
                                    <a href="#"><i class="fa-solid fa-location-dot"></i>First Floor, Office No 102,
                                        Vishwakarma plaza, Nai Sarak, Opp. Axis Bank, Churu(Raj.) 331001</a>
                                </span>
                                <span>
                                    <a href="tel:+918619708196"><i class="fa-solid fa-phone"></i>+91 8619708196</a>
                                </span>
                                <span>
                                    <a href="mailto:technologyversai01@gmail.com">technologyversai01@gmail.com<i
                                            class="fa-solid fa-envelope"></i></a>
                                </span>


                            </div>


                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- footer area end --> */}
        {/* <!-- copy-right area start --> */}
        <div class="tg-copyright-area">
            <div class="container">
                <div class="tg-copyright-border tg-copyright-ptb">
                    <div class="d-flex flex-column align-items-center">
                        <div class="wow tgfadeUp" data-wow-duration=".9s" data-wow-delay=".3s">
                            <div class="tg-copyright-right text-center text-md-end">
                                <a class="text-anim-2" href="https://www.facebook.com/profile.php?id=61576737841115" target="_blank"><i class="fab fa-facebook-f"></i></a>                                <a class="text-anim-2" href="https://www.instagram.com/versai_technology/reels/" target="_blank"><i class="fab fa-instagram"></i></a>
                                <a class="text-anim-2" href="https://www.youtube.com/@versaiAcademy94" target="_blank"><i class="fab fa-youtube"></i></a>
                                <a class="text-anim-2" href="https://www.linkedin.com/company/versaitechnology/posts/?feedView=all" target="_blank"><i class="fab fa-linkedin-in"></i></a>
                            </div>
                        </div>
                        <div class="wow tgfadeUp" data-wow-duration=".9s" data-wow-delay=".3s">
                            <div class="tg-copyright-left text-center text-md-start">
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

export default Webdevelopment;