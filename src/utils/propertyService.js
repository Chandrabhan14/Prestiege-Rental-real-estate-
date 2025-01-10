
import api from "./ApiConfig";

const propertyService = {

  getProperty: async (propertyId) => {
    try {
      const response = await api.get(`/properties/${propertyId}`);
      return response.data;
    } catch (error) {
      throw error.response.data.message;
    }
  },
  getAll: async () => {
    try {
      const response = await api.get(`/properties/get-all`);
      return response.data;
    } catch (error) {
      throw error.response.data.message;
    }
  },

  contacUs: async (payload) => {
    try {
      const response = await api.post(`/contact-us/create_contact_us`, payload);
      return response.data;
    } catch (error) {
      throw error.response.data.message;
    }
  },

  propertyInquire: async (payload) => {
    try {
      const response = await api.post(`/contact-us/propertyInquire`, payload);
      return response.data;
    } catch (error) {
      throw error.response.data.message;
    }
  },


  homePageSearch: async (payload) => {
    try {
      const response = await api.post(`/property/homePageSearch`, payload);
      return response.data;
    } catch (error) {
      throw error.response.data.message;
    }
  },
  
};

export default propertyService;
