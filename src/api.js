import axios from 'axios';

const API_KEY = 'YOUR_GOOGLE_SHEET_API_KEY';
const BASE_URL = 'https://sheets.googleapis.com/v4/spreadsheets/1Cc-H-5gRbGf7zUDtD1h6iiTUnFS1yh1E6d9IutN0mp8/values';

// Fetch data from YearPositionBaseTotalDays sheet
export const getYearPositionBaseTotalDays = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/YearPositionBaseTotalDays?key=${API_KEY}`);
    return response.data.values;
  } catch (error) {
    console.error('Error fetching YearPositionBaseTotalDays data:', error);
  }
};

// Fetch data from YearPositionCount sheet
export const getYearPositionCount = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/YearPositionCount?key=${API_KEY}`);
    return response.data.values;
  } catch (error) {
    console.error('Error fetching YearPositionCount data:', error);
  }
};
