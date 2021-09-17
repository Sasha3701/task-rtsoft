import styled from "styled-components";
import {
  AppBar,
  Toolbar
} from "@mui/material";
import { Button } from "./UI"
import { Logo } from "../images";

const StyledHeader = styled(AppBar)`
  background-color: white;
  box-shadow: none;
  border-bottom: 2px solid #e5e5e5;
`;

const StyledToolbar = styled(Toolbar)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;


const Header = () => {
  return (
    <StyledHeader position="static">
      <StyledToolbar>
        <Logo />
        <Button active={true}>
            1 X 3
        </Button>
      </StyledToolbar>
    </StyledHeader>
  );
};

export default Header;
