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
// import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'animate.css';

import img1 from '../Components/img1.svg';
import img2 from '../Components/img2.svg';
import img21 from '../Components/img21.jpg';
import img22 from '../Components/img22.jpg';
import img23 from '../Components/img23.jpg';
import img24 from '../Components/img24.jpg';
import img25 from '../Components/img25.jpg';
import img26 from '../Components/img26.jpg';
import img27 from '../Components/img27.jpg';
import img28 from '../Components/img28.jpg';
import img29 from '../Components/img29.jpg';

const Ourteam = () => {
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
        </header>
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

    {/* <!-- **************Our Team************** --> */}
    <div class="container">
        <h1 class="py-5 text-center">Versai <span class="use-gradi">Creative Family</span></h1>
        <div class="row pt-10 pb-20">

            <div class="col-lg-8 col-md-6 col-12 mb-40 order-md-1 order-2">
                <div class="card-versai">
                    <p class="unlock-your use-gradi">Unlock Your Future with Versai Technology</p>
                    <p class="step-into">
                        Step into the world of tomorrow cutting-edge
                        digital media programs, meticulously designed to align with today’s evolving job market.
                        With over 5 years of proven educational leadership, we offer immersive, industry-driven
                        training that empowers you with the skills employers demand. Join a dynamic learning
                        environment equipped with world-class infrastructure and innovation at its core. Our
                        programs emphasize practical, hands-on experience to ensure you're not just learning you're
                        doing. We go beyond the curriculum. Our unmatched value added offerings are crafted to
                        enhance your employability and set you apart in a competitive landscape. Your journey
                        culminates in an elite placement opportunity with a leading multinational corporation
                        because your success is our mission.

                        <br></br>
                        <p class="use-gradi">Visionary by Design, Leader by Choice</p>
                    </p>

                </div>
            </div>

            <div class="col-lg-4 col-md-6 col-12 mb-40 order-md-2 order-1">

                <div class="card team-cardceo">
                    <div class="card-body">
                        <img className="img-fluid" src={img21} alt="img21" />
                        <div>
                            <h4 class="team-title">Anil Jangir</h4>
                            <h6 class="team-desc">CEO & Founder</h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>


        <div class="row">
            <div class="col-xxl-3 col-xl-3 col-lg-4 col-md-4 col-sm-6 col-12 mb-40">
                <div class="check">
                    <div class="card team-card">
                        <div class="card-body">
                          <img className="img-fluid" src={img22} alt="img22" />
                            <div>
                                <h4 class="team-title">Ankit Pathe</h4>
                                <h6 class="team-desc">Team Leader</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="col-xxl-3 col-xl-3 col-lg-4 col-md-4 col-sm-6 col-12 mb-40">
                <div class="check">
                    <div class="card team-card">
                        <div class="card-body">
                            <img className="img-fluid" src={img23} alt="img23" />
                            <div>
                                <h4 class="team-title">Kamlesh Jangir</h4>
                                <h6 class="team-desc">Full-Stack Developer</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="col-xxl-3 col-xl-3 col-lg-4 col-md-4 col-sm-6 col-12 mb-40">
                <div class="check">
                    <div class="card team-card">
                        <div class="card-body">
                            <img className="img-fluid" src={img24} alt="img24" />
                            <div>
                                <h4 class="team-title">Rahul Prajapat</h4>
                                <h6 class="team-desc">Graphic Designer</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
       
            <div class="col-xxl-3 col-xl-3 col-lg-4 col-md-4 col-sm-6 col-12 mb-40">
                <div class="check">
                    <div class="card team-card">
                        <div class="card-body">
                            <img className="img-fluid" src={img25} alt="img25" />
                            <div>
                                <h4 class="team-title">Mukesh</h4>
                                <h6 class="team-desc">Front-End Developer</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
                 <div class="col-xxl-3 col-xl-3 col-lg-4 col-md-4 col-sm-6 col-12 mb-40">
                <div class="check">
                    <div class="card team-card">
                        <div class="card-body">
                             <img className="img-fluid" src={img26} alt="img26" />
                            <div>
                                <h4 class="team-title">Govind Kumar</h4>
                                <h6 class="team-desc">Front-End Developer</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-xxl-3 col-xl-3 col-lg-4 col-md-4 col-sm-6 col-12 mb-40">
                <div class="check">
                    <div class="card team-card">
                        <div class="card-body">
                             <img className="img-fluid" src={img27} alt="img27" />
                            <div>
                                <h4 class="team-title">Umesh Singh</h4>
                                <h6 class="team-desc">Java Deveploper</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div class="col-xxl-3 col-xl-3 col-lg-4 col-md-4 col-sm-6 col-12 mb-40">
                <div class="check">
                    <div class="card team-card">
                        <div class="card-body">
                             <img className="img-fluid" src={img28} alt="img28" />
                            <div>
                                <h4 class="team-title">Shardul Jadhav</h4>
                                <h6 class="team-desc">Front-End Developer</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="col-xxl-3 col-xl-3 col-lg-4 col-md-4 col-sm-6 col-12 mb-40">
                <div class="check">
                    <div class="card team-card">
                        <div class="card-body">
                             <img className="img-fluid" src={img29} alt="img29" />
                            <div>
                                <h4 class="team-title">Lavish Sharma</h4>
                                <h6 class="team-desc">Digital Marketer</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
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

export default Ourteam;
