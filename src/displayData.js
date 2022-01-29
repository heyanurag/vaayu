import { advisory, getAQIStatus, getPollutantName } from "./utils";

const aqiElement = document.getElementById("aqi");
const aqiTextElement = document.getElementById("aqi-text");
const healthAdvisoryElement = document.getElementById("health-advise");
const timeObservedElement = document.getElementById("time-observed");
const locObservedElement = document.getElementById("loc-observed");
const attribution = document.getElementById("attribution");
const pollutantsContainer = document.getElementById("pollutant-container");
const template = document.getElementById("template");
const pollutantTemplate = template.content.querySelector(".pollutant");

const setAQIData = (data) => {
  const aqiText = getAQIStatus(data.aqi);
  const time = new Date(data.time.iso);

  aqiElement.textContent = data.aqi;
  aqiTextElement.textContent = aqiText;
  aqiTextElement.parentElement.classList = aqiText;
  healthAdvisoryElement.textContent = advisory[aqiText];
  locObservedElement.textContent = data.city.name;
  attribution.textContent = data.attributions[0].name;
  attribution.href = data.attributions[0].url;
  timeObservedElement.textContent = time.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
    timeZone: "UTC",
    timeZoneName: "short",
  });
};

const setPollutants = (data) => {
  while (pollutantsContainer.firstChild) {
    pollutantsContainer.removeChild(pollutantsContainer.lastChild);
  }

  for (const [key, value] of Object.entries(data.iaqi)) {
    const pollutantName = getPollutantName(key);

    if (!pollutantName) continue;

    const pollutantStatus = getAQIStatus(value.v);
    const pollutantTag = pollutantTemplate.cloneNode(true);

    pollutantTag.firstElementChild.classList.add(pollutantStatus);
    pollutantTag.firstElementChild.textContent = Math.round(value.v * 10) / 10;
    pollutantTag.lastElementChild.textContent = pollutantName;

    if (data.dominentpol === key) {
      pollutantTag.firstElementChild.classList.add(`${pollutantStatus}-ring`);
    }

    pollutantsContainer.appendChild(pollutantTag);
  }
};

const displayData = (data) => {
  setAQIData(data);
  setPollutants(data);
};

export { displayData };
