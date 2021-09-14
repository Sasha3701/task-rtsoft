import topTenCountries from "./topTenCountries";
import { REGIONS_ARR } from "../const";

const filterCountries = (all) => {
  const result = {};
  for (let region of REGIONS_ARR) {
    const regionCountries = all.filter((country) => country.region === region);
    const sortCountries = topTenCountries(regionCountries)
    result[region] = sortCountries;
  }
  return result
};

export default filterCountries;
