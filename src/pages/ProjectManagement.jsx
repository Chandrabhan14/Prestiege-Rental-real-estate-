import React, { useEffect } from 'react'

function ProjectManagement() {

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
                                <h3>Project Management</h3>
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
                                    <h1>Project Management</h1>
                                </div>
                                <p className='Service_short_detail_area'>
                                Let us oversee every detail of your project, ensuring it stays on budget, on schedule, and aligned with your vision. Our team’s local knowledge and professional approach guarantee exceptional results. Call us today to bring your project to life!
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ProjectManagement