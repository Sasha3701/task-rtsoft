import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { save } from "./store/regions/regionsSlice";
import api from "./api";
import { Header, Main } from "./components";

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
      <>
        <Header/>
        <Main />
      </>
    )
  );
};

export default App;
