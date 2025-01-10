import React, { useEffect, useRef, useState } from 'react'

function RoomsFilters({ selectedBed, selectedBath, reset }) {

    const [contentVisible, setContentVisible] = useState(false);
    const [minValue, setMinValue] = useState("");
    const [maxValue, setMaxValue] = useState("");

    const [bathminValue, setBathMinValue] = useState("");
    const [bathmaxValue, setBathMaxValue] = useState("");

    const dropdownRef = useRef(null);

 const minOptions = [1, 2, 3, 4, 5];
  const maxOptions = [1, 2, 3, 4, 5];

  const bathMinOptions = [1, 2, 3, 4, 5];
  const bathMaxOptions = [1, 2, 3, 4, 5];
    const toggleContentVisibility = () => {
        setContentVisible(!contentVisible);
    };

    useEffect(() => {
        if (minValue != "" && maxValue != "") {
            selectedBed({ min: minValue, max: maxValue });

        }
        if (bathminValue != "" && bathmaxValue != "") {

            selectedBath({ min: bathminValue, max: bathmaxValue });


        }

    }, [minValue, maxValue, bathmaxValue, bathminValue]);

    

    const handleBathMaxChange = (e) => {
        setBathMaxValue(e.target.value);
        setContentVisible(false); // Close dropdown after selecting maximum
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


    useEffect(() => {
        // if (reset == true) { 
        setMaxValue("");
        setMinValue("");
        setBathMinValue("");   // }
        setBathMaxValue("");


    }, [reset]);

    return (
        <>
            <div ref={dropdownRef} className='GeographicalFilters_area_hp'>
                <button onClick={toggleContentVisibility} > {minValue && maxValue && bathminValue && bathmaxValue ? (
                    `${minValue} - ${maxValue} Bed & ${bathminValue} - ${bathmaxValue} Bath`
                ) : (
                    'Room'
                )} <i class="fa-solid fa-angle-down ms-3"></i></button>


                {contentVisible && (<div className='GeographicalFilters_content_area_hp'>
                    <div className='GeographicalFilters_heading_content_area_hp'>
                        <h4>Rooms</h4>
                        {/* <a href="">Done</a> */}
                    </div>
                    <div className='mt-4'>
                      <h6>Bedroom</h6>
      <div className='mt-3 d-flex align-items-center justify-content-between'>
        <select
          name="min"
          id="min"
          className='form-select mx-1'
          value={minValue}
          onChange={(e) => {
            setMinValue(e.target.value);
            // if (e.target.value > maxValue) {
            //   setMaxValue('');
            // }
          }}
        >
          <option value="" disabled>Minimum</option>
          {minOptions.map((option) => (
            <option
              key={option}
              value={option}
              disabled={maxValue && option > maxValue}
            >
              {option}
            </option>
          ))}
        </select>
        
        <select
          name="max"
          id="max"
          className='form-select mx-1'
          value={maxValue}
          onChange={(e) => setMaxValue(e.target.value)}
        >
          <option value="" disabled>Maximum</option>
          {maxOptions.map((option) => (
            <option
              key={option}
              value={option}
              disabled={minValue && option < minValue}
            >
              {option}
            </option>
          ))}
        </select> </div>
                    </div>

                    <div className='mt-3'>
      <h6>Bathroom</h6>
      <div className='mt-3 d-flex align-items-center justify-content-between'>
        <select
          name="bathmin"
          id="bathmin"
          className='form-select mx-1'
          value={bathminValue}
          onChange={(e) => {
             setBathMinValue(e.target.value);
            // if (e.target.value > bathmaxValue) {
            //   setBathMaxValue('');
            // }
          }}
        >
          <option value="" disabled>Minimum</option>
          {bathMinOptions.map((option) => (
            <option
              key={option}
              value={option}
              disabled={bathmaxValue && option > bathmaxValue}
            >
              {option}
            </option>
          ))}
        </select>
        
        <select
          name="bathmax"
          id="bathmax"
          className='form-select mx-1'
          value={bathmaxValue}
          onChange={(e) => setBathMaxValue(e.target.value)}
        >
          <option value="" disabled>Maximum</option>
          {bathMaxOptions.map((option) => (
            <option
              key={option}
              value={option}
              disabled={bathminValue && option < bathminValue}
            >
              {option}
            </option>
          ))}
        </select>
      </div>
    </div>
                </div>)}


            </div>

        </>
    )
}

export default RoomsFilters