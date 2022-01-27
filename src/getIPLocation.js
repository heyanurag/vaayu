const IPINFO_API_KEY = import.meta.env.VITE_IPINFO_API_KEY;

const getIPLocation = async () => {
  const response = await fetch(`https://ipinfo.io/?token=${IPINFO_API_KEY}`);
  const data = await response.json();
  const location = data.loc.split(",").map(Number).reverse();
  return location;
};

export { getIPLocation };
