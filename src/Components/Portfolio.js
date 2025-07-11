import React, { useEffect } from 'react';
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
import g1 from '../assets/img/website/g1.png'
import g2 from '../assets/img/website/g2.jpg'
import g4 from '../assets/img/website/g4.jpg'
import g5 from '../assets/img/website/g5.jpg'
import g6 from '../assets/img/website/g6.jpg'
import g7 from '../assets/img/website/g7.jpg'
import g8 from '../assets/img/website/g8.jpg'
import logo1 from '../assets/logo/logo1.jpg'
import logo2 from '../assets/logo/logo2.jpg'
import logo3 from '../assets/logo/logo3.jpg'
import logo4 from '../assets/logo/logo4.jpg'
import logo5 from '../assets/logo/logo5.jpg'
import logo6 from '../assets/logo/logo6.jpg'
import logo7 from '../assets/logo/logo7.jpg'
import logo8 from '../assets/logo/logo8.jpg'
import logo9 from '../assets/logo/logo9.webp'
import logo10 from '../assets/logo/logo10.jpg'
import logo11 from '../assets/logo/logo11.jpg'
import logo12 from '../assets/logo/logo12.jpg'
import logo13 from '../assets/logo/logo13.jpg'
import poster1 from '../assets/img/poster/poster1.jpg'
import poster2 from '../assets/img/poster/poster2.jpg'
import poster3 from '../assets/img/poster/poster3.jpg'
import poster4 from '../assets/img/poster/poster4.jpg'
import poster5 from '../assets/img/poster/poster5.jpg'
import poster6 from '../assets/img/poster/poster6.jpg'
import poster7 from '../assets/img/poster/poster7.jpg'
import poster8 from '../assets/img/poster/poster8.jpg'
import poster9 from '../assets/img/poster/poster9.jpg'
import poster10 from '../assets/img/poster/poster11.jpg'
import poster11 from '../assets/img/poster/poster11.jpg'
import poster12 from '../assets/img/poster/poster12.jpg'
import poster13 from '../assets/img/poster/poster13.jpg'
import poster14 from '../assets/img/poster/poster14.jpg'
import poster15 from '../assets/img/poster/poster15.jpg'
import poster16 from '../assets/img/poster/poster16.jpg'
import poster17 from '../assets/img/poster/poster17.jpg'
import poster18 from '../assets/img/poster/poster18.jpg'






const Portfolio = () => {
  // State for active tab
  const [activeTab, setActiveTab] = React.useState('overview');

  // Handle tab change
  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

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
      {/* Back to top button */}
      <div className="back-to-top-wrapper" onClick={scrollToTop}>
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
        
      </main>
      
  {/* Our Core Services Section */}
  <section className="core-services-section py-5">
  <div className="container text-center">
    <h5 className="use-gradi">Our Core Services</h5>
    <h2 className="fw-bold mb-4">
      We Offer Expert Solutions In Design, Development, And Branding
    </h2>

    <div className="d-flex justify-content-center gap-3 flex-wrap mb-5">
  <button
    className={`btn rounded-pill px-4 ${
      activeTab === 'web' ? 'active-tab-btn' : 'inactive-tab-btn'
    }`}
    onClick={() => setActiveTab('web')}
  >
    Web Development
  </button>
  <button
    className={`btn rounded-pill px-4 ${
      activeTab === 'logo' ? 'active-tab-btn' : 'inactive-tab-btn'
    }`}
    onClick={() => setActiveTab('logo')}
  >
    Logo Designing
  </button>
  <button
    className={`btn rounded-pill px-4 ${
      activeTab === 'poster' ? 'active-tab-btn' : 'inactive-tab-btn'
    }`}
    onClick={() => setActiveTab('poster')}
  >
    Poster Designing
  </button>
</div>


    <div className="mb-4">
  {activeTab === 'web' && (
    <>
      <h3 className="fw-semibold">Modern Web Development Solutions
</h3>
      <p className="text-muted">
        
We deliver fast, secure, and scalable web solutions using modern frameworks to enhance <br /> user experience and drive digital growth for businesses.
      </p>
    </>
  )}

  {activeTab === 'logo' && (
    <>
      <h3 className="fw-semibold">Custom Logo Designs That Define Your Brand</h3>
      <p className="text-muted">
      We craft unique, memorable logos that reflect your brand identity, build trust, and leave a <br />lasting impression across all platforms.
      </p>
    </>
  )}

  {activeTab === 'poster' && (
    <>
      <h3 className="fw-semibold">Innovative Poster Design Solutions</h3>
      <p className="text-muted">
        We create impactful, visually striking poster designs that capture attention, communicate <br /> your message clearly, and elevate your brand presence across all platforms.
      </p>
    </>
  )}
</div>


    {/* Image Grid: 3 Columns */}
   <div className="row g-4 justify-content-center">
  {(
    activeTab === 'web'
      ? [g1, g2, g4, g5, g6, g7, g8]
      : activeTab === 'logo'
      ? [logo1, logo2, logo3, logo4, logo5, logo6, logo7, logo8, logo9, logo10, logo11, logo12, logo13]
      : [poster1, poster2, poster3, poster4, poster5, poster6, poster7, poster8, poster9, poster11, poster12, poster13, poster14, poster15, poster16, poster17, poster18]
  ).map((imgSrc, index) => {
    const typeClass =
      activeTab === 'web'
        ? 'img-web'
        : activeTab === 'logo'
        ? 'img-logo'
        : 'img-poster';

    return (
      <div className="col-md-4 col-sm-6" key={index}>
        <img
          src={imgSrc}
          alt={`Project ${index + 1}`}
          className={`img-fluid rounded shadow ${typeClass}`}
        />
      </div>
    );
  })}
</div>

  </div>
</section>
<div className="text-center py-5">
  {activeTab === 'web' && (
    <>
      <h5 className="text-gradient">Step Into Success</h5>
      <h1 className="fw-bold">Transforming Your Ideas into Reality</h1>
      <p className="text-muted">
        Schedule a free consultation with our team and let’s make your digital product or website come alive.
      </p>
      <button className="btn btn-gradient">Contact With Us</button>

      <hr className="my-5" />

      <h4 className="fw-bold">Frequently Asked Questions</h4>
      <p className="text-muted">
        Answer To Our Most Frequently Asked Questions are just one Click Away.
      </p>
      <hr className="my-5" />
      <div className="accordion" id="faqWeb">
        <div className="accordion-item">
          <h2 className="accordion-header" id="webHeading1">
            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#webCollapse1">
              Why Should I Choose Versai Technology?
            </button>
          </h2>
          <div id="webCollapse1" className="accordion-collapse collapse show" data-bs-parent="#faqWeb">
            <div className="accordion-body">
              Versai Technology started with excellence in exhibition stall design and now brings you expert logo, web Design and Development services. Our goal is to craft creative, meaningful visuals that reflect your brand’s true identity and values.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="webHeading2">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#webCollapse2">
              How Long Does Versai Technology Take to Development a Website?
            </button>
          </h2>
          <div id="webCollapse2" className="accordion-collapse collapse" data-bs-parent="#faqWeb">
            <div className="accordion-body">
              At Versai Technology, you'll receive your initial web Design concepts within 2 working days after submitting the brief. With timely feedback, the full process including revisions, Development and final delivery takes around 10 to 12 days. Your quick response helps us deliver faster.
            </div>
          </div>
        </div>
         <div className="accordion-item">
          <h2 className="accordion-header" id="webHeading2">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#webCollapse2">
        Can I upgrade my package during the order?
            </button>
          </h2>
          <div id="webCollapse2" className="accordion-collapse collapse" data-bs-parent="#faqWeb">
            <div className="accordion-body">
              Yes, absolutely! You can upgrade your package at any point during the process. Simply pay the difference at the time of final delivery it's quick and hassle-fre
            </div>
          </div>
        </div>
         <div className="accordion-item">
          <h2 className="accordion-header" id="webHeading2">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#webCollapse2">
            Does Versai Technology offer any discounts?
            </button>
          </h2>
          <div id="webCollapse2" className="accordion-collapse collapse" data-bs-parent="#faqWeb">
            <div className="accordion-body">
             Yes, Versai Technology offers discounts from time to time. Contact us to learn about current promotions and special offers tailored for you.
            </div>
          </div>
        </div>
         <div className="accordion-item">
          <h2 className="accordion-header" id="webHeading2">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#webCollapse2">
         How does Versai Technology offer such great value at this price?
            </button>
          </h2>
          <div id="webCollapse2" className="accordion-collapse collapse" data-bs-parent="#faqWeb">
            <div className="accordion-body">
              At Versai Technology, we combine skilled expertise with efficient processes to keep costs low without compromising quality. Our streamlined approach and commitment to innovation allow us to deliver exceptional value. This means you get top-notch services at competitive prices.
            </div>
          </div>
        </div>
      </div>
    </>
  )}

  {activeTab === 'logo' && (
    <>
      <h5 className="text-gradient">Step Into Success</h5>
      <h1 className="fw-bold">Transforming Your Ideas <br />
into Reality</h1>
      <p className="text-muted">
       Schedule a free consultation with our team and let's make things happen!
      </p>
      <button className="btn btn-gradient">Contact With Us</button>

      <hr className="my-5" />

      <h4 className="fw-bold">Frequently Asked Questions</h4>
      <p className="text-muted">
        Answer To Our Most Frequently Asked Questions are just one Click Away.
      </p>
        <hr className="my-5" />
      <div className="accordion" id="faqLogo">
        <div className="accordion-item">
          <h2 className="accordion-header" id="logoHeading1">
            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#logoCollapse1">
             Why Should I Choose Versai Technology?
            </button>
          </h2>
          <div id="logoCollapse1" className="accordion-collapse collapse show" data-bs-parent="#faqLogo">
            <div className="accordion-body">
             Versai Technology started with excellence in exhibition stall design and now brings you expert logo and graphic design services. Our goal is to craft creative, meaningful visuals that reflect your brand’s true identity and values.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="logoHeading2">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#logoCollapse2">
            How Long Does Versai Technology Take to Design a Logo?
            </button>
          </h2>
          <div id="logoCollapse2" className="accordion-collapse collapse" data-bs-parent="#faqLogo">
            <div className="accordion-body">
             At Versai Technology, you'll receive your initial logo concepts within 2 working days after submitting the brief. With timely feedback, the full process—including revisions and final delivery takes around 5 to 7 days. Your quick response helps us deliver faster.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="logoHeading1">
            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#logoCollapse1">
        Can I upgrade my package during the order?
            </button>
          </h2>
          <div id="logoCollapse1" className="accordion-collapse collapse show" data-bs-parent="#faqLogo">
            <div className="accordion-body">
             Yes, absolutely! You can upgrade your package at any point during the process. Simply pay the difference at the time of final delivery it's quick and hassle-fre
            </div>
          </div>
        </div>
         <div className="accordion-item">
          <h2 className="accordion-header" id="logoHeading2">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#logoCollapse2">
             Does Versai Technology offer any discounts?
            </button>
          </h2>
          <div id="logoCollapse2" className="accordion-collapse collapse" data-bs-parent="#faqLogo">
            <div className="accordion-body">
             Yes, Versai Technology offers discounts from time to time. Contact us to learn about current promotions and special offers tailored for you.
            </div>
          </div>
        </div>
         <div className="accordion-item">
          <h2 className="accordion-header" id="logoHeading2">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#logoCollapse2">
            How does Versai Technology offer such great value at this price?
            </button>
          </h2>
          <div id="logoCollapse2" className="accordion-collapse collapse" data-bs-parent="#faqLogo">
            <div className="accordion-body">
             At Versai Technology, we combine skilled expertise with efficient processes to keep costs low without compromising quality. Our streamlined approach and commitment to innovation allow us to deliver exceptional value. This means you get top-notch services at competitive prices.
            </div>
          </div>
        </div>
        
      </div>
    </>
  )}

  {activeTab === 'poster' && (
    <>
      <h5 className="text-gradient">Step Into Success</h5>
      <h1 className="fw-bold">Transforming Your Ideas
into Reality</h1>
      <p className="text-muted">
       Schedule a free consultation with our team and let's make things happen!
      </p>
      <button className="btn btn-gradient">Contact With Us</button>

      <hr className="my-5" />

      <h4 className="fw-bold">Frequently Asked Questions</h4>
      <p className="text-muted">
       Answer To Our Most Frequently Asked Questions are just one Click Away.
      </p>
      <hr className="my-5" />
      <div className="accordion" id="faqPoster">
        <div className="accordion-item">
          <h2 className="accordion-header" id="posterHeading1">
            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#posterCollapse1">
          Why Should I Choose Versai Technology?
            </button>
          </h2>
          <div id="posterCollapse1" className="accordion-collapse collapse show" data-bs-parent="#faqPoster">
            <div className="accordion-body">
             Versai Technology started with excellence in exhibition stall design and now brings you expert Poster and graphic design services. Our goal is to craft creative, meaningful visuals that reflect your brand’s true identity and values.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="posterHeading2">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#posterCollapse2">
           How Long Does Versai Technology Take to Design a Poster?
            </button>
          </h2>
          <div id="posterCollapse2" className="accordion-collapse collapse" data-bs-parent="#faqPoster">
            <div className="accordion-body">
              At Versai Technology, you'll receive your initial Poster concepts within 2 working days after submitting the brief. With timely feedback, the full process—including revisions and final delivery takes around 5 to 7 days. Your quick response helps us deliver faster.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="posterHeading2">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#posterCollapse2">
              Can I upgrade my package during the order?
            </button>
          </h2>
          <div id="posterCollapse2" className="accordion-collapse collapse" data-bs-parent="#faqPoster">
            <div className="accordion-body">
             Yes, absolutely! You can upgrade your package at any point during the process. Simply pay the difference at the time of final delivery it's quick and hassle-fre
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="posterHeading2">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#posterCollapse2">
              Does Versai Technology offer any discounts?
            </button>
          </h2>
          <div id="posterCollapse2" className="accordion-collapse collapse" data-bs-parent="#faqPoster">
            <div className="accordion-body">
            Yes, Versai Technology offers discounts from time to time. Contact us to learn about current promotions and special offers tailored for you.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="posterHeading2">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#posterCollapse2">
         How does Versai Technology offer such great value at this price?
            </button>
          </h2>
          <div id="posterCollapse2" className="accordion-collapse collapse" data-bs-parent="#faqPoster">
            <div className="accordion-body">
              At Versai Technology, we combine skilled expertise with efficient processes to keep costs low without compromising quality. Our streamlined approach and commitment to innovation allow us to deliver exceptional value. This means you get top-notch services at competitive prices.
            </div>
          </div>
        </div>
      </div>
    </>
  )}
</div>



      

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
