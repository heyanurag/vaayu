const AQI_API_KEY = import.meta.env.VITE_AQI_API_KEY;

const getAQIData = async ([lng, lat]) => {
  const response = await fetch(
    `https://api.waqi.info/feed/geo:${lat};${lng}/?token=${AQI_API_KEY}`
  );
  const data = await response.json();
  // console.log(data);
  return data.data;
};

export { getAQIData };
