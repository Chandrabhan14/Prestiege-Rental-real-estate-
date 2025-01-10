
// import React, { useEffect, useState } from 'react'
// import { Link, useNavigate } from 'react-router-dom';
// import { useLocation } from 'react-router-dom';



// const Header = () => {

//   const [activeLink, setActiveLink] = useState('');
//   const location = useLocation();

//   useEffect(() => {
//     // Extract the pathname from location object
//     const { pathname } = location;
//     setActiveLink(pathname);
//   }, [location]);
  

// const navigate = useNavigate();

// const [isOpen, setIsOpen] = useState(false);

//   const toggleNavbar = () => {
//     setIsOpen(!isOpen);
//   };

//   const closeNavbar = () => {
//     setIsOpen(false);
//   };

//   return (
//     <nav className="navbar navbar-expand-lg bg-body-tertiary header_section">
//       <div className="container">
//         <a href="/" className="d-inline-flex link-body-emphasis text-decoration-none">
//           <img src='/assests/Img/PVA LOGO.png' height={50} width={"auto"} />
//         </a>
//         <button className="navbar-toggler" type="button" data-bs-toggle="collapse" onClick={toggleNavbar} data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
//           <span className="navbar-toggler-icon"></span>
//         </button>
//         <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`} id="navbarNavDropdown">
//           <ul className="navbar-nav mx-auto mb-2 mb-lg-0 justify-content-center mb-md-0">
//             <li className="nav-item">
//               <Link className={`nav-link ${activeLink === '/' ? 'active' : ''}`} to="/" onClick={closeNavbar}>Home</Link>
//             </li>
//             <li className="nav-item">
//               <Link className={`nav-link ${activeLink === '/About' ? 'active' : ''}`}  to="/About"  onClick={closeNavbar} >About Us</Link>
//             </li>
//             <li className="nav-item">
//               <Link className={`nav-link ${activeLink === '/SearchResult' ? 'active' : ''}`} to="/SearchResult"  onClick={closeNavbar}>Properties</Link>
//             </li>
//             <li className="nav-item">
//               <Link className={`nav-link ${activeLink === '/Services' ? 'active' : ''}`} to="/Services"  onClick={closeNavbar}>Services</Link>
//             </li>
//             <li className="nav-item">
//               <Link className={`nav-link ${activeLink === '/Contact' ? 'active' : ''}`} to="/Contact"  onClick={closeNavbar}>Contact Us</Link>
//             </li>
//             <li className="nav-item">
//               <Link className={`nav-link ${activeLink === '/FAQ' ? 'active' : ''}`} to="/FAQ"  onClick={closeNavbar}>FAQ</Link>
//             </li>

//           </ul>
//           <form className="d-flex" role="search">
//             <button type="button" onClick={() => navigate("/SearchResult")} className="btn btn_00529B font_regular"><i className="fa-solid fa-magnifying-glass pe-2"></i>Find A Home</button>
//           </form>
//         </div>
//       </div>
//     </nav>
//   )
// }

// export default Header


import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';



const Header = () => {

  const [activeLink, setActiveLink] = useState('');
  const location = useLocation();

  useEffect(() => {
    // Extract the pathname from location object
    const { pathname } = location;
    setActiveLink(pathname);
  }, [location]);
  

const navigate = useNavigate();

const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const closeNavbar = () => {
    setIsOpen(false);
  };

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary header_section">
      <div className="container">
        <a href="/" className="d-inline-flex link-body-emphasis text-decoration-none">
          <img src='/assests/Img/PVA LOGO.png' height={50} width={"auto"} />
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" onClick={toggleNavbar} data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`} id="navbarNavDropdown">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0 justify-content-center mb-md-0">
            <li className="nav-item">
              <Link className={`nav-link ${activeLink === '/' ? 'active' : ''}`} to="/" onClick={closeNavbar}>Home</Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${activeLink === '/About' ? 'active' : ''}`}  to="/About"  onClick={closeNavbar} >About Us</Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${activeLink === '/SearchResult' ? 'active' : ''}`} to="/SearchResult"  onClick={closeNavbar}>Properties</Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${activeLink === '/Services' ? 'active' : ''}`} to="/Services"  onClick={closeNavbar}>Services</Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${activeLink === '/Contact' ? 'active' : ''}`} to="/Contact"  onClick={closeNavbar}>Contact Us</Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${activeLink === '/FAQ' ? 'active' : ''}`} to="/FAQ"  onClick={closeNavbar}>FAQ</Link>
            </li>

          </ul>
          <form className="d-flex" role="search">
            <button type="button" onClick={() => navigate("/SearchResult")} className="btn btn_00529B font_regular"><i className="fa-solid fa-magnifying-glass pe-2"></i>Find A Home</button>
          </form>
        </div>
      </div>
    </nav>
  )
}

export default Header

