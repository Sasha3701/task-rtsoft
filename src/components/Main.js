import { useState } from "react";
import { Regions } from "../components";
import { REGIONS_ARR } from "../const";
import { Pagination } from "@mui/material";
import styled from "styled-components";

const StyledMain = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #2c343c;
  position: absolute;
  top: 77px;
  left: 0;
  right: 0;
  bottom: 0;
`;

const Main = () => {
  const [isReady, setIsReady] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [countOnPage, setCountOnPage] = useState(3);

  const count = Math.ceil(REGIONS_ARR.length / countOnPage);
  const elements = REGIONS_ARR.slice(
    (currentPage - 1) * countOnPage,
    countOnPage * currentPage
  );

  const handleChangePage = (event, page) => {
    setCurrentPage(page);
  };

  return (
    <StyledMain>
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
    </StyledMain>
  );
};

export default Main;
