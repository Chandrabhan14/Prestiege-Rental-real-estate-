import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.min.css';
import 'owl.carousel/dist/assets/owl.theme.default.min.css';


function OCEANIAResidences() {
    const options = {
        margin: 15,
        responsiveClass: true,
        nav: false,
        dots: true,
        autoplay: true,
        smartSpeed: 1000,
        loop: true,
        responsive: {
            0: {
                items: 1,
            },
            767.98: {
                items: 2,
            },
            991.98: {
                items: 1,

            }
        },
    };

    return (
        <>

            <section className='container-fluid Property_Detail_Section'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-xl-8 col-lg-7 col-md-12'>
                            <div className='Container_white_bg_hp my-4'>
                                <div className='Property_Detail_contact_section'>
                                    <div className='Property_Detail_contact_top_img' data-aos="zoom-in-up">
                                        <img src='/assests/Img/properties_for_sale_2.png' />
                                    </div>
                                    <div data-aos="zoom-in-up">
                                        <h4 className='mb-3 mt-5'>Oceania Deluxe Beachfront Resort - Property For Sale</h4>
                                        <p>
                                            We welcome you to view the beachfront property for sale at this luxurious condo resort and be a proud owner of a condo in the most beautiful residential resort in Aruba! The Oceania Deluxe Beachfront Condominium Resort (also known as Oceania Residences resort) is a new, and currently the only BEACHFRONT residential condo resort in Aruba. It is located on Eagle Beach within the high-activity resort and hotel strip of the island. The surrounding areas are all timeshare and/or hotel resorts, which are much more crowded and with much less spacious rooms than these condos.If you are already in the process of deciding to buy in Aruba, please inquire via our contact form on this website and we will send you a free information package via e-mail or regular mail
                                        </p>
                                    </div>
                                </div>
                            </div >

                            <div className='Property_Detail_images_list_area'>
                                <div className='Property_Detail_images_item position-relative' data-aos="zoom-in-up">
                                    <img src='/assests/Img/properties_for_sale_1.png' />
                                    <div className='Property_Detail_images_content'>
                                        <h4>Your search for beachfront property has ended!</h4>
                                        <p>
                                            If you are looking for an upscale, private and relaxing condo with spectacular ocean view and just a few steps from the beach, but still close to all main activities and with all the benefits from adjoining hotels and resorts; look no further! We have wonderful and luxurious condos of all sizes and at very competitive prices. We have unique condos in resale available at this one-and-only beachfront condo resort on the "One Happy Island" of Aruba. Prices vary between $400K and $1200K, with furniture, fixtures and all equipment included!
                                        </p>
                                    </div>
                                </div>

                                <div className='Property_Detail_images_item position-relative' data-aos="zoom-in-up">
                                    <img src='/assests/Img/properties_for_sale_3.png' />
                                    <div className='Property_Detail_images_content'>
                                        <h4>Your search for beachfront property has ended!</h4>
                                        <p>
                                            If you are looking for an upscale, private and relaxing condo with spectacular ocean view and just a few steps from the beach, but still close to all main activities and with all the benefits from adjoining hotels and resorts; look no further! We have wonderful and luxurious condos of all sizes and at very competitive prices. We have unique condos in resale available at this one-and-only beachfront condo resort on the "One Happy Island" of Aruba. Prices vary between $400K and $1200K, with furniture, fixtures and all equipment included!
                                        </p>
                                    </div>
                                </div>

                                <div className='Property_Detail_images_item position-relative' data-aos="zoom-in-up">
                                    <img src='/assests/Img/properties_for_sale_4.png' />
                                    <div className='Property_Detail_images_content'>
                                        <h4>Your search for beachfront property has ended!</h4>
                                        <p>
                                            If you are looking for an upscale, private and relaxing condo with spectacular ocean view and just a few steps from the beach, but still close to all main activities and with all the benefits from adjoining hotels and resorts; look no further! We have wonderful and luxurious condos of all sizes and at very competitive prices. We have unique condos in resale available at this one-and-only beachfront condo resort on the "One Happy Island" of Aruba. Prices vary between $400K and $1200K, with furniture, fixtures and all equipment included!
                                        </p>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className='col-xl-4 col-lg-5 col-md-12'>
                            <div className='row my-4 align-items-stretch'>
                                <div className='col-xl-12 col-lg-12 col-md-6 mb-4' data-aos="fade-up-left">
                                    <div className='Property_Detail_contact_form_area'>
                                        <h4>Contact seller</h4>
                                        <form action="">
                                            <div className='form-group mb-2'>
                                                <input type="text" className='form-control' placeholder='Full Name' />
                                            </div>
                                            <div className='form-group mb-2'>
                                                <input type="email" className='form-control' placeholder='Email Address' />
                                            </div>
                                            <div className='form-group mb-2'>
                                                <input type="text" className='form-control' placeholder='Phone' />
                                            </div>
                                            <div className='form-group mb-2'>
                                                <textarea name="" id="" className='form-control' rows={3} placeholder='Message'></textarea>
                                            </div>
                                            <button className='btn_00529B  w-100 btn'>Send Email </button>
                                        </form>
                                    </div>
                                </div>
                                <div className='col-xl-12 col-lg-12 col-md-6 mb-4' data-aos="fade-up-left">
                                    <div className='Property_Detail_contact_form_area'>
                                        <h4>Similar listings</h4>
                                        <a href='' className='Similar_listings_item mb-3'>
                                            <img src="assests/Img/properties_for_sale_3.png" alt="" />
                                            <div className='Similar_listings_item_content ms-2'>
                                                <h6>Luxury House In Greenville</h6>
                                                <div>
                                                    <i className="fa-solid fa-star me-1"></i>
                                                    <i className="fa-solid fa-star me-1"></i>
                                                    <i className="fa-solid fa-star me-1"></i>
                                                    <i className="fa-solid fa-star me-1"></i>
                                                    <i className="fa-solid fa-star me-1"></i>
                                                </div>
                                                <p>$30,000.00</p>
                                            </div>
                                        </a>
                                        <a href='' className='Similar_listings_item mb-3'>
                                            <img src="assests/Img/properties_for_sale_3.png" alt="" />
                                            <div className='Similar_listings_item_content ms-2'>
                                                <h6>Luxury House In Greenville</h6>
                                                <div>
                                                    <i className="fa-solid fa-star me-1"></i>
                                                    <i className="fa-solid fa-star me-1"></i>
                                                    <i className="fa-solid fa-star me-1"></i>
                                                    <i className="fa-solid fa-star me-1"></i>
                                                    <i className="fa-solid fa-star me-1"></i>
                                                </div>
                                                <p>$30,000.00</p>
                                            </div>
                                        </a>
                                        <a href='' className='Similar_listings_item mb-3'>
                                            <img src="assests/Img/properties_for_sale_3.png" alt="" />
                                            <div className='Similar_listings_item_content ms-2'>
                                                <h6>Luxury House In Greenville</h6>
                                                <div>
                                                    <i className="fa-solid fa-star me-1"></i>
                                                    <i className="fa-solid fa-star me-1"></i>
                                                    <i className="fa-solid fa-star me-1"></i>
                                                    <i className="fa-solid fa-star me-1"></i>
                                                    <i className="fa-solid fa-star me-1"></i>
                                                </div>
                                                <p>$30,000.00</p>
                                            </div>
                                        </a>
                                        <a href='' className='Similar_listings_item mb-3'>
                                            <img src="assests/Img/properties_for_sale_3.png" alt="" />
                                            <div className='Similar_listings_item_content ms-2'>
                                                <h6>Luxury House In Greenville</h6>
                                                <div>
                                                    <i className="fa-solid fa-star me-1"></i>
                                                    <i className="fa-solid fa-star me-1"></i>
                                                    <i className="fa-solid fa-star me-1"></i>
                                                    <i className="fa-solid fa-star me-1"></i>
                                                    <i className="fa-solid fa-star me-1"></i>
                                                </div>
                                                <p>$30,000.00</p>
                                            </div>
                                        </a>

                                    </div>
                                </div>

                                {/* <div className='col-xl-12 col-lg-12 mb-4' data-aos="fade-up-left">
                                    <div className='Property_Detail_contact_form_area  Property_Detail_Popular_area'>
                                        <h4>Popular Properties</h4>
                                        <OwlCarousel className="slider-items owl-carousel" {...options}>
                                            <div className='item' key={1}>
                                                <a href='/OCEANIAResidences' className='Searching_property_list_item'>
                                                    <div className='Searching_property_list_img'>
                                                        <img src="/assests/Img/Property1.png" alt="" />
                                                        <p>For Sale</p>
                                                    </div>
                                                    <div className='Searching_property_list_content'>
                                                        <h5>Azure Beach Residences PH2-2 - Two-Bedroom Penthouse - Tides Tower</h5>
                                                        <div className='row'>
                                                            <div className='col-6'>
                                                                <div className='Searching_property_Detail_item'>
                                                                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M4 11v8a1 1 0 0 0 1 1h8M4 6V5a1 1 0 0 1 1-1h1m5 0h2m5 0h1a1 1 0 0 1 1 1v1m0 5v2m0 5v1a1 1 0 0 1-1 1h-1" /><path d="M4 12h7a1 1 0 0 1 1 1v7" /></g></svg>
                                                                    <p className='mb-0 ms-2'> Sqft : 2137 </p>
                                                                </div>
                                                            </div>
                                                            <div className='col-6'>
                                                                <div className='Searching_property_Detail_item'>
                                                                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 9a2 2 0 1 0 4 0a2 2 0 1 0-4 0m17 8v-3H2m0-6v9m10-3h10v-2a3 3 0 0 0-3-3h-7z" /></svg>
                                                                    <p className='mb-0 ms-2'> Beds : 04 </p>
                                                                </div>
                                                            </div>
                                                            <div className='col-6'>
                                                                <div className='Searching_property_Detail_item'>
                                                                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 3v12h-5c-.023-3.681.184-7.406 5-12m0 12v6h-1v-3M8 4v17M5 4v3a3 3 0 1 0 6 0V4" /></svg>
                                                                    <p className='mb-0 ms-2'> Kitchen : 01 </p>
                                                                </div>
                                                            </div>
                                                            <div className='col-6'>
                                                                <div className='Searching_property_Detail_item'>
                                                                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M22 12H5V6.41a1.975 1.975 0 0 1 1.04-1.759a1.995 1.995 0 0 1 1.148-.23a3.491 3.491 0 0 0 .837 3.554l1.06 1.06a1 1 0 0 0 1.415 0L14.035 5.5a1 1 0 0 0 0-1.414l-1.06-1.06a3.494 3.494 0 0 0-4.53-.343A3.992 3.992 0 0 0 3 6.41V12H2a1 1 0 0 0 0 2h1v3a2.995 2.995 0 0 0 2 2.816V21a1 1 0 0 0 2 0v-1h10v1a1 1 0 0 0 2 0v-1.184A2.995 2.995 0 0 0 21 17v-3h1a1 1 0 0 0 0-2M9.44 4.44a1.502 1.502 0 0 1 2.12 0l.354.353l-2.121 2.121l-.354-.353a1.501 1.501 0 0 1 0-2.122ZM19 17a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1v-3h14Z" /></svg>
                                                                    <p className='mb-0 ms-2'> Bath : 02 </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className='Searching_property_owner_Price_area'>
                                                        <div className='Searching_property_owner_item'>
                                                            <img src="/assests/Img/User.png" alt="" />
                                                            <h6>Alexia Putellas</h6>
                                                        </div>
                                                        <div className='Searching_property_owner_item'>
                                                            <h6>$ 39,975,000</h6>
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>
                                            <div className='item' key={2}>
                                                <a href='/OCEANIAResidences' className='Searching_property_list_item'>
                                                    <div className='Searching_property_list_img'>
                                                        <img src="/assests/Img/Property2.png" alt="" />
                                                        <p>For Sale</p>
                                                    </div>
                                                    <div className='Searching_property_list_content'>
                                                        <h5>Azure Beach Residences PH2-2 - Two-Bedroom Penthouse - Tides Tower</h5>
                                                        <div className='row'>
                                                            <div className='col-6'>
                                                                <div className='Searching_property_Detail_item'>
                                                                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M4 11v8a1 1 0 0 0 1 1h8M4 6V5a1 1 0 0 1 1-1h1m5 0h2m5 0h1a1 1 0 0 1 1 1v1m0 5v2m0 5v1a1 1 0 0 1-1 1h-1" /><path d="M4 12h7a1 1 0 0 1 1 1v7" /></g></svg>
                                                                    <p className='mb-0 ms-2'> Sqft : 2137 </p>
                                                                </div>
                                                            </div>
                                                            <div className='col-6'>
                                                                <div className='Searching_property_Detail_item'>
                                                                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 9a2 2 0 1 0 4 0a2 2 0 1 0-4 0m17 8v-3H2m0-6v9m10-3h10v-2a3 3 0 0 0-3-3h-7z" /></svg>
                                                                    <p className='mb-0 ms-2'> Beds : 04 </p>
                                                                </div>
                                                            </div>
                                                            <div className='col-6'>
                                                                <div className='Searching_property_Detail_item'>
                                                                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 3v12h-5c-.023-3.681.184-7.406 5-12m0 12v6h-1v-3M8 4v17M5 4v3a3 3 0 1 0 6 0V4" /></svg>
                                                                    <p className='mb-0 ms-2'> Kitchen : 01 </p>
                                                                </div>
                                                            </div>
                                                            <div className='col-6'>
                                                                <div className='Searching_property_Detail_item'>
                                                                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M22 12H5V6.41a1.975 1.975 0 0 1 1.04-1.759a1.995 1.995 0 0 1 1.148-.23a3.491 3.491 0 0 0 .837 3.554l1.06 1.06a1 1 0 0 0 1.415 0L14.035 5.5a1 1 0 0 0 0-1.414l-1.06-1.06a3.494 3.494 0 0 0-4.53-.343A3.992 3.992 0 0 0 3 6.41V12H2a1 1 0 0 0 0 2h1v3a2.995 2.995 0 0 0 2 2.816V21a1 1 0 0 0 2 0v-1h10v1a1 1 0 0 0 2 0v-1.184A2.995 2.995 0 0 0 21 17v-3h1a1 1 0 0 0 0-2M9.44 4.44a1.502 1.502 0 0 1 2.12 0l.354.353l-2.121 2.121l-.354-.353a1.501 1.501 0 0 1 0-2.122ZM19 17a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1v-3h14Z" /></svg>
                                                                    <p className='mb-0 ms-2'> Bath : 02 </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className='Searching_property_owner_Price_area'>
                                                        <div className='Searching_property_owner_item'>
                                                            <img src="/assests/Img/User.png" alt="" />
                                                            <h6>Alexia Putellas</h6>
                                                        </div>
                                                        <div className='Searching_property_owner_item'>
                                                            <h6>$ 39,975,000</h6>
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>
                                            <div className='item' key={3}>
                                                <a href='/OCEANIAResidences' className='Searching_property_list_item'>
                                                    <div className='Searching_property_list_img'>
                                                        <img src="/assests/Img/Property3.png" alt="" />
                                                        <p>For Sale</p>
                                                    </div>
                                                    <div className='Searching_property_list_content'>
                                                        <h5>Azure Beach Residences PH2-2 - Two-Bedroom Penthouse - Tides Tower</h5>
                                                        <div className='row'>
                                                            <div className='col-6'>
                                                                <div className='Searching_property_Detail_item'>
                                                                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M4 11v8a1 1 0 0 0 1 1h8M4 6V5a1 1 0 0 1 1-1h1m5 0h2m5 0h1a1 1 0 0 1 1 1v1m0 5v2m0 5v1a1 1 0 0 1-1 1h-1" /><path d="M4 12h7a1 1 0 0 1 1 1v7" /></g></svg>
                                                                    <p className='mb-0 ms-2'> Sqft : 2137 </p>
                                                                </div>
                                                            </div>
                                                            <div className='col-6'>
                                                                <div className='Searching_property_Detail_item'>
                                                                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 9a2 2 0 1 0 4 0a2 2 0 1 0-4 0m17 8v-3H2m0-6v9m10-3h10v-2a3 3 0 0 0-3-3h-7z" /></svg>
                                                                    <p className='mb-0 ms-2'> Beds : 04 </p>
                                                                </div>
                                                            </div>
                                                            <div className='col-6'>
                                                                <div className='Searching_property_Detail_item'>
                                                                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 3v12h-5c-.023-3.681.184-7.406 5-12m0 12v6h-1v-3M8 4v17M5 4v3a3 3 0 1 0 6 0V4" /></svg>
                                                                    <p className='mb-0 ms-2'> Kitchen : 01 </p>
                                                                </div>
                                                            </div>
                                                            <div className='col-6'>
                                                                <div className='Searching_property_Detail_item'>
                                                                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M22 12H5V6.41a1.975 1.975 0 0 1 1.04-1.759a1.995 1.995 0 0 1 1.148-.23a3.491 3.491 0 0 0 .837 3.554l1.06 1.06a1 1 0 0 0 1.415 0L14.035 5.5a1 1 0 0 0 0-1.414l-1.06-1.06a3.494 3.494 0 0 0-4.53-.343A3.992 3.992 0 0 0 3 6.41V12H2a1 1 0 0 0 0 2h1v3a2.995 2.995 0 0 0 2 2.816V21a1 1 0 0 0 2 0v-1h10v1a1 1 0 0 0 2 0v-1.184A2.995 2.995 0 0 0 21 17v-3h1a1 1 0 0 0 0-2M9.44 4.44a1.502 1.502 0 0 1 2.12 0l.354.353l-2.121 2.121l-.354-.353a1.501 1.501 0 0 1 0-2.122ZM19 17a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1v-3h14Z" /></svg>
                                                                    <p className='mb-0 ms-2'> Bath : 02 </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className='Searching_property_owner_Price_area'>
                                                        <div className='Searching_property_owner_item'>
                                                            <img src="/assests/Img/User.png" alt="" />
                                                            <h6>Alexia Putellas</h6>
                                                        </div>
                                                        <div className='Searching_property_owner_item'>
                                                            <h6>$ 39,975,000</h6>
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>
                                        </OwlCarousel>

                                    </div>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div >
            </section >
        </>
    )
}

export default OCEANIAResidences