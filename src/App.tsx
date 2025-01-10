// import 'bootstrap/dist/css/bootstrap.min.css';
// import React, { Suspense, lazy, useEffect } from 'react';
// import { BrowserRouter as Router, Route, Routes, BrowserRouter } from 'react-router-dom';



// // import Header from './component/Header';
// // import Footer from './component/Footer'
// // import Home from './pages/Home';
// // import About from './pages/About';
// // import Contact from './pages/Contact';
// // import FAQ from './pages/FAQ';
// // import Services from './pages/Services';
// // import ProjectManagement from './pages/ProjectManagement';
// // import SearchResult from './pages/SearchResult';
// // import PropertyDetail from './PropertyDetail';
// import AOS from 'aos';
// import 'aos/dist/aos.css';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import Loader from './common/loader';

// // import Investment from './pages/Investment';
// // import Development from './pages/Development';
// // import Financial from './pages/Financial';
// // import BuyerAgency from './pages/BuyerAgency';
// // import Propertymanagement from './pages/propertymanagement';

// const Header = lazy(() => import('./component/Header'));
// const Footer = lazy(() => import('./component/Footer'));
// const Home = lazy(() => import('./pages/Home'));
// const About = lazy(() => import('./pages/About'));
// const Contact = lazy(() => import('./pages/Contact'));
// const FAQ = lazy(() => import('./pages/FAQ'));
// const Services = lazy(() => import('./pages/Services'));
// const ProjectManagement = lazy(() => import('./pages/ProjectManagement'));
// const SearchResult = lazy(() => import('./pages/SearchResult'));
// const PropertyDetail = lazy(() => import('./pages/PropertyDetail'));
// const Investment = lazy(() => import('./pages/Investment'));
// const Development = lazy(() => import('./pages/Development'));
// const Financial = lazy(() => import('./pages/Financial'));
// const BuyerAgency = lazy(() => import('./pages/BuyerAgency'));
// const Propertymanagement = lazy(() => import('./pages/propertymanagement'));
// const Legaltax = lazy(() => import('./pages/LegalTax'));
// const OCEANIAResidences = lazy(() => import('./pages/OCEANIAResidences'));
// const BlueResidence = lazy(() => import('./pages/BlueResidence'));

// const GeographicalFilters = lazy(() => import('./pages/GeographicalFilters'));
// const PriceRangeFilters = lazy(() => import('./pages/PriceRangeFilters'));
// const PropertyTypeFilters = lazy(() => import('./pages/PropertyTypeFilters'));
// const RoomsFilters = lazy(() => import('./pages/RoomsFilters'));


// // Utility function to create a slug from a string
// const createSlug = (title) => {
//   return title
//     .toLowerCase() // Convert to lowercase
//     .replace(/[^a-z0-9]+/g, '-') // Replace spaces and special characters with dashes
//     .replace(/^-|-$/g, ''); // Remove leading and trailing dashes
// };

// const App = () => {

//   useEffect(() => {
//     AOS.init({
//       duration: 1200,
//       easing: "ease-out-cubic",
//     });
//   }, []);
//   return (

//     <div className="App">
//       <ToastContainer />
//      <Suspense fallback={<Loader/>}>
//       <BrowserRouter>
//       <Header />

//         <Routes>
//           <Route path="/" element={<Home reSet={""} />} />
//           <Route path="/About" element={<About />} />
//           <Route path="/Contact" element={<Contact />} />
//           <Route path="/FAQ" element={<FAQ />} />
//           <Route path="/Services" element={<Services />} />
//           <Route path="/ProjectManagement" element={<ProjectManagement />} />
//           <Route path="/BuyerAgency" element={<BuyerAgency />} />
//           <Route path="/Propertymanagement" element={<Propertymanagement />} />


//           <Route path="/Financial" element={<Financial />} />
//           <Route path="/Development" element={<Development />} />
//           <Route path="/Investment" element={<Investment />} />

//           <Route path="/SearchResult" element={<SearchResult />} />
//           <Route path="/PropertyDetail/:title" element={<PropertyDetail />} />
//           <Route path="/Legaltax" element={<Legaltax />} />
//           <Route path="/OCEANIAResidences" element={<OCEANIAResidences />} />
//           <Route path="/BlueResidence" element={<BlueResidence />} />


//           <Route path="/GeographicalFilters" element={<GeographicalFilters selectedGeo ={""}  reset={""} />} />
//           <Route path="/PriceRangeFilters" element={<PriceRangeFilters reset={""} selectedPrice={''} />} />
//           <Route path="/PropertyTypeFilters" element={<PropertyTypeFilters selectedType={" "} reset={""} />} />
//           <Route path="/RoomsFilters" element={<RoomsFilters selectedBath={""} selectedBed={""} reset={""}/>} />


//         </Routes>
//         <Footer />

//       </BrowserRouter>
//       </Suspense>
//     </div>
//   );
// };

// export default App;


import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Suspense, lazy, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loader from './common/loader';

// Lazy load components
const Header = lazy(() => import('./component/Header'));
const Footer = lazy(() => import('./component/Footer'));
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));
const FAQ = lazy(() => import('./pages/FAQ'));
const Services = lazy(() => import('./pages/Services'));
const ProjectManagement = lazy(() => import('./pages/ProjectManagement'));
const SearchResult = lazy(() => import('./pages/SearchResult'));
const PropertyDetail = lazy(() => import('./pages/PropertyDetail'));
const Investment = lazy(() => import('./pages/Investment'));
const Development = lazy(() => import('./pages/Development'));
const Financial = lazy(() => import('./pages/Financial'));
const BuyerAgency = lazy(() => import('./pages/BuyerAgency'));
const Propertymanagement = lazy(() => import('./pages/propertymanagement'));
const Legaltax = lazy(() => import('./pages/LegalTax'));
const OCEANIAResidences = lazy(() => import('./pages/OCEANIAResidences'));
const BlueResidence = lazy(() => import('./pages/BlueResidence'));
const GeographicalFilters = lazy(() => import('./pages/GeographicalFilters'));
const PriceRangeFilters = lazy(() => import('./pages/PriceRangeFilters'));
const PropertyTypeFilters = lazy(() => import('./pages/PropertyTypeFilters'));
const RoomsFilters = lazy(() => import('./pages/RoomsFilters'));



const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <div className="App">
      <ToastContainer />
      
      <Suspense fallback={<Loader />}>
      
        <Router>
          <Header />
          
          <Routes>
            <Route path="/" element={<Home reSet={undefined}/>} />
            <Route path="/About" element={<About />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/FAQ" element={<FAQ />} />
            <Route path="/Services" element={<Services />} />
            <Route path="/ProjectManagement" element={<ProjectManagement />} />
            <Route path="/BuyerAgency" element={<BuyerAgency />} />
            <Route path="/Propertymanagement" element={<Propertymanagement />} />
            <Route path="/Financial" element={<Financial />} />
            <Route path="/Development" element={<Development />} />
            <Route path="/Investment" element={<Investment />} />
            <Route path="/SearchResult" element={<SearchResult />} />
            <Route path="/PropertyDetail/:title" element={<PropertyDetail />} />
            <Route path="/Legaltax" element={<Legaltax />} />
            <Route path="/OCEANIAResidences" element={<OCEANIAResidences />} />
            <Route path="/BlueResidence" element={<BlueResidence />} />
            <Route path="/GeographicalFilters" element={<GeographicalFilters selectedGeo ={""}  reset={""}  onSelectGeo={""}/>} />
            <Route path="/PriceRangeFilters" element={<PriceRangeFilters reset={""} selectedPrice={''} />} />
            <Route path="/PropertyTypeFilters" element={<PropertyTypeFilters selectedType={""} reset={""} />} />
            <Route path="/RoomsFilters" element={<RoomsFilters selectedBath={""} selectedBed={""} reset={""} />} />
          </Routes>
          <Footer />
        </Router>
      </Suspense>
    </div>
  );
};

export default App;

