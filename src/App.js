// import logo from './logo.svg';
import './App.css';
// import '@fortawesome/fontawesome-free/css/all.min.css';
// import '@flaticon/flaticon-uicons/css/uicons-regular-rounded.css';


import { BrowserRouter, Routes, Route, } from 'react-router-dom';
import Home from './Components/Home.js';
import AboutUs from './Components//AboutUs.js';
import Services from './Components/Services.js';
import Contact from './Components/Contact.js';
import Appdevelopment from './Components/Appdevelopment.js';
import Webdevelopment from './Components/Webdevelopment.js';
import Cancellation from './Components/Cancellation.js';
import Career from './Components/Career.js';
import Ourteam from './Components/Ourteam.js';
import Portfolio from './Components/Portfolio.js';
import Gallery from './Components/Gallery.js';
import Termcondition from './Components/Termcondition.js';
import Graphic from './Components/Graphic.js';
import Privacy from './Components/Privacy.js';
import DataBackup from './Components/DataBackup.js';
import ItConsultation from './Components/ItConsultation.js';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Home.js" element={<Home />} />
        <Route path="/AboutUs.js" element={<AboutUs />} />
         <Route path="/Services.js" element={<Services />} />
         <Route path="/Contact.js" element={<Contact />} />
         <Route path="/Appdevelopment.js" element={<Appdevelopment />} />
         <Route path="/Webdevelopment.js" element={<Webdevelopment />} />
         <Route path="/Cancellation.js" element={<Cancellation />} />
          <Route path="/Career.js" element={<Career />} />
           <Route path="/Ourteam.js" element={<Ourteam />} />
             <Route path="/Portfolio.js" element={<Portfolio />} />
             <Route path="/Gallery.js" element={<Gallery />} />
             <Route path="/Termcondition.js" element={<Termcondition />} />
              <Route path="/Graphic.js" element={<Graphic />} />
              <Route path="/Privacy.js" element={<Privacy />} />
              <Route path="/DataBackup.js" element={<DataBackup />} />
              <Route path="/ItConsultation.js" element={<ItConsultation />} />
        {/* Add more routes here */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
