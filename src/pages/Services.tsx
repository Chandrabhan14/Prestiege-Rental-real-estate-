import React from 'react'
import { useNavigate } from 'react-router-dom'

function Services() {


    const navigate = useNavigate();

    
    return (
        <>
            <section className='container-fluid page_title_banner_section my-4' data-aos="zoom-in">
                <div className="container">
                    <div className='page_title_banner_bgImage_Area' style={{ backgroundImage: `linear-gradient(90deg, #0000007b, #00000000), url('/assests/Img/Services_title_banner.png')`, }}>
                        <div className='row'>
                            <div className='col-12'>
                                <h3>Services</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='container-fluid Services_section_hp my-4'>
                <div className='container'>
                    <div className='Container_white_bg_hp'  data-aos="fade-right">
                        <div className='row'>
                            <div className='col-12'>
                                <div className="service_header_area">
                                    <p>Services</p>
                                    <h1>Prestige Realty N.V.</h1>
                                </div>
                                <p className='Service_short_detail_area'>
                                    As the number one resource for prestigious real estate opportunities on the island of Aruba, we are constantly finding ways to provide you with the services you would expect to find.We are proud to be able to assist you in finding financing, manage your property or develop your own project! We also represent you in your absence in the best way possible, provide legal and fiscal guidance and even can offer you Real Estate Tours!
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section className='container-fluid Team_section_hp my-4'>
                <div className='container'>
                    <div className="row align-items-stretch justify-content-evenly mt-4">
                        <div className='col-xl-4 col-lg-4 col-md-6 col-12 mb-3' data-aos="zoom-in-up">
                            <div className="Team_item_area mx-0">
                                <img src="/assests/Img/property-management-services-page.jpg" alt="" />
                                <div className="Team_item_content_Area">
                                    <p>Property Management</p>
                                    <a className='cp'  onClick={() => navigate('/Propertymanagement')}  >More About <i className="fa-solid fa-arrow-right ms-2"></i></a>
                                </div>
                            </div>
                        </div>

                        <div className='col-xl-4 col-lg-4 col-md-6 col-12 mb-3' data-aos="zoom-in-up">
                            <div className="Team_item_area mx-0">
                                <img src="/assests/Img/project-development-services-page.png" alt="" />
                                <div className="Team_item_content_Area">
                                    <p>Project Development</p>
                                    <a className='cp'  onClick={() => navigate('/Development')} >More About <i className="fa-solid fa-arrow-right ms-2"></i></a>
                                </div>
                            </div>
                        </div>

                        <div className='col-xl-4 col-lg-4 col-md-6 col-12 mb-3' data-aos="zoom-in-up">
                            <div className="Team_item_area mx-0">
                                <img src="/assests/Img/project-management-services-page.png" alt="" />
                                <div className="Team_item_content_Area">
                                    <p>Project Management</p>
                                    <a className='cp'  onClick={() => navigate('/ProjectManagement')} >More About <i className="fa-solid fa-arrow-right ms-2"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row align-items-stretch justify-content-evenly mt-4">
                        <div className='col-xl-4 col-lg-4 col-md-6 col-12 mb-3' data-aos="zoom-in-up">
                            <div className="Team_item_area mx-0">
                                <img src="/assests/Img/buyer-agency-services-page.png" alt="" />
                                <div className="Team_item_content_Area">
                                    <p>Buyer Agency</p>
                                    <a className='cp'  onClick={() => navigate('/BuyerAgency')} >More About <i className="fa-solid fa-arrow-right ms-2"></i></a>
                                </div>
                            </div>
                        </div>

                        <div className='col-xl-4 col-lg-4 col-md-6 col-12 mb-3' data-aos="zoom-in-up">
                            <div className="Team_item_area mx-0">
                                <img src="/assests/Img/financial-assistance-services-page.png" alt="" />
                                <div className="Team_item_content_Area">
                                    <p>Financial Assistance</p>
                                    <a  className='cp' onClick={() => navigate('/Financial')}  >More About <i className="fa-solid fa-arrow-right ms-2"></i></a>
                                </div>
                            </div>
                        </div>

                        <div className='col-xl-4 col-lg-4 col-md-6 col-12 mb-3' data-aos="zoom-in-up">
                            <div className="Team_item_area mx-0">
                                <img src="/assests/Img/investment-services-page.png" alt="" />
                                <div className="Team_item_content_Area">
                                    <p>Investment</p>
                                    <a className='cp' onClick={() => navigate('/Investment')} >More About <i className="fa-solid fa-arrow-right ms-2"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Services