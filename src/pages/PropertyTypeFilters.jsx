import React, { useEffect, useRef, useState } from 'react'

function PropertyTypeFilters({selectedType, reset}) {
    
    const [contentVisible, setContentVisible] = useState(false);
    const[propertylabel,setPropertylabel] = useState("");
    const dropdownRef = useRef(null);


    const toggleContentVisibility = () => {
        setContentVisible(!contentVisible);
    };

    useEffect(() => {
        if(propertylabel !==''){
            selectedType(propertylabel);
        }
    }, [propertylabel]);

    const handlePropertyTypeClick = (item) => {
      //  selectedType(item.label);
        setPropertylabel(item.label);
        setContentVisible(false); // Close the dropdown content after property type is selected
    };


    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setContentVisible(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);
    
    const propertyType =[
        { src: "/assests/Img/any_icon.png", label: "Residential" },
        { src: "/assests/Img/Apartment.png", label: "Commercial" },
        { src: "/assests/Img/home_icon.png", label: "Condominium" },
        { src: "/assests/Img/Condo_icon.png", label: "Land" },
        // { src: "/assests/Img/Townhome_icon.png", label: "Townhome" },
        // { src: "/assests/Img/MultiFamily__icon.png", label: "Multi-family" },
        // { src: "/assests/Img/Mobile_icon.png", label: "Mobile" },
        // { src: "/assests/Img/Farm_icon.png", label: "Farm" },
        // { src: "/assests/Img/Land_icon.png", label: "Land" }
    ]


 
    useEffect(() => {
        // if (reset == true) { 
           setPropertylabel("");
        // }
        
    }, [reset]);

    return (
        <>
            <div ref={dropdownRef} className='GeographicalFilters_area_hp'>
                <button onClick={toggleContentVisibility}>{propertylabel ? propertylabel : "Property Type" }<i className="fa-solid fa-angle-down ms-3"></i></button>

{  contentVisible &&  (
                <div className='GeographicalFilters_content_area_hp'>
                    <div className='GeographicalFilters_heading_content_area_hp'>
                        <h4>Property Type</h4>
                        {/* <a href="">Done</a> */}
                    </div>  <div className='mt-4 d-flex align-items-center justify-content-center flex-wrap'>
            {propertyType?.map((item, index) => (
                <a key={index} onClick={() => handlePropertyTypeClick(item)}className='PropertyTypeFilters_icon_hp'>
                    <img src={item.src} alt="" />
                    <p>{item.label}</p>
                </a>
            ))}
        </div>
                </div>)
                }

            </div>

        </>
    )
}

export default PropertyTypeFilters