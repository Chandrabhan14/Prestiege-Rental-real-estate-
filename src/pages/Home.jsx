import React, { useEffect, useRef, useState } from 'react'
import { useNavigate } from "react-router-dom";
import api from "../utils/ApiConfig";
import Loader from "../common/loader";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchPopularPropperties,
  setPropertyDetails,
} from "../features/propertySlice";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { toast } from "react-toastify";
import propertyService from "../utils/propertyService";
import LoaderA from "../common/Loader2";
import { Modal } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

const schema = yup.object().shape({
  firstName: yup
    .string()
    .trim() 
    .required("First name is required")
    .min(3, "First name must be a minimum of 3 characters")
    .max(20, "First name must be a maximum of 20 characters")
    .matches(
      /^[A-Za-z]+$/,
      "First name must only contain alphabetic characters"
    ),
  lastName: yup
    .string()
    .trim()
    .required("Last name is required")
    .min(3, "Last name must be a minimum of 3 characters")
    .max(20, "Last name must be a maximum of 20 characters")
    .matches(
      /^[A-Za-z]+$/,
      "Last name must only contain alphabetic characters"
    ),
  email: yup
    .string()
    .required("Email is required")
    .matches(emailRegex, "Invalid email format"),
  message: yup
    .string()
    .trim()
    .required("Comment is required")
    .max(255, "Comment  must be a maximum of 255 characters"),
  mobileNo: yup
    .string()
    .required("Mobile number is required")
    .matches(/^\d{10}$/, "Invalid mobile number"), // Assuming a 10-digit mobile number
  // checkIn: yup.string().required('Check-in date is required'),
  // checkOut: yup.string().required('Check-out date is required'),
});

function Home({ reSet }) {
  const navigate = useNavigate();

  const View = ["Beachfront", "Oceanfront", "Ocean view", "Non beachfront"];
  const Bedrooms = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const Listing = [
    // "Apartment",
    "Any",
    // "House",
    // "Condo",
    // "Townhome",
    // "Multi-family",
    // "Mobile",
    // "Farm",
    "Land",
    "Residential",
    "Commercial",
    "Condominium",
    
  ];

  const [listingType, setListingType] = useState("");
  const [bedrooms, setBedrooms] = useState("");
  const [view, setView] = useState("");

  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const property = useSelector((item) => item.property?.popularProperties);
  const [checkOutMinDate, setCheckOutMinDate] = useState("");

  const [isReadMore, setIsReadMore] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleReadmore = () => {
    setIsReadMore(!isReadMore);
  };

  const handleSearch = () => {
    // You can form your search data here
    const searchData = {
      listingType: listingType === "All" ? "" : listingType,
      bedrooms: bedrooms === "All" ? "" : bedrooms,
      view: view === "All" ? "" : view,
    };

    // Navigate to the search page with search data
    navigate("/SearchResult", { state: { searchData } });
  };

  useEffect(() => {
    dispatch(fetchPopularPropperties());
  }, []);

  const handleKeyDown = (event) => {
    // Allow only alphabetic characters
    if (
      !(
        (
          (event.keyCode >= 65 && event.keyCode <= 90) || // A-Z
          (event.keyCode >= 97 && event.keyCode <= 122) || // a-z
          event.keyCode === 8 || // Backspace
          event.keyCode === 9 || // Tab
          event.keyCode === 32 || // Space
          event.keyCode === 37 || // Left arrow
          event.keyCode === 39
        ) // Right arrow
      )
    ) {
      event.preventDefault();
    }
  };

  const allFieldsChosen = listingType !== "" && bedrooms !== "" && view !== "";

  const handleProperty = (details) => {
    dispatch(setPropertyDetails(details));
    window.open(`/PropertyDetail/${property[0]?.title}?address=${property[0]?.address}`, '_blank');
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setError,
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = async (data) => {
    console.log("Form Errors:", errors);
    try {
      setLoading(true);

      const payload = { ...data, subject: "Propety Quick Inquiry" };
      const response = await propertyService?.contacUs(payload);
      if (response.statusCode === 200) {
        toast.success("Inquiry Submitted ");
        reset();
      } else {
        toast.error(response?.message || "Error While Inquiry Submit");
      }
      setLoading(false);
    } catch (error) {
      setLoading(false);
      toast.error(error?.response?.data?.error || "Internal Server Error");
    }
  };


   // State variable to control modal visibility
  //  const [showModal, setShowModal] = useState(false);

     // Functions to handle modal open and close
  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  return (
    <div>
      <section className="container-fluid p-0 home_page_slider_sl position-relative">
        <div
          id="carouselExampleSlidesOnly"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src="/assests/Img/Homepage1.png"
                               className="d-block w-100 img-h-600"
              />
              <div className="carousel_itme_img_bg"></div>
            </div>
            <div className="carousel-item">
              <img
                src="/assests/Img/HomepageIMG.png"
                               className="d-block w-100 img-h-600"
              />
              <div className="carousel_itme_img_bg"></div>
            </div>
            <div className="carousel-item">
              <img
                src="/assests/Img/Homepage 4.png"
                               className="d-block w-100 img-h-600"
              />
              <div className="carousel_itme_img_bg"></div>
            </div>
            <div className="carousel-item">
              <img
                src="/assests/Img/Homepage 3.png"
                               className="d-block w-100 img-h-600"
              />
              <div className="carousel_itme_img_bg"></div>
            </div>
          </div>
        </div>
        <div className="carousel-caption_from">
          <div className="container" data-aos="zoom-in">
            <h1>Find Your Dream Home</h1>
            <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
              {/* <li className="nav-item" role="presentation">
                <button className="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true"> For  Rent </button>
              </li> */}
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link active"
                  id="pills-profile-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-profile"
                  type="button"
                  role="tab"
                  aria-controls="pills-profile"
                  aria-selected="false"
                >
                  For Sale
                </button>
              </li>
            </ul>
            <div className="tab-content" id="pills-tabContent">
              {/* <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab" tabIndex={0} >
                <div className='for_rent_form_sl Find_your_Top'>
                  <div className='item_list'>
                    <select className="form-select" aria-label="Default select example">
                      <option selected>Property Types</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </select> 
                  </div>
                  <div className='item_list'>
                    <select className="form-select" aria-label="Default select example">
                      <option selected>Aruba</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </select>
                  </div>
                  <div className='item_list'>
                    <select className="form-select" aria-label="Default select example">
                      <option selected>Bedrooms</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </select>
                  </div>
                  <div className='text-center item_list_MV'>
                    <button typeof='button' className="btn btn_00529B w-auto  mb-2">Search</button>
                  </div>


                </div>
              </div> */}

              <div
                className="tab-pane fade show active"
                id="pills-profile"
                role="tabpanel"
                aria-labelledby="pills-profile-tab"
                tabIndex={0}
              >
                <div className="for_rent_form_sl Find_your_Top">
                  <div className="item_list">
                    <select
                      className="form-select"
                      aria-label="Default select example"
                      value={listingType}
                      onChange={(e) => setListingType(e.target.value)}
                    >
                      <option selected>Property Types</option>
                      <option>All</option>
                      {Listing.map((item, index) => (
                        <option key={index} value={item}>
                          {item}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="item_list">
                    <select
                      className="form-select"
                      aria-label="Default select example"
                      value={bedrooms}
                      onChange={(e) => setBedrooms(e.target.value)}
                    >
                      <option selected>Number Of Bedrooms</option>
                      <option >All</option>
                      {Bedrooms?.map((item, index) => (
                        <option key={index} value={item}>
                          {item}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="item_list">
                    <select
                      className="form-select"
                      aria-label="Default select example"
                      value={view}
                      onChange={(e) => setView(e?.target?.value)}
                    >
                      <option selected>Select View</option>
                      <option>All</option>

                      {View?.map((item, index) => (
                        <option key={index} value={item}>
                          {item}
                        </option>
                      ))}
                    </select>
                  </div>
                  {/* <div className='item_list'>
                    <input type="text" placeholder='Listing Name/id Or Keyword' className='form-control' value={keyword} onChange={(e) => setKeyword(e.target.value)} />
                  </div> */}
                  <div className="text-center item_list_MV">
                    {/* <button typeof='button' className={`btn btn_00529B w-auto  mb-2 ${allFieldsChosen ? '' : 'disabled'}`} onClick={handleSearch} disabled={!allFieldsChosen}>Search</button> */}
                    <button
                      typeof="button"
                      className={`btn btn_00529B w-auto  mb-2`}
                      onClick={handleSearch}
                    >
                      Search
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {loading ? (
        <Loader />
      ) : (
        <section className="container-fluid p-0 featured_properties_sl my-5">
          <div className="container">
            <div className="row align-items-center" data-aos="zoom-in">
              <div className="col-xl-10 col-lg-9 col-md-8 text-start featured_properties_heading">
                {/* <h2> How it works - follow these 3 steps to book your place" this is not a RENTAL page, but REAL ESTATE, people BUY property on this site.  */}
{/* </h2> */}
                {/* <p>Follow These 3 Steps to Own Your Dream Property</p> */}
              </div>
              <div className="col-xl-2 col-lg-3 col-md-4 text-end ">
                <button
                  onClick={() => navigate("/SearchResult")}
                  className="btn btn_00529B w-auto  mb-2"
                >
                  Explore All{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1.5em"
                    height="1.5em"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="m5.99 16.596l8.192-8.192H7.818v-2h9.778v9.778h-2V9.818L7.403 18.01z"
                    />
                  </svg>
                </button>
              </div>
            </div>
            <div className="featured_properties_content">
              <div className="row">
                <div className="col-xl-7  col-lg-12 " data-aos="zoom-in">
                  <div id="carouselExampleCaptions" className="carousel slide">
                    <div className="carousel-indicators">
                      <button
                        type="button"
                        data-bs-target="#carouselExampleCaptions"
                        data-bs-slide-to="0"
                        className="active"
                        aria-current="true"
                        aria-label="Slide 1"
                      ></button>
                      <button
                        type="button"
                        data-bs-target="#carouselExampleCaptions"
                        data-bs-slide-to="1"
                        aria-label="Slide 2"
                      ></button>
                      <button
                        type="button"
                        data-bs-target="#carouselExampleCaptions"
                        data-bs-slide-to="2"
                        aria-label="Slide 3"
                      ></button>
                    </div>
                    <div className="carousel-inner"   onClick={() =>
                                        handleProperty(property[0])
                                      } style={{cursor:"pointer"}}>
                      <div className="carousel-item active">
                        {property[0]?.property_images[0]?.imageUrlToserver ? (
                          <img
                            src={
                              property[0]?.property_images[0]?.imageUrlToserver
                            }
                            height={470}
                            className="w-100"
                          />
                        ) : (
                          <img
                            src="/assests/Img/No-Image.svg"
                            height={470}
                            className="w-100"
                          />
                        )}
                      </div>
                      <div className="carousel-item">
                        {property[0]?.property_images[1]?.imageUrlToserver ? (
                          <img
                            src={
                              property[0]?.property_images[1]?.imageUrlToserver
                            }
                            height={470}
                            className="w-100"
                          />
                        ) : (
                          <img
                            src="/assests/Img/No-Image.svg"
                            height={470}
                            className="w-100"
                          />
                        )}
                      </div>
                      <div className="carousel-item">
                        {property[0]?.property_images[2]?.imageUrlToserver ? (
                          <img
                            src={
                              property[0]?.property_images[2]?.imageUrlToserver
                            }
                            height={470}
                            className="w-100"
                          />
                        ) : (
                          <img
                            src="/assests/Img/No-Image.svg"
                            height={470}
                            className="w-100"
                          />
                        )}
                      </div>
                    </div>

                    {/* <div className="carousel-inner">
                      {property?.[0]?.property_images.map((image, index) => (
                        <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
                          {image.imageUrlToserver ? (
                            <img src={image.imageUrlToserver} height={470} className='w-100' alt="" />
                          ) : (
                            <img src="/assests/Img/No-Imager.svg" height={470} className='w-100' />
                          )}
                        </div>
                      ))}
                    </div> */}

                    <div className="carousel-caption_tag">
                      {/* <button typeof='button' className="btn">Sale</button> */}
                    </div>
                    <div className="carousel-caption_about">
                      <div className="container">
                        <div className="row ">
                          <div className="col-lg-6 col-md-6 col-xs-6 carousel-caption_about_left ">
                            <h3>
                              {property[0]?.title} {property[0]?.bedroom}
                              -Bedroom {property[0]?.type_of_property}{" "}
                              {property[0]?.type_of_view}
                            </h3>
                            <p>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="1em"
                                height="1em"
                                viewBox="0 0 24 24"
                              >
                                <g fill="none" fill-rule="evenodd">
                                  <path d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z" />
                                  <path
                                    fill="currentColor"
                                    fill-rule="nonzero"
                                    d="M6.72 16.64a1 1 0 0 1 .56 1.92c-.5.146-.86.3-1.091.44c.238.143.614.303 1.136.452C8.48 19.782 10.133 20 12 20s3.52-.218 4.675-.548c.523-.149.898-.309 1.136-.452c-.23-.14-.59-.294-1.09-.44a1 1 0 0 1 .559-1.92c.668.195 1.28.445 1.75.766c.435.299.97.82.97 1.594c0 .783-.548 1.308-.99 1.607c-.478.322-1.103.573-1.786.768C15.846 21.77 14 22 12 22s-3.846-.23-5.224-.625c-.683-.195-1.308-.446-1.786-.768c-.442-.3-.99-.824-.99-1.607c0-.774.535-1.295.97-1.594c.47-.321 1.082-.571 1.75-.766M12 2a7.5 7.5 0 0 1 7.5 7.5c0 2.568-1.4 4.656-2.85 6.14a16.402 16.402 0 0 1-1.853 1.615c-.594.446-1.952 1.282-1.952 1.282a1.71 1.71 0 0 1-1.69 0a20.736 20.736 0 0 1-1.952-1.282A16.29 16.29 0 0 1 7.35 15.64C5.9 14.156 4.5 12.068 4.5 9.5A7.5 7.5 0 0 1 12 2m0 2a5.5 5.5 0 0 0-5.5 5.5c0 1.816.996 3.428 2.28 4.74c.966.988 2.03 1.74 2.767 2.202l.453.274l.453-.274c.736-.462 1.801-1.214 2.767-2.201c1.284-1.313 2.28-2.924 2.28-4.741A5.5 5.5 0 0 0 12 4m0 2.5a3 3 0 1 1 0 6a3 3 0 0 1 0-6m0 2a1 1 0 1 0 0 2a1 1 0 0 0 0-2"
                                  />
                                </g>
                              </svg>
                              {property[0]?.address}
                            </p>
                          </div>
                          <div className="col-md-6 ">
                            <div className="crousel-caption_about_right">
                              <div className="col-12">
                                <div className="crousel-caption_about_right_top">
                                  <div className="detail">
                                    <h6>{property[0]?.sqft_area_count}</h6>
                                    <p>Sqft:</p>
                                  </div>
                                  <div className="detail">
                                    <h6>{property[0]?.bedroom}</h6>
                                    <p>Beds</p>
                                  </div>
                                  {/* <div className="detail">
                                    <h6>{property[0]?.kitchen_count}</h6>
                                    <p>Kitchen</p>
                                  </div> */}
                                  <div className="detail">
                                    <h6>{property[0]?.bathroom}</h6>
                                    <p>Bath</p>
                                  </div>
                                </div>
                              </div>
                              <div className="col-12">
                                <div className="crousel-caption_about_right_bottom">
                                  <div className="detail">
                                    <h6>$ {property[0]?.property_price}</h6>
                                  </div>
                                  <div className="detail">
                                    <button
                                      onClick={() =>
                                        handleProperty(property[0])
                                      }
                                      className="btn"
                                    >
                                      View Details
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="1.5em"
                                        height="1.5em"
                                        viewBox="0 0 24 24"
                                      >
                                        <path
                                          fill="currentColor"
                                          d="m5.99 16.596l8.192-8.192H7.818v-2h9.778v9.778h-2V9.818L7.403 18.01z"
                                        />
                                      </svg>
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="col-xl-5 col-lg-12 col-sm-12 "
                  data-aos="zoom-in"
                >
                  <div className="row">
                    {/* {property.map((item, index) => (

                      index !== 0 ? (
                        <div key={index} className="col-xl-12 col-lg-6 col-xs-12 mb-2  ">
                          <div className='featured_properties_content_right-top'>
                            {/* <img src={item?.property_images[0]?.imageUrlToserver} height={230} className='d-block w-100' /> */}
                    {/* 
                            {item?.property_images[0]?.imageUrlToserver ? (
                              <img src={item.property_images[0].imageUrlToserver} height={230} className='d-block w-100' />
                            ) : (
                              <img src="/assests/Img/No-Image.svg" height={230} className='d-block w-100' />)}
                            <div className='overlay'></div>
                            <div className='featured_properties_content_right-top_content'>
                              <div className='carousel-caption_tag'>
                                {/* <button typeof='button' className="btn">Sale</button> */}
                    {/* </div>
                              <div className='properties-left-caption_about'>
                                <div className='container'>
                                  <div className='row '>
                                    <div className='col-md-10 '>
                                      <div className=' carousel-caption_about_left'>
                                        {/* <h3>Azure Beach Residences PH2-2</h3> */}
                    {/* <h3> {item?.title}</h3>

                                        <p><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><g fill="none" fill-rule="evenodd"><path d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z" /><path fill="currentColor" fill-rule="nonzero" d="M6.72 16.64a1 1 0 0 1 .56 1.92c-.5.146-.86.3-1.091.44c.238.143.614.303 1.136.452C8.48 19.782 10.133 20 12 20s3.52-.218 4.675-.548c.523-.149.898-.309 1.136-.452c-.23-.14-.59-.294-1.09-.44a1 1 0 0 1 .559-1.92c.668.195 1.28.445 1.75.766c.435.299.97.82.97 1.594c0 .783-.548 1.308-.99 1.607c-.478.322-1.103.573-1.786.768C15.846 21.77 14 22 12 22s-3.846-.23-5.224-.625c-.683-.195-1.308-.446-1.786-.768c-.442-.3-.99-.824-.99-1.607c0-.774.535-1.295.97-1.594c.47-.321 1.082-.571 1.75-.766M12 2a7.5 7.5 0 0 1 7.5 7.5c0 2.568-1.4 4.656-2.85 6.14a16.402 16.402 0 0 1-1.853 1.615c-.594.446-1.952 1.282-1.952 1.282a1.71 1.71 0 0 1-1.69 0a20.736 20.736 0 0 1-1.952-1.282A16.29 16.29 0 0 1 7.35 15.64C5.9 14.156 4.5 12.068 4.5 9.5A7.5 7.5 0 0 1 12 2m0 2a5.5 5.5 0 0 0-5.5 5.5c0 1.816.996 3.428 2.28 4.74c.966.988 2.03 1.74 2.767 2.202l.453.274l.453-.274c.736-.462 1.801-1.214 2.767-2.201c1.284-1.313 2.28-2.924 2.28-4.741A5.5 5.5 0 0 0 12 4m0 2.5a3 3 0 1 1 0 6a3 3 0 0 1 0-6m0 2a1 1 0 1 0 0 2a1 1 0 0 0 0-2" /></g></svg>
                                          {item?.address}</p>
                                      </div>
                                    </div>
                                    <div className='col-md-2'>
                                      <div className='carousel-caption_about_right'>
                                        <button onClick={() => handleProperty(item)} className="btn"><svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24"><path fill="currentColor" d="m5.99 16.596l8.192-8.192H7.818v-2h9.778v9.778h-2V9.818L7.403 18.01z" /></svg></button>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div> */}
                    {/* </div>
                          </div> 
                        </div>) : null
                    ))}  */}
                    {property?.slice(1, 3)?.map((item, index) => (
                      <div
                        key={index}
                        className="col-xl-12 col-lg-6 col-xs-12 mb-2"
                      >
                        <div className="featured_properties_content_right-top" onClick={() => handleProperty(item)} style={{cursor:"pointer"}}>
                          {item?.property_images[0]?.imageUrlToserver ? (
                            <img
                              src={item?.property_images[0]?.imageUrlToserver}
                              height={230}
                              className="d-block w-100"
                            />
                          ) : (
                            <img
                              src="/assests/Img/No-Image.svg"
                              height={230}
                              className="d-block w-100"
                            />
                          )}
                          <div className="overlay"></div>
                          <div className="featured_properties_content_right-top_content">
                            <div className="carousel-caption_tag"></div>
                            <div className="properties-left-caption_about">
                              <div className="container">
                                <div className="row">
                                  <div className="col-md-10">
                                    <div className="carousel-caption_about_left">
                                      <h3>{item?.title}</h3>
                                      <p>
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          width="1em"
                                          height="1em"
                                          viewBox="0 0 24 24"
                                        >
                                          <g fill="none" fillRule="evenodd">
                                            <path
                                              fill="currentColor"
                                              fillRule="nonzero"
                                              d="M12 2a7.5 7.5 0 0 1 7.5 7.5c0 2.568-1.4 4.656-2.85 6.14a16.402 16.402 0 0 1-1.853 1.615c-.594.446-1.952 1.282-1.952 1.282a1.71 1.71 0 0 1-1.69 0a20.736 20.736 0 0 1-1.952-1.282A16.29 16.29 0 0 1 7.35 15.64C5.9 14.156 4.5 12.068 4.5 9.5A7.5 7.5 0 0 1 12 2m0 2a5.5 5.5 0 0 0-5.5 5.5c0 1.816.996 3.428 2.28 4.74c.966.988 2.03 1.74 2.767 2.202l.453.274l.453-.274c.736-.462 1.801-1.214 2.767-2.201c1.284-1.313 2.28-2.924 2.28-4.741A5.5 5.5 0 0 0 12 4m0 2.5a3 3 0 1 1 0 6a3 3 0 0 1 0-6m0 2a1 1 0 1 0 0 2a1 1 0 0 0 0-2"
                                            />
                                          </g>
                                        </svg>
                                        {item?.address}
                                      </p>
                                    </div>
                                  </div>
                                  <div className="col-md-2">
                                    <div className="carousel-caption_about_right">
                                      <button
                                        onClick={() => handleProperty(item)}
                                        className="btn"
                                      >
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          width="1.5em"
                                          height="1.5em"
                                          viewBox="0 0 24 24"
                                        >
                                          <path
                                            fill="currentColor"
                                            d="m5.99 16.596l8.192-8.192H7.818v-2h9.778v9.778h-2V9.818L7.403 18.01z"
                                          />
                                        </svg>
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      <section className="container-fluid Services_section_hp service_section_bg_sl py-4">
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
                    <a className="cp" onClick={() => navigate("/SearchResult")}>
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

      <section className="container-fluid video_section_sl ">
  {/* <div className="container">
    <div className="row" data-aos="zoom-in">
      <div className="col-xl-5 col-lg-6 col-md-6">
        <div className="video_section_content_sl">
          <a href="https://www.youtube.com/watch?v=Ot4-nCyL3PA" target="_blank" rel="noopener noreferrer">
            <img src="/assests/Img/video.svg" alt="Video Thumbnail" />
          </a>
          <p>
            Let Prestige help you discover the perfect beachfront or
            close-to-the-beach condo or villa for sale in Aruba!
          </p>
        </div>
      </div>
    </div>
  </div> */}


<div className="container">
      <div className="row" data-aos="zoom-in">
        <div className="col-xl-5 col-lg-6 col-md-6">
          <div className="video_section_content_sl">
            {/* Changed <a> to <div> with onClick handler */}
            <div onClick={handleShow} style={{ cursor: 'pointer' }}>
              <img src="/assests/Img/video.svg" alt="Video Thumbnail" />
            </div>
            <p>
              Let Prestige help you discover the perfect beachfront or
              close-to-the-beach condo or villa for sale in Aruba!
            </p>
          </div>
        </div>
      </div>

      {/* Bootstrap Modal */}

{/* 
      <Modal
  show={showModal}
  onHide={handleClose}
  size="lg"
  centered
  contentClassName="bg-transparent border-0"
>
  <Modal.Header closeButton className="border-0 bg-transparent"></Modal.Header>
  <Modal.Body className="bg-transparent">
    <div className="ratio ratio-16x9">
      <iframe
        src="https://www.youtube.com/embed/Ot4-nCyL3PA?autoplay=1"
        title="YouTube video"
        allowFullScreen
      ></iframe>
    </div>
  </Modal.Body>
</Modal> */}


 <Modal
  show={showModal}
  onHide={handleClose}
  size="xl" // Increase size to extra-large
  centered
  contentClassName="bg-transparent border-0"
  className="modal-fullscreen" // Make modal fullscreen
>
  <Modal.Header closeButton className="border-0 bg-transparent"></Modal.Header>
  <Modal.Body className="bg-transparent">
    <div className="ratio ratio-16x9">
      <iframe
        src="https://www.youtube.com/embed/Ot4-nCyL3PA?autoplay=1"
        title="YouTube video"
        allowFullScreen
      ></iframe>
    </div>
  </Modal.Body>
</Modal> 



    </div>
</section>


      <section className="container-fluid about_us_sl py-5">
        <div className="container">
          <div className="row">
            <div
              className="col-xl-7 col-lg-7 col-md-12" 
              data-aos="zoom-in-right"
            >
              <div className="about_us_content_sl">
                <h6>About Us</h6>
                <h1>Prestige Realty N.V. (Inc.)</h1>
                <p>
                  Prestige Realty N.V. (Inc.) is a dynamic and innovative real
                  estate firm proudly based in Aruba, with our headquarters now
                  located at J.E. Irausquin Boulevard 12 in Oranjestad. Since
                  our inception, we have been at the forefront of the island's
                  real estate scene, specializing in vacation rentals, property
                  design and development, construction, brokerage, and property
                  management. With a fresh and forward-thinking approach, we are
                  committed to delivering exceptional service and expertise to
                  both buyers and sellers, ensuring your real estate experience
                  in Aruba is nothing short of extraordinary.
                  {isReadMore && (
                    <>
                      {" "}
                      Find Your Perfect Island Escape for a Lifetime Our
                      exclusive properties are renowned for their prime
                      beachfront or close-to-the-beach locations, offering an
                      unparalleled blend of luxury and comfort. With
                      resort-style amenities and personalized services, each
                      home is designed to provide a serene and sophisticated
                      lifestyle. From beautifully crafted interiors to peaceful
                      outdoor spaces, our homes offer a tranquil retreat that
                      instantly feels like your own. Whether you're looking for
                      a permanent residence or a seasonal getaway, we’re here to
                      help you find your perfect slice of paradise on Aruba.
                    </>
                  )}
                </p>

                <button
                  typeof="button"
                  onClick={handleReadmore}
                  className="btn btn_00529B w-auto  mb-2"
                >
                  {" "}
                  {isReadMore ? "Read Less" : "Read More"}
                </button>
              </div>
            </div>
            <div
              className="col-xl-5 col-lg-5 col-md-12"
              data-aos="zoom-in-left"
            >
              <div className="about_us_image_sl">
                <img src="/assests/Img/About Us On Homepage.jpg" />
                <div className="image_circle_content">
                  <img src="/assests/Img/content_about_us.png" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container-fluid Ask_Inquiries_sl ">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-lg-6  col-xl-6 col-xxl-6" data-aos="fade-up">
              <div className="Ask_Inquiries_sl_content_sl">
                <h1>Stay in style for days, weeks, or months</h1>
                <p>
                  Our vacation rental accommodations are unique because of the
                  beachfront or close to the beach locations with resort
                  facilities and our excellent personalized Concierge Services.
                  The indoor/outdoor features and peaceful feeling help everyone
                  feel relaxed and instantly at home.
                </p>
              </div>
            </div>
            <div className="col-lg-6 col-xl-5 col-xxl-5" data-aos="fade-up">
              {loading ? (
                <LoaderA />
              ) : (
                <div className="Ask_Inquiries_sl_form_sl">
                  <p>ASK NOW</p>
                  <h5>Quick Inquiries?</h5>
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="row">
                      <div className="col-12 mb-2">
                        <textarea
                          className="form-control"
                          rows={3}
                          placeholder="Comment or Inquiry"
                          id="floatingTextarea"
                          {...register("message")}
                        ></textarea>
                        {errors?.message && (
                          <p className="text-danger">
                            {errors?.message?.message}
                          </p>
                        )}
                      </div>
                      <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 mb-2">
                        <input
                          className="form-control"
                          type="text"
                          placeholder="First Name"
                          aria-label="default input example"
                          {...register("firstName")}
                          onKeyDown={handleKeyDown}
                          onCut={(e) => e.preventDefault()}
                          onCopy={(e) => e.preventDefault()}
                          onPaste={(e) => e.preventDefault()}
                        />
                        {errors.firstName && (
                          <p className="text-danger">
                            {errors?.firstName?.message}
                          </p>
                        )}
                      </div>
                      <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 mb-2">
                        <input
                          className="form-control"
                          type="text"
                          placeholder="Last Name"
                          aria-label="default input example"
                          {...register("lastName")}
                          onKeyDown={handleKeyDown}
                          onCut={(e) => e?.preventDefault()}
                          onCopy={(e) => e?.preventDefault()}
                          onPaste={(e) => e?.preventDefault()}
                        />
                        {errors.lastName && (
                          <p className="text-danger">
                            {errors?.lastName?.message}
                          </p>
                        )}
                      </div>
                      <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 mb-2">
                        <input
                          className="form-control"
                          type="text"
                          placeholder="Email"
                          aria-label="default input example"
                          {...register("email")}
                          maxLength={30}
                        />
                        {errors.email && (
                          <p className="text-danger">
                            {errors?.email?.message}
                          </p>
                        )}
                      </div>
                      <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 mb-2">
                        <input
                          className="form-control"
                          type="text"
                          placeholder="Your Phone Number"
                          aria-label="default input example"
                          {...register("mobileNo")}
                          onKeyDown={(e) => {
                            // Allow only numeric characters and backspace/delete
                            if (
                              !/^\d$/.test(e.key) &&
                              e.key !== "Backspace" &&
                              e.key !== "Delete"
                            ) {
                              e.preventDefault();
                            }
                            // Limit the length to 10 characters
                            if (
                              e?.target?.value?.length >= 10 &&
                              e.key !== "Backspace" &&
                              e.key !== "Delete"
                            ) {
                              e.preventDefault();
                            }
                          }}
                        />
                        {errors.mobileNo && (
                          <p className="text-danger">
                            {errors?.mobileNo?.message}
                          </p>
                        )}
                      </div>
                      <button
                        type="submit"
                        className="btn_00529B btn text-center mx-auto mt-2"
                      >
                        Submit
                      </button>
                    </div>
                  </form>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;