import React, { useEffect } from 'react'

function BuyerAgency() {

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
                                <h3>BuyerAgency</h3>
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
                                    <h1>BuyerAgency</h1>
                                </div>
                                <p className='Service_short_detail_area'>
                                As your trusted buyer’s agent, we guide you through the purchasing process with expert advice and personalized support to find the perfect property in Aruba. Contact us to start your journey toward owning a dream property!
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default BuyerAgency