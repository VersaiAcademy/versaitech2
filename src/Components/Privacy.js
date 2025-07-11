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

const Privacy = () => {
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

    {/* <!-- **************privacy-policy************** --> */}

    <div class="terms-bg">
        <div class="container">
            <div class="terms-cond">
                <div>
                    <img class="terms-img" src="assets/myimage/terms_cond.svg" alt=""/>
                </div>

                <p class="tersm-para">Privacy Policy</p>
                <p class="term-parades">Your privacy and trust are essential to our commitment and success.</p>

            </div>
        </div>
    </div>

    <section>
        <div class="container">
            <div class="line-heading">
                <div class="privacy-policy">
                    <div class="lining"></div>
                    <div class="lining"></div>
                    <div class="lining"></div>
                </div>
                <h1 class="terms-heading1">Versai Technology Privacy Policy</h1>
                <div class="privacy-policy">
                    <div class="lining"></div>
                    <div class="lining"></div>
                    <div class="lining"></div>
                </div>
            </div>
            <p class="privacy-para">At Versai Technology, we prioritize your privacy and take every possible measure to
                protect your personal
                data. This Privacy Policy explains how we collect, use, store, and safeguard your information when you
                engage with our services.

                We collect personal details such as your name, email, phone number, and location when you register,
                interact with us, or use our services. Additionally, technical data like your IP address, browser type,
                and device information may be gathered to enhance user experience and service quality.

                Your information is used to provide and improve our services, personalize content, send important
                updates, and maintain security. We do not sell your personal data, but it may be shared with trusted
                partners to enhance service functionality. In legal or regulatory cases, we may disclose information as
                required by law.

                To ensure data security, we implement strong encryption, firewalls, and access control mechanisms.
                Regular audits and security updates are conducted to prevent unauthorized access or data breaches. Only
                authorized personnel have access to your sensitive data.

                As a user, you have full control over your data. You can request access, modifications, or deletion of
                your personal information at any time. You also have the option to opt out of marketing communications
                and manage your cookie preferences.

                We use cookies and tracking technologies to improve our website functionality and enhance user
                experience.

                These tools help us analyze user behavior and provide a more personalized service.
                <br id="faqs"></br> You can
                modify cookie settings through your browser at any time.

                Your data is stored securely and retained only for as long as necessary to fulfill business or legal
                obligations. Once no longer needed, data is either securely deleted or anonymized.

                This Privacy Policy may be updated from time to time. Any changes will be communicated through our
                website, and continued use of our services implies acceptance of the updated policy.

                For any questions or concerns regarding our Privacy Policy, you can contact us at.
            </p>



            <h4 class="terms-heading">Versai Technology - FAQs</h4>
            <div class="accordion accordion-flush" id="accordionFlushExample">
                <div class="accordion-item">
                    <h2 class="accordion-header">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                            data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                            What information does Versai Technology collect?
                        </button>
                    </h2>
                    <div id="flush-collapseOne" class="accordion-collapse collapse"
                        data-bs-parent="#accordionFlushExample">
                        <div class="accordion-body">
                            Versai Technology collects personal details such as your name, email, phone number, and
                            location. We also gather technical data like IP address, browser type, and device
                            information to improve our services.
                        </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                            data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                            How does Versai Technology use my data?
                        </button>
                    </h2>
                    <div id="flush-collapseTwo" class="accordion-collapse collapse"
                        data-bs-parent="#accordionFlushExample">
                        <div class="accordion-body">Your data is used to enhance our services, provide personalized
                            experiences, send important updates, and maintain security. We may also use it for analytics
                            to improve system performance.</div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                            data-bs-target="#flush-collapseThree" aria-expanded="false"
                            aria-controls="flush-collapseThree">
                            Does Versai Technology share my information with third parties?
                        </button>
                    </h2>
                    <div id="flush-collapseThree" class="accordion-collapse collapse"
                        data-bs-parent="#accordionFlushExample">
                        <div class="accordion-body">We do not sell your personal data. However, we may share it with
                            trusted partners for service improvements or when required by law to comply with legal
                            obligations.</div>
                    </div>
                </div>

                <div class="accordion-item">
                    <h2 class="accordion-header">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                            data-bs-target="#flush-collapseFour" aria-expanded="false"
                            aria-controls="flush-collapseFour">
                            How does Versai Technology protect my personal data?
                        </button>
                    </h2>
                    <div id="flush-collapseFour" class="accordion-collapse collapse"
                        data-bs-parent="#accordionFlushExample">
                        <div class="accordion-body">We implement strong security measures such as encryption, firewalls,
                            and restricted access to safeguard your data. Regular security updates and audits are
                            conducted to prevent unauthorized access.</div>
                    </div>
                </div>

                <div class="accordion-item">
                    <h2 class="accordion-header">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                            data-bs-target="#flush-collapseFive" aria-expanded="false"
                            aria-controls="flush-collapseFive">
                            Can I control or delete my personal data?
                        </button>
                    </h2>
                    <div id="flush-collapseFive" class="accordion-collapse collapse"
                        data-bs-parent="#accordionFlushExample">
                        <div class="accordion-body">Yes, you have full control over your data. You can request access,
                            modifications, or deletion of your personal information. You may also manage cookie settings
                            and opt out of marketing communications.</div>
                    </div>
                </div>

                <div class="accordion-item">
                    <h2 class="accordion-header">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                            data-bs-target="#flush-collapseSix" aria-expanded="false" aria-controls="flush-collapseSix">
                            Does Versai Technology use cookies and tracking technologies?
                        </button>
                    </h2>
                    <div id="flush-collapseSix" class="accordion-collapse collapse"
                        data-bs-parent="#accordionFlushExample">
                        <div class="accordion-body">Yes, we use cookies and tracking tools to enhance user experience
                            and analyze website performance. You can modify cookie preferences through your browser
                            settings at any time.</div>
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
                                    <li><a href="privacy.js"><i className="fa-regular fa-angle-right"></i>Privacy
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

export default Privacy;
