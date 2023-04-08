import { useState, useEffect } from 'react';
import axios from 'axios';

const useWeatherData = (lat, lng) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${process.env.7e913dd79864bf1f9905c265544b86d7}&units=metric`;
      try {
        const result = await axios(url);
        setData(result.data);
        setError(null);
      } catch (error) {
        setData(null);
        setError('Could not fetch weather data');
      }
    };
    fetchData();
  }, [lat, lng]);

  return { data, error };
};

export default useWeatherData;