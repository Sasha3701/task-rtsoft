import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { save } from "./store/regions/regionsSlice";
import api from "./api";
import { Regions } from "./components";
import { Pagination } from "@material-ui/core";
import { REGIONS_ARR } from "./const";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
} from "@material-ui/core";
import { Logo } from "./images";
import style from "./App.module.css";

const App = () => {
  const [isReady, setIsReady] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [countOnPage, setCountOnPage] = useState(3);
  const dispatch = useDispatch();

  const count = Math.ceil(REGIONS_ARR.length / countOnPage);
  const elements = REGIONS_ARR.slice(
    (currentPage - 1) * countOnPage,
    countOnPage * currentPage
  );

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

  const handleChangePage = (event, page) => {
    setCurrentPage(page);
  };

  return (
    isReady && (
      <div className={style.app}>
        <AppBar className={style.app__bar} position="static">
          <Toolbar>
            <Logo />
            <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar>
        <Regions elements={elements} />
        <Pagination
          onChange={handleChangePage}
          page={currentPage}
          count={count}
          shape="rounded"
          size="large"
          hidePrevButton
          hideNextButton
        />
      </div>
    )
  );
};

export default App;
