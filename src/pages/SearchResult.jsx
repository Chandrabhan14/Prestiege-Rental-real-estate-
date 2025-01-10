
import React, { useEffect, useRef, useState } from "react";
import { BrowserRouter as Router, Route, useLocation, Navigate, useNavigate } from 'react-router-dom';
import api from "../utils/ApiConfig";
import useCurrentLocation from "../hook/useCurrentLocation";
import Loader from "../common/loader";
import { useDispatch } from "react-redux";
import { setPropertyDetails } from "../features/propertySlice";
import GeographicalFilters from "./GeographicalFilters";
import RoomsFilters from "./RoomsFilters";
import PriceRangeFilters from "./PriceRangeFilters";
import PropertyTypeFilters from "./PropertyTypeFilters";
import ReactPaginate from 'react-paginate';
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";


const googleMapsApiKey = "AIzaSyC2ytuWrqWdEuW7DKwqiJ9LeeJZDpVwlfo"; // Google maps API key


const createSlug = (title) => {
  return title
    .toLowerCase() // Convert to lowercase
    .replace(/[^a-z0-9]+/g, '-') // Replace spaces and special characters with dashes
    .replace(/^-|-$/g, ''); // Remove leading and trailing dashes
};


function SearchResult() {

  const [page, setPage] = useState(1);
  const [searchlist, setSearchlist] = useState([]);
  const [loading, setLoading] = useState(false)

  const [totalCount, setTotalCount] = useState(0);

  const [geographical, setGeographical] = useState("");
  const [priceRange, setPriceRange] = useState({});
  const [bathroom, setBathroom] = useState({});
  const [bedroom, setBedroom] = useState({});
  const [reset, setReset] = useState(false);

console.log(geographical,"-------")

  const [propertyType, setPropertyType] = useState("");

  const [Show, setShow] = useState(false);
  const [itemsToShow, setItemsToShow] = useState([]);
  const [itemsInMore, setItemsInMore] = useState([]);
  const { location: currentLocation, error } = useCurrentLocation();
  const [seletedDropDown, selectedDropDown] = useState("Geographical Filters")

  const [mapsUrl, setMapUrl] = useState('');
  const [contentVisible, setContentVisible] = useState(true);


    const [selectedLocation, setSelectedLocation] = useState({
    lat: 12.536001987740743,
    lng: -70.05743292445116,
  });
  const [ perPage, setPerPage] =useState(contentVisible ? 10 : 6)

  const rowsPerPage = perPage;


  const location = useLocation();
  const searchData = location?.state?.searchData;


  // useEffect(()=>{
  //   if(geographical !== null){
  //     const searchArea= searchlist?.filter((i)=>  geographical ? i?.Area == geographical :i)
  //     setSearchlist(searchArea);
  //   }
  // },[geographical])

  // Use searchData here to perform search and display results
  const formData = {
    propertyType: propertyType ? propertyType : (searchData?.listingType === undefined ? '' : searchData?.listingType),
    type_of_view: searchData?.view === undefined ? '' : searchData?.view,
    bedrooms: searchData?.bedrooms === undefined ? '' : searchData?.bedrooms,
    bedroomStart: bedroom.min ? bedroom.min : "",
    bedroomEnd: bedroom.max ? bedroom.max : "",
    bathroomStart: bathroom.min ? bathroom.min : "",
    bathroomEnd: bathroom.max ? bathroom.max : "",
    priceRangeStart: priceRange.min ? priceRange.min : "100000",
    priceRangeStop: priceRange.max ? priceRange.max : "10000000",
    // address: geographical ? geographical : "",

  }

  const formDataEmpty = {
    propertyType: "",
    type_of_view: "",
    bedrooms: "",
    bedroomStart: "",
    bedroomEnd: "",
    bathroomStart: "",
    bathroomEnd: "",
    priceRangeStart: "100000",
    priceRangeStop: "10000000",
    address: ""

  }


  const atleastFieldsChosen = Object.values(formData).some(field => field !== '');

  const fetchSearchList = async (reset, id, customWhereClause = null,clear= false) => {
    try {
      setLoading(true);
  
      // Determine which `whereClause` to use
      const whereClause = customWhereClause || [
        {
          key: 'id',
          value: id ?? "",
          operator: '',
        },
        {
          key: 'Area',
          value: geographical, // Ensure this uses the latest geographical state
          operator: 'LIKE',
        },
      ];
  
      const response = await api.post(`/property/homePageSearch`, {
        ...(
          reset
            ? { ...formDataEmpty }
            : { ...formData }
        ),
        curPage: page,
        perPage: rowsPerPage,
        sortBy: 'created_on',
        direction: 'desc',
        whereClause,
      });
  
      if (response?.data?.statusCode === 200) {
        if (geographical && clear === false) {
          const searchArea = response?.data?.data?.filter((i) =>
            geographical ? i?.Area === geographical : i
          );
          setSearchlist(searchArea);
        } else {
          setSearchlist(response?.data?.data);
          setTotalCount(response?.data?.count);
        }
      } else if (response?.data?.statusCode === 400) {
        setSearchlist([]);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };
  



  // useEffect(() => {
  //   const storedPageData = localStorage.getItem('currentPageData');
  //   if (storedPageData) {
  //     const { page } = JSON.parse(storedPageData);
  //     setPage(page);
  //   }
  // }, []);

  useEffect(() => {

    if (atleastFieldsChosen) {
      fetchSearchList(false);
    }
    // if(atleastFieldsChosen == false){
    //   fetchSearchList(true);
    // }
  }, [page, rowsPerPage]);

  const handleSearch = () => {
    fetchSearchList(false);
    setPerPage(100)
  };

  // useEffect(() => {
  //   if (currentLocation) {
  //     console.log(currentLocation,"oye");
  //     const { latitude, longitude } = currentLocation;

  //     console.log(latitude, longitude,"oye");

  //     const markerUrl = `&markers=color:red%7C${latitude},${longitude}`;
  //     const mapsUrl = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d0.01!2d${longitude}!3d${latitude}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2z${latitude}%2C${longitude}!5e0!3m2!1sen!2sus!4v1620340536678${markerUrl}&zoom=10"`;

  //     setMapUrl(mapsUrl);
  //   }
  // }, [currentLocation]);


  useEffect(() => {
    const markerUrl = `&markers=color:red%7C${12.535989},${-70.054861}`;
    const mapsUrl = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d0.01!2d${12.535989}!3d${-70.054861}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2z${12.535989}%2C${-70.054861}!5e0!3m2!1sen!2sus!4v1620340536678${markerUrl}&zoom=10"`;

    setMapUrl(mapsUrl);
  }, [])
  useEffect(() => {
    const handleResize = () => {
      const availableWidth = window.innerWidth;
      const itemWidth = 400; // Assuming each item has a width of 200px, adjust as needed
      const maxItemsToShow = Math.floor(availableWidth / itemWidth);

      // Split Data array into items to show and items in "More"
      setItemsToShow(Data.slice(0, maxItemsToShow));
      setItemsInMore(Data.slice(maxItemsToShow));
    };

    handleResize(); // Call handleResize initially to set items based on initial window width

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const Data = [
    {
      name: "Geographical Filters",
    },
    {
      name: "Price Range",
    },
    {
      name: "Home type",
    },
    {
      name: "Bed & Baths",
    },
  ];

  const dispatch = useDispatch();
  const navigate = useNavigate();

  // const handleProperty = (details) => {
  //   dispatch(setPropertyDetails(details))
  //   setSelectedLocation({
  //           lat: parseFloat(details.latitude) || 12.536001987740743,
  //           lng: parseFloat(details.longitude) || -70.05743292445116,
  //         });
  //   window.open(`/PropertyDetail/${details?.title}`, '_blank');
  //   // navigate("/PropertyDetail",{
  //   //   state:{
  //   //       page,
  //   //       rowsPerPage,
  //   //   }
  //   // })

  //   // const currentPageData = { page, rowsPerPage };
  //   // localStorage.setItem('currentPageData', JSON.stringify(currentPageData));
  // }




  // const handleClear = () => {
  //   const clearedData = {
  //     listingType: '',
  //     bedrooms: '',
  //     view: '',
  //     priceRangeStart: "100000",
  //     priceRangeStop: "10000000",
  //     Area: '',

  //   };

  //   navigate('/SearchResult', { state: { searchData: clearedData } });

  //   setGeographical("");
  //   setPropertyType("");
  //   setBathroom({});
  //   setBedroom({});
  //   // setPriceRange({});



  //   setReset(Math.random());
  //   fetchSearchList(true);
  // }
  const handleClear =  async () => {
    // const clearedWhereClause = [
    // ];
  
    // Reset all states
    setGeographical(null);
    setPropertyType("");
    setBathroom({});
    setBedroom({});
    setPriceRange({});
    setPage(1);
  
    // Fetch updated search list with cleared filters
    await fetchSearchList(true, null,[],true);
  
    // Optionally navigate or update additional UI
    navigate('/SearchResult', { state: { searchData: {} } });
  };
  
  


  const hideMap = () => {
    setContentVisible(!contentVisible);

  }


  const [showMore, setShowMore] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const dropdownRef = useRef(null);


  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);


    return () => window.removeEventListener('resize', handleResize);
  }, []);



  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowMore(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    fetchSearchList();
  }, [page, rowsPerPage]);

  const handleProperty = (details) => {
    console.log(details.latitude,"&&&&&")

    dispatch(setPropertyDetails(details));
    setSelectedLocation({
      lat: parseFloat(details.latitude) || 12.536001987740743,
      lng: parseFloat(details.longitude) || -70.05743292445116,
    });
    window.open(`/PropertyDetail/${details?.title}`, '_blank');
  };
console.log(searchlist,"$***")
const locations = searchlist?.map(property => {
  const parsedLocation = JSON.parse(property?.location);
  return {
      id: property?.title,
      latitude: parseFloat(parsedLocation.latitude),
      longitude: parseFloat(parsedLocation.longitude)
  };
});


// Utility function to format values
function formatValue(value) {
  // Parse the value to a float
  const parsedValue = parseFloat(value);
  
  // Check if the parsed value is an integer, return without decimal places
  if (Number.isInteger(parsedValue)) return parsedValue;

  // Format to one or two decimal places if needed and remove trailing zero if it's like 5.50
  return parsedValue.toFixed(2).replace(/\.?0+$/, '');
}


  return (
    <>
      <section className="container-fluid Searching_filter_topbar_section my-4">
        <div className="container">
          {/* <div className='row'>
              <div className='col-md-5'>
                <div className='Searching_filter_topbar_left_Area'>
                  <p><strong>Results For :</strong> Apartment</p>
                </div>
              </div>
              <div className='col-md-7'>
                <div className='Searching_filter_topbar_right_Area text-end'>
                  <div className='form-group d-flex align-items-center'>
                    <label htmlFor="" className=' me-2'>Sort by:</label>
                    <select name="" id="" className='form-select'>
                      <option value="" selected disabled>Default Sorting</option>
                      <option value="">Popularity</option>
                      <option value="">Price-Low to High</option>
                      <option value="">Price-High to Low</option>
                      <option value="">Newest First</option>
                    </select>
                  </div>
                  <div className='Searching_filer_icon_area'>
                    <button className='btn p-0 Searching_filter_icon_Area' type="button" data-bs-toggle="offcanvas" data-bs-target="#Searching_filter" aria-controls="Searching_filter">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 3h16a1 1 0 0 1 1 1v1.586a1 1 0 0 1-.293.707l-6.414 6.414a1 1 0 0 0-.293.707v6.305a1 1 0 0 1-1.243.97l-2-.5a1 1 0 0 1-.757-.97v-5.805a1 1 0 0 0-.293-.707L3.293 6.293A1 1 0 0 1 3 5.586V4a1 1 0 0 1 1-1" /></svg>
                    </button>
                    <button className='btn p-0 Searching_loation_icon_Area'>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><circle cx="12" cy="10" r="3" /><path d="M12 2a8 8 0 0 0-8 8c0 1.892.402 3.13 1.5 4.5L12 22l6.5-7.5c1.098-1.37 1.5-2.608 1.5-4.5a8 8 0 0 0-8-8" /></g></svg>
                    </button>
                  </div>
                </div>
              </div>
            </div> */}


          <div className="Searching_filter_topbar_bgWhite">

            {/* Conditionally render based on screen width */}
            {/* {itemsToShow.map((item, index) => (
              <div
                key={index}
                className="input-group Searching_filter_items_area Searching_filter_GeographicalFilters_hp position-relative"
              >
                <select className="form-select" onClick={() => selectedDropDown(item.name)}>
                  <option value="" selected onClick={() => selectedDropDown(item.name)}>
                    {item.name}
                  </option>
                </select>

               
              </div>
            ))}

{selectedDropDown == "Geographical Filters" && <RoomsFilters/>} */}

            <div className="filters-container">
              {screenWidth >= 990 && <GeographicalFilters selectedGeo={(geo) => setGeographical(geo)} reset={reset} onSelectGeo={fetchSearchList} />}
              {screenWidth >= 1050 && <PriceRangeFilters selectedPrice={(item) => setPriceRange(item)} reset={reset} />}
              {screenWidth >= 1210 && <PropertyTypeFilters selectedType={(property) => setPropertyType(property)} reset={reset} />}
              {screenWidth >= 1400 && <RoomsFilters selectedBath={(bath) => setBathroom(bath)} selectedBed={(bed) => setBedroom(bed)} reset={reset} />}

              {(screenWidth < 1400 || screenWidth < 1202 || screenWidth < 1050 || screenWidth < 990) && (
                <div className="more-dropdown" ref={dropdownRef} >
                  <button onClick={() => setShowMore(!showMore)}>More</button>
                  {showMore && (
                    <div className="dropdown-content GeographicalFilters_area_hp">
                      {screenWidth < 1400 && <RoomsFilters selectedBath={(bath) => setBathroom(bath)} selectedBed={(bed) => setBedroom(bed)} reset={reset} />}
                      {screenWidth < 1210 && <PropertyTypeFilters selectedType={(property) => setPropertyType(property)} reset={reset} />}
                      {screenWidth < 1050 && <PriceRangeFilters selectedPrice={(item) => setPriceRange(item)} reset={reset} />}
                      {screenWidth < 990 && <GeographicalFilters selectedGeo={(geo) => setGeographical(geo)} reset={reset} />}
                    </div>
                  )}
                </div>
              )}
            </div>



            <div class="offcanvas-footer">
              <div className='d-flex align-items-center'>
                <button style={{ marginRight: '5px' }} className={`btn btn_00529B w-auto  ${atleastFieldsChosen ? '' : 'disabled'}`} type="button" disabled={!atleastFieldsChosen} onClick={handleClear}>clear</button>

                <button className={`btn btn_00529B w-auto   ${atleastFieldsChosen ? '' : 'disabled'}`} type="button" disabled={!atleastFieldsChosen} onClick={handleSearch}>Search</button>


              </div>
            </div>


            <div className='Searching_filter_topbar_right_Area text-end mt-0'>
              <div className='Searching_filer_icon_area mt-0'>
                <button onClick={hideMap} className='btn p-0 Searching_loation_icon_Area'>

                  {contentVisible ? (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><circle cx="12" cy="10" r="3" /><path d="M12 2a8 8 0 0 0-8 8c0 1.892.402 3.13 1.5 4.5L12 22l6.5-7.5c1.098-1.37 1.5-2.608 1.5-4.5a8 8 0 0 0-8-8" /></g></svg>)

                    : (<svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M3.25 3.25L22.75 22.75" stroke="white" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round" />
                      <path d="M10.9733 10.6783C11.2255 10.2661 11.0958 9.7275 10.6836 9.47528C10.2714 9.22305 9.73275 9.35274 9.48052 9.76495L10.9733 10.6783ZM15.1538 15.4354C15.5659 15.183 15.6953 14.6443 15.4429 14.2323C15.1904 13.8202 14.6517 13.6907 14.2397 13.9432L15.1538 15.4354ZM15.3752 11.917C15.3752 12.4002 15.767 12.792 16.2502 12.792C16.7335 12.792 17.1252 12.4002 17.1252 11.917H15.3752ZM13.0002 7.79199C12.517 7.79199 12.1252 8.18374 12.1252 8.66699C12.1252 9.15024 12.517 9.54199 13.0002 9.54199V7.79199ZM9.48052 9.76495C8.48541 11.3912 8.7345 13.4876 10.083 14.8354L11.3201 13.5977C10.5437 12.8217 10.4003 11.6147 10.9733 10.6783L9.48052 9.76495ZM10.083 14.8354C11.4315 16.1833 13.528 16.4313 15.1538 15.4354L14.2397 13.9432C13.3036 14.5166 12.0965 14.3737 11.3201 13.5977L10.083 14.8354ZM17.1252 11.917C17.1252 9.63882 15.2784 7.79199 13.0002 7.79199V9.54199C14.3119 9.54199 15.3752 10.6053 15.3752 11.917H17.1252Z" fill="white" />
                      <path d="M8.28543 3.61841C7.86549 3.85754 7.71891 4.39181 7.95804 4.81175C8.19716 5.23169 8.73144 5.37827 9.15138 5.13915L8.28543 3.61841ZM19.7792 15.7631C19.5402 16.1831 19.687 16.7173 20.107 16.9563C20.5271 17.1953 21.0613 17.0485 21.3003 16.6285L19.7792 15.7631ZM19.2084 19.2044C19.5502 18.8628 19.5502 18.3088 19.2086 17.967C18.8669 17.6253 18.3129 17.6252 17.9711 17.9668L19.2084 19.2044ZM14.5327 22.6416L15.1511 23.2607L15.1513 23.2604L14.5327 22.6416ZM11.4701 22.6416L10.8515 23.2604L10.8517 23.2607L11.4701 22.6416ZM6.87243 18.0451L6.25377 18.6638L6.25379 18.6639L6.87243 18.0451ZM7.0236 6.91728C7.33365 6.54661 7.2845 5.99477 6.91382 5.68473C6.54315 5.37468 5.99131 5.42383 5.68127 5.79451L7.0236 6.91728ZM9.15138 5.13915C12.2005 3.40292 16.0339 3.91887 18.5154 6.39949L19.7526 5.16182C16.7138 2.12407 12.0193 1.49223 8.28543 3.61841L9.15138 5.13915ZM18.5154 6.39949C20.997 8.8801 21.5143 12.7134 19.7792 15.7631L21.3003 16.6285C23.4251 12.8938 22.7915 8.19958 19.7526 5.16182L18.5154 6.39949ZM17.9711 17.9668L13.914 22.0228L15.1513 23.2604L19.2084 19.2044L17.9711 17.9668ZM13.9143 22.0226C13.41 22.5264 12.5928 22.5264 12.0885 22.0226L10.8517 23.2607C12.0393 24.4471 13.9635 24.4471 15.1511 23.2607L13.9143 22.0226ZM12.0887 22.0229L7.49108 17.4263L6.25379 18.6639L10.8515 23.2604L12.0887 22.0229ZM7.4911 17.4263C4.6373 14.5729 4.43443 10.0128 7.0236 6.91728L5.68127 5.79451C2.51057 9.58524 2.75899 15.1696 6.25377 18.6638L7.4911 17.4263Z" fill="white" />
                    </svg>
                    )}
                </button>
              </div>
            </div>

            {/* <div className="More" onClick={() => setShow(!Show)}> More</div>
            {Show && <>

            </>}
            <div className="input-group Searching_filter_items_area Searching_filter_GeographicalFilters_hp position-relative">
              <select className="form-select"  >
                <option value="More" selected disabled>
                  More
                </option>
                {itemsInMore.map((item, index) => (
                  <option key={index} value={item.name}>
                    {item.name}
                  </option>
                ))}
              </select>
            </div> */}

            {/* Render items in "More" section */}
            {/* <div className="More">
              {itemsInMore.map((item, index) => (
                <div
                  key={index}
                  className="input-group Searching_filter_items_area Searching_filter_GeographicalFilters_hp position-relative"
                >
                  <select className="form-select">
                    <option value="" selected disabled>
                      {item.name}
                    </option>
                  </select>
                </div>
              ))}

            </div> */}
          </div>

          {/* Filter Section */}
          <div
            class="offcanvas offcanvas-end Searching_filter_offcanvas_area"
            tabindex="-1"
            id="Searching_filter"
            aria-labelledby="Searching_filterLabel"
          >
            <div class="offcanvas-header">
              <h5 id="Searching_filterLabel">Filter</h5>
              <button
                type="button"
                class="btn-close text-reset"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div class="offcanvas-body">
              <div className="form-group mb-3">
                <label htmlFor="">Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Name"
                />
              </div>
              <div className="form-group mb-3">
                <label htmlFor="">Square feet</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Square feet"
                />
              </div>
              <div className="form-group mb-3">
                <label htmlFor="">Bathrooms</label>
                <select name="" id="" className="form-select">
                  <option value="" selected disabled>
                    Any
                  </option>
                </select>
              </div>

              <div className=" mb-3">
                <div className="d-flex justify-content-between">
                  <p>Price</p>
                  <p className="text-secondary fw-light">$50 - $400</p>
                </div>
              </div>

              <div className=" mb-3">
                <p className="mb-2">Property Type</p>
                <div class="form-check d-flex mb- ps-0">
                  <input
                    className="form-check me-2"
                    type="checkbox"
                    value=""
                    id="House"
                  />
                  <label class="form-check-label" for="House">
                    House
                  </label>
                </div>
                <div class="form-check d-flex mb- ps-0">
                  <input
                    className="form-check me-2"
                    type="checkbox"
                    value=""
                    id="SingleFamily"
                  />
                  <label class="form-check-label" for="SingleFamily">
                    Single Family
                  </label>
                </div>
                <div class="form-check d-flex mb- ps-0">
                  <input
                    className="form-check me-2"
                    type="checkbox"
                    value=""
                    id="Apartment"
                  />
                  <label class="form-check-label" for="Apartment">
                    Apartment
                  </label>
                </div>
                <div class="form-check d-flex mb- ps-0">
                  <input
                    className="form-check me-2"
                    type="checkbox"
                    value=""
                    id="OfficeVilla"
                  />
                  <label class="form-check-label" for="OfficeVilla">
                    Office Villa
                  </label>
                </div>
                <div class="form-check d-flex mb- ps-0">
                  <input
                    className="form-check me-2"
                    type="checkbox"
                    value=""
                    id="LuxaryHome"
                  />
                  <label class="form-check-label" for="LuxaryHome">
                    Luxary Home
                  </label>
                </div>
                <div class="form-check d-flex mb- ps-0">
                  <input
                    className="form-check me-2"
                    type="checkbox"
                    value=""
                    id="Studio"
                  />
                  <label class="form-check-label" for="Studio">
                    Studio
                  </label>
                </div>
              </div>

              <div className=" mb-3">
                <p className="mb-2">Amenities</p>
                <div class="form-check d-flex mb- ps-0">
                  <input
                    className="form-check me-2"
                    type="checkbox"
                    value=""
                    id="Dishwasher"
                  />
                  <label class="form-check-label" for="Dishwasher">
                    Dishwasher
                  </label>
                </div>
                <div class="form-check d-flex mb- ps-0">
                  <input
                    className="form-check me-2"
                    type="checkbox"
                    value=""
                    id="FloorCoverings"
                  />
                  <label class="form-check-label" for="FloorCoverings">
                    Floor Coverings
                  </label>
                </div>
                <div class="form-check d-flex mb- ps-0">
                  <input
                    className="form-check me-2"
                    type="checkbox"
                    value=""
                    id="Internet"
                  />
                  <label class="form-check-label" for="Internet">
                    Internet
                  </label>
                </div>
                <div class="form-check d-flex mb- ps-0">
                  <input
                    className="form-check me-2"
                    type="checkbox"
                    value=""
                    id="Supermarket"
                  />
                  <label class="form-check-label" for="Supermarket">
                    Supermarket
                  </label>
                </div>
                <div class="form-check d-flex mb- ps-0">
                  <input
                    className="form-check me-2"
                    type="checkbox"
                    value=""
                    id="KidsZone"
                  />
                  <label class="form-check-label" for="KidsZone">
                    Kids Zone
                  </label>
                </div>
              </div>

              <div className=" mb-3">
                <p className="mb-2">Bed/Bath</p>
                <div class="form-check d-flex mb- ps-0">
                  <input
                    className="form-check me-2"
                    type="checkbox"
                    value=""
                    id="Single"
                  />
                  <label class="form-check-label" for="Single">
                    Single
                  </label>
                </div>
                <div class="form-check d-flex mb- ps-0">
                  <input
                    className="form-check me-2"
                    type="checkbox"
                    value=""
                    id="Double"
                  />
                  <label class="form-check-label" for="Double">
                    Double
                  </label>
                </div>
                <div class="form-check d-flex mb- ps-0">
                  <input
                    className="form-check me-2"
                    type="checkbox"
                    value=""
                    id="UpTo3"
                  />
                  <label class="form-check-label" for="UpTo3">
                    Up To 3
                  </label>
                </div>
                <div class="form-check d-flex mb- ps-0">
                  <input
                    className="form-check me-2"
                    type="checkbox"
                    value=""
                    id="UpTo5"
                  />
                  <label class="form-check-label" for="UpTo5">
                    Up To 5
                  </label>
                </div>
              </div>

              <div className=" mb-3">
                <p className="mb-2">Catagory</p>
                <div class="form-check d-flex mb- ps-0">
                  <input
                    className="form-check me-2"
                    type="checkbox"
                    value=""
                    id="Buying"
                  />
                  <label class="form-check-label" for="Buying">
                    Buying
                  </label>
                </div>
                <div class="form-check d-flex mb- ps-0">
                  <input
                    className="form-check me-2"
                    type="checkbox"
                    value=""
                    id="Renting"
                  />
                  <label class="form-check-label" for="Renting">
                    Renting
                  </label>
                </div>
                <div class="form-check d-flex mb- ps-0">
                  <input
                    className="form-check me-2"
                    type="checkbox"
                    value=""
                    id="Selling"
                  />
                  <label class="form-check-label" for="Selling">
                    Selling
                  </label>
                </div>
              </div>
            </div>

            <div class="offcanvas-footer">
              <div className="d-flex align-items-center">
                <button className="btn">Search</button>
                <a href="">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M15 12c0-1.7-1.3-3-3-3s-3 1.3-3 3s1.3 3 3 3s3-1.3 3-3m2-8.7C13.1 1.1 8.3 1.8 5.1 4.7V3c0-.6-.4-1-1-1s-1 .4-1 1v4.5c0 .6.4 1 1 1h4.5c.6 0 1-.4 1-1s-.4-1-1-1H6.2C7.7 4.9 9.8 4 12 4c4.4 0 8 3.6 8 8c0 .6.4 1 1 1s1-.4 1-1c0-3.6-1.9-6.9-5-8.7m2.9 12.2h-4.5c-.6 0-1 .4-1 1s.4 1 1 1h2.4C16.3 19.1 14.2 20 12 20c-4.4 0-8-3.6-8-8c0-.6-.4-1-1-1s-1 .4-1 1c0 5.5 4.5 10 10 10c2.6 0 5-1 6.9-2.8V21c0 .6.4 1 1 1s1-.4 1-1v-4.5c0-.6-.5-1-1-1"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          {/* End Filter Section */}
        </div>
      </section>

      <section className="container-fluid Searching_property_list_area my-4">
        <div className="container">
          <div className="row align-items-stretch">
            <div className={!contentVisible ? "col-xl-12 col-lg-12 col-md-12 col-12 mb-3" : "col-xl-8 col-lg-8 col-md-6 col-12 mb-3"}>
              {/* className="col-xl-12 col-lg-12 col-md-6 col-12 mb-3" */}
              <div className="row">
                {loading ? <Loader /> :

                  searchlist.length > 0 ? (<> {searchlist?.map((item, index) => (
                    <div
                      className={!contentVisible ? "col-xl-4 col-lg-4 col-md-6 mb-3" : "col-xl-6 col-lg-6 col-md-12 mb-3"}
                      // className="col-xl-6 col-lg-6 col-md-12 mb-3"

                      key={index}
                      onClick={() => handleProperty(item)}
                    >
                      <a
                        //  href="/PropertyDetail"
                        className="Searching_property_list_item"
                      >
                        <div className="Searching_property_list_img">
                          {
                            item?.property_images[0]?.imageUrlToserver ? (
                              <img src={item.property_images[0].imageUrlToserver} alt="" />
                            ) : (
                              <img src="/assests/Img/No-Image.svg" alt="" />)
                          }
                          <p>{item?.status === 1 ? "Sold" : "For Sale"}</p>

                          {console.log(item.status, "-=-=-=")}
                        </div>

                        <div className="Searching_property_list_content">
  <h5 style={{ marginBottom: "1rem", fontWeight: "bold" }}>
    {item?.title} - {item?.bedroom}-Bedroom {item?.type_of_property} - {item?.type_of_view}
  </h5>
  <div className="row">
    {/* Sqft */}
    <div className="col-6">
      <div
        className="Searching_property_Detail_item"
        style={{
          display: "flex",
          alignItems: "center",
          marginBottom: "0.5rem",
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1.5em"
          height="1.5em"
          viewBox="0 0 24 24"
          style={{ marginRight: "8px" }}
        >
          <g
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          >
            <path d="M4 11v8a1 1 0 0 0 1 1h8M4 6V5a1 1 0 0 1 1-1h1m5 0h2m5 0h1a1 1 0 0 1 1 1v1m0 5v2m0 5v1a1 1 0 0 1-1 1h-1" />
            <path d="M4 12h7a1 1 0 0 1 1 1v7" />
          </g>
        </svg>
        <p style={{ marginBottom: "0" }}>Sqft: {Math.trunc(item?.sqft_area_count)}</p>
      </div>
    </div>

    {/* Beds */}
    <div className="col-6">
      <div
        className="Searching_property_Detail_item"
        style={{
          display: "flex",
          alignItems: "center",
          marginBottom: "0.5rem",
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1.5em"
          height="1.5em"
          viewBox="0 0 24 24"
          style={{ marginRight: "8px" }}
        >
          <path
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M5 9a2 2 0 1 0 4 0a2 2 0 1 0-4 0m17 8v-3H2m0-6v9m10-3h10v-2a3 3 0 0 0-3-3h-7z"
          />
        </svg>
        <p style={{ marginBottom: "0" }}>Beds: {item?.bedroom}</p>
      </div>
    </div>

    {/* Kitchen (commented out in this case) */}
    {/* <div className="col-6">
      <div
        className="Searching_property_Detail_item"
        style={{
          display: "flex",
          alignItems: "center",
          marginBottom: "0.5rem",
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1.5em"
          height="1.5em"
          viewBox="0 0 24 24"
          style={{ marginRight: "8px" }}
        >
          <path
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 3v12h-5c-.023-3.681.184-7.406 5-12m0 12v6h-1v-3M8 4v17M5 4v3a3 3 0 1 0 6 0V4"
          />
        </svg>
        <p style={{ marginBottom: "0" }}>Kitchen: {item?.kitchen_count}</p>
      </div>
    </div> */}

    {/* Baths */}
    <div className="col-6">
      <div
        className="Searching_property_Detail_item"
        style={{
          display: "flex",
          alignItems: "center",
          marginBottom: "0.5rem",
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1.5em"
          height="1.5em"
          viewBox="0 0 24 24"
          style={{ marginRight: "8px" }}
        >
          <path
            fill="currentColor"
            d="M22 12H5V6.41a1.975 1.975 0 0 1 1.04-1.759a1.995 1.995 0 0 1 1.148-.23a3.491 3.491 0 0 0 .837 3.554l1.06 1.06a1 1 0 0 0 1.415 0L14.035 5.5a1 1 0 0 0 0-1.414l-1.06-1.06a3.494 3.494 0 0 0-4.53-.343A3.992 3.992 0 0 0 3 6.41V12H2a1 1 0 0 0 0 2h1v3a2.995 2.995 0 0 0 2 2.816V21a1 1 0 0 0 2 0v-1h10v1a1 1 0 0 0 2 0v-1.184A2.995 2.995 0 0 0 21 17v-3h1a1 1 0 0 0 0-2M9.44 4.44a1.502 1.502 0 0 1 2.12 0l.354.353l-2.121 2.121l-.354-.353a1.501 1.501 0 0 1 0-2.122ZM19 17a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1v-3h14Z"
          />
        </svg>
        <p style={{ marginBottom: "0" }}>Bath: {formatValue(item?.bathroom)}</p>
      </div>
    </div>
  </div>
</div>









                        <div className="Searching_property_owner_Price_area">
                          <div className="Searching_property_owner_item">
                            {/* <img src={item?.agentImageUrl } alt="" /> */}
                            <img
                              src={
                                typeof item?.agentImageUrl === 'string' && item.agentImageUrl.includes("null")
                                  ? item.agentImageUrl.replace("null", "6mt24-default.png")
                                  : item?.agentImageUrl
                              }
                              alt="Agent"
                            />

                            <h6>{item?.agent_name}</h6>
                          </div>
                          <div className="Searching_property_owner_item">
                            <h6>$ {item?.property_price}</h6>
                          </div>
                        </div>
                      </a>
                    </div>))}

                  </>) : (
                    <div className="col-12 text-center">
                      <h3>No records found</h3>
                    </div>
                  )}
                <div className="pagination-container d-flex justify-content-center">
                  {searchlist?.length > 0 && (
                    <ReactPaginate
                      breakLabel="..."
                      nextLabel=" >"
                      onPageChange={(event) => {
                        setPage(event.selected + 1);
                        // localStorage.removeItem('currentPageData');
                      }}

                      pageRangeDisplayed={1}
                      marginPagesDisplayed={1}
                      pageCount={Math.ceil(totalCount / rowsPerPage)}
                      previousLabel="< "
                      renderOnZeroPageCount={null}
                      pageClassName="page-item"
                      pageLinkClassName="page-link"
                      previousClassName="page-item"
                      previousLinkClassName="page-link"
                      nextClassName="page-item"
                      nextLinkClassName="page-link"
                      breakClassName="page-item"
                      breakLinkClassName="page-link"
                      containerClassName="pagination justify-content-center"
                      activeClassName="active"
                      forcePage={page - 1}
                    />
                  )}
                </div>
              </div>
            </div>
            {contentVisible ? (
              <div
                className="col-xl-4 col-lg-4 col-md-6 col-12 mb-3"
              >
                <div className="Searching_property_location_map_area" data-aos="fade-up">
                  {/* <iframe */}
                  {/* //   src={mapsUrl}
                //   width="100%"
                //   height="100%"
                  // style={{ border: 0, borderRadius: "10px" }}
                //   allowfullscreen=""
                //   loading="lazy"
                //   referrerpolicy="no-referrer-when-downgrade" */}
                  {/* // ></iframe> */}


                  {/* <LoadScript googleMapsApiKey={googleMapsApiKey}>
                     <GoogleMap
                      mapContainerStyle={{ height: "100%", width: "100%", borderRadius: "10px" }}
                      center={selectedLocation}
                     zoom={12}
                   >
                     <Marker position={selectedLocation} />


                                           </GoogleMap>
                  </LoadScript> */}


{/* <LoadScript googleMapsApiKey={googleMapsApiKey}>
                    <GoogleMap
                      mapContainerStyle={{ height: "100%", width: "100%", borderRadius: "10px" }}
                      center={selectedLocation}
                      zoom={12}
                    >
                      {searchlist.map((property, idx) => (
                        // <Marker
                        //   key={idx}
                        //   position={{
                        //     lat: parseFloat(property.latitude),
                        //     lng: parseFloat(property.longitude),
                        //   }}
                        //   title={property.title}
                        //   onClick={() => handleProperty(property)}
                        // />
                        <Marker
                        key={idx}
                        position={{
                          lat: parseFloat(property.latitude),
                          lng: parseFloat(property.longitude),
                        }}
                        title={property.title}
                        onClick={() => handleProperty(property)}
                        icon={{
                          url: "http://maps.google.com/mapfiles/ms/icons/red-dot.png", // URL for red marker
                        }}
                      />
                      ))}
                    </GoogleMap>
                  </LoadScript> */}

{/* <LoadScript googleMapsApiKey={googleMapsApiKey}>
                    <GoogleMap
                      mapContainerStyle={{ height: "100%", width: "100%", borderRadius: "10px" }}
                      center={selectedLocation}
                      zoom={12}
                    >
                      {searchlist?.map((property, idx) => (
                       
                        // <Marker
                        //   key={idx}
                        //   position={{
                        //     lat: parseFloat(property?.location?.latitude),
                        //     lng: parseFloat(property?.location?.longitude),
                        //   }}
                        //   title={property.title}
                        //   onClick={() => handleProperty(property)}
                        //   icon={{
                        //     url: "http://maps.google.com/mapfiles/ms/icons/red-dot.png", 
                        //   }}
                          
                        // />
                        <Marker
  key={idx}
  position={{
    lat: parseFloat(property?.location?.latitude) || 0, // Default to 0 if no latitude provided
    lng: parseFloat(property?.location?.longitude) || 0, // Default to 0 if no longitude provided
  }}
  title={property.title}
  onClick={() => handleProperty(property)}
  icon={{
    url: "https://maps.google.com/mapfiles/ms/icons/red-dot.png", // Ensure this URL points to the red pin
    scaledSize: new window.google.maps.Size(40, 40), // Optional: adjust pin size
  }}
/>
                      ))}
                    </GoogleMap>
                  </LoadScript> */}

<LoadScript googleMapsApiKey={googleMapsApiKey}>
  <GoogleMap
    mapContainerStyle={{ height: "100%", width: "100%", borderRadius: "10px" }}
    center={selectedLocation}
    zoom={12}
  >
    {/* {searchlist?.map((property, id) => {
      const latitude = parseFloat(property?.location?.latitude);
      const longitude = parseFloat(property?.location?.longitude);

      // Check if latitude and longitude are valid numbers
      if (!isNaN(latitude) && !isNaN(longitude)) {
        return (
          <Marker
            key={id}
            position={{ lat: latitude, lng: longitude }}
            title={property.title}
            onClick={() => handleProperty(property)}
            icon={{
              url: "https://maps.google.com/mapfiles/ms/icons/red-dot.png", // URL for red marker
              scaledSize: new window.google.maps.Size(40, 40), // Optional: adjust pin size
            }}
          />
        );
      }
      return null; // Skip if coordinates are invalid
    })} */}
          {locations.map(location => (
                    <Marker
                        key={location.id}
                        position={{ lat: location.latitude, lng: location.longitude }}
                        title={`${location.id}`}
                    />
                ))}
  </GoogleMap>
</LoadScript>
                </div>
              </div>) : ""}

          </div>
        </div>
      </section>
    </>
  );
}

export default SearchResult;



