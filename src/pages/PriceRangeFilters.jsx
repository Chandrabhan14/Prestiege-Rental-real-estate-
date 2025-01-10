// import React, { useEffect, useRef, useState } from 'react'

// function PriceRangeFilters({ selectedPrice, reset }) {


//     const [contentVisible, setContentVisible] = useState(false);
//     const [minValue, setMinValue] = useState("");
//     const [maxValue, setMaxValue] = useState("");
//     const dropdownRef = useRef(null);


//     console.log(reset, "reset=====");

//     useEffect(() => {
//         if (minValue != '' && maxValue !== '') {
//             selectedPrice({ min: minValue, max: maxValue });
//         }
//     }, [minValue, maxValue]);
//     console.log("respbutton clicked", reset)


//     useEffect(() => {
//         // if (reset) { 
//         console.log("respbutton clicked")
//         setMaxValue("");
//         setMinValue("");
//         // }

//     }, [reset]);


//     const handleMaxChange = (e) => {
//         setMaxValue(e.target.value);
//         setContentVisible(false); // Close dropdown after selecting maximum
//     };

//     const toggleContentVisibility = () => {
//         setContentVisible(!contentVisible);
//     };


//     useEffect(() => {
//         const handleClickOutside = (event) => {
//             if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
//                 setContentVisible(false);
//             }
//         };
//         document.addEventListener('mousedown', handleClickOutside);

//         return () => {
//             document.removeEventListener('mousedown', handleClickOutside);
//         };
//     }, []);

//     return (
//         <>
//             <div ref={dropdownRef} className='GeographicalFilters_area_hp'>
//                 <button onClick={toggleContentVisibility} > {minValue && maxValue ? (
//                     `${minValue} - ${maxValue} Price`
//                 ) : (
//                     'Price Range'
//                 )} <i class="fa-solid fa-angle-down ms-3"></i></button>

//                 {contentVisible && (<div className='GeographicalFilters_content_area_hp'>
//                     <div className='GeographicalFilters_heading_content_area_hp'>
//                         <h4>Price Range</h4>
//                         {/* <a onClick={clearValues}>Clear</a> */}
//                     </div>
//                     <div className='mt-4 d-flex align-items-center justify-content-between'>
//                         <select name="min" id="min" className='form-select mx-1' defaultValue={minValue} onChange={(e) => setMinValue(e.target.value)}>
//                             <option value="" selected disabled >Minimum</option>
//                             <option value="100" selected >100</option>
//                             <option value="5000000" selected>5000000</option>
//                             <option value="50000000" selected>50000000</option>
//                         </select>
//                         <select name="max" id="max" className='form-select mx-1' defaultValue={maxValue} onChange={handleMaxChange} >
//                             <option value="" selected disabled>Maximum</option>
//                             <option value="5000000" selected>5000000</option>
//                             <option value="50000000" selected>50000000</option>
//                             <option value="500000000" selected>500000000</option>
//                         </select>
//                     </div>
//                 </div>)}


//             </div>
//         </>
//     )
// }

// export default PriceRangeFilters




// import React, { useEffect, useRef, useState } from 'react';
// import RangeSlider from 'react-range-slider-input';
// import 'react-range-slider-input/dist/style.css'; // Import the CSS for the slider

// function PriceRangeFilters({ selectedPrice, reset }) {
//     const [contentVisible, setContentVisible] = useState(false);
//     const [rangeValues, setRangeValues] = useState([100, 5000000]);
//     const dropdownRef = useRef(null);

//     useEffect(() => {
//         if (rangeValues[0] !== '' && rangeValues[1] !== '') {
//             selectedPrice({ min: rangeValues[0], max: rangeValues[1] });
//         }
//     }, [rangeValues]);

//     useEffect(() => {
//         setRangeValues([100, 5000000]);
//     }, [reset]);

//     const toggleContentVisibility = () => {
//         setContentVisible(!contentVisible);
//     };

//     useEffect(() => {
//         const handleClickOutside = (event) => {
//             if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
//                 setContentVisible(false);
//             }
//         };
//         document.addEventListener('mousedown', handleClickOutside);

//         return () => {
//             document.removeEventListener('mousedown', handleClickOutside);
//         };
//     }, []);

//     return (
//         <>
//             <div ref={dropdownRef} className='GeographicalFilters_area_hp'>
//                 <button onClick={toggleContentVisibility}>
//                     {/* {rangeValues[0] && rangeValues[1] ? (
//                         `$${rangeValues[0]} - $${rangeValues[1]} Price`
//                     ) : (
//                         'Price Range'
//                     )}  */}
                    
//                     Price Range <i className="fa-solid fa-angle-down ms-3"></i>
//                 </button>

//                 {contentVisible && (
//                     <div className='GeographicalFilters_content_area_hp'>
//                         <div className='GeographicalFilters_heading_content_area_hp'>
//                             <h4>Price Range</h4>
//                         </div>
//                         <div className='mt-4'>
//                             <RangeSlider
//                                 min={100}
//                                 max={5000000}
//                                 step={50}
//                                 value={rangeValues}
//                                 onInput={(values) => setRangeValues(values)}
//                                 rangeSlideDisabled={false}
//                                 rangeStyle={{ width: '100%' }}
//                             />
//                             <div className='d-flex justify-content-between mt-2'>
//                                 <span>Min: ${rangeValues[0]}</span>
//                                 <span>Max: ${rangeValues[1]}</span>
//                             </div>
//                         </div>
//                     </div>
//                 )}
//             </div>
//         </>
//     );
// }

// export default PriceRangeFilters;



import React, { useEffect, useRef, useState } from 'react';
import RangeSlider from 'react-range-slider-input';
import 'react-range-slider-input/dist/style.css'; // Import the CSS for the slider
import { debounce } from 'lodash';

function PriceRangeFilters({ selectedPrice, reset }) {
    const [contentVisible, setContentVisible] = useState(false);
    const [rangeValues, setRangeValues] = useState([100000, 10000000]);
    const dropdownRef = useRef(null);

    // Function to format numbers with commas
    const formatNumber = (num) => {
        return new Intl.NumberFormat('en-US').format(num);
    };

    useEffect(() => {
        if (rangeValues[0] !== '' && rangeValues[1] !== '') {
            selectedPrice({ min: rangeValues[0], max: rangeValues[1] });
        }
    }, [rangeValues]);

    useEffect(() => {
        setRangeValues([100000, 10000000]);
    }, [reset]);

    const toggleContentVisibility = () => {
        setContentVisible(!contentVisible);
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


    const debouncedSetRangeValues = debounce((values) => {
        setRangeValues(values);
    }, 10); // Adjust delay as necessary (300 ms is an example)

    const handleInput = (values) => {
        debouncedSetRangeValues(values);
    };


    return (
        <>
            <div ref={dropdownRef} className='GeographicalFilters_area_hp'>
                <button onClick={toggleContentVisibility}>
                    Price Range <i className="fa-solid fa-angle-down ms-3"></i>
                </button>

                {contentVisible && (
                    <div className='GeographicalFilters_content_area_hp'>
                        <div className='GeographicalFilters_heading_content_area_hp'>
                            <h4>Price Range</h4>
                        </div>
                        <div className='mt-4'>
                            <RangeSlider
                                min={100000}
                                max={10000000}
                                step={50}
                                value={rangeValues}
                                onInput={handleInput}
                                rangeSlideDisabled={false}
                                rangeStyle={{ width: '100%' }}
                            />
                            <div className='d-flex justify-content-between mt-2'>
                                <span>Min: ${formatNumber(rangeValues[0])}</span>
                                <span >Max: ${formatNumber(rangeValues[1])}</span>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
}

export default PriceRangeFilters;
