const topTenCountries = (countries) => {
  const sortCountries = countries.sort(function(a, b){
    if (a.population > b.population) {
      return 1;
    }
    if (a.population < b.population) {
      return -1;
    }
    return 0;
  });
  if (sortCountries.length <= 10) {
    return sortCountries;
  }
  return sortCountries.slice(-10);
};

export default topTenCountries;
