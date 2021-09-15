import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { save } from "./store/regions/regionsSlice";
import api from "./api";
import { Region } from "./components";
import { REGIONS_ARR } from "./const";

const App = () => {
  const [isReady, setIsReady] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    api
      .getInfo()
      .then((res) => {
        dispatch(save(res));
      })
      .then(() => {
        setIsReady(true);
      })
      .catch((e) => {
        console.log(e);
      });
  }, [dispatch]);

  return (
    isReady && (
      <div style={{ backgroundColor: '#2c343c' }}>
        {REGIONS_ARR.map((region, index) => (
          <Region key={index} region={region} />
        ))}
      </div>
    )
  );
};

export default App;
