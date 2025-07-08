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

// Import all CSS files
import '../assets/css/bootstrap.min.css';
import '../assets/css/animate.min.css';
import '../assets/css/custom-animation.css';
import '../assets/css/fontawesome-all.min.css';
import '../assets/css/swiper-bundle.min.css';
import '../assets/css/magnific-popup.css';
import '../assets/css/flaticon.css';
import '../assets/css/spacing.css';
import '../assets/css/main.css';
import '../assets/css/versaicommon.css';



import img1 from '../assets/img/logo/logo-white-img1.svg';
import img2 from '../assets/img/logo/logo-white-img2.svg';
import img76 from '../Components/img76.jpg';


const Portfolio = () => {
  // State for active tab
  const [activeTab, setActiveTab] = React.useState('overview');

  // Handle tab change
  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <>
      {/* Back to top button */}
      <div className="back-to-top-wrapper">
        <button id="back_to_top" type="button" className="back-to-top-btn">
          <svg width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11 6L6 1L1 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>

      {/* Header */}
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
        {/* Breadcrumb area */}
        <div className="tg-breadcrumb-height portfoli-first">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="tg-breadcrumb__content z-index-3 text-center">
                  <h3 className="tg-breadcrumb__title">Our <span className="use-gradi">Portfolio</span></h3>
                  <div className="tg-breadcrumb__list">
                    <span><Link to="/Home.js">Home</Link></span>
                    <span className="dvdr"><i className="fa-solid fa-chevron-right"></i></span>
                    <span>Our Portfolio</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Portfolio content */}
        <div className="container mt-50">
          <div className="d-flex flex-column gap-3 align-items-center">
            <h5 className="use-gradisub">Our Core Services</h5>
            <h2 className="we-offer">We offer expert solutions in design, development, and branding</h2>
            <div className="mt-20 mb-20 four-btn">
              <button 
                className={`portfolio-nav ${activeTab === 'overview' ? 'active' : ''}`}
                onClick={() => handleTabChange('overview')}
              >
                Web Development
              </button>
              <button 
                className={`portfolio-nav ${activeTab === 'logo-designed' ? 'active' : ''}`}
                onClick={() => handleTabChange('logo-designed')}
              >
                Logo Designing
              </button>
              <button 
                className={`portfolio-nav ${activeTab === 'poster-desined' ? 'active' : ''}`}
                onClick={() => handleTabChange('poster-desined')}
              >
                Poster Designing
              </button>
            </div>
          </div>

          {/* Content Area */}
          <div id="content" className="content-section">
            {activeTab === 'overview' && (
              <div className="tg-sv-details-area fix pb-50">
                <div className="terms-service">
                  <div className="terms-cond">
                    <div>
                      <p className="tersm-para">Modern Web Development Solutions</p>
                    </div>
                    <p className="term-parades">
                      We deliver fast, secure, and scalable web solutions using modern frameworks to enhance user experience and drive digital growth for businesses.
                    </p>
                  </div>
                </div>
        <div className="row">
                  <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-12 mb-4">
                    <div className="card service-card">
                       <img className="img-fluid" src={img76} alt="img76" />
                    </div>
                  </div>
                  <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-12 mb-4">
                    <div className="card service-card">
                      {/* <img src={g2} alt="Website example 2" /> */}
                    </div>
                  </div>
                  <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-12 mb-4">
                    <div className="card service-card">
                      {/* <img src={g4} alt="Website example 3" /> */}
                    </div>
                  </div>
                  <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-12 mb-4">
                    <div className="card service-card">
                      {/* <img src={g5} alt="Website example 4" /> */}
                    </div>
                  </div>
                  <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-12 mb-4">
                    <div className="card service-card">
                      {/* <img src={g6} alt="Website example 5" /> */}
                    </div>
                  </div>
                  <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-12 mb-4">
                    <div className="card service-card">
                      {/* <img src={g7} alt="Website example 6" /> */}
                    </div>
                  </div>
                  <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-12 mb-4">
                    <div className="card service-card">
                      {/* <img src={g8} alt="Website example 7" /> */}
                    </div>
                  </div>
                </div>

                <TransformSection />
                <FaqSection 
                  faqs={[
                    {
                      question: "Why Should I Choose Versai Technology?",
                      answer: "Versai Technology started with excellence in exhibition stall design and now brings you expert logo, web Design and Development services. Our goal is to craft creative, meaningful visuals that reflect your brand's true identity and values."
                    },
                    {
                      question: "How Long Does Versai Technology Take to Development a Website?",
                      answer: "At Versai Technology, you'll receive your initial web Design concepts within 2 working days after submitting the brief. With timely feedback, the full process including revisions, Development and final delivery takes around 10 to 12 days. Your quick response helps us deliver faster."
                    },
                    {
                      question: "Can I upgrade my package during the order?",
                      answer: "Yes, absolutely! You can upgrade your package at any point during the process. Simply pay the difference at the time of final delivery it's quick and hassle-free"
                    },
                    {
                      question: "Does Versai Technology offer any discounts?",
                      answer: "Yes, Versai Technology offers discounts from time to time. Contact us to learn about current promotions and special offers tailored for you."
                    },
                    {
                      question: "How does Versai Technology offer such great value at this price?",
                      answer: "At Versai Technology, we combine skilled expertise with efficient processes to keep costs low without compromising quality. Our streamlined approach and commitment to innovation allow us to deliver exceptional value. This means you get top-notch services at competitive prices."
                    }
                  ]}
                />
              </div>
            )}

            {activeTab === 'logo-designed' && (
              <div className="tg-sv-details-area fix pb-50">
                <div className="terms-service">
                  <div className="terms-cond">
                    <div>
                      <p className="tersm-para">Custom Logo Designs That Define Your Brand</p>
                    </div>
                    <p className="term-parades">
                      We craft unique, memorable logos that reflect your brand identity, build trust, and leave a lasting impression across all platforms.
                    </p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-xxl-3 col-xl-3 col-lg-4 col-md-4 col-sm-6 col-12 mb-4">
                    <div className="card card-logo">
                      <div className="card-body">
                        {/* <img src={asTravel} alt="AS Travel logo" /> */}
                      </div>
                    </div>
                  </div>
                  <div className="col-xxl-3 col-xl-3 col-lg-4 col-md-4 col-sm-6 col-12 mb-4">
                    <div className="card card-logo">
                      <div className="card-body">
                        {/* <img src={balajiEnterprises} alt="Balaji Enterprises logo" /> */}
                      </div>
                    </div>
                  </div>
                  <div className="col-xxl-3 col-xl-3 col-lg-4 col-md-4 col-sm-6 col-12 mb-4">
                    <div className="card card-logo">
                      <div className="card-body">
                        {/* <img src={fd} alt="FD logo" /> */}
                      </div>
                    </div>
                  </div>
                  <div className="col-xxl-3 col-xl-3 col-lg-4 col-md-4 col-sm-6 col-12 mb-4">
                    <div className="card card-logo">
                      <div className="card-body">
                        {/* <img src={logo4} alt="Logo 4" /> */}
                      </div>
                    </div>
                  </div>
                  <div className="col-xxl-3 col-xl-3 col-lg-4 col-md-4 col-sm-6 col-12 mb-4">
                    <div className="card card-logo">
                      <div className="card-body">
                        {/* <img src={logo5} alt="Logo 5" /> */}
                      </div>
                    </div>
                  </div>
                  <div className="col-xxl-3 col-xl-3 col-lg-4 col-md-4 col-sm-6 col-12 mb-4">
                    <div className="card card-logo">
                      <div className="card-body">
                        {/* <img src={logo6} alt="Logo 6" /> */}
                      </div>
                    </div>
                  </div>
                  <div className="col-xxl-3 col-xl-3 col-lg-4 col-md-4 col-sm-6 col-12 mb-4">
                    <div className="card card-logo">
                      <div className="card-body">
                        {/* <img src={logo7} alt="Logo 7" /> */}
                      </div>
                    </div>
                  </div>
                  <div className="col-xxl-3 col-xl-3 col-lg-4 col-md-4 col-sm-6 col-12 mb-4">
                    <div className="card card-logo">
                      <div className="card-body">
                        {/* <img src={logo8} alt="Logo 8" /> */}
                      </div>
                    </div>
                  </div>
                  <div className="col-xxl-3 col-xl-3 col-lg-4 col-md-4 col-sm-6 col-12 mb-4">
                    <div className="card card-logo">
                      <div className="card-body">
                        {/* <img src={logoSample} alt="Logo sample" /> */}
                      </div>
                    </div>
                  </div>
                  <div className="col-xxl-3 col-xl-3 col-lg-4 col-md-4 col-sm-6 col-12 mb-4">
                    <div className="card card-logo">
                      <div className="card-body">
                        {/* <img src={shreeJeenFood} alt="Shree Jeen Food logo" /> */}
                      </div>
                    </div>
                  </div>
                  <div className="col-xxl-3 col-xl-3 col-lg-4 col-md-4 col-sm-6 col-12 mb-4">
                    <div className="card card-logo">
                      <div className="card-body">
                        {/* <img src={sunsheraJpg} alt="Sunshera logo" /> */}
                      </div>
                    </div>
                  </div>
                  <div className="col-xxl-3 col-xl-3 col-lg-4 col-md-4 col-sm-6 col-12 mb-4">
                    <div className="card card-logo">
                      <div className="card-body">
                        {/* <img src={targetComputer} alt="Target Computer logo" /> */}
                      </div>
                    </div>
                  </div>
                </div>

                <TransformSection />
                <FaqSection 
                  faqs={[
                    {
                      question: "Why Should I Choose Versai Technology?",
                      answer: "Versai Technology started with excellence in exhibition stall design and now brings you expert logo and graphic design services. Our goal is to craft creative, meaningful visuals that reflect your brand's true identity and values."
                    },
                    {
                      question: "How Long Does Versai Technology Take to Design a Logo?",
                      answer: "At Versai Technology, you'll receive your initial logo concepts within 2 working days after submitting the brief. With timely feedback, the full process—including revisions and final delivery takes around 5 to 7 days. Your quick response helps us deliver faster."
                    },
                    {
                      question: "Can I upgrade my package during the order?",
                      answer: "Yes, absolutely! You can upgrade your package at any point during the process. Simply pay the difference at the time of final delivery it's quick and hassle-free"
                    },
                    {
                      question: "Does Versai Technology offer any discounts?",
                      answer: "Yes, Versai Technology offers discounts from time to time. Contact us to learn about current promotions and special offers tailored for you."
                    },
                    {
                      question: "How does Versai Technology offer such great value at this price?",
                      answer: "At Versai Technology, we combine skilled expertise with efficient processes to keep costs low without compromising quality. Our streamlined approach and commitment to innovation allow us to deliver exceptional value. This means you get top-notch services at competitive prices."
                    }
                  ]}
                />
              </div>
            )}

            {activeTab === 'poster-desined' && (
              <div className="tg-sv-details-area fix pb-50">
                <div className="terms-service">
                  <div className="terms-cond">
                    <div>
                      <p className="tersm-para">Innovative Poster Design Solutions</p>
                    </div>
                    <p className="term-parades">
                      We create impactful, visually striking poster designs that capture attention, communicate your message clearly, and elevate your brand presence across all platforms.
                    </p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-12 mb-4">
                    <div className="card service-card">
                      {/* <img src={poster1} alt="Poster design 1" /> */}
                    </div>
                  </div>
                  <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-12 mb-4">
                    <div className="card service-card">
                      {/* <img src={poster16} alt="Poster design 2" /> */}
                    </div>
                  </div>
                  <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-12 mb-4">
                    <div className="card service-card">
                      {/* <img src={poster2} alt="Poster design 3" /> */}
                    </div>
                  </div>
                  <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-12 mb-4">
                    <div className="card service-card">
                      {/* <img src={poster3} alt="Poster design 4" /> */}
                    </div>
                  </div>
                  <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-12 mb-4">
                    <div className="card service-card">
                      {/* <img src={poster4} alt="Poster design 5" /> */}
                    </div>
                  </div>
                  <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-12 mb-4">
                    <div className="card service-card">
                      {/* <img src={poster6} alt="Poster design 6" /> */}
                    </div>
                  </div>
                  <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-12 mb-4">
                    <div className="card service-card">
                      {/* <img src={poster7} alt="Poster design 7" /> */}
                    </div>
                  </div>
                  <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-12 mb-4">
                    <div className="card service-card">
                      {/* <img src={poster11} alt="Poster design 8" /> */}
                    </div>
                  </div>
                  <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-12 mb-4">
                    <div className="card service-card">
                      {/* <img src={poster12} alt="Poster design 9" /> */}
                    </div>
                  </div>
                  <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-12 mb-4">
                    <div className="card service-card">
                      {/* <img src={poster15} alt="Poster design 10" /> */}
                    </div>
                  </div>
                  <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-12 mb-4">
                    <div className="card service-card">
                      {/* <img src={poster8} alt="Poster design 11" /> */}
                    </div>
                  </div>
                  <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-12 mb-4">
                    <div className="card service-card">
                      {/* <img src={poster18} alt="Poster design 12" /> */}
                    </div>
                  </div>
                  <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-12 mb-4">
                    <div className="card service-card">
                      {/* <img src={poster13} alt="Poster design 13" /> */}
                    </div>
                  </div>
                  <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-12 mb-4">
                    <div className="card service-card">
                      {/* <img src={poster17} alt="Poster design 14" /> */}
                    </div>
                  </div>
                  <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-12 mb-4">
                    <div className="card service-card">
                      {/* <img src={poster9} alt="Poster design 15" /> */}
                    </div>
                  </div>
                </div>

                <TransformSection />
                <FaqSection 
                  faqs={[
                    {
                      question: "Why Should I Choose Versai Technology?",
                      answer: "Versai Technology started with excellence in exhibition stall design and now brings you expert Poster and graphic design services. Our goal is to craft creative, meaningful visuals that reflect your brand's true identity and values."
                    },
                    {
                      question: "How Long Does Versai Technology Take to Design a Poster?",
                      answer: "At Versai Technology, you'll receive your initial Poster concepts within 2 working days after submitting the brief. With timely feedback, the full process—including revisions and final delivery takes around 5 to 7 days. Your quick response helps us deliver faster."
                    },
                    {
                      question: "Can I upgrade my package during the order?",
                      answer: "Yes, absolutely! You can upgrade your package at any point during the process. Simply pay the difference at the time of final delivery it's quick and hassle-free"
                    },
                    {
                      question: "Does Versai Technology offer any discounts?",
                      answer: "Yes, Versai Technology offers discounts from time to time. Contact us to learn about current promotions and special offers tailored for you."
                    },
                    {
                      question: "How does Versai Technology offer such great value at this price?",
                      answer: "At Versai Technology, we combine skilled expertise with efficient processes to keep costs low without compromising quality. Our streamlined approach and commitment to innovation allow us to deliver exceptional value. This means you get top-notch services at competitive prices."
                    }
                  ]}
                />
              </div>
            )}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="mt-5">
        <div className="tg-footer-area fix p-relative z-index black-bg pt-80">
          <div className="container">
            <div className="row">
              <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 mb-50 wow tgfadeUp" data-wow-duration=".9s" data-wow-delay=".5s">
                <div className="tg-footer-widget footer-col-2">
                  <h4 className="tg-footer-widget-title">Useful Links</h4>
                  <div className="tg-footer-list">
                    <ul>
                      <li><Link to="/"><i className="fa-regular fa-angle-right"></i>Home</Link></li>
                      <li><Link to="/about-us"><i className="fa-regular fa-angle-right"></i>About Us</Link></li>
                      <li><Link to="/ourteam"><i className="fa-regular fa-angle-right"></i>Team</Link></li>
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
                        <a 
                          href="https://docs.google.com/forms/d/e/1FAIpQLSds9WaOXtaIeKDZBG7o7tqGeDbSy7PASFqcPtnEVBmi9xiLlw/viewform?usp=sharing&ouid=117424442439504764324"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <i className="fa-regular fa-angle-right"></i>Apply for Internship
                        </a>
                      </li>
                      <li><Link to="/career"><i className="fa-regular fa-angle-right"></i>Career at Versai</Link></li>
                      <li><Link to="/contact"><i className="fa-regular fa-angle-right"></i>Contact Us</Link></li>
                      <li><Link to="/service"><i className="fa-regular fa-angle-right"></i>Services</Link></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 mb-50 wow tgfadeUp" data-wow-duration=".9s" data-wow-delay=".3s">
                <div className="tg-footer-widget footer-col-2">
                  <h4 className="tg-footer-widget-title">Support</h4>
                  <div className="tg-footer-list">
                    <ul>
                      <li><Link to="/termscond"><i className="fa-regular fa-angle-right"></i>Terms & Condition</Link></li>
                      <li><Link to="/cancellation"><i className="fa-regular fa-angle-right"></i>Cancellation and Refund</Link></li>
                      <li><Link to="/privacy"><i className="fa-regular fa-angle-right"></i>Privacy Policy</Link></li>
                      <li><Link to="/privacy#faqs"><i className="fa-regular fa-angle-right"></i>FAQs</Link></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 mb-50 wow tgfadeUp" data-wow-duration=".9s" data-wow-delay=".7s">
                <div className="tg-footer-widget footer-col-3">
                  <h4 className="tg-footer-widget-title">Contact Us</h4>
                  <div className="tg-footer-Office-info mb-20">
                    <span>
                      <a href="#"><i className="fa-solid fa-location-dot"></i>First Floor, Office No 102, Vishwakarma plaza, Nai Sarak, Opp. Axis Bank, Churu(Raj.) 331001</a>
                    </span>
                    <span>
                      <a href="tel:+918619708196"><i className="fa-solid fa-phone"></i>+91 8619708196</a>
                    </span>
                    <span>
                      <a href="mailto:technologyversai01@gmail.com">technologyversai01@gmail.com<i className="fa-solid fa-envelope"></i></a>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright area */}
        <div className="tg-copyright-area">
          <div className="container">
            <div className="tg-copyright-border tg-copyright-ptb">
              <div className="d-flex flex-column align-items-center">
                <div className="wow tgfadeUp" data-wow-duration=".9s" data-wow-delay=".3s">
                  <div className="tg-copyright-right text-center text-md-end">
                    <a 
                      className="text-anim-2" 
                      href="https://www.facebook.com/profile.php?id=61576737841115" 
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a 
                      className="text-anim-2" 
                      href="https://www.instagram.com/versai_technology/reels/" 
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fab fa-instagram"></i>
                    </a>
                    <a 
                      className="text-anim-2" 
                      href="https://www.youtube.com/@versaiAcademy94" 
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fab fa-youtube"></i>
                    </a>
                    <a 
                      className="text-anim-2" 
                      href="https://www.linkedin.com/company/versaitechnology/posts/?feedView=all" 
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fab fa-linkedin-in"></i>
                    </a>
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
      </footer>
    </>
  );
};

// Reusable components
const TransformSection = () => (
  <section className="transform-sect">
    <div className="transform">
      <p className="transform-desc1 use-gradisub">Step Into Success</p>
      <p className="transform-desc2">Transforming Your Ideas <br /> into Reality</p>
      <p className="freq-desc">
        Schedule a free consultation with our team and let's make things happen!
      </p>
      <Link to="/contact" className="contact-withus">Contact With Us</Link>
    </div>
  </section>
);

const FaqSection = ({ faqs }) => (
  <>
    <div className="freq-sect our-graphicdiv">
      <p className="frequ-pos">Frequently Asked Questions</p>
      <p className="freq-desc">Answer To Our Most Frequently Asked Questions are just one Click Away.</p>
    </div>

    <div className="accordion accordion-flush accordian-logo mt-5" id="accordionFlushExample">
      {faqs.map((faq, index) => (
        <div className="accordion-item" key={index}>
          <h2 className="accordion-header">
            <button 
              className="accordion-button collapsed" 
              type="button" 
              data-bs-toggle="collapse"
              data-bs-target={`#flush-collapse${index}`}
              aria-expanded="false"
              aria-controls={`flush-collapse${index}`}
            >
              {faq.question}
            </button>
          </h2>
          <div 
            id={`flush-collapse${index}`} 
            className="accordion-collapse collapse"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body">{faq.answer}</div>
          </div>
        </div>
      ))}
    </div>
  </>
);

export default Portfolio;
