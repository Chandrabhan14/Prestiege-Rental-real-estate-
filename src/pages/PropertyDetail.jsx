// import React, { useEffect, useState } from 'react'
// import { useDispatch, useSelector } from 'react-redux'
// import { selectedProp, setPropertyDetails } from '../features/propertySlice';
// import api from '../utils/ApiConfig';
// import { yupResolver } from '@hookform/resolvers/yup';
// import { useForm } from 'react-hook-form';
// import * as yup from "yup";
// import { toast } from 'react-toastify';
// import propertyService from '../utils/propertyService';
// import 'react-awesome-slider/dist/styles.css';


// // Import Google Maps components
// import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

// const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

// const schema = yup.object().shape({
//     name: yup.string().trim().required('Full name is required').min(3, 'Full name must be a minimum of 3 characters').max(20, 'Full name must be a maximum of 20 characters').matches(/^[A-Za-z\s]+$/, 'Full name must only contain alphabetic characters'),
//     email: yup.string().required('Email is required').matches(emailRegex, 'Invalid email format'),
//     message: yup.string().trim().required('Comment is required').max(addrews5, 'Comment  must be a maximum of 255 characters'),
//     phoneno: yup.string()
//         .required('Mobile number is required')
//         .matches(/^\d{10,15}$/, 'Mobile number must be between 10 to 15 digits'),
// });

// function PropertyDetail() {
//     const properytData = useSelector(selectedProp);
//     console.log(properytData, "properytData")

//     const [nearList, setNearList] = useState([]);
//     const [page, setPage] = useState(0);
//     // const [locationState, setLocationState] = useState({ lat: 0, lng: 0 });

    
//     // const [mapCoordinates, setMapCoordinates] = useState({
//     //     lat: parseFloat(properytData?.latitude) || 0,
//     //     lng: parseFloat(properytData?.longitude) || 0
//     // });

  
   

//     const formData = {
//         address: properytData?.address
//     }

//     const dispatch = useDispatch();

//     const SelectedData = (details) => {
//         dispatch(setPropertyDetails(details))
//     }


// // const [showFullDescription, setShowFullDescription] = useState(false);
// // const isMobile = window.innerWidth <= 768;
//   // State for map coordinates

// const [locationState, setLocationState] = useState({ lat: 0, lng: 0 });
// console.log(locationState,"YYYY")


// useEffect(() => {
//     if (properytData?.location) {
//         try {
//             const parsedLocation = JSON.parse(properytData.location); // Parse the location JSON string
//             setLocationState({
//                 lat: parseFloat(parsedLocation.latitude) || 0,
//                 lng: parseFloat(parsedLocation.longitude) || 0,
//             });
//         } catch (error) {
//             console.error("Failed to parse location data:", error);
//         }
//     }
// }, [properytData]);
//       console.log(locationState,"!!!!!")
//     const fetchNearList = async () => {
//         try {
//             const response = await api.post(
//                 `/property/getSimilarProperties`,
//                 {
//                     ...formData,
//                     curPage: page + 1,
//                     perPage: 10,
//                     sortBy: 'created_on',
//                     direction: 'desc',
//                     whereClause: [
//                         {
//                             key: ' ',
//                             value: ' ',
//                             operator: ' ',
//                         },
//                     ],
//                 },
//             );

//             if (response?.data?.statusCode === 200) {
//                 setNearList(response?.data?.data);
//                 console.log(response, "response")
//             }
//         } catch (error) {
//             console.log(error)
//         }
//     };

//     // Function to geocode address and get coordinates
//     const geocodeAddress = async () => {
//         const address = properytData?.address;
//         const apiKey = "AIzaSyC2ytuWrqWdEuW7DKwqiJ9LeeJZDpVwlfo";
//         const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(address)}&key=${apiKey}`;

//         try {
//             const response = await fetch(url);
//             const data = await response.json();
//             if (data.status === 'OK') {
//                 console.log(data,"9999",)
//                 const location = data?.results[0]?.geometry?.location;
//                 // setLocationState(location);
//             } else {
//                 console.error('Geocode was not successful for the following reason: ' + data?.status);
//             }
//         } catch (error) {
//             console.error('Error geocoding address:', error);
//         }
//     };

//     useEffect(() => {
//         fetchNearList();
//         geocodeAddress(); // Fetch coordinates when component mounts or properytData changes
//     }, [properytData]);

//     const handleKeyDown = (event) => {
//         // Allow only alphabetic characters
//         if (
//             !(
//                 (event.keyCode >= 65 && event.keyCode <= 90) || // A-Z
//                 (event.keyCode >= 97 && event.keyCode <= 122) || // a-z
//                 event.keyCode === 8 || // Backspace
//                 event.keyCode === 9 || // Tab
//                 event.keyCode === 32 || // Space
//                 event.keyCode === 37 || // Left arrow
//                 event.keyCode === 39 // Right arrow
//             )
//         ) {
//             event.preventDefault();
//         }
//     };
//     // useEffect(() => {
//     //     fetchNearList();
//     //     setMapCoordinates({
//     //         lat: parseFloat(properytData?.latitude) || 0,
//     //         lng: parseFloat(properytData?.longitude) || 0
//     //     });
//     // }, [properytData]);

//     const { register, handleSubmit, formState: { errors }, reset, setError } = useForm({
//         resolver: yupResolver(schema),
//     });

//     const onSubmit = async (data) => {
//         console.log(data);

//         try {
//             const payload = {
//                 ...data,
//                 property_id: properytData?.id,
//                 property_name: properytData?.title,
//                 agent_email: properytData?.agent_email,
//             }
//             const response = await propertyService.propertyInquire(payload);
//             if (response.statusCode === 201) {
//                 toast.success("Email Submitted ")
//                 reset();
//             } else {
//                 toast.error(response?.message || "Error While Email Submit")
//             }
//         } catch (error) {
//             toast.error(error?.response?.data?.error || "Internal Server Error")
//         }
//     };

//     const filteredData = nearList?.filter((item) => item.id !== properytData?.id);

//     console.log(locationState,"000000")

//     // Utility function to format values
// function formatValue(value) {
//     // Parse the value to a float
//     const parsedValue = parseFloat(value);
    
//     // Check if the parsed value is an integer, return without decimal places
//     if (Number.isInteger(parsedValue)) return parsedValue;
  
//     // Format to one or two decimal places if needed and remove trailing zero if it's like 5.50
//     return parsedValue.toFixed(2).replace(/\.?0+$/, '');
//   }
//   const [isMobile, setIsMobile] = useState(false);
//   const [expanded, setExpanded] = useState(false);
//   const description = properytData?.description || '';
//   const truncationLength = 100; // Adjust the number of characters to show before truncation
//   const shouldTruncate = description.length > truncationLength;
//   const truncatedDescription = shouldTruncate ? description.slice(0, truncationLength) + '...' : description;

//   useEffect(() => {
//     const handleResize = () => {
//       setIsMobile(window.innerWidth < 768); // mobile breakpoint
//     };
//     handleResize();
//     window.addEventListener('resize', handleResize);
//     return () => window.removeEventListener('resize', handleResize);
//   }, []);

//     return (
//         <section className='container-fluid Property_Detail_Section'>
//             <div className='container'>
//                 <div className='row'>
//                     <div className='col-xl-8 col-lg-7 col-md-12'>
//                         <div className='Container_white_bg_hp my-4'>

//                             <div className='property_detail_img_area_hp mb-4'>
//                                 {properytData?.property_images?.length > 0 && (
//                                     <div id="propertyImageCarousel" className="carousel slide" data-bs-ride="carousel">
//                                         <div className="carousel-inner">
//                                             {properytData?.property_images?.map((image, index) => (
//                                                 <div className={`carousel-item ${index === 0 ? 'active' : ''}`} key={index}>
//                                                     <img src={image.imageUrlToserver} className="d-block w-100" alt={`Property image ${index + 1}`} />
//                                                 </div>
//                                             ))}
//                                         </div>
//                                         <a className="carousel-control-prev" href="#propertyImageCarousel" role="button" data-bs-slide="prev">
//                                             <span className="carousel-control-prev-icon" aria-hidden="true"></span>
//                                             <span className="sr-only">Previous</span>
//                                         </a>
//                                         <a className="carousel-control-next" href="#propertyImageCarousel" role="button" data-bs-slide="next">
//                                             <span className="carousel-control-next-icon" aria-hidden="true"></span>
//                                             <span className="sr-only">Next</span>
//                                         </a>
//                                     </div>
//                                 )}
//                             </div>

//                             <div className='Property_Detail_content_area_hp'>
//                                 <div className='Property_Detail_heading_content_area_hp'>
//                                     <div className='me-3 mb-4' >
//                                         <h2>{properytData?.title} - {properytData?.bedroom}-Bedroom {properytData?.type_of_property} - {properytData?.type_of_view}</h2>
//                                         <p>{properytData?.address}</p>
//                                     </div>
//                                     <div className='text-end mb-4'>
//                                         <h2 className='text-nowrap'>$ {properytData?.property_price}</h2>
//                                     </div>
//                                 </div>

//                                 {/* <p style={{ whiteSpace: 'pre-wrap' }} >{properytData?.description} </p> */}
//                                 <p style={{ whiteSpace: 'pre-wrap' }}>
//         {!isMobile ? (
//           // On desktop, show full description
//           description
//         ) : (
//           // On mobile, show truncated description unless expanded
//           expanded ? description : truncatedDescription
//         )}
//         {isMobile && shouldTruncate && (
//           <span
//             onClick={() => setExpanded(!expanded)}
//             style={{ color: 'blue', cursor: 'pointer', marginLeft: '5px' }}
//           >
//             {expanded ? 'Read Less' : 'Read More'}
//           </span>
//         )}
//       </p>

//                                 <div className="Property_Detail_features_area_hp">
//                                     <ul className="nav nav-pills mb-3 justify-content-between" id="pills-tab" role="tablist">
//                                         <li className="nav-item" role="presentation">
//                                             <button className="nav-link active" id="pills-Overview-tab" data-bs-toggle="pill" data-bs-target="#pills-Overview" type="button" role="tab" aria-controls="pills-Overview" aria-selected="true">Overview</button>
//                                         </li>
//                                         {properytData?.features === "[]" ? "" : (
//                                             <li className="nav-item" role="presentation">
//                                                 <button className="nav-link" id="pills-FeaturesAmenities-tab" data-bs-toggle="pill" data-bs-target="#pills-FeaturesAmenities" type="button" role="tab" aria-controls="pills-FeaturesAmenities" aria-selected="false">Features and Amenities</button>
//                                             </li>
//                                         )}
//                                         <li className="nav-item" role="presentation">
//                                             <button className="nav-link" id="pills-PropertyMap-tab" data-bs-toggle="pill" data-bs-target="#pills-PropertyMap" type="button" role="tab" aria-controls="pills-PropertyMap" aria-selected="false">Property Map</button>
//                                         </li>
//                                     </ul>
//                                     <div className="tab-content" id="pills-tabContent">
//                                         <div className="tab-pane fade show active" id="pills-Overview" role="tabpanel" aria-labelledby="pills-Overview-tab">
//                                             <h4>Overview</h4>
//                                             <div className='row mt-3'>
//                                                 {/* <div className='col-xl-4 col-lg-4 col-md-4 col-12 mb-3'>
//                                                     <div className='Property_Detail_overview_items_hp'>
//                                                         <img src="/assests/Img/PropertyID_icon.png" alt="" width={50} />
//                                                         <div className='ms-2'>
//                                                             <h5>Property ID</h5>
//                                                             <p>{properytData?.id}</p>
//                                                         </div>
//                                                     </div>
//                                                 </div> */}

//                                                 <div className='col-xl-4 col-lg-4 col-md-4 col-12 mb-3'>
//                                                     <div className='Property_Detail_overview_items_hp'>
//                                                         <img src="/assests/Img/Type_icon.png" alt="" width={50} />
//                                                         <div className='ms-2'>
//                                                             <h5>Type</h5>
//                                                             <p>{properytData?.type_of_property}</p>
                                                          
//                                                         </div>
//                                                     </div>
//                                                 </div>

//                                                 <div className='col-xl-4 col-lg-4 col-md-4 col-12 mb-3'>
//                                                     <div className='Property_Detail_overview_items_hp'>
//                                                         <img src="/assests/Img/Bedroom_icon.png" alt="" width={50} />
//                                                         <div className='ms-2'>
//                                                             <h5>Bedrooms</h5>
//                                                             <p>{properytData?.bedroom}</p>
//                                                         </div>
//                                                     </div>
//                                                 </div>

//                                                 <div className='col-xl-4 col-lg-4 col-md-4 col-12 mb-3'>
//                                                     <div className='Property_Detail_overview_items_hp'>
//                                                         <img src="/assests/Img/Bath_icon.png" alt="" width={50} />
//                                                         <div className='ms-2'>
//                                                             <h5>Bath</h5>
//                                                             <p>{formatValue(properytData?.bathroom)}</p>
//                                                         </div>
//                                                     </div>
//                                                 </div>

//                                                 <div className='col-xl-4 col-lg-4 col-md-4 col-12 mb-3'>
//                                                     <div className='Property_Detail_overview_items_hp'>
//                                                         <img src="/assests/Img/Sqft_icon.png" alt="" width={50} />
//                                                         <div className='ms-2'>
//                                                             {/* <h5>Sqft:</h5>
//                                                             <p>{properytData?.sqft_area_count}</p> */}
//                                                             <h5>Sqft:</h5>
// <p>{Math.trunc(properytData?.sqft_area_count)}</p>
//                                                         </div>
//                                                     </div>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                         {properytData?.features?.length > 0 ? (
//                                             <div className="tab-pane fade" id="pills-FeaturesAmenities" role="tabpanel" aria-labelledby="pills-FeaturesAmenities-tab">
//                                                 <h4>Features And Amenities</h4>
//                                                 <div className='Property_Detail_overview_items_hp flex-wrap'>
//                                                     {JSON.parse(properytData?.features).map((feature, index) => (
//                                                         <div className='d-flex align-items-center mx-2 mb-2' key={index}>
//                                                             <i className="fa-solid fa-circle-check text_22B3CB me-2"></i>
//                                                             <p>{feature}</p>
//                                                         </div>
//                                                     ))}
//                                                 </div>
//                                             </div>
//                                         ) : ''}

//                                         <div className="tab-pane fade" id="pills-PropertyMap" role="tabpanel" aria-labelledby="pills-PropertyMap-tab">
//                                             <h4>Property Map</h4>
//                                             {/* {mapCoordinates ? (
//                                                 <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}>
//                                                     <GoogleMap
//                                                         mapContainerStyle={{ height: '400px', width: '100%' }}
//                                                         center={mapCoordinates}
//                                                         zoom={15}
//                                                     >
//                                                         <Marker position={mapCoordinates} />
//                                                     </GoogleMap>
//                                                 </LoadScript>
//                                             ) : (
//                                                 <p>Loading Map...</p>
//                                             )} */}
//                                              {/* {locationState.lat && locationState.lng ? ( */}
//                                              {locationState.lat && locationState.lng ? (
//                                                 <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}>
//                                                     <GoogleMap
//                                                         mapContainerStyle={{ height: '400px', width: '100%' }}
//                                                         center={locationState}
//                                                         zoom={15}
//                                                     >
//                                       {/* <Marker
//                                             position={locationState}
//                                             icon={{
//                                                 url: "http://maps.google.com/mapfiles/ms/icons/red-dot.png",
//                                             }}
//                                         /> */}
//         <Marker
//                                                     position={{ lat: locationState.lat, lng: locationState.lng }}
//                                                     title={properytData.title || "Property Location"}
//                                                     icon={{
//                                                         url: "http://maps.google.com/mapfiles/ms/icons/red-dot.png",
//                                                     }}
//                                                 />
//                                                     </GoogleMap>
//                                                 </LoadScript>
//                                             ) : (
//                                                 <p>Loading Map...</p>
//                                             )}
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>

//                     <div className='col-xl-4 col-lg-5 col-md-12'>
//                         <div className='row my-4 align-items-stretch'>
//                             <div className='col-xl-12 col-lg-12 col-md-6 mb-4' data-aos="fade-up">
//                                 <div className='Property_Detail_contact_form_area'>
//                                     <h4>Inquire For More</h4>

//                                     <div className='Inquire_for_agent_profile_area'>
//                                         <img
//                                             src={
//                                                 typeof properytData?.agentImageUrl === 'string' && properytData.agentImageUrl.includes("null")
//                                                     ? properytData.agentImageUrl.replace("null", "6mt24-default.png")
//                                                     : properytData?.agentImageUrl
//                                             }
//                                             alt="Agent"
//                                         />
//                                         <div>
//                                             <h5>{properytData?.agent_name}</h5>
//                                             <p>Real Estate Agent</p>
//                                         </div>
//                                     </div>

//                                     <form onSubmit={handleSubmit(onSubmit)}>
//                                         <div className='form-group mb-2'>
//                                             <input type="text" className='form-control' placeholder='Full Name' onKeyDown={handleKeyDown} {...register("name")} onCut={(e) => e.preventDefault()}
//                                                 onCopy={(e) => e.preventDefault()}
//                                                 onPaste={(e) => e.preventDefault()} />
//                                             {errors.name && <p className="text-danger">{errors?.name?.message}</p>}
//                                         </div>
//                                         <div className='form-group mb-2'>
//                                             <input type="text" className='form-control' placeholder='Email Address' {...register("email")} maxLength={30} />
//                                             {errors.email && <p className="text-danger">{errors?.email?.message}</p>}
//                                         </div>
//                                         <div className='form-group mb-2'>
//                                             <input type="text" className='form-control' placeholder='Phone'   {...register("phoneno")}
//                                                 onKeyDown={(e) => {
//                                                     if (!/^\d$/.test(e.key) && e.key !== 'Backspace' && e.key !== 'Delete') {
//                                                         e.preventDefault();
//                                                     }
//                                                     if (e.target.value.length >= 15 && e.key !== 'Backspace' && e.key !== 'Delete') {
//                                                         e.preventDefault();
//                                                     }
//                                                 }} />
//                                             {errors.phoneno && <p className="text-danger">{errors?.phoneno?.message}</p>}
//                                         </div>
//                                         <div className='form-group mb-2'>
//                                             <textarea name="" id="" className='form-control' rows={3} placeholder='Message' {...register("message")}></textarea>
//                                             {errors.message && <p className="text-danger">{errors?.message?.message}</p>}
//                                         </div>
//                                         <button className='btn_00529B  w-100 btn'>Send Email </button>
//                                     </form>
//                                 </div>
//                             </div>

//                             <div className='Property_Detail_contact_form_area'>
//                                 <h4>Similar listings</h4>
//                                 {filteredData.length === 0 ? (
//                                     <div style={{ textAlign: 'center' }}>No similar data found.</div>
//                                 ) : (
//                                     filteredData?.slice(0, 2)?.map((item, index) => (
//                                         <a key={index} onClick={() => SelectedData(item)} className='Similar_listings_item mb-3'>
//                                             <img src={item?.property_images[0]?.imageUrlToserver} alt="" />
//                                             <div className='Similar_listings_item_content ms-2'>
//                                                 <h6>{item?.title}</h6>
//                                                 <div>
//                                                     <i className="fa-solid fa-star me-1"></i>
//                                                     <i className="fa-solid fa-star me-1"></i>
//                                                     <i className="fa-solid fa-star me-1"></i>
//                                                     <i className="fa-solid fa-star me-1"></i>
//                                                     <i className="fa-solid fa-star me-1"></i>
//                                                 </div>
//                                                 <p>${item?.property_price}</p>
//                                             </div>
//                                         </a>
//                                     ))
//                                 )}
//                             </div>

//                         </div>
//                     </div>
//                 </div>
//             </div >
//         </section >
//     )
// }

// export default PropertyDetail;


import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectedProp, setPropertyDetails } from '../features/propertySlice';
import api from '../utils/ApiConfig';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import * as yup from "yup";
import { toast } from 'react-toastify';
import propertyService from '../utils/propertyService';
import 'react-awesome-slider/dist/styles.css';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import { useNavigate, useParams } from 'react-router-dom';
import { useLocation } from 'react-router-dom'; // Import useLocation
import { Link } from "react-router-dom";


const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

const schema = yup.object().shape({
    name: yup.string().trim().required('Full name is required').min(3, 'Full name must be a minimum of 3 characters').max(20, 'Full name must be a maximum of 20 characters').matches(/^[A-Za-z\s]+$/, 'Full name must only contain alphabetic characters'),
    email: yup.string().required('Email is required').matches(emailRegex, 'Invalid email format'),
    message: yup.string().trim().required('Comment is required').max(255, 'Comment  must be a maximum of 255 characters'),
    phoneno: yup.string()
        .required('Mobile number is required')
        .matches(/^\d{10,15}$/, 'Mobile number must be between 10 to 15 digits'),
});

function PropertyDetail() {
    // const properytData = useSelector(selectedProp);
    const [nearList, setNearList] = useState([]);
    const [urlAddress, setUrlAddress] = useState("");
    const [page, setPage] = useState(0);
    const dispatch = useDispatch();
    const navigate = useNavigate(); // Initialize useNavigate
    const location = useLocation();
const [properytData , setProperytData] = useState([])
console.log(properytData,"properytData")
    const { title } = useParams();

    console.log(title)
    const SelectedData = (details) => {
        dispatch(setPropertyDetails(details))
        
    }

    const [locationState, setLocationState] = useState({ lat: 0, lng: 0 });

    // useEffect(() => {
    //     if (properytData?.location) {
    //         try {
    //             const parsedLocation = JSON?.parse(properytData?.location);
    //             setLocationState({
    //                 lat: parseFloat(parsedLocation?.latitude) || 0,
    //                 lng: parseFloat(parsedLocation?.longitude) || 0,
    //             });
    //         } catch (error) {
    //             console.error("Failed to parse location data:", error);
    //         }
    //     }
    // }, [properytData]);


 // Fetch property by title from URL using findByTitle API
 useEffect(() => {

   if(title) {
    
    const fetchPropertyByTitle = async () => {
        try {
            // debugger
            const response = await api.get( `/property/findByTitle/${title}`);
            if (response) {
                setProperytData(response?.data?.data[0]);
            } else {
                console.warn("No property data found for given title. Redirecting to home.");
                // navigate('/');
            }
        } catch (error) {
            console.error("Error fetching property by title:", error);
            // navigate('/');
        }
    };
    fetchPropertyByTitle();
}

  
}, [dispatch, navigate, location]);



    useEffect(() => {
        const getUrl = new URL(window.location.href); 
        const address = getUrl.searchParams.get('address') ?? "india";
        setUrlAddress(address)
        if (properytData?.location) {
            try {
                const parsedLocation = JSON?.parse(properytData?.location);
                const latitude = parseFloat(parsedLocation?.latitude) || 0;
                const longitude = parseFloat(parsedLocation?.longitude) || 0;
    
                if (latitude === 0 && longitude === 0) {
                    console.warn("Invalid location data. Navigating to home.");
                    // navigate('/'); // Redirect to home if lat/lng are invalid/
                } else {
                    setLocationState({ lat: latitude, lng: longitude });
                }
            } catch (error) {
                console.error("Failed to parse location data:", error);
                // navigate('/'); // Redirect to home if parsing fails
            }
        } else {
            console.warn("Location data is null or undefined. Navigating to home.");
            // navigate('/'); // Redirect to home if location data is missing
        }
    }, [properytData, navigate]);

    const formData = {
        address: properytData?.address ?? urlAddress
    }
console.log(urlAddress,"?qq")
    const fetchNearList = async () => {
        try {
            const response = await api?.post(
                `/property/getSimilarProperties`,
                {
                    ...formData,
                    curPage: page + 1,
                    perPage: 10,
                    sortBy: 'created_on',
                    direction: 'desc',
                    whereClause: [
                        {
                            key: ' ',
                            value: ' ',
                            operator: ' ',
                        },
                    ],
                },
            );

            if (response?.data?.statusCode === 200) {
                setNearList(response?.data?.data);
            }
        } catch (error) {
            console.log(error)
        }
    };

    const geocodeAddress = async () => {
        
        const apiKey = "AIzaSyC2ytuWrqWdEuW7DKwqiJ9LeeJZDpVwlfo";
        const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(urlAddress)}&key=${apiKey}`;
console.log(urlAddress,"+@#$")
        try {
        
            const response = await fetch(url);
            const data = await response.json();
            console.log(response,"*^&x")
            console.log(data,"$!&")
            if (data.status !== 'OK') {
                console.error('Geocode was not successful for the following reason: ' + data?.status);
            }
        } catch (error) {
            console.error('Error geocoding address:', error);
        }
    };
    // useEffect(() => {
    //     if (properytData?.address) {
    //         geocodeAddress(); // Trigger geocoding on component load
    //     } else {
    //         navigate('/home'); // If no address is provided, navigate to home page
    //     }
    // }, [properytData]);

    useEffect(() => {
        fetchNearList();
        geocodeAddress();
    }, [properytData]);

    const handleKeyDown = (event) => {
        // Allow only alphabetic characters and a few control keys
        if (
            !(
                (event.keyCode >= 65 && event.keyCode <= 90) || // A-Z
                (event.keyCode >= 97 && event.keyCode <= 122) || // a-z
                event.keyCode === 8 || // Backspace
                event.keyCode === 9 || // Tab
                event.keyCode === 32 || // Space
                event.keyCode === 37 || // Left arrow
                event.keyCode === 39   // Right arrow
            )
        ) {
            event.preventDefault();
        }
    };

    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        resolver: yupResolver(schema),
    });

    const onSubmit = async (data) => {
        try {
            const payload = {
                ...data,
                property_id: properytData?.id,
                property_name: properytData?.title,
                agent_email: properytData?.agent_email,
            }
            const response = await propertyService.propertyInquire(payload);
            if (response.statusCode === 201) {
                toast.success("Email Submitted ")
                reset();
            } else {
                toast.error(response?.message || "Error While Email Submit")
            }
        } catch (error) {
            toast.error(error?.response?.data?.error || "Internal Server Error")
        }
    };

    const filteredData = nearList?.filter((item) => item?.id !== properytData?.id);

    function formatValue(value) {
        const parsedValue = parseFloat(value);
        if (Number.isInteger(parsedValue)) return parsedValue;
        return parsedValue.toFixed(2).replace(/\.?0+$/, '');
    }

    // Description read more logic
    const [isMobile, setIsMobile] = useState(false);
    const [expanded, setExpanded] = useState(false);
    const description = properytData?.description || '';
    const truncationLength = 100;
    const shouldTruncate = description.length > truncationLength;
    const truncatedDescription = shouldTruncate ? description.slice(0, truncationLength) + '...' : description;

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window?.innerWidth < 768);
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <section className='container-fluid Property_Detail_Section'>
            <div className='container'>
                <div className='row'>
                    <div className='col-xl-8 col-lg-7 col-md-12'>
                        <div className='Container_white_bg_hp my-4'>
{/* 
                            <div className='property_detail_img_area_hp mb-4'>
                                {properytData?.property_images?.length > 0 && (
                                    <div id="propertyImageCarousel" className="carousel slide" data-bs-ride="carousel">
                                        <div className="carousel-inner">
                                            {properytData?.property_images?.map((image, index) => (
                                                <div className={`carousel-item ${index === 0 ? 'active' : ''}`} key={index}>
                                                    <img src={image?.imageUrlToserver} className="d-block w-100" alt={`Property image ${index + 1}`} />
                                                </div>
                                            ))}
                                        </div>
                                        <a className="carousel-control-prev" href="#propertyImageCarousel" role="button" data-bs-slide="prev">
                                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                            <span className="sr-only">Previous</span>
                                        </a>
                                        <a className="carousel-control-next" href="#propertyImageCarousel" role="button" data-bs-slide="next">
                                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                            <span className="sr-only">Next</span>
                                        </a>
                                    </div>
                                )}
                            </div> */}
<div className='property_detail_img_area_hp mb-4'>
  {properytData?.property_images?.length > 0 && (
    <div id="propertyImageCarousel" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">
        {properytData?.property_images?.map((image, index) => (
          <div className={`carousel-item ${index === 0 ? 'active' : ''}`} key={index}>
            <img 
              src={image?.imageUrlToserver} 
              className="d-block w-100 img-fluid"
              alt={`Property image ${index + 1}`}
              style={{ 
                objectFit: 'cover',
                height: 'auto',
                maxHeight: '80vh'
              }}
            />
          </div>
        ))}
      </div>
      <a className="carousel-control-prev" href="#propertyImageCarousel" role="button" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a className="carousel-control-next" href="#propertyImageCarousel" role="button" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>
    </div>
  )}
</div>





                            <div className='Property_Detail_content_area_hp'>
                                <div className='Property_Detail_heading_content_area_hp'>
                                    <div className='me-3 mb-4'>
                                        <h2>{properytData?.title} - {properytData?.bedroom}-Bedroom {properytData?.type_of_property} - {properytData?.type_of_view}</h2>
                                        <p>{properytData?.address}</p>
                                    </div>
                                    <div className='text-end mb-4'>
                                        <h2 className='text-nowrap'>$ {properytData?.property_price}</h2>
                                    </div>
                                </div>

                                <div className="Property_Detail_features_area_hp">
                                    <ul className="nav nav-pills mb-3 justify-content-between"  id="pills-tab" role="tablist" style={{display:"flex", flexWrap:"nowrap", alignItems:"center", overflow:"auto", gap:"10px"}}>
                                        {/* Description Tab */}
                                        <li className="nav-item" role="presentation">
                                            <button
                                                className="nav-link active"
                                                id="pills-Description-tab"
                                                data-bs-toggle="pill"
                                                data-bs-target="#pills-Description"
                                                type="button"
                                                role="tab"
                                                aria-controls="pills-Description"
                                                aria-selected="true"
                                            >
                                                Description
                                            </button>
                                        </li>

                                        <li className="nav-item" role="presentation">
                                            <button className="nav-link" id="pills-Overview-tab" data-bs-toggle="pill" data-bs-target="#pills-Overview" type="button" role="tab" aria-controls="pills-Overview" aria-selected="false">Overview</button>
                                        </li>

                                        {properytData?.features && properytData?.features !== "[]" && (
                                            <li className="nav-item" role="presentation">
                                                <button className="nav-link" id="pills-FeaturesAmenities-tab" data-bs-toggle="pill" data-bs-target="#pills-FeaturesAmenities" type="button" role="tab" aria-controls="pills-FeaturesAmenities" aria-selected="false">Features and Amenities</button>
                                            </li>
                                        )}

                                        <li className="nav-item" role="presentation">
                                            <button className="nav-link" id="pills-PropertyMap-tab" data-bs-toggle="pill" data-bs-target="#pills-PropertyMap" type="button" role="tab" aria-controls="pills-PropertyMap" aria-selected="false">Property Map</button>
                                        </li>
                                    </ul>

                                    <div className="tab-content" id="pills-tabContent">
                                        {/* Description Tab Content */}
                                        <div
                                            className="tab-pane fade show active"
                                            id="pills-Description"
                                            role="tabpanel"
                                            aria-labelledby="pills-Description-tab"
                                        >
                                            <h4>Description</h4>
                                            <p style={{ whiteSpace: 'pre-wrap' }}>
                                                {!isMobile ? (
                                                    description
                                                ) : (
                                                    expanded ? description : truncatedDescription
                                                )}
                                                {isMobile && shouldTruncate && (
                                                    // <span
                                                    //     onClick={() => setExpanded(!expanded)}
                                                    //     style={{ color: 'blue', cursor: 'pointer', marginLeft: '5px' }}
                                                    // >
                                                    //     {expanded ? 'Read Less' : 'Read More'}
                                                    // </span>
//                                                     <span
//   onClick={() => setExpanded(!expanded)}
//   style={{ 
//     color: 'blue', 
//     cursor: 'pointer', 
//     marginLeft: '5px',
//     fontWeight: 'bold',
//     textDecoration: 'underline'
//   }}
// >
//   {expanded ? 'Read Less' : 'Read More'}
// </span>
<span
  onClick={() => setExpanded(!expanded)}
  style={{ 
    color: '#00529B', 
    cursor: 'pointer', 
    marginLeft: '5px',
    // fontWeight: 'bold',
    textDecoration: 'underline',
    fontSize: '15px',
    fontFamily: 'TCCC-UnityHeadline, sans-serif'
  }}
>
  {expanded ? 'Read Less' : 'Read More'}
</span>


                                                )}
                                            </p>
                                        </div>

                                        {/* Overview Tab Content */}
                                        <div className="tab-pane fade" id="pills-Overview" role="tabpanel" aria-labelledby="pills-Overview-tab">
                                            <h4>Overview</h4>
                                            <div className='row mt-3'>
                                                <div className='col-xl-4 col-lg-4 col-md-4 col-12 mb-3'>
                                                    <div className='Property_Detail_overview_items_hp'>
                                                        <img src="/assests/Img/Type_icon.png" alt="" width={50} />
                                                        <div className='ms-2'>
                                                            <h5>Type</h5>
                                                            <p>{properytData?.type_of_property}</p>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className='col-xl-4 col-lg-4 col-md-4 col-12 mb-3'>
                                                    <div className='Property_Detail_overview_items_hp'>
                                                        <img src="/assests/Img/Bedroom_icon.png" alt="" width={50} />
                                                        <div className='ms-2'>
                                                            <h5>Bedrooms</h5>
                                                            <p>{properytData?.bedroom}</p>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className='col-xl-4 col-lg-4 col-md-4 col-12 mb-3'>
                                                    <div className='Property_Detail_overview_items_hp'>
                                                        <img src="/assests/Img/Bath_icon.png" alt="" width={50} />
                                                        <div className='ms-2'>
                                                            <h5>Bath</h5>
                                                            <p>{formatValue(properytData?.bathroom)}</p>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className='col-xl-4 col-lg-4 col-md-4 col-12 mb-3'>
                                                    <div className='Property_Detail_overview_items_hp'>
                                                        <img src="/assests/Img/Sqft_icon.png" alt="" width={50} />
                                                        <div className='ms-2'>
                                                            <h5>Sqft:</h5>
                                                            <p>{Math.trunc(properytData?.sqft_area_count)}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {properytData?.features?.length > 0 && (
                                            <div className="tab-pane fade" id="pills-FeaturesAmenities" role="tabpanel" aria-labelledby="pills-FeaturesAmenities-tab">
                                                <h4>Features And Amenities</h4>
                                                <div className='Property_Detail_overview_items_hp flex-wrap'>
                                                    {JSON?.parse(properytData?.features).map((feature, index) => (
                                                        <div className='d-flex align-items-center mx-2 mb-2' key={index}>
                                                            <i className="fa-solid fa-circle-check text_22B3CB me-2"></i>
                                                            <p>{feature}</p>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        )}

                                        {/* <div className="tab-pane fade" id="pills-PropertyMap" role="tabpanel" aria-labelledby="pills-PropertyMap-tab">
                                            <h4>Property Map</h4>
                                            {locationState?.lat && locationState?.lng ? (
                                                <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}>
                                                    <GoogleMap
                                                        mapContainerStyle={{ height: '400px', width: '100%' }}
                                                        center={locationState}
                                                        zoom={15}
                                                    >
                                                        <Marker
                                                            position={{ lat: locationState?.lat, lng: locationState?.lng }}
                                                            title={properytData?.title || "Property Location"}
                                                            icon={{
                                                                url: "http://maps.google.com/mapfiles/ms/icons/red-dot.png",
                                                            }}
                                                        />
                                                    </GoogleMap>
                                                </LoadScript>
                                            ) : (
                                                <p>Loading Map...</p>
                                            )}
                                        </div> */}


<div className="tab-pane fade" id="pills-PropertyMap" role="tabpanel" aria-labelledby="pills-PropertyMap-tab">
                                            <h4>Property Map</h4>
                                            {/* {mapCoordinates ? (
                                                <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}>
                                                    <GoogleMap
                                                        mapContainerStyle={{ height: '400px', width: '100%' }}
                                                        center={mapCoordinates}
                                                        zoom={15}
                                                    >
                                                        <Marker position={mapCoordinates} />
                                                    </GoogleMap>
                                                </LoadScript>
                                            ) : (
                                                <p>Loading Map...</p>
                                            )} */}
                                             {/* {locationState.lat && locationState.lng ? ( */}
                                             {locationState?.lat && locationState?.lng ? (
                                                <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}>
                                                    <GoogleMap
                                                        mapContainerStyle={{ height: '400px', width: '100%' }}
                                                        center={locationState}
                                                        zoom={15}
                                                    >
                                      {/* <Marker
                                            position={locationState}
                                            icon={{
                                                url: "http://maps.google.com/mapfiles/ms/icons/red-dot.png",
                                            }}
                                        /> */}
        <Marker
                                                    position={{ lat: locationState?.lat, lng: locationState?.lng }}
                                                    title={properytData?.title || "Property Location"}
                                                    icon={{
                                                        url: "http://maps.google.com/mapfiles/ms/icons/red-dot.png",
                                                    }}
                                                />
                                                    </GoogleMap>
                                                </LoadScript>
                                            ) : (
                                                <p>Loading Map...</p>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='col-xl-4 col-lg-5 col-md-12'>
                        <div className='row my-4 align-items-stretch'>
                            <div className='col-xl-12 col-lg-12 col-md-6 mb-4' >
                                <div className='Property_Detail_contact_form_area'>
                                    <h4>Inquire For More</h4>
                                    <div className='Inquire_for_agent_profile_area'>
                                        <img
                                            src={
                                                typeof properytData?.agentImageUrl === 'string' && properytData?.agentImageUrl?.includes("null")
                                                    ? properytData?.agentImageUrl?.replace("null", "6mt24-default.png")
                                                    : properytData?.agentImageUrl
                                            }
                                            alt="Agent"
                                        />
                                        <div>
                                           <h5>{properytData?.agent_name}</h5>
                                            <p>Real Estate Agent</p>
                                        </div>
                                    </div>

                                    <form onSubmit={handleSubmit(onSubmit)}>
                                        <div className='form-group mb-2'>
                                            <input
                                                type="text"
                                                className='form-control'
                                                placeholder='Full Name'
                                                onKeyDown={handleKeyDown} {...register("name")}
                                                onCut={(e) => e.preventDefault()}
                                                onCopy={(e) => e.preventDefault()}
                                                onPaste={(e) => e.preventDefault()}
                                            />
                                            {errors.name && <p className="text-danger">{errors?.name?.message}</p>}
                                        </div>
                                        <div className='form-group mb-2'>
                                            <input
                                                type="text"
                                                className='form-control'
                                                placeholder='Email Address' {...register("email")}
                                                maxLength={30}
                                            />
                                            {errors?.email && <p className="text-danger">{errors?.email?.message}</p>}
                                        </div>
                                        <div className='form-group mb-2'>
                                            <input
                                                type="text"
                                                className='form-control'
                                                placeholder='Phone' {...register("phoneno")}
                                                onKeyDown={(e) => {
                                                    if (!/^\d$/.test(e.key) && e.key !== 'Backspace' && e.key !== 'Delete') {
                                                        e.preventDefault();
                                                    }
                                                    if (e.target.value.length >= 15 && e.key !== 'Backspace' && e.key !== 'Delete') {
                                                        e.preventDefault();
                                                    }
                                                }}
                                            />
                                            {errors.phoneno && <p className="text-danger">{errors?.phoneno?.message}</p>}
                                        </div>
                                        <div className='form-group mb-2'>
                                            <textarea
                                                className='form-control'
                                                rows={3}
                                                placeholder='Message'
                                                {...register("message")}
                                            ></textarea>
                                            {errors.message && <p className="text-danger">{errors?.message?.message}</p>}
                                        </div>
                                        <button className='btn_00529B w-100 btn'>Send Email </button>
                                    </form>
                                </div>
                            </div>

                            {/* <div className='Property_Detail_contact_form_area'>
                                <h4>Similar listings</h4>
                                {filteredData?.length === 0 ? (
                                    <div style={{ textAlign: 'center' }}>No similar data found.</div>
                                ) : (
                                    filteredData?.slice(0, 1)?.map((item, index) => (
                                        <a key={index} onClick={() => SelectedData(item)} className='Similar_listings_item mb-3'>
                                            <img src={item?.property_images[0]?.imageUrlToserver} alt="" />
                                            <div className='Similar_listings_item_content ms-2'>
                                                <h6>{item?.title}</h6>
                                                <div>
                                                    <i className="fa-solid fa-star me-1"></i>
                                                    <i className="fa-solid fa-star me-1"></i>
                                                    <i className="fa-solid fa-star me-1"></i>
                                                    <i className="fa-solid fa-star me-1"></i>
                                                    <i className="fa-solid fa-star me-1"></i>
                                                </div>
                                                <p>${item?.property_price}</p>
                                            </div>
                                        </a>
                                    ))
                                )}
                            </div> */}
                            <div className="Property_Detail_contact_form_area">
  <h4>Similar listings</h4>
  {filteredData?.length === 0 ? (
    <div style={{ textAlign: 'center' }}>No similar data found.</div>
  ) : (
    filteredData?.slice(0, 1)?.map((item, index) => (
      <Link
        to={`/PropertyDetail/${item.title}`} 
        key={index}
        className="Similar_listings_item mb-3"
      >
        <img
          src={item?.property_images[0]?.imageUrlToserver}
          alt=""
        />
        <div className="Similar_listings_item_content ms-2">
          <h6>{item?.title}</h6>
          <div>
            <i className="fa-solid fa-star me-1"></i>
            <i className="fa-solid fa-star me-1"></i>
            <i className="fa-solid fa-star me-1"></i>
            <i className="fa-solid fa-star me-1"></i>
            <i className="fa-solid fa-star me-1"></i>
          </div>
          <p>${item?.property_price}</p>
        </div>
      </Link>
    ))
  )}
</div>
                        </div>
                    </div>
                </div>
            </div >
        </section >
    )
}

export default PropertyDetail;

