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

import img1 from '../Components/img1.svg';
import img2 from '../Components/img2.svg';

const Career = () => {
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
      {/* Back to top start */}
      <div className="back-to-top-wrapper" onClick={scrollToTop}>
        <button id="back_to_top" type="button" className="back-to-top-btn">
          <svg width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11 6L6 1L1 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>
      {/* Back to top end */}

      <header>
        {/* Header area start */}
        <div id="sticky-header" className="tg-header__area black-bg-2 tg-header__mob-space">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-xl-2 col-lg-4 col-md-4 col-6">
                <div className="logo">
                  <Link to="/">
                    <img className="img-fluid" src={img1} alt="Versai Logo" />
                  </Link>
                </div>
              </div>
              <div className="col-xl-6 d-none d-xl-block">
                <div className="tgmenu__wrap">
                  <div className="tgmenu__navbar-wrap tgmenu__main-menu">
                    <nav className="tgmenu__nav">
                      <ul className="navigation d-xl-flex gap-2 justify-content-center">
                        <li><Link to="/">Home</Link></li>
                        <li className="menu-item-has-children">
                          <a className="dropdown dropdown-toggle" data-bs-toggle="dropdown" href="#about">
                            About Us <i className="ms-1 fa-solid fa-caret-down"></i>
                          </a>
                          <ul className="dropdown-menu">
                            <li><Link className="dropdown-item" to="/about">About Us</Link></li>
                            <li><Link className="dropdown-item" to="/team">Team</Link></li>
                            <li><Link className="dropdown-item" to="/portfolio">Our Portfolio</Link></li>
                            <li><Link className="dropdown-item" to="/gallery">Gallery</Link></li>
                          </ul>
                        </li>
                        <li><Link to="/services">Services</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                      </ul>
                    </nav>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-8 col-md-8 col-6">
                <div className="tgmenu__action-wrap d-flex justify-content-between">
                  <div className="d-none d-md-flex d-flex gap-3 align-items-center">
                    <Link className="apply-btn apply-career" to="/career">Career at Versai</Link>
                    <a className="apply-btn apply-intern apply-active"
                      href="https://docs.google.com/forms/d/e/1FAIpQLSds9WaOXtaIeKDZBG7o7tqGeDbSy7PASFqcPtnEVBmi9xiLlw/viewform?usp=sharing&ouid=117424442439504764324"
                      target="_blank" rel="noopener noreferrer">
                      Apply for Internship
                    </a>
                  </div>
                  <div className="mobile-nav-toggler d-xl-none ms-auto">
                    <i className="text-dark fas fa-bars"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Header area end */}

        {/* Mobile Menu */}
        <div className="tgmobile__menu">
          <nav className="tgmobile__menu-box">
            <div className="close-btn"><i className="fa-sharp fa-regular fa-xmark"></i></div>
            <div className="nav-logo">
              <Link to="/">
                <img className="img-fluid" src={img2} alt="Versai Logo" />
              </Link>
            </div>
            <div className="tgmobile__menu-outer">
              {/* Menu will come automatically via JavaScript */}
            </div>
          </nav>
        </div>
        <div className="tgmobile__menu-backdrop"></div>
        {/* End Mobile Menu */}
      </header>

      {/* Career page content */}
      <div className="terms-bg">
        <div className="container">
          <div className="terms-cond">
            <div>
              <p className="tersm-para">Be a Member of Versai Family</p>
            </div>
            <p className="term-parades">
              Join Versai Technology innovation meets passion. We warmly welcome
              talented and enthusiastic individuals to be a part of our dynamic team. 
              Grow with us and shape the future of technology.
            </p>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="build-container">
          <h5 className="build-career use-gradi">Build Your Career with</h5>
          <h1>Versai Technology</h1>
        </div>

        {/* Job listings */}
        {[
          { title: "PHP Developer", description: "Bachelors/Master's degree in Computer Science, Engineering or a related subject" },
          { title: "Application Development", description: "Bachelors/Master's degree in Computer Science, Engineering or a related subject" },
          { title: "React Native", description: "Bachelors/Master's degree in Computer Science, Engineering or a related subject" },
          { title: "Full-Stack Developer", description: "Bachelors/Master's degree in Computer Science, Engineering or a related subject" },
          { title: "Graphic Designer & Video Editor", description: "Bachelor's degree in any stream" },
          { title: "Digital Marketing Executive", description: "Bachelor's degree in any stream" },
          { title: "Sales Executive", description: "Bachelor's degree in any stream" }
        ].map((job, index) => (
          <div className="apply-dev" key={index}>
            <div>
              <p className="php-devel">{job.title}</p>
              <p>{job.description}</p>
            </div>
            <div>
              <a href="#" className="apply-devbtn" data-bs-toggle="modal" data-bs-target="#myModal">
                Apply Now
              </a>
            </div>
          </div>
        ))}

        {/* Application Modal */}
        <div className="modal fade" id="myModal" tabIndex="-1" aria-labelledby="myModalLabel" aria-hidden="true">
          <div className="modal-dialog modal-lg">
            <div className="modal-content">
              <div className="modal-header">
                <p className="modal-title fs-5" id="staticBackdropLabel">Apply Now</p>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
                <div className="container">
                  <div className="header">
                    <img className="img-fluid" src={img2} alt="Versai Logo" />
                    <h1>Versai Technology Career</h1>
                    <p className="subtitle">Gain real-world experience with Versai Technology</p>
                  </div>

                  <div className="form-container">
                    <form id="internshipForm">
                      <div className="row">
                        <div className="col-md-6">
                          <div className="form-group">
                            <label htmlFor="firstName" className="required">First Name</label>
                            <input type="text" className="form-control" id="firstName" name="firstName" required />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <label htmlFor="lastName" className="required">Last Name</label>
                            <input type="text" className="form-control" id="lastName" name="lastName" required />
                          </div>
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-md-6">
                          <div className="form-group">
                            <label htmlFor="email" className="required">Email Address</label>
                            <input type="email" className="form-control" id="email" name="email" required />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <label htmlFor="phone" className="required">Phone Number</label>
                            <input type="tel" className="form-control" id="phone" name="phone" required />
                          </div>
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-md-6">
                          <div className="form-group">
                            <label htmlFor="degree" className="required">Degree Program</label>
                            <input type="text" className="form-control" id="degree" name="degree" required />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <label htmlFor="graduation" className="required">Experience</label>
                            <select className="form-select" id="graduation" name="graduation" required>
                              <option value="">Select Year</option>
                              <option value="1">1</option>
                              <option value="2">2</option>
                              <option value="3">3</option>
                              <option value="4">4</option>
                              <option value="5">5</option>
                            </select>
                          </div>
                        </div>
                      </div>

                      <div className="form-group">
                        <label className="required">Internship Domain</label>
                        <div className="internship-options">
                          {[
                            "Web Development", 
                            "Application Development",
                            "PHP",
                            "React Native",
                            "Full-Stack Development",
                            "Database Management",
                            "Software Testing",
                            "Customer Support",
                            "Digital Marketing",
                            "Graphic Designer & Video Editor",
                            "Sales Executive"
                          ].map((domain, i) => (
                            <div className="option-item" key={i}>
                              <div className="form-check">
                                <input className="form-check-input" type="checkbox" name="domain" 
                                  value={domain.toLowerCase().replace(/\s+/g, '')} id={`domain${i}`} />
                                <label className="form-check-label" htmlFor={`domain${i}`}>
                                  {domain}
                                </label>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="form-group">
                        <label htmlFor="skills">Technical Skills</label>
                        <textarea className="form-control" id="skills" name="skills" rows="3"
                          placeholder="List your technical skills and proficiency levels"></textarea>
                      </div>

                      <div className="form-group">
                        <label htmlFor="resume" className="required">Upload Resume/CV</label>
                        <input type="file" className="form-control" id="resume" name="resume" required />
                      </div>

                      <button type="submit" className="submit-btn">
                        <span className="me-2">Submit Application</span>
                        <i className="fas fa-paper-plane"></i>
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer className="mt-5">
        {/* Footer area start */}
        <div className="tg-footer-area fix p-relative z-index black-bg pt-80">
          <div className="container">
            <div className="row">
              <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 mb-50 wow tgfadeUp" data-wow-duration=".9s" data-wow-delay=".5s">
                <div className="tg-footer-widget footer-col-2">
                  <h4 className="tg-footer-widget-title">Useful Links</h4>
                  <div className="tg-footer-list">
                    <ul>
                      <li><Link to="/"><i className="fa-regular fa-angle-right"></i>Home</Link></li>
                      <li><Link to="/about"><i className="fa-regular fa-angle-right"></i>About Us</Link></li>
                      <li><Link to="/team"><i className="fa-regular fa-angle-right"></i>Team</Link></li>
                      <li><Link to="/gallery"><i className="fa-regular fa-angle-right"></i>Gallery</Link></li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 mb-50 wow tgfadeUp" data-wow-duration=".9s" data-wow-delay=".5s">
                <div className="tg-footer-widget footer-col-2">
                  <h4 className="tg-footer-widget-title">Resources</h4>
                  <div className="tg-footer-list">
                    <ul>
                      <li>
                        <a href="https://docs.google.com/forms/d/e/1FAIpQLSds9WaOXtaIeKDZBG7o7tqGeDbSy7PASFqcPtnEVBmi9xiLlw/viewform?usp=sharing&ouid=117424442439504764324"
                          target="_blank" rel="noopener noreferrer">
                          <i className="fa-regular fa-angle-right"></i>Apply for Internship
                        </a>
                      </li>
                      <li><Link to="/career"><i className="fa-regular fa-angle-right"></i>Career at Versai</Link></li>
                      <li><Link to="/contact"><i className="fa-regular fa-angle-right"></i>Contact Us</Link></li>
                      <li><Link to="/services"><i className="fa-regular fa-angle-right"></i>Services</Link></li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 mb-50 wow tgfadeUp" data-wow-duration=".9s" data-wow-delay=".3s">
                <div className="tg-footer-widget footer-col-2">
                  <h4 className="tg-footer-widget-title">Support</h4>
                  <div className="tg-footer-list">
                    <ul>
                      <li><Link to="/terms"><i className="fa-regular fa-angle-right"></i>Terms & Condition</Link></li>
                      <li><Link to="/cancellation"><i className="fa-regular fa-angle-right"></i>Cancellation and Refund</Link></li>
                      <li><Link to="/privacy"><i className="fa-regular fa-angle-right"></i>Privacy Policy</Link></li>
                      <li><Link to="/faq"><i className="fa-regular fa-angle-right"></i>FAQs</Link></li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 mb-50 wow tgfadeUp" data-wow-duration=".9s" data-wow-delay=".7s">
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
        {/* Footer area end */}
        
        {/* Copyright area start */}
        <div className="tg-copyright-area">
          <div className="container">
            <div className="tg-copyright-border tg-copyright-ptb">
              <div className="d-flex flex-column align-items-center">
                <div className="wow tgfadeUp" data-wow-duration=".9s" data-wow-delay=".3s">
                  <div className="tg-copyright-right text-center text-md-end">
                    <a className="text-anim-2" href="https://www.facebook.com/profile.php?id=61576737841115"
                      target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a>
                    <a className="text-anim-2" href="https://www.instagram.com/versai_technology/reels/" 
                      target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
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
        {/* Copyright area end */}
      </footer>
    </>
  );
};

export default Career;
