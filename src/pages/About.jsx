import React from "react";

function About() {
  return (
    <>
      <section className="container-fluid about_page_section my-4">
        <div className="container">
          <div className="Container_white_bg_hp">
            <div className="row">
              <div className="col-xl-5 col-lg-6 col-md-12 col-12 mb-3">
                <div
                  className="About_page_img_area position-relative"
                  data-aos="fade-right"
                >
                  <div className="about_page_img_item">
                    <img src="/assests/Img/About-Us-Hortizontal.jpg" />
                  </div>
                  <div className="about_page_img_video">
                    <img src="/assests/Img/About-Us-Vertical.jpg" />
                    {/* <div>
                                            <i className="fa-solid fa-play"></i>
                                        </div> */}
                  </div>
                </div>
              </div>

              <div className="col-xl-7 col-lg-6 col-md-12 mb-3">
                <div className="About_page_content_area" data-aos="fade-left">
                  <div className="About_page_content_heading">
                    <p>About Us</p>
                    <h1>Prestige Realty N.V. (Inc.)</h1>
                  </div>
                  <p>
                    Prestige Realty N.V. (Inc.) is a dynamic and innovative real
                    estate firm proudly based in Aruba, with our headquarters
                    now located at J.E. Irausquin Boulevard 12 in Oranjestad.
                    Since our inception, we have been at the forefront of the
                    island's real estate scene, specializing in vacation
                    rentals, property design and development, construction,
                    brokerage, and property management. With a fresh and
                    forward-thinking approach, we are committed to delivering
                    exceptional service and expertise to both buyers and
                    sellers, ensuring your real estate experience in Aruba is
                    nothing short of extraordinary. Find Your Perfect Island
                    Escape for a Lifetime Our exclusive properties are renowned
                    for their prime beachfront or close-to-the-beach locations,
                    offering an unparalleled blend of luxury and comfort. With
                    resort-style amenities and personalized services, each home
                    is designed to provide a serene and sophisticated lifestyle.
                    From beautifully crafted interiors to peaceful outdoor
                    spaces, our homes offer a tranquil retreat that instantly
                    feels like your own. Whether you're looking for a permanent
                    residence or a seasonal getaway, we’re here to help you find
                    your perfect slice of paradise on Aruba.
                  </p>
                  <div className="row">
                    <div className="col-xl-6 col-lg-12 col-md-6 col-12 mb-2">
                      <div className="about_page_content_option_itme">
                        <div>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="1em"
                            height="1em"
                            viewBox="0 0 24 24"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="m4 12l8-8l8 8M6 10.5V19c0 .6.4 1 1 1h3v-3c0-.6.4-1 1-1h2c.6 0 1 .4 1 1v3h3c.6 0 1-.4 1-1v-8.5"
                            />
                          </svg>
                        </div>
                        <p> Integrity First</p>
                      </div>
                    </div>


                    <div className="col-xl-6 col-lg-12 col-md-6 col-12 mb-2">
                      <div className="about_page_content_option_itme">
                        <div>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="1em"
                            height="1em"
                            viewBox="0 0 24 24"
                          >
                            <g
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                            >
                              <path d="M3 20h18L14.079 5.388a2.3 2.3 0 0 0-4.158 0z" />
                              <path d="m7.5 11l2 2.5L12 11l2 3l2.5-2" />
                            </g>
                          </svg>
                        </div>
                        <p>Relentless Excellence</p>
                      </div>
                    </div>

                    <div className="col-xl-6 col-lg-12 col-md-6 col-12 mb-2">
                      <div className="about_page_content_option_itme">
                        <div>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="1em"
                            height="1em"
                            viewBox="0 0 24 24"
                          >
                            <g
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                            >
                              <circle cx="12" cy="12" r="10" />
                              <path d="m4.93 4.93l4.24 4.24m5.66 0l4.24-4.24m-4.24 9.9l4.24 4.24m-9.9-4.24l-4.24 4.24" />
                              <circle cx="12" cy="12" r="4" />
                            </g>
                          </svg>
                        </div>
                        <p>Customer Focus</p>
                      </div>
                    </div>

                    <div className="col-xl-6 col-lg-12 col-md-6 col-12 mb-2">
                      <div className="about_page_content_option_itme">
                        <div>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="1em"
                            height="1em"
                            viewBox="0 0 24 24"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M16 6h3a1 1 0 0 1 1 1v11a2 2 0 0 1-4 0V5a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v12a3 3 0 0 0 3 3h11M8 8h4m-4 4h4m-4 4h4"
                            />
                          </svg>
                        </div>
                        <p>Team Collaboration</p>
                      </div>
                    </div>
                  </div>

                  <div className="About_page_content_bottom_line_area">
                    With over 25 years of expertise in the Aruban real estate market, we are committed to finding the perfect home tailored to your needs. Rest assured, you're in trusted hands.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container-fluid Services_section_hp my-4">
        <div className="container">
          <div className="Container_white_bg_hp">
            <div className="row" data-aos="fade-right">
              <div className="col-12">
                <div className="service_header_area">
                  <p>Services</p>
                  <h1>Welcome to Prestige Realty N.V.</h1>
                </div>
                <p className="Service_short_detail_area">
                  Since 1999, Prestige Realty N.V. has been the leading name in
                  luxury real estate on Aruba, specializing in the finest
                  beachfront properties, exclusive villas, and prime locations
                  just steps away from the island’s stunning beaches. We are
                  your trusted partner for every aspect of your real estate
                  journey, offering tailored services that go beyond the
                  ordinary. Whether you’re looking for expert financing
                  solutions, property management, project development, or legal
                  and fiscal guidance, we provide unparalleled expertise with
                  personalized attention. Even when you’re not on the island, we
                  ensure that your interests are represented with the highest
                  level of care and professionalism. For those new to Aruba, our
                  unique Real Estate Tours are designed to introduce you to the
                  best the island has to offer, from hidden gems to renowned
                  beachfront estates. At Prestige Realty N.V., we turn your
                  dream of owning a slice of paradise into reality.
                </p>
              </div>
            </div>

            <div className="row align-items-stretch justify-content-center mt-4">
              <div
                className="col-xl-4 col-lg-4 col-md-6 col-12 mb-3"
                data-aos="zoom-in-up"
              >
                <div className="Service_item_area">
                  <div className="Service_item_img_area">
                    <img src="/assests/Img/BuyHome.svg" />
                  </div>
                  <div className="Service_item_content_Area">
                    <h3>Buy a Home</h3>
                    <p>
                      Find your perfect island retreat on our site! With a
                      curated selection of exclusive homes for sale, we’re
                      dedicated to matching you with a property you'll love to
                      call home. Whether it's a beachfront villa or a cozy
                      getaway near the shore, your dream home is just a click
                      away.
                    </p>
                    <a href="">
                      Find A Home
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                      >
                        <path d="M17.92 6.62a1 1 0 0 0-.54-.54A1 1 0 0 0 17 6H7a1 1 0 0 0 0 2h7.59l-8.3 8.29a1 1 0 0 0 0 1.42a1 1 0 0 0 1.42 0L16 9.41V17a1 1 0 0 0 2 0V7a1 1 0 0 0-.08-.38" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>

              <div
                className="col-xl-4 col-lg-4 col-md-6 col-12 mb-3"
                data-aos="zoom-in-up"
              >
                <div className="Service_item_area">
                  <div className="Service_item_img_area">
                    <img src="/assests/Img/SellHome.svg" />
                  </div>
                  <div className="Service_item_content_Area">
                    <h3>Sell a Home</h3>
                    <p>
                      Ready to sell your property? Let us take care of
                      everything! With our expertise in Aruba’s luxury market,
                      we ensure your home is presented to the right buyers. From
                      marketing to closing, we handle every detail so you can
                      sell with confidence and ease.
                    </p>
                    <a href="">
                      Find A Home
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                      >
                        <path d="M17.92 6.62a1 1 0 0 0-.54-.54A1 1 0 0 0 17 6H7a1 1 0 0 0 0 2h7.59l-8.3 8.29a1 1 0 0 0 0 1.42a1 1 0 0 0 1.42 0L16 9.41V17a1 1 0 0 0 2 0V7a1 1 0 0 0-.08-.38" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container-fluid Team_section_hp Team_member_section_hp my-4">
        <div className="container">
          <div className="Container_white_bg_hp">
            <div className="row" data-aos="fade-right">
              <div className="col-12">
                <div className="Team_header_area">
                  <p>Team</p>
                  <h1>Prestige Realty N.V. Team</h1>
                </div>
              </div>
            </div>

            <div className="row align-items-stretch mt-4">
              <div
                className="col-xl-3 col-lg-4 col-md-6 col-12 mb-3"
                data-aos="zoom-in-up"
              >
                <div className="Team_member_item_area">
                  <img src="/assests/Img/Team_member1.jpg" alt="" />
                  <div className="Team_member_item_content_Area">
                    <h4>Alan Riley</h4>
                    <p>Real Estate Broker</p>

                  </div>
                </div>
              </div>
              <div
                className="col-xl-3 col-lg-4 col-md-6 col-12 mb-3"
                data-aos="zoom-in-up"
              >
                <div className="Team_member_item_area">
                  <img src="/assests/Img/Team_member2.jpg" alt="" />
                  <div className="Team_member_item_content_Area">
                    <h4>Rachel Riley-Noordermeer</h4>
                    <p>Real Estate Broker</p>

                  </div>
                </div>
              </div>
              <div
                className="col-xl-3 col-lg-4 col-md-6 col-12 mb-3"
                data-aos="zoom-in-up"
              >
                <div className="Team_member_item_area">
                  <img src="/assests/Img/Team_member5.jpg" alt="" />
                  <div className="Team_member_item_content_Area">
                    <h4>Rosita Kelly</h4>
                    <p> Executive Assistant Administrator</p>
                    {/* <div className='Team_member_social_media_area'>
                                            <a href=''><i class="fa-brands fa-facebook-f"></i></a>
                                            <a href=''><i class="fa-brands fa-twitter"></i></a>
                                            <a href=''><i class="fa-brands fa-linkedin"></i></a>
                                        </div> */}
                  </div>
                </div>
              </div>
              <div
                className="col-xl-3 col-lg-4 col-md-6 col-12 mb-3"
                data-aos="zoom-in-up"
              >
                <div className="Team_member_item_area">
                  <img src=" " alt="" />
                  <div className="Team_member_item_content_Area">
                    <h4>Melissa Tromp</h4>
                    <p>Marketing & Sales Executive</p>

                  </div>
                </div>
              </div>
              <div
                className="col-xl-3 col-lg-4 col-md-6 col-12 mb-3"
                data-aos="zoom-in-up"
              >
                {/* <div className="Team_member_item_area">
                  <img src="/assests/Img/Team_member4.jpg" alt="" />
                  <div className="Team_member_item_content_Area">
                    <h4>Kenneth Maduro</h4>
                    <p>Facilities Supervisor</p>
                   
                  </div>
                </div> */}
              </div>
              <div
                className="col-xl-3 col-lg-4 col-md-6 col-12 mb-3"
                data-aos="zoom-in-up"
              >
                {/* <div className="Team_member_item_area">
                  <img src="/assests/Img/Team_member6.jpg" alt="" />
                  <div className="Team_member_item_content_Area">
                    <h4>Aischal van der Linde</h4>
                    <p>Guest Services Coordinator</p>
                    
                  </div>
                </div> */}
              </div>
              <div
                className="col-xl-3 col-lg-4 col-md-6 col-12 mb-3"
                data-aos="zoom-in-up"
              >
                {/* <div className="Team_member_item_area">
                  <img src="/assests/Img/Team_member7.jpg" alt="" />
                  <div className="Team_member_item_content_Area">
                    <h4>Raquel Lesire (Raqui)</h4>
                    <p>Operations Manager</p>
           
                  </div>
                </div> */}
              </div>
              <div
                className="col-xl-3 col-lg-4 col-md-6 col-12 mb-3"
                data-aos="zoom-in-up"
              >
                {/* <div className="Team_member_item_area">
                  <img src="/assests/Img/Team_member8.jpg" alt="" />
                  <div className="Team_member_item_content_Area">
                    <h4>Brandon Riley </h4>
                    <p>Marketing Associate</p>
             
                  </div>
                </div> */}

              </div>
              <div
                className="col-xl-3 col-lg-4 col-md-6 col-12 mb-3"
                data-aos="zoom-in-up"
              >
                <div className="Team_member_item_area">
                  <img src="/assests/Img/Team_member9.jpg" alt="" />
                  <div className="Team_member_item_content_Area">
                    <h4>Maria Henriquez </h4>
                    <p>Executive Administrator</p>
                    {/* <div className='Team_member_social_media_area'>
                                            <a href=''><i class="fa-brands fa-facebook-f"></i></a>
                                            <a href=''><i class="fa-brands fa-twitter"></i></a>
                                            <a href=''><i class="fa-brands fa-linkedin"></i></a>
                                        </div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
