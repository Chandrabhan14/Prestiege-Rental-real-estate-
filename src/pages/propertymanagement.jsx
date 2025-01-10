import React, { useEffect } from 'react'

function Propertymanagement() {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <section className='container-fluid page_title_banner_section my-4'  data-aos="zoom-in">
                <div className="container">
                    <div className='page_title_banner_bgImage_Area' style={{ backgroundImage: `linear-gradient(90deg, #0000007b, #00000000), url('/assests/Img/Services_title_banner.png')`, }}>
                        <div className='row'>
                            <div className='col-12'>
                                <h3>Property Management</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='container-fluid service_deatil_page_section my-4' data-aos="fade-right">
                <div className='container'>
                    <div className='Container_white_bg_hp'>
                        <div className='row' >
                            <div className='col-12'>
                                <div className="service_header_area">
                                    <p>Services</p>
                                    <h1>Property Management</h1>
                                </div>
                                <p className='Service_short_detail_area'>
                                With over 130 properties under management, we specialize in vacation rentals that maximize ROI for our property owners. Our comprehensive services handle everything from marketing to guest services and maintenance. Reach out today to see how we can manage your property!
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Propertymanagement