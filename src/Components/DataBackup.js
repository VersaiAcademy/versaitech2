import React, { useEffect } from 'react';
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
import img84 from '../Components/img84.jpg';
import img85 from '../Components/img85.jpg';

const DataBackup = () => {
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
       
               {/* { <!-- Mobile Menu  --> } */}
               <div className="tgmobile__menu">
                   <nav className="tgmobile__menu-box">
                       <div className="close-btn"><i className="fa-sharp fa-regular fa-xmark"></i></div>
                       <div className="nav-logo">
                           <a href="Home.js">
                                <img className="img-fluid" src={img2} alt="img2"/>
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
         <div class="tg-breadcrumb-area tg-breadcrumb-height app-dev-hero">
         <div class="container">
             <div class="row">
                 <div class="col-md-12">
                     <div class="tg-breadcrumb__content z-index-3 text-center">
                         <h3 class="tg-breadcrumb__title">Data Backup Solutions</h3>
                         <div class="tg-breadcrumb__list">
                             <span><a href="index.html">Home</a></span>
                             <span class="dvdr"><i class="fa-solid fa-chevron-right"></i></span>
                             <span><a href="#">Data backup</a></span>
                         </div>
                     </div>
                 </div>
             </div>
         </div>
     </div>
     {/* <!-- breadcrumb-area-end --> */}

        {/* <!-- intro-section --> */}
        <section class="py-80">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-lg-6 mb-4 mb-lg-0">
                        <h2 class="mb-4">Secure Your Business Data</h2>
                        <p class="lead">Never worry about data loss again with our comprehensive backup solutions.</p>
                        <p>In today's digital world, data is your most valuable asset. Our data backup services provide
                            peace of mind by ensuring your critical business information is protected against hardware
                            failures, cyber attacks, and accidental deletions.</p>
                        <p>We implement the 3-2-1 backup strategy: three copies of your data, stored on two different
                            media, with one copy off-site for disaster recovery.</p>
                        <div class="mt-4">
                            <a href="#contact" class="btn btn-primary btn-lg me-3">Get Protected</a>
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <img src={img84} alt="Data Backup"
                            class="img-fluid rounded shadow"/>
                    </div>
                </div>
            </div>
        </section>

        {/* <!-- solutions-section --> */}
        <section id="tech-solution" class="py-80 bg-light">
            <div class="container">
                <div class="text-center mb-60">
                    <h2 class="mb-3">Our Data Backup Solutions</h2>
                    <p class="lead">Choose the right protection for your business needs</p>
                </div>

                <div class="row g-4">
                    <div class="col-md-6 col-lg-4">
                        <div class="solution-card">
                            <div class="icon mb-4 text-primary">
                                <i class="flaticon flaticon-006-cloud-computing fa-3x"></i>
                            </div>
                            <h4>Cloud Backup</h4>
                            <p>Secure, automated backups to the cloud with military-grade encryption and unlimited
                                retention options.</p>
                            <ul class="list-unstyled">
                                <li><i class="fas fa-check text-primary me-2"></i> Automatic daily backups</li>
                                <li><i class="fas fa-check text-primary me-2"></i> 256-bit AES encryption</li>
                                <li><i class="fas fa-check text-primary me-2"></i> Global data centers</li>
                                <li><i class="fas fa-check text-primary me-2"></i> 99.99% uptime SLA</li>
                            </ul>
                        </div>
                    </div>

                    <div class="col-md-6 col-lg-4">
                        <div class="solution-card">
                            <div class="icon mb-4 text-primary">
                                <i class="flaticon flaticon-004-server fa-3x"></i>
                            </div>
                            <h4>On-Premises Backup</h4>
                            <p>Local backup solutions for businesses with strict data residency requirements or large
                                datasets.</p>
                            <ul class="list-unstyled">
                                <li><i class="fas fa-check text-primary me-2"></i> Network-attached storage</li>
                                <li><i class="fas fa-check text-primary me-2"></i> Tape drive solutions</li>
                                <li><i class="fas fa-check text-primary me-2"></i> RAID configurations</li>
                                <li><i class="fas fa-check text-primary me-2"></i> Physical security</li>
                            </ul>
                        </div>
                    </div>

                    <div class="col-md-6 col-lg-4">
                        <div class="solution-card">
                            <div class="icon mb-4 text-primary">
                                <i class="flaticon flaticon-001-laptop fa-3x"></i>
                            </div>
                            <h4>Hybrid Backup</h4>
                            <p>Combine the best of both worlds with our hybrid cloud and local backup solutions.</p>
                            <ul class="list-unstyled">
                                <li><i class="fas fa-check text-primary me-2"></i> Local + cloud protection</li>
                                <li><i class="fas fa-check text-primary me-2"></i> Fast local restores</li>
                                <li><i class="fas fa-check text-primary me-2"></i> Cloud disaster recovery</li>
                                <li><i class="fas fa-check text-primary me-2"></i> Flexible retention policies</li>
                            </ul>
                        </div>
                    </div>

                    <div class="col-md-6 col-lg-4">
                        <div class="solution-card">
                            <div class="icon mb-4 text-primary">
                                <i class="flaticon flaticon-040-laptop fa-3x"></i>
                            </div>
                            <h4>Endpoint Backup</h4>
                            <p>Protect laptops, desktops, and mobile devices with automatic endpoint backup.</p>
                            <ul class="list-unstyled">
                                <li><i class="fas fa-check text-primary me-2"></i> Continuous file protection</li>
                                <li><i class="fas fa-check text-primary me-2"></i> Cross-platform support</li>
                                <li><i class="fas fa-check text-primary me-2"></i> Remote wipe capability</li>
                                <li><i class="fas fa-check text-primary me-2"></i> Bandwidth throttling</li>
                            </ul>
                        </div>
                    </div>

                    <div class="col-md-6 col-lg-4">
                        <div class="solution-card">
                            <div class="icon mb-4 text-primary">
                                <i class="flaticon flaticon-028-smartphone fa-3x"></i>
                            </div>
                            <h4>Database Backup</h4>
                            <p>Specialized backup solutions for SQL, Oracle, MongoDB, and other database systems.</p>
                            <ul class="list-unstyled">
                                <li><i class="fas fa-check text-primary me-2"></i> Transaction log backups</li>
                                <li><i class="fas fa-check text-primary me-2"></i> Point-in-time recovery</li>
                                <li><i class="fas fa-check text-primary me-2"></i> Schema versioning</li>
                                <li><i class="fas fa-check text-primary me-2"></i> Automated integrity checks</li>
                            </ul>
                        </div>
                    </div>

                    <div class="col-md-6 col-lg-4">
                        <div class="solution-card">
                            <div class="icon mb-4 text-primary">
                                <i class="flaticon flaticon-015-email fa-3x"></i>
                            </div>
                            <h4>Email & SaaS Backup</h4>
                            <p>Protect your Office 365, G Suite, and other SaaS application data from accidental
                                deletion.</p>
                            <ul class="list-unstyled">
                                <li><i class="fas fa-check text-primary me-2"></i> Mailbox/item-level recovery</li>
                                <li><i class="fas fa-check text-primary me-2"></i> Teams/SharePoint backup</li>
                                <li><i class="fas fa-check text-primary me-2"></i> Compliance archiving</li>
                                <li><i class="fas fa-check text-primary me-2"></i> eDiscovery support</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>

      
        {/* <!-- security-section --> */}
        <section class="py-80 bg-light">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-lg-6 mb-4 mb-lg-0">
                        <span class="security-badge">Security First</span>
                        <h2 class="mb-4">Enterprise-Grade Data Protection</h2>
                        <p class="lead">Your data security is our top priority</p>

                        <div class="feature-item">
                            <div class="feature-icon">
                                <i class="fas fa-key"></i>
                            </div>
                            <div>
                                <h5>End-to-End Encryption</h5>
                                <p>256-bit AES encryption for data in transit and at rest, with optional
                                    customer-managed keys.</p>
                            </div>
                        </div>

                        <div class="feature-item">
                            <div class="feature-icon">
                                <i class="fas fa-fingerprint"></i>
                            </div>
                            <div>
                                <h5>Multi-Factor Authentication</h5>
                                <p>Secure access to backup management consoles with MFA and role-based permissions.</p>
                            </div>
                        </div>

                        <div class="feature-item">
                            <div class="feature-icon">
                                <i class="fas fa-shield-alt"></i>
                            </div>
                            <div>
                                <h5>Immutable Storage</h5>
                                <p>Write-once-read-many (WORM) storage protects against ransomware and malicious
                                    deletion.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <img src={img85} alt="Data Security"
                            class="img-fluid rounded shadow"/>
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

export default DataBackup;
