const getAQIStatus = (aqi) => {
  if (aqi <= 50) return "good";
  else if (aqi <= 100) return "moderate";
  else if (aqi <= 150) return "usg";
  else if (aqi <= 200) return "unhealthy";
  else if (aqi <= 300) return "vu";
  else return "hazardous";
};

const getPollutantName = (shortname) => {
  if (shortname == "co") return "Carbon Monoxide";
  else if (shortname == "h") return "Hydrogen";
  else if (shortname == "no2") return "Nitrogen Oxide";
  else if (shortname == "o3") return "Ozone";
  else if (shortname == "pm10") return "PM (1.0)";
  else if (shortname == "pm25") return "PM (2.5)";
  else if (shortname == "so2") return "Sulphur Dioxide";
  else return null;
};

const advisory = {
  good: "No Risk, enjoy your day.",
  moderate: "Small concern for people sensitive to air pollution.",
  usg: "Children & Senior groups may experience health effects.",
  unhealthy: "Everyone may begin to experience health effects.",
  vu: "Everyone may experience more serious health effects.",
  hazardous: "Health warnings and emergency conditions.",
};

export { advisory, getAQIStatus, getPollutantName };
