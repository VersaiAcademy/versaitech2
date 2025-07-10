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


import img1 from '../Components/img1.svg';


const Contact = () => {
  // Updated embed URL for Versai Academy
  const embedUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3530.296396456318!2d74.961492!3d28.2982542!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39149db0e2a540cf%3A0xd14b579e89103212!2sVERSAI%20ACADEMY%20%7C%7C%20Best%20Computer%20Course%20In%20Churu%2C%20CCC%2C%20Java%2C%20Digital%20Marketing%2C%20PHP%2C%20DTP%2C%20Tally%2C%20Web%20Design%2C%20Basic%20Computer!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin";


  return (
    <>
      {/* Your existing header and other components remain the same */}
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
                        
      {/* The main content with improved map section */}
      <main>
        {/* breadcrumb-area-start */}
        <div className="tg-breadcrumb-height contactus-first">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="tg-breadcrumb__content z-index-3 text-center">
                  <h3 className="tg-breadcrumb__title">Contact</h3>
                  <div className="tg-breadcrumb__list">
                    <span><a href="index.html">Home</a></span>
                    <span className="dvdr"><i className="fa-solid fa-chevron-right"></i></span>
                    <span>Contact</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* breadcrumb-area-end */}

        {/* contact-area-start */}
        <div className="tg-contact-area fix pt-120 pb-120">
          <div className="container">
            <div className="row gx-30">
              <div className="col-xl-4 col-lg-4">
                <div className="tg-contact-left">
                  <h4 className="tg-section-title mb-30">Get in Touch Here</h4>
                  <div className="tg-contact-item-wrap">
                    <div className="tg-contact-item d-flex align-items-center mb-10">
                      <div className="tg-contact-icon">
                        <span>
                          <i className="fa fa-envelope"></i>
                        </span>
                      </div>
                      <div className="tg-contact-info">
                        <h5>Talk With Our Expert </h5>
                        <a href="tel:+918619708196">+91 8619708196</a>
                      </div>
                    </div>
                    <div className="tg-contact-item d-flex align-items-center mb-10">
                      <div className="tg-contact-icon">
                        <span>
                          <i className="fas fa-headset"></i>
                        </span>
                      </div>
                      <div className="tg-contact-info">
                        <h5>Enquiry Department</h5>
                        <a href="mailto:technologyversai01@gmail.com">technologyversai01@gmail.com</a>
                      </div>
                    </div>
                    <div className="tg-contact-item d-flex align-items-center mb-10">
                      <div className="tg-contact-icon">
                        <span>
                          <i className="fas fa-user-headset"></i>
                        </span>
                      </div>
                      <div className="tg-contact-info">
                        <h5>Customer Support</h5>
                        <a href="mailto:support@versaitechnology.com">support@versaitechnology.com</a>
                      </div>
                    </div>
                    <div className="tg-contact-item d-flex align-items-center mb-10">
                      <div className="tg-contact-icon">
                        <span>
                          <i className="fas fa-user-plus"></i>
                        </span>
                      </div>
                      <div className="tg-contact-info">
                        <h5>Hiring Department</h5>
                        <a href="mailto:hr@versaitechnology.com">
                          hr@versaitechnology.com
                        </a>
                      </div>
                    </div>
                    <div className="tg-contact-item d-flex align-items-center mb-10">
                      <div className="tg-contact-icon">
                        <span>
                          <i className="fas fa-wallet"></i>
                        </span>
                      </div>
                      <div className="tg-contact-info">
                        <h5>Billings & Payments</h5>
                        <a href="mailto:payments@versaitechnology.com">
                          payments@versaitechnology.com
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-8 col-lg-8">
                <div className="tg-contact-map">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3529.335063474832!2d75.1491233150629!3d27.85712738270338!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396c4b5a0a7e5c1f%3A0x8a1a3f1c1f1c1f1c!2sVersai%20Technology!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
                    width="100%"
                    height="450"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    title="Versai Technology Location"
                  ></iframe>
                </div>
              </div>
            </div>

            {/* The rest of your contact form remains the same */}
            <div className="tg-contact-form-box mt-110">
              <div className="row gx-30">
                <div className="col-xl-4 col-lg-4">
                  <div className="tg-contact-box">
                    <h4 className="tg-section-title mb-20">Do you have any question? </h4>
                    <div className="tg-contact-text pb-10">
                      <p>For your car we will do everything advice, repairs and maintenance. We are the some preferred choice by many car owners because </p>
                    </div>
                  </div>
                </div>
                <div className="col-xl-8 col-lg-8">
                  <div className="tg-contact-form">
                    <form id="contact-form" action="https://api.web3forms.com/submit" method="POST">
                     <input type="hidden" name="access_key" value="1acf049e-839f-455b-a63e-3744d67404ae"></input>
                      <div className="row">
                        <div className="col-xl-6 col-lg-6 col-md-6 mb-20">
                          <div className="tg-contact-input-box-2">
                            <input name="name" type="text" placeholder="First Name..." required />
                          </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-6 mb-20">
                          <div className="tg-contact-input-box-2">
                            <input name="email" type="email" placeholder="Your E-mail..." required />
                          </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-6 mb-20">
                          <div className="tg-contact-input-box-2">       
                            <input type="tel" name="phone" className="form-control" placeholder="Phone Number" required />
                          </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-6 mb-20">
                          <div className="tg-contact-input-box-2">
                            <input name="subject" type="text" placeholder="Subject" required />
                          </div>
                        </div>
                        <div className="col-xl-12 mb-20">
                          <div className="tg-contact-textarea-box-2">
                            <textarea name="message" placeholder="Your Message" required></textarea>
                          </div>
                        </div>
                        <div className="col-xl-12">
                          <div className="tg-contact-button d-flex justify-content-center">
                            <button className="tg-btn-gradient" type="submit">submit now</button>
                            <p className="ajax-response"></p>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* contact-area-end */}
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

export default Contact;
