import React, { useEffect } from 'react'

function Financial() {

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
                                <h3>Financial Assistance</h3>
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
                                    <h1>Financial Assistance </h1>
                                </div>
                                <p className='Service_short_detail_area'>
                                We provide financial data on properties in our rental portfolio to help secure loans from local banks. Our insights showcase the strong ROI potential, making your investment decision easier. Let us assist you—connect with us today!
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Financial