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


const Cancellation = () => {
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
  

    {/* <!-- **************Terms & Condition************** --> */}
    <div class="terms-bg">
        <div class="container">
            <div class="terms-cond">
                <div>
                    {/* <img class="terms-img" src="assets/myimage/rupeesicon.svg" alt=""> */}
                </div>

                <p class="tersm-para">Cancellation & Refund</p>
                <p class="term-parades">Your satisfaction is the foundation of our success.</p>

            </div>
        </div>
    </div>



    <div class="container">
        <div class="line-heading">
                <div class="privacy-policy">
                    <div class="lining"></div>
                    <div class="lining"></div>
                    <div class="lining"></div>
                </div>
                <h1 class="terms-heading1">Versai Technology Cancellation & Refund</h1>
                <div class="privacy-policy">
                    <div class="lining"></div>
                    <div class="lining"></div>
                    <div class="lining"></div>
                </div>
            </div>
        
        <p class="privacy-para">
            This Privacy Policy has been created to better inform users who are concerned about how their Personally
            Identifiable Information (PII) is collected and used online. PII, as defined under applicable privacy laws
            and data protection standards, refers to information that can be used on its own or in combination with
            other data to identify, contact, or locate a single individual, or to identify a person in context.

            Please read this Privacy Policy carefully to understand how Versai Technology collects, uses, protects, and
            manages your Personally Identifiable Information in accordance with our website and services.
        </p>

        <h4 class="terms-heading">What Personal Information Do We Collect from The People That Visit Our Website?</h4>

        <p class="privacy-para">
            When ordering or registering on our site, as appropriate, you may be asked to enter your name, email
            address, mailing address, phone number or other details to help you with your experience.
        </p>

        <h4 class="terms-heading">When do We Collect Information?</h4>

        <p class="the-limit">We Collect Information from You when You</p>
        <menu class="exp-menu">
            <li><i class="fas fa-arrow-right pe-2"></i>Fill out a form or enter information on our site.</li>
            <li><i class="fas fa-arrow-right pe-2"></i>Provide us with feedback on our products or services.</li>
        </menu>


        <h4 class="terms-heading">How do We Protect Visitor Information?</h4>
        <menu class="exp-menu">

            <li>
                <i class="fas fa-arrow-right pe-2"></i>Full Refund if the project is not started or the initial design
                is not approved.
            </li>
            <li><i class="fas fa-arrow-right pe-2"></i>A partial refund may be issued if the initial design is approved
                and you decide to discontinue the project thereafter.</li>
            <li>
                <i class="fas fa-arrow-right pe-2"></i>No Refund would be entertained if the project has been completed
                and uploaded on the server.
            </li>
        </menu>

        <h4 class="terms-heading">Web Development / Mobile Apps Development:</h4>
        <p>
            At Versai Technology, we regularly scan our website for security vulnerabilities and known threats to ensure
            a safe and secure browsing experience.
        </p>


        <h4 class="terms-heading">We do not Use Malware Scanning.</h4>
        <p class="privacy-para">Your personal information is stored within secured networks and is accessible only to a limited number of
            authorized personnel who have special access rights and are required to maintain its confidentiality.
            Additionally, any sensitive or credit-related information you provide is encrypted using Secure Socket Layer
            (SSL) technology.
            At Versai Technology, we implement a range of robust security measures when you place an order or enter,
            submit, or access your information, all to ensure the protection and integrity of your personal data.
        </p>

        <h4 class="terms-heading">Do We Use ‘Cookies’?</h4>
        <p class="the-limit">We do not Use Cookies for Tracking Purposes</p>
        <p class="privacy-para">You can choose to have your computer notify you each time a cookie is being sent, or you can opt to disable
            all cookies through your browser settings. Since each browser is slightly different, please refer to your
            browser’s Help section to learn how to modify your cookie preferences.
            Please note that if you choose to disable cookies, some features of the Versai Technology website may not
            function properly, and your overall user experience may be less efficient.</p>

        <h4 class="terms-heading">Third-party Links</h4>
        <p>We do not include or offer third-party products or services on our website.</p>


        <h4 class="terms-heading">How does Our Site Handle do not Track Signals?</h4>
        <p>At Versai Technology, we respect Do Not Track (DNT) signals and do not track, place cookies, or use
            advertising when a DNT browser setting is enabled.</p>


        <h4 class="terms-heading">Does Our Site Allow Third-party Behavioral Tracking?</h4>
        <p>It’s also important to note that we do not allow third-party behavioral tracking.</p>


    </div>


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

export default Cancellation;