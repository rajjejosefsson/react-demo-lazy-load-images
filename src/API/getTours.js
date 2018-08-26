import axios from 'axios';

export const getTours = async () => {
  try {
    const tours = await axios(process.env.REACT_APP_GET_TOURS_URL);
    return tours.data;
  } catch (err) {
    return { data: { Error: err.message } };
  }
};
