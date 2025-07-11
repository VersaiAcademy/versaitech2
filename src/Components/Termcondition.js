import React, { useEffect } from 'react';
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
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'animate.css';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

import img1 from '../Components/img1.svg';
import img2 from '../Components/img2.svg';
import img83 from '../Components/img83.svg';

const Termcondition = () => {
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
      {/* back to top start */}
      <div className="back-to-top-wrapper" onClick={scrollToTop}>
        <button id="back_to_top" type="button" className="back-to-top-btn">
          <svg width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11 6L6 1L1 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>
      {/* back to top end */}

      <header>
        {/* header-area -start*/}
        <div id="sticky-header" className="tg-header__area black-bg-2 tg-header__mob-space">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-xl-2 col-lg-4 col-md-4 col-6">
                <div className="logo">
                  <Link to="/Home.js">
                    <img className="img-fluid" src={img1} alt="Versai Logo"/>
                  </Link>
                </div>
              </div>
              <div className="col-xl-6 d-none d-xl-block">
                <div className="tgmenu__wrap">
                  <div className="tgmenu__navbar-wrap tgmenu__main-menu">
                    <nav className="tgmenu__nav">
                      <ul className="navigation d-xl-flex gap-2 justify-content-center">
                        <li><Link to="/Home.js">Home</Link></li>
                        <li className="menu-item-has-children dropdown">
                          <Link className="dropdown-toggle" data-bs-toggle="dropdown" to="/AboutUs.js">
                            About Us<i className="ms-1 fa-solid fa-caret-down"></i>
                          </Link>
                          <ul className="dropdown-menu">
                            <li><Link className="dropdown-item" to="/AboutUs.js">About Us</Link></li>
                            <li><Link className="dropdown-item" to="/Ourteam.js">Team</Link></li>
                            <li><Link className="dropdown-item" to="/Portfolio.js">Our Portfolio</Link></li>
                            <li><Link className="dropdown-item" to="/Gallery.js">Gallery</Link></li>
                          </ul>
                        </li>
                        <li><Link to="/Services.js">Services</Link></li>
                        <li><Link to="/Contact.js">Contact</Link></li>
                      </ul>
                    </nav>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-8 col-md-8 col-6">
                <div className="tgmenu__action-wrap d-flex justify-content-between">
                  <div className="d-none d-md-flex d-flex gap-3 align-items-center">
                    <Link className="apply-btn apply-career" to="/Career.js">Career at Versai</Link>
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
        {/* header-area-end */}

        {/* Mobile Menu */}
        <div className="tgmobile__menu">
          <nav className="tgmobile__menu-box">
            <div className="close-btn"><i className="fa-sharp fa-regular fa-xmark"></i></div>
            <div className="nav-logo">
              <Link to="/">
                <img className="img-fluid" src={img2} alt="Mobile Logo"/>
              </Link>
            </div>
            <div className="tgmobile__menu-outer">
              {/* Menu will be inserted here via JavaScript */}
            </div>
          </nav>
        </div>
        <div className="tgmobile__menu-backdrop"></div>
        {/* End Mobile Menu */}
      </header>

      {/* Terms & Condition */}
      <div className="terms-bg">
        <div className="container">
          <div className="terms-cond">
            <div>
              <img  src={img83} alt="Terms Banner"/>
            </div>
            <p className="tersm-para">Terms & Conditions</p>
            <p className="term-parades">We provide smart, reliable mobile app development</p>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="line-heading">
          <div className="privacy-policy">
            <div className="lining"></div>
            <div className="lining"></div>
            <div className="lining"></div>
          </div>
          <h1 className="terms-heading1">Versai Technology Terms & Conditions</h1>
          <div className="privacy-policy">
            <div className="lining"></div>
            <div className="lining"></div>
            <div className="lining"></div>
          </div>
        </div>
        
        <p className="privacy-para">
          These terms and conditions outline the rules and regulations for the use of Versai Technology's website.
          By accessing this website, we assume you accept these terms and conditions in full. Do not continue to use
          Versai Technology's website if you do not agree to all the terms and conditions stated on this page.
          The following terminology applies to these Terms and Conditions, Privacy Policy, and Disclaimer Notice, as
          well as any and all Agreements: "Client", "You", and "Your" refer to you, the person accessing this website
          and accepting the Company's terms and conditions. "The Company", "Ourselves", "We", "Our", and "Us" refer to
          Versai Technology. "Party", "Parties", or "Us" refers to both the Client and Versai Technology, or either
          the Client or Versai Technology individually.
          All terms refer to the offer, acceptance, and consideration of payment necessary to undertake the process of
          assisting the Client in the most appropriate manner — whether through formal meetings, written
          communication, or any other means — for the express purpose of meeting the Client's needs with respect to
          the provision of Versai Technology's services or products, in accordance with the prevailing laws of India.
          Any use of the above terminology or other words in the singular, plural, capitalized, and gendered forms
          (he/she/they) are interchangeable and should be understood as referring to the same.
        </p>

        <h4 className="terms-heading">License</h4>
        <p className="privacy-para">
          Unless otherwise stated, Versai Technology and its licensors own the intellectual property rights for all
          material on Versai Technology. All intellectual property rights are reserved. You may view and print
          pages from versaitechnology.com for your personal use only, subject to the restrictions outlined in these
          terms and conditions.
        </p>

        <h4 className="terms-heading">You Must Not:</h4>
        <ul className="exp-menu">
          <li><i className="fas fa-arrow-right pe-2"></i>Republish material from versaitechnology.com</li>
          <li><i className="fas fa-arrow-right pe-2"></i>Sell, rent, or sub-license material from versaitechnology.com</li>
          <li><i className="fas fa-arrow-right pe-2"></i>Reproduce, duplicate, or copy material from versaitechnology.com</li>
          <li>
            <i className="fas fa-arrow-right pe-2"></i>Redistribute content from Versai Technology (unless the content is
            specifically made for redistribution)
          </li>
        </ul>

        <h4 className="terms-heading">User Comments</h4>
        <ul className="exp-menu">
          <li><i className="fas fa-arrow-right pe-2"></i>This Agreement shall begin on the date hereof.</li>
          <li><i className="fas fa-arrow-right pe-2"></i>You warrant and represent that.</li>
          <li>
            <i className="fas fa-arrow-right pe-2"></i>To the extent permitted by applicable laws, Versai Technology shall
            not be held responsible or liable for any loss, cost, liability, damages, or expenses incurred as a
            result of any use of, posting of, or appearance of Comments on this website.
          </li>
          <li>
            <i className="fas fa-arrow-right pe-2"></i>Versai Technology reserves the right to monitor all Comments and to
            remove any Comments which it, in its sole discretion, considers inappropriate, offensive, or otherwise
            in breach of these Terms and Conditions.
          </li>
          <li>
            <i className="fas fa-arrow-right pe-2"></i>You are entitled to post the Comments on our website and have all necessary licenses and consents to do
            so.
          </li>
          <li>
            <i className="fas fa-arrow-right pe-2"></i>The Comments do not infringe any intellectual property right,
            including but not limited to copyright, patent, trademark, or any other proprietary rights of any third
            party.
          </li>
        </ul>

        <h4 className="terms-heading">Content Liability</h4>
        <p className="privacy-para">
          Versai Technology shall have no responsibility or liability for any content appearing on your website. You
          agree to indemnify and defend us against all claims arising out of or related to your website. No link(s)
          may appear on any page of your website or within any context containing content or materials that could be
          interpreted as defamatory, obscene, unlawful, or that infringe upon, violate, or advocate the infringement
          or violation of any third-party rights.
        </p>

        <h4 className="terms-heading">Reservation of Rights</h4>
        <p>Versai Technology reserves the right, at any time and at its sole discretion, to request the removal of any
          or all links to our website. You agree to promptly remove all such links upon request. We also reserve the
          right to modify these terms and our linking policy at any time. By continuing to link to our website, you
          agree to be bound by and comply with the updated linking terms and conditions.</p>

        <h4 className="terms-heading">Disclaimer</h4>
        <p>To the maximum extent permitted by applicable law, Versai Technology excludes all representations,
          warranties, and conditions relating to this website and your use of it (including, without limitation, any
          implied warranties of satisfactory quality, fitness for a particular purpose, and the use of reasonable care
          and skill).</p>

        <p className="the-limit">The limitations and exclusions of liability set out in this section and elsewhere in this disclaimer:</p>
        <ol type="a">
          <li>are subject to the paragraph above; and</li>
          <li>apply to all liabilities arising under this disclaimer or relating to the subject matter of this</li>
          <li>disclaimer, including those arising in contract, tort (including negligence), or breach of statutory duty.
          To the extent that the website and its information and services are provided free of charge, Versai
          Technology will not be liable for any loss or damage of any kind.</li>
        </ol>
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

export default Termcondition;
