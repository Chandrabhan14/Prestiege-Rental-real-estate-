import { createSlice } from '@reduxjs/toolkit';
import api from '../utils/ApiConfig';

const initialState = {
    loading: false,
    error:false,
    property: [], // Initial state with an empty array
    popularProperties: [],
    propertyDetails:null
};

export const propertySlice = createSlice({
  name: 'property',
  initialState,
  reducers: {
    // Reducer to add items to the 'value' array
    setProperty: (state, action) => {
        state.property = [...action.payload];
      },
      setPopularProperties: (state,action) => {
          state.popularProperties = action.payload;
      },

      setPropertyDetails: (state,action) => {
        state.propertyDetails = action.payload;
    },

  },
});

export const { setProperty,setPopularProperties,setPropertyDetails } = propertySlice?.actions;

export const selectedProp = (state) => {
  return state?.property?.propertyDetails
}


export const fetchPopularPropperties= () => async (dispatch)=>{
   try{
    const response = await api.post(
      `/property/pagination`,
      {
        curPage: 1,
        perPage: 3,
        sortBy: 'createdAt',
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
    const data= response?.data?.data;
    dispatch(setPopularProperties(data))
   }catch(e){
      console.log(e)
   }
}

export default propertySlice.reducer;
