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

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { useRef, useEffect, useState } from 'react';
import PureCounter from '@srexi/purecounterjs';
import WOW from 'wowjs';

import img1 from '../Components/img1.svg';
import img2 from '../Components/img2.svg';
import img3 from '../Components/img3.jpg';
import img4 from '../Components/img4.jpg';
import img5 from '../Components/img5.jpg';
import img6 from '../Components/img6.jpg';
import img7 from '../Components/img7.jpg';
import img8 from '../Components/img8.jpg';
import img9 from '../Components/img9.jpg';
import img10 from '../Components/img10.jpg';
import img11 from '../Components/img11.jpg';
import img12 from '../Components/img12.jpg';
import img13 from '../Components/img13.jpg';
import img14 from '../Components/img14.jpg';
import img15 from '../Components/img15.jpg';
import img16 from '../Components/img16.jpg';
import img17 from '../Components/img17.jpg';

// import 'owl.carousel/dist/assets/owl.carousel.css';
// import 'owl.carousel';





const Home = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const closeMobileMenu = () => {
        setMenuOpen(false);
    };

    const swiperRef = useRef(null);

    const handleNext = () => {
        if (swiperRef.current && swiperRef.current.swiper) {
            swiperRef.current.swiper.slideNext();
        }
    };

    const handlePrev = () => {
        if (swiperRef.current && swiperRef.current.swiper) {
            swiperRef.current.swiper.slidePrev();
        }
    };

    useEffect(() => {
        new PureCounter();
        
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
                <Link to="/">
                  <img className="img-fluid" src={img1} alt="logo" />
                </Link>
              </div>
            </div>
            <div className="col-xl-6 d-none d-xl-block">
              <div className="tgmenu__wrap">
                <div className="tgmenu__navbar-wrap tgmenu__main-menu">
                  <nav className="tgmenu__nav">
                    <ul className="navigation d-xl-flex gap-2 justify-content-center">
                      <li><Link to="/">Home</Link></li>
                      <li className="menu-item-has-children dropdown">
                        <a href="/AboutUs.js" className="dropdown-toggle" data-bs-toggle="dropdown">
                          About Us <i className="ms-1 fa-solid fa-caret-down"></i>
                        </a>
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
                <div className="d-none d-md-flex gap-3 align-items-center">
                  <Link className="apply-btn apply-career" to="/Career.js">Career at Versai</Link>
                  <a
                    className="apply-btn apply-intern apply-active"
                    href="https://docs.google.com/forms/d/e/1FAIpQLSds9WaOXtaIeKDZBG7o7tqGeDbSy7PASFqcPtnEVBmi9xiLlw/viewform?usp=sharing&ouid=117424442439504764324"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Apply for Internship
                  </a>
                </div>
                <div className="mobile-nav-toggler d-xl-none ms-auto" onClick={toggleMobileMenu}>
                  <i className="text-dark fas fa-bars"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`tgmobile__menu ${menuOpen ? 'menu-open' : ''}`}>
        <nav className="tgmobile__menu-box">
          <div className="close-btn" onClick={closeMobileMenu}>
            <i className="fa-sharp fa-regular fa-xmark"></i>
          </div>
          <div className="nav-logo">
            <Link to="/">
              <img className="img-fluid" src={img2} alt="mobile logo" />
            </Link>
          </div>
          <div className="tgmobile__menu-outer">
            <ul className="mobile-nav">
              <li><Link to="/" onClick={closeMobileMenu}>Home</Link></li>
              <li><Link to="/AboutUs.js" onClick={closeMobileMenu}>About Us</Link></li>
              <li><Link to="/Ourteam.js" onClick={closeMobileMenu}>Team</Link></li>
              <li><Link to="/Portfolio.js" onClick={closeMobileMenu}>Our Portfolio</Link></li>
              <li><Link to="/Gallery.js" onClick={closeMobileMenu}>Gallery</Link></li>
              <li><Link to="/Services.js" onClick={closeMobileMenu}>Services</Link></li>
              <li><Link to="/Contact.js" onClick={closeMobileMenu}>Contact</Link></li>
              <li><Link to="/Career.js" onClick={closeMobileMenu}>Career</Link></li>
            </ul>
          </div>
        </nav>
      </div>

      {menuOpen && <div className="tgmobile__menu-backdrop" onClick={closeMobileMenu}></div>}
    </header>

            <main>
                {/* <!-- hero-area-start --> */}
                <Swiper
  modules={[Autoplay]}             // ✅ Removed Navigation
  loop={true}
  autoplay={{
    delay: 2500,
    disableOnInteraction: false,
  }}
  className="owl-carousel owl-theme"
  breakpoints={{
    320: { slidesPerView: 1, spaceBetween: 20 },
    480: { slidesPerView: 1, spaceBetween: 30 },
    768: { slidesPerView: 1, spaceBetween: 40 },
    1024: { slidesPerView: 1, spaceBetween: 50 },
  }}
>

                    <SwiperSlide className="item tg-hero-ptb theme-bg">
                        <div className="container">
                            <div className="row">
                                <div className="col-xxl-6 col-xl-6 col-md-6 col-sm-12">
                                    <div className="tg-hero-content z-index-9">
                                        <div className="tg-hero-title-box mb-30">

                                            <h1 className="home-versai wow tgfadeUp" data-wow-duration=".9s" data-wow-delay=".5s">
                                                Versai Technology
                                            </h1>
                                        </div>
                                        <div className="expert-it wow tgfadeUp" data-wow-duration=".9s" data-wow-delay=".7s">
                                            <p className="epx-first">Expert IT Services for a Sustainable Digital Future</p>
                                            <p className="exp-sec">At Versai Technology, we help businesses grow in the digital age
                                                through expert solutions in digital marketing, web development, data analytics,
                                                cloud services.</p>
                                            <menu className="exp-menu">
                                                <li>
                                                    <a href="/Webdevelopment.js">
                                                        <i className="fas fa-check-square"></i> Web design & development
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="/Appdevelopment.js">
                                                        <i className="fas fa-check-square"></i> Appdevelopment
                                                    </a>
                                                </li>

                                                <li>
                                                    <a href="#">
                                                        <i className="fas fa-check-square"></i> SEO services
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="/Graphic.js">
                                                        <i className="fas fa-check-square"></i> Graphic Designing
                                                    </a>
                                                </li>
                                            </menu>
                                        </div>

                                        <div className="tg-hero-button wow tgfadeUp" data-wow-duration=".9s" data-wow-delay=".9s">

                                        </div>
                                    </div>
                                </div>
                                <div className="col-xxl-6 col-xl-6 col-md-6 col-sm-12 d-none d-md-block">
                                    <div className="first-image d-flex justify-content-center">
                                        <img className="img-fluid" src={img3} alt="img3" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide id="theme-bgid" className="item tg-hero-ptb">
                        <div className="container">
                            <div className="row">
                                <div className="col-xxl-6 col-xl-6 col-md-6 col-sm-12 d-none d-md-block">
                                    <div className="first-image d-flex justify-content-center wow tgfadeRight" data-wow-duration=".9s" data-wow-delay=".5s">
                                        <img className="img-fluid" src={img4} alt="img4" />
                                    </div>
                                </div>
                                <div className="col-xxl-6 col-xl-6 col-md-6 col-sm-12">
                                    <div className="tg-hero-content z-index-9">
                                        <div className="tg-hero-title-box mb-30">

                                            <h1 className="home-versai wow tgfadeUp" data-wow-duration=".9s" data-wow-delay=".5s">
                                                Versai Technology
                                            </h1>
                                        </div>
                                        <div className="expert-it wow tgfadeUp" data-wow-duration=".9s" data-wow-delay=".7s">
                                            <p className="epx-first">Mobile App Development for Modern Digital Needs</p>
                                            <p className="exp-sec">
                                                We build high-performance, user-friendly mobile apps tailored to modern business
                                                needs, ensuring seamless functionality, scalability, and engaging user
                                                experiences.
                                            </p>
                                            <menu className="exp-menu">

                                                <li>
                                                    <a href="/Appdevelopment.js">
                                                        <i className="fas fa-check-square"></i> App Development
                                                    </a>
                                                </li>

                                                <li>
                                                    <a href="/Webdevelopment.js">
                                                        <i className="fas fa-check-square"></i> Web design & development
                                                    </a>
                                                </li>

                                                <li>
                                                    <a href="/DataBackup.js">
                                                        <i className="fas fa-check-square"></i> Data Backup
                                                    </a>
                                                </li>


                                                <li>
                                                    <a href="/ItConsultation.js">
                                                        <i className="fas fa-check-square"></i> IT Consultation
                                                    </a>
                                                </li>
                                            </menu>
                                        </div>

                                        <div className="tg-hero-button wow tgfadeUp" data-wow-duration=".9s" data-wow-delay=".9s">

                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </SwiperSlide>

                </Swiper>
                {/* <!-- hero-area-end --> */}
                



                {/* {/* <!-- about-area-start --> } */}
                <div className="tg-about-area fix p-relative pt-60 pb-60">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-xl-6 col-lg-6 order-1 order-lg-0  wow tgfadeLeft" data-wow-duration=".9s"
                                data-wow-delay=".5s">
                                <div className="tg-about-left">
                                    <div className="tg-about-thumb-box p-relative">
                                        <div className="tg-about-thumb">
                                            <img className="img-fluid" src={img5} alt="img5" />
                                        </div>
                                        <div className="tg-about-thumb-sm">
                                            <img className="img-fluid" src={img6} alt="img6" />
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-6 order-0 order-lg-1  wow tgfadeRight" data-wow-duration=".9s"
                                data-wow-delay=".7s">
                                <div className="tg-about-right">
                                    <div className="tg-about-title-box mb-15">
                                        <span className="tg-section-subtitle">About Our Company</span>
                                        <h4 className="tg-section-title">Smart IT Solutions to Drive Your Tech Success</h4>
                                    </div>
                                    <div className="tg-about-text mb-40">
                                        <p>Versai Technology has been delivering top-notch services for over a decade, building
                                            a strong track record in the industry and consistently exceeding client expectations
                                            with innovative solutions.</p>
                                    </div>
                                    <div className="tg-hero-button">
                                        <Link className="tg-btn-gradient" to="/AboutUs.js">
                                            Read More
                                            <span>
                                                <svg width="17" height="12" viewBox="0 0 17 12" fill="none"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M15.6875 6.71875L11.6875 10.7188C11.3125 11.125 10.6562 11.125 10.2812 10.7188C9.875 10.3438 9.875 9.6875 10.2812 9.3125L12.5625 7H1C0.4375 7 0 6.5625 0 6C0 5.40625 0.4375 5 1 5H12.5625L10.2812 2.71875C9.875 2.34375 9.875 1.6875 10.2812 1.3125C10.6562 0.90625 11.3125 0.90625 11.6875 1.3125L15.6875 5.3125C16.0938 5.6875 16.0938 6.34375 15.6875 6.71875Z"
                                                        fill="white" />
                                                </svg>
                                            </span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- about-area-end --> */}


                {/* <!-- service-area-start --> */}
                <div className="tg-service-area black-bg fix z-index pt-120 pb-120">
                    <div className="container">
                        <div className="tg-service-title-box mb-50">
                            <div className="row align-items-end">
                                <div className="col-xl-7 col-lg-7 col-md-7">
                                    <div className="tg-service-title-box">
                                        <span className="tg-section-subtitle-2">Innovative solutions & support</span>
                                        <h4 className="tg-section-title text-white">Simplifying IT for Peak Productivity</h4>
                                    </div>
                                </div>
                                <div className="col-xl-5 col-lg-5 col-md-5">
                                    <div className="tg-service-arrow-box text-md-end">
                                        <button className="service-next" onClick={handlePrev}>
                                            <span>
                                                <i className="fa-regular fa-arrow-left-long"></i>
                                            </span>
                                        </button>
                                        <button className="service-prev" onClick={handleNext}>
                                            <span>
                                                <i className="fa-regular fa-arrow-right-long"></i>
                                            </span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xl-12">
                                <div className="tg-service-slider-wrap">
                                   <Swiper
  ref={swiperRef}
  modules={[Autoplay]}
  spaceBetween={30}
  slidesPerView={3}
  loop={true}
  autoplay={{
    delay: 2500,
    disableOnInteraction: false,
  }}
  breakpoints={{
    320: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    576: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    992: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  }}
  className="swiper tg-service-active fix"
>

                                        <SwiperSlide>
                                            <div className="tg-service-item">
                                                <div className="tg-service-icon-box mb-30 d-flex justify-content-between">
                                                    <div className="tg-service-icon">
                                                        <span>
                                                            <i className="flaticon-008-wifi"></i>
                                                        </span>
                                                    </div>
                                                    <div className="tg-service-number">
                                                        <span>
                                                            01
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="tg-service-content">
                                                    <h4 className="tg-service-title mb-20"><a className="text-anim-3"
                                                        href="#">Digital Solutions</a></h4>
                                                    <p>Versai Technology delivers<br></br> innovative digital solutions,<br></br> enhancing
                                                        business efficiency, growth,<br></br> and seamless transformation globally
                                                    </p>
                                                </div>
                                            </div>
                                        </SwiperSlide>

                                        <SwiperSlide>
                                            <div className="tg-service-item">
                                                <div className="tg-service-icon-box mb-30 d-flex justify-content-between">
                                                    <div className="tg-service-icon">
                                                        <span>
                                                            <i className="flaticon-001-laptop"></i>
                                                        </span>
                                                    </div>
                                                    <div className="tg-service-number">
                                                        <span>
                                                            02
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="tg-service-content">
                                                    <h4 className="tg-service-title mb-20"><a className="text-anim-3"
                                                        href="#">Software Masters</a></h4>
                                                    <p>Software Masters: Future-ready software solutions, empowering
                                                        businesses with innovation, intelligence, and seamless digital
                                                        excellence.</p>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="tg-service-item">
                                                <div className="tg-service-icon-box mb-30 d-flex justify-content-between">
                                                    <div className="tg-service-icon">
                                                        <span>
                                                            <i className="flaticon-002-api"></i>
                                                        </span>
                                                    </div>
                                                    <div className="tg-service-number">
                                                        <span>
                                                            03
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="tg-service-content">
                                                    <h4 className="tg-service-title mb-20"><a className="text-anim-3"
                                                        href="#">Seamless API Integration</a></h4>
                                                    <p>Seamless API Integration ensures smooth connectivity, enhancing
                                                        efficiency, scalability, and performance for modern digital
                                                        solutions.</p>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="tg-service-item">
                                                <div className="tg-service-icon-box mb-30 d-flex justify-content-between">
                                                    <div className="tg-service-icon">
                                                        <span>
                                                            <i className="flaticon-019-laptop"></i>
                                                        </span>
                                                    </div>
                                                    <div className="tg-service-number">
                                                        <span>
                                                            04
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="tg-service-content">
                                                    <h4 className="tg-service-title mb-20"><a className="text-anim-3" href="#">DigiCoding</a>
                                                    </h4>
                                                    <p>Digi Coding delivers cutting-edge software solutions, empowering
                                                        businesses with innovation, precision, and digital excellence. </p>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                    </Swiper>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- service-area-end --> */}

                {/* <!-- text slider-area-end --> */}
                {/* <div className="tg-text-slider-area tg-text-slider-border black-bg fix">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-xl-12">
                        <div className="tg-text-slider-wrap">
                             <span>Versai Technology <i><img  className="img-fluid" src={img7} alt="img7"/></i> utting Edge  
                             <i><img className="img-fluid" src={img7} alt="img7"/></i> DigitalSolutions <i>
                                <img
                                 className="img-fluid" src={img7} alt="img7"/></i>Versai Technology <i>
                                <img
                                 className="img-fluid"src={img7} alt="img7"/></i> utting Edge <i>
                                <img
                                 className="img-fluid" src={img7} alt="img7"/></i> DigitalSolutions <i>
                                <img
                                className="img-fluid" src={img7} alt="img7"/></i></span> 
                        </div>
                    </div>
                </div>
            </div>
        </div>  */}
                {/* <!-- text slider-area-end --> */}

                {/* <!-- project-area-start --> */}
                <div className="tg-project-area fix pt-90 pb-70">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-4 col-lg-4 col-md-8  wow tgfadeLeft" data-wow-duration=".9s"
                                data-wow-delay=".5s">
                                <div className="tg-project-left">
                                    <div className="tg-project-title-box mb-15">

                                        <h4 className="tg-section-title">Empower Your Business</h4>
                                    </div>
                                    <div className="tg-project-text mb-40">
                                        <p>Versai Technology is dedicated to delivering innovative IT solutions
                                            that drive
                                            business growth and digital transformation. With cutting-edge technology, seamless
                                            integration, and customer-centric services, we empower organizations to stay ahead
                                            in a rapidly evolving digital landscape. Our expertise spans across software
                                            development, cloud computing, cybersecurity, and AI-driven solutions, ensuring
                                            efficiency, security, and scalability. At <strong>Versai Technology</strong>, we
                                            turn ideas into
                                            reality, shaping the future with smart and sustainable tech solutions.
                                        </p>
                                    </div>
                                    <div className="tg-project-button">
                                        <Link className="tg-btn-gradient" to="/Services.js">
                                            Read More
                                            <span>
                                                <svg width="17" height="12" viewBox="0 0 17 12" fill="none"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M15.6875 6.71875L11.6875 10.7188C11.3125 11.125 10.6562 11.125 10.2812 10.7188C9.875 10.3438 9.875 9.6875 10.2812 9.3125L12.5625 7H1C0.4375 7 0 6.5625 0 6C0 5.40625 0.4375 5 1 5H12.5625L10.2812 2.71875C9.875 2.34375 9.875 1.6875 10.2812 1.3125C10.6562 0.90625 11.3125 0.90625 11.6875 1.3125L15.6875 5.3125C16.0938 5.6875 16.0938 6.34375 15.6875 6.71875Z"
                                                        fill="white" />
                                                </svg>
                                            </span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-8 col-lg-8  wow tgfadeRight" data-wow-duration=".9s" data-wow-delay=".7s">
                                <div className="tg-project-thumb-wrap">
                                    <div className="row">
                                        <div className="col-xl-6 col-lg-6 col-md-6 mb-30">
                                            <div className="tg-project-2-thumb">
                                                <img src={img8} alt="img8" />

                                            </div>
                                        </div>
                                        <div className="col-xl-6 col-lg-6 col-md-6 mb-30">
                                            <div className="tg-project-2-thumb">
                                                <img src={img9} alt="img9" />

                                            </div>
                                        </div>
                                        <div className="col-xl-6 col-lg-6 col-md-6 mb-30">
                                            <div className="tg-project-2-thumb">
                                                <img src={img6} alt="img6" />

                                            </div>
                                        </div>
                                        <div className="col-xl-6 col-lg-6 col-md-6 mb-30">
                                            <div className="tg-project-2-thumb">
                                                <img src={img11} alt="img11" />

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- project-area-end --> */}

                {/* <!-- funfact area start --> */}
         <div class="tg-funfact-area z-index-1 p-relative">
            <div class="tg-funfact-bg"><span></span></div>
            <div class="tg-funfact-shape-2">
                <img src="../assets/img/funfact/shape-2.png" alt=""/>
            </div>
            <div class="container">
                <div class="tg-funfact-wrap p-relative">
                    <div class="tg-funfact-shape">
                        <img src="../assets/img/funfact/shape.png" alt=""/>
                    </div>
                    <div class="row gx-0">
                        <div class="col-xl-3 col-lg-3 col-md-4 col-sm-6">
                            <div class="tg-funfact-item text-center">
                                <i class="flaticon-009-laptop icon"></i>
                                <h5 class="tg-funfact-number"><i class="purecounter" data-purecounter-duration="1"
                                        data-purecounter-end="100">0</i>+</h5>
                                <span>Team member</span>
                            </div>
                        </div>
                        <div class="col-xl-3 col-lg-3 col-md-4 col-sm-6">
                            <div class="tg-funfact-item text-center">
                                <i class="flaticon-016-sync icon"></i>
                                <h5 class="tg-funfact-number"><i class="purecounter" data-purecounter-duration="1"
                                        data-purecounter-end="20">0</i>+</h5>
                                <span>Winning award</span>
                            </div>
                        </div>
                        <div class="col-xl-3 col-lg-3 col-md-4 col-sm-6">
                            <div class="tg-funfact-item text-center">
                                <i class="flaticon-030-laptop icon"></i>
                                <h5 class="tg-funfact-number"><i class="purecounter" data-purecounter-duration="1"
                                        data-purecounter-end="106">0</i>+</h5>
                                <span>Complete project</span>
                            </div>
                        </div>
                        <div class="col-xl-3 col-lg-3 col-md-4 col-sm-6">
                            <div class="tg-funfact-item text-center">
                                <i class="flaticon-023-hifi icon"></i>
                                <h5 class="tg-funfact-number"><i class="purecounter" data-purecounter-duration="1"
                                        data-purecounter-end="900">0</i>+</h5>
                                <span>Client review</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
                {/* <!-- funfact area end --> */}
            
                {/* <!-- expart area start --> */}
                <div className="tg-exp-area pt-80 grey-bg">
                    <div className="container">
                        <div className="tg-exp-top-wrap">
                            <div className="row align-items-end">
                                <div className="col-xl-7 col-lg-7 col-md-6">
                                    <div className="tg-exp-title-box">
                                        <span className="tg-section-subtitle">Digital Solutions</span>
                                        <h4 className="tg-section-title">Drive Efficiency with IT br the Expertise </h4>
                                    </div>
                                </div>
                                <div className="col-xl-5 col-lg-5 col-md-6">
                                    <div className="tg-exp-top-text">
                                        <p><strong className="use-gradi">Versai Technology</strong> is a broad category that the
                                            think a encompasses
                                            various
                                            technologies and practices </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="tg-exp-main-wrap">
                            <div className="row">
                                <div className="col-xl-12">
                                    <div className="tg-exp-item tg-reveal-item p-relative active">
                                        <Link to="/Webdevelopment.js">
                                            <div className="row align-items-center">
                                                <div className="col-xl-6 col-lg-8 col-md-8">
                                                    <div className="tg-exp-content">
                                                        <h4 className="tg-exp-title-sm">Web Development</h4>
                                                        <p>We craft powerful, user-centric web solutions that drive growth,
                                                            enhance engagement, and transform businesses in the digital era.</p>
                                                    </div>
                                                </div>
                                                <div className="col-xl-6 col-lg-4 col-md-4">
                                                    <div className="tg-exp-btn-box text-md-end">
                                                        <span className="tg-btn-gradient-border">
                                                            <span>
                                                                Read More
                                                                <svg width="17" height="12" viewBox="0 0 17 12" fill="none"
                                                                    xmlns="http://www.w3.org/2000/svg">
                                                                    <path
                                                                        d="M15.6875 6.71875L11.6875 10.7188C11.3125 11.125 10.6562 11.125 10.2812 10.7188C9.875 10.3438 9.875 9.6875 10.2812 9.3125L12.5625 7H1C0.4375 7 0 6.5625 0 6C0 5.40625 0.4375 5 1 5H12.5625L10.2812 2.71875C9.875 2.34375 9.875 1.6875 10.2812 1.3125C10.6562 0.90625 11.3125 0.90625 11.6875 1.3125L15.6875 5.3125C16.0938 5.6875 16.0938 6.34375 15.6875 6.71875Z"
                                                                        fill="currentcolor" />
                                                                </svg>
                                                            </span>
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </Link>
                                        <div className="tg-reveal-bg" data-background="assets/img/exprience/exp-1.png"></div>
                                    </div>
                                </div>
                                <div className="col-xl-12">
                                    <div className="tg-exp-item tg-reveal-item p-relative active">
                                        <Link to="/Appdevelopment.js">
                                            <div className="row align-items-center">
                                                <div className="col-xl-6 col-lg-8 col-md-8">
                                                    <div className="tg-exp-content">
                                                        <h4 className="tg-exp-title-sm">App Development</h4>
                                                        <p>We build innovative, high-performance mobile and web apps, delivering
                                                            seamless user experiences and driving business growth.</p>
                                                    </div>
                                                </div>
                                                <div className="col-xl-6 col-lg-4 col-md-4">
                                                    <div className="tg-exp-btn-box text-md-end">
                                                        <span className="tg-btn-gradient-border">
                                                            <span>
                                                                Read More
                                                                <svg width="17" height="12" viewBox="0 0 17 12" fill="none"
                                                                    xmlns="http://www.w3.org/2000/svg">
                                                                    <path
                                                                        d="M15.6875 6.71875L11.6875 10.7188C11.3125 11.125 10.6562 11.125 10.2812 10.7188C9.875 10.3438 9.875 9.6875 10.2812 9.3125L12.5625 7H1C0.4375 7 0 6.5625 0 6C0 5.40625 0.4375 5 1 5H12.5625L10.2812 2.71875C9.875 2.34375 9.875 1.6875 10.2812 1.3125C10.6562 0.90625 11.3125 0.90625 11.6875 1.3125L15.6875 5.3125C16.0938 5.6875 16.0938 6.34375 15.6875 6.71875Z"
                                                                        fill="currentcolor" />
                                                                </svg>
                                                            </span>
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </Link>
                                        <div className="tg-reveal-bg" data-background="assets/img/exprience/exp-1.png"></div>
                                    </div>
                                </div>
                                <div className="col-xl-12">
                                    <div className="tg-exp-item tg-reveal-item tg-reveal-border p-relative active">
                                        <Link to="/Graphic.js">
                                            <div className="row align-items-center">
                                                <div className="col-xl-6 col-lg-8 col-md-8">
                                                    <div className="tg-exp-content">
                                                        <h4 className="tg-exp-title-sm">Graphic Design</h4>
                                                        <p>We design intuitive, user-centric Graphic experiences that enhance
                                                            engagement, usability, and brand identity for digital success.</p>
                                                    </div>
                                                </div>
                                                <div className="col-xl-6 col-lg-4 col-md-4">
                                                    <div className="tg-exp-btn-box text-md-end">
                                                        <span className="tg-btn-gradient-border">
                                                            <span>
                                                                Read More
                                                                <svg width="17" height="12" viewBox="0 0 17 12" fill="none"
                                                                    xmlns="http://www.w3.org/2000/svg">
                                                                    <path
                                                                        d="M15.6875 6.71875L11.6875 10.7188C11.3125 11.125 10.6562 11.125 10.2812 10.7188C9.875 10.3438 9.875 9.6875 10.2812 9.3125L12.5625 7H1C0.4375 7 0 6.5625 0 6C0 5.40625 0.4375 5 1 5H12.5625L10.2812 2.71875C9.875 2.34375 9.875 1.6875 10.2812 1.3125C10.6562 0.90625 11.3125 0.90625 11.6875 1.3125L15.6875 5.3125C16.0938 5.6875 16.0938 6.34375 15.6875 6.71875Z"
                                                                        fill="currentcolor" />
                                                                </svg>
                                                            </span>
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </Link>
                                        <div className="tg-reveal-bg" data-background="assets/img/exprience/exp-1.png"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- expart area end --> */}

                {/* <!-- faq area start --> */}
                <div className="tg-faq-area fix pt-40 p-relative">
                    <div className="tg-faq-shape">
                        <img src={img12} alt="img12" />
                    </div>
                    <div className="container">
                        <div className="row align-items-start">
                            <div className="col-xl-6 col-lg-6">
                                <div className="tg-faq-thumb-wrap p-relative">
                                    <div className="tg-faq-thumb-main">
                                        <img src={img14} alt="img14" />
                                    </div>
                                    <div className="tg-faq-thumb-sub">
                                        <img src={img15} alt="img15" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-6  wow tgfadeRight" data-wow-duration=".9s" data-wow-delay=".7s">
                                <div className="tg-faq-title-box mb-25">
                                    <span className="tg-section-subtitle">Some Faq</span>
                                    <h4 className="tg-section-title">Empower Your with a the Technology</h4>
                                </div>
                                <div className="tg-custom-accordion">
                                    <div className="accordion" id="accordionExample">
                                        <div className="accordion-items">
                                            <h2 className="accordion-header" id="headingOne">
                                                <button className="accordion-buttons " type="button" data-bs-toggle="collapse"
                                                    data-bs-target="#collapseOne" aria-expanded="true"
                                                    aria-controls="collapseOne">
                                                    I'm a total beginner. Can I still follow along?
                                                </button>
                                            </h2>
                                            <div id="collapseOne" className="accordion-collapse collapse"
                                                aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                                <div className="accordion-body">
                                                    Your applicant may have limited help desk wexperience. In that case,
                                                    look for applicants who are motivated to grow and have some transferable
                                                    nibh finibus
                                                </div>
                                            </div>
                                        </div>
                                        <div className="accordion-items">
                                            <h2 className="accordion-header" id="headingTwo">
                                                <button className="accordion-buttons collapsed" type="button"
                                                    data-bs-toggle="collapse" data-bs-target="#collapseTwo"
                                                    aria-expanded="false" aria-controls="collapseTwo">
                                                    Which technical skills would you improve?
                                                </button>
                                            </h2>
                                            <div id="collapseTwo" className="accordion-collapse collapse show"
                                                aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                                <div className="accordion-body">
                                                    Your applicant may have limited help desk wexperience. In that case,
                                                    look for applicants who are motivated to grow and have some transferable
                                                    nibh finibus
                                                </div>
                                            </div>
                                        </div>
                                        <div className="accordion-items">
                                            <h2 className="accordion-header" id="headingThree">
                                                <button className="accordion-buttons collapsed" type="button"
                                                    data-bs-toggle="collapse" data-bs-target="#collapseThree"
                                                    aria-expanded="false" aria-controls="collapseThree">
                                                    What do Logical Drives do?
                                                </button>
                                            </h2>
                                            <div id="collapseThree" className="accordion-collapse collapse"
                                                aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                                <div className="accordion-body">
                                                    Your applicant may have limited help desk wexperience. In that case,
                                                    look for applicants who are motivated to grow and have some transferable
                                                    nibh finibus
                                                </div>
                                            </div>
                                        </div>
                                        <div className="accordion-items">
                                            <h2 className="accordion-header" id="headingFour">
                                                <button className="accordion-buttons collapsed" type="button"
                                                    data-bs-toggle="collapse" data-bs-target="#collapseFour"
                                                    aria-expanded="false" aria-controls="collapseFour">
                                                    What about our safety measures ?
                                                </button>
                                            </h2>
                                            <div id="collapseFour" className="accordion-collapse collapse"
                                                aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                                                <div className="accordion-body">
                                                    Your applicant may have limited help desk wexperience. In that case,
                                                    look for applicants who are motivated to grow and have some transferable
                                                    nibh finibus
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- faq area end --> */}


                {/* <!-- testimonial area start --> */}

                {/* <!-- testimonial area end --> */}
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
                                            <li><Link to="/"><i className="fa-regular fa-angle-right"></i>Home</Link></li>
                                            <li><Link to="/AboutUs.js"><i className="fa-regular fa-angle-right"></i>About Us</Link>
                                            </li>
                                            <li><Link to="/Ourteam.js"><i className="fa-regular fa-angle-right"></i>Team</Link></li>

                                            <li><Link to="/Gallery.js"><i className="fa-regular fa-angle-right"></i>Gallery</Link></li>


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
                                            <li><Link to="/Career.js"><i className="fa-regular fa-angle-right"></i>Career at
                                                Versai</Link></li>
                                            <li><Link to="/Contact.js"><i className="fa-regular fa-angle-right"></i>Contact Us</Link>
                                            </li>
                                            <li><Link to="/Services.js"><i className="fa-regular fa-angle-right"></i>Services</Link>
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
                                            <li><Link to="/Termcondition.js"><i className="fa-regular fa-angle-right"></i>Terms &
                                                Condition</Link></li>
                                            <li><Link to="/Cancellation.js"><i
                                                className="fa-regular fa-angle-right"></i>Cancellation and Refund</Link>
                                            </li>
                                            <li><Link to="/Privacy.js"><i className="fa-regular fa-angle-right"></i>Privacy
                                                Policy</Link></li>
                                            <li><Link to="/Privacy.js"><i className="fa-regular fa-angle-right"></i>FAQs</Link>
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

export default Home;
