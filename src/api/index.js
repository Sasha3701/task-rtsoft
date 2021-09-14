import axios from "axios";

class Api {
  getInfo = async () => {
    const res = await axios.get(
      "https://restcountries.eu/rest/v2/all?fields=population;alpha3Code;region"
    );
    return res.data;
  };
}

const api = new Api()

export default api