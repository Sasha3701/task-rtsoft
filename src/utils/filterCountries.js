import topTenCountries from "./topTenCountries";
import { REGIONS_ARR } from "../const";

const filterCountries = (all) => {
  const result = {};
  for (let region of REGIONS_ARR) {
    const regionCountries = all.filter((country) => country.region === region);
    const sortCountries = topTenCountries(regionCountries);
    const formattingData = sortCountries.map(item => ({ name: item.alpha3Code, value: item.population }))
    result[region] = formattingData;
  }
  return result
};

export default filterCountries;
