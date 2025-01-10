import React from 'react'
import { useNavigate } from 'react-router-dom';

const Footer = () => {

    const currentYear = new Date().getFullYear();
    const navigate = useNavigate();


    return (
        <footer className='bg_000 '>
            <div className='container pt-5 footer'>
                <div className='row pb-3'>
                    <div className='col-lg-2 col-md-12 col-xs-1'>
                        <div className='logo'>
                            <a  href='/'> <img src='/assests/Img/PVA LOGO.png' style={{background:"#fff",  borderRadius:"10px"}} height={80} width={150} /></a>
                           
                        </div>
                    </div>
                    <div className='col-lg-3 col-md-4 col-xs-1'>
                        <h5 className='fw-bold'>Quick links</h5>
                        <div>
                            <ul className="navbar-nav mx-auto mb-2 mb-lg-0 justify-content-center mb-md-0">
                                <li className="nav-item">
                                    <a className="nav-link footer-link  py-1 cp " 
                                    onClick={() => navigate('/OCEANIAResidences')}
                                    >OCEANIA Residences</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link footer-link  py-1 cp "
                                    onClick={() => navigate('/BlueResidence')}
                                     >BLUE Residence Club</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link footer-link  py-1 cp "
                                     onClick={() => navigate('/LegalTax')}
                                     >Legal and Tax</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link footer-link  py-1 cp "
                                     onClick={() => navigate('/About')}
                                     >About Prestige Realty N.V.</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className='col-lg-3 col-md-4 col-xs-1'>
                        <h5 className='fw-bold'>Our Services</h5>
                        <div>
                            <ul className="navbar-nav mx-auto mb-2 mb-lg-0 justify-content-center mb-md-0">
                                <li className="nav-item">
                                    <a className="nav-link footer-link   py-1 cp "
                                    onClick={() => navigate('/Propertymanagement')}
                                     >Property Management</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link footer-link    py-1 cp" 
                                   onClick={() => navigate('/Development')}
                                     >Project Development</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link footer-link   py-1 cp"
                                    onClick={() => navigate('/BuyerAgency')}
                                      >Buyer Agency</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link footer-link   py-1 cp" 
                                    onClick={() => navigate('/Financial')} 
                                    >Financing Assistance</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className='col-lg-4 col-md-4 col-xs-1'>
                        <h5 className='fw-bold'>Contact Us</h5>
                        <div className='row'>
                            <div className='col-12'>
                                <p className="d-flex align-items-center  py-1 mb-0"><i className="fa-regular fa-envelope pe-2"></i>
                                    <a href="mailto:inquiries@prestigerealtyaruba.com" className=" footer-link   d-flex word_break_2">inquiries@prestigerealtyaruba.com</a>
                                </p>
                                <p className=' font_regular py-1 mb-0'>
                                    <i className="fa-regular fa-building pe-2 "></i>J.E. Irausquin Blvd. 12, 2nd Floor, Oranjestad, Aruba
                                </p>
                                <p className='  font_regular py-1 mb-0'>
                                    <i className="fa-solid fa-phone-volume pe-2 "></i>   <a href="tel:+18669407453" >
                                        Toll Free (USA/CANADA): +1-866-940-7453
                                    </a>
                                </p>
                                <p className='  font_regular py-1'>
                                    <i className="fa-solid fa-phone-volume pe-2 "></i> <a href='tel:+2975820509'>Office phone: +297-582-0509</a> 
                                </p>
                            </div >
                            <div className='col-12 social_media_sl'>
                                <a href='https://www.facebook.com/prestigevacationsaruba' target="_blank" ><i className="fa-brands fa-facebook-f"></i></a>
                                <a href='https://www.instagram.com/prestigevacationsaruba'  target="_blank"><i className="fa-brands fa-instagram" ></i></a>
                                <a href='https://x.com/prestigearuba'><i className="fa-brands fa-twitter"></i></a>
                               

                            </div>
                        </div>
                    </div>

                </div>
                <div className='row border-top text-center pt-2'>
                    <p>Copyright ©{currentYear} <a href="mailto:email@prestigerealtynv.com" className='footer-link'>prestigerealtynv.com</a>. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer