import { useState } from "react";
import { Regions } from "../components";
import { REGIONS_ARR } from "../const";
import { Pagination } from "@mui/material";
import styled from "styled-components";
import { useSelector } from "react-redux";

const counts = {
  pag: 3,
  nopag: 6,
  smart: 6,
};

const StyledMain = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #2c343c;
  min-height: calc(100vh - 77px);
`;

const StyledPag = styled(Pagination)`
  margin-bottom: 20px;
  & .MuiButtonBase-root {
    color: white;
    border: 1px solid white;
    &[aria-current=true] {
      background-color: #C96C66;
    }
  }
`

const Main = () => {
  const countElem = useSelector((state) => state.countElements.value);
  const [currentPage, setCurrentPage] = useState(1);

  const count = Math.ceil(REGIONS_ARR.length / counts[countElem]);
  const elements = REGIONS_ARR.slice(
    (currentPage - 1) * counts[countElem],
    counts[countElem] * currentPage
  );

  const handleChangePage = (event, page) => {
    setCurrentPage(page);
  };

  return (
    <StyledMain>
      <Regions elements={elements} />
      {count > 1 ? (
        <StyledPag
          onChange={handleChangePage}
          page={currentPage}
          count={count}
          shape="rounded"
          size="large"
          hidePrevButton
          hideNextButton
        />
      ) : null}
    </StyledMain>
  );
};

export default Main;
