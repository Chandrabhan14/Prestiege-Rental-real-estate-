import React, { useEffect } from 'react'

function Development() {

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
                                <h3>Project Development</h3>
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
                                    <h1>Project Development</h1>
                                </div>
                                <p className='Service_short_detail_area'>
                                We assist developers in securing investors, acquiring land in Aruba, managing resorts, and selling condos. Our expertise ensures a smooth process from concept to completion. Get in touch now to discuss your next project!
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Development