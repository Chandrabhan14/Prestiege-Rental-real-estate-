
import React, { useCallback, useEffect, useRef, useState } from 'react';
import api from '../utils/ApiConfig';
import { toast } from 'react-toastify';
import Autosuggest from 'react-autosuggest';
import debounce from 'lodash/debounce';

function GeographicalFilters({ selectedGeo, reset, onSelectGeo }) {
  const [contentVisible, setContentVisible] = useState(false);
  const [nearList, setNearList] = useState([]);
  const [address, setAddress] = useState("");
  const dropdownRef = useRef(null);
  const [suggestions, setSuggestions] = useState([]);
  const [searchingValue, setSearchingValue] = useState("");

  const areaOptions = [
    'Eagle Beach', 'Palm Beach', 'Malmok', 'Noord', 'Ayo', 'Oranjestad', 
    'Paradera', 'Pos Chiquito', 'San Nicolas', 'Santa Cruz', 'Savaneta', 'Tanki Leendert'
  ];

  const handleChange = (e) => {
    setSearchingValue(e.target.value);
  };

  const toggleContentVisibility = () => {
    setContentVisible(!contentVisible);
  };

  const handleClick = (item) => {
    selectedGeo(item);
    setContentVisible(false); // Close dropdown
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
    setNearList([]);
    setAddress("");
  }, [reset]);

  const handleSuggestionSelected = (event, { suggestion }) => {
    onSelectGeo(false, suggestion?.id);
  };

  const handleSuggestionsFetchRequested = useCallback(
    debounce(async (value) => {
      try {
        const response = await api.get(`/property/getbytitle?letter=${value}`);
        const data = response.data;
        setSuggestions(data);
      } catch (error) {
        console.error('Error fetching suggestions:', error);
      }
    }, 300),
    []
  );

  return (
    <>
      <div className="input-group Searching_filter_items_area Searching_filter_search_input_hp GeographicalFilters_area_hp"  style={{width: "100%" }}>
        <div style={{width: "100%" }}>
          <Autosuggest
            suggestions={suggestions ?? []}
            onSuggestionsFetchRequested={({ value }) => handleSuggestionsFetchRequested(value)}
            getSuggestionValue={(suggestion) => suggestion.title}
            renderSuggestion={(suggestion) => (
              <div style={{ cursor: "pointer" }}>
                {suggestion?.title}
              </div>
            )}
            inputProps={{
              placeholder: 'Stock Searches.....',
              value: searchingValue?.trim() || '',
              onChange: handleChange,
            }}
            onSuggestionSelected={handleSuggestionSelected}
          />
                  <button type="button">
          <i className="fa-solid fa-magnifying-glass"></i>
        </button>
        </div>

      </div>

      {/* Area Dropdown */}
      <div className="GeographicalFilters_area_hp" ref={dropdownRef}>
        <button onClick={toggleContentVisibility}>
          Area <i className="fa-solid fa-angle-down ms-3"></i>
        </button>

        {contentVisible && (
          <div
            style={{
              position: 'absolute',
              top: '100%',
              left: '0',
              width: '100%',
              zIndex: 3,
              background: '#fff',
              border: '1px solid #ddd',
              padding: '8px',
              borderRadius: '4px',
              maxHeight: '150px',
              overflowY: 'auto'
            }}
          >
            {areaOptions.map((area, index) => (
              <div
                key={index}
                style={{ padding: '8px', cursor: 'pointer' }}
                onClick={() => handleClick(area)}
              >
                {area}
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}

export default GeographicalFilters;
