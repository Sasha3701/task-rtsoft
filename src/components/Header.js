import styled from "styled-components";
import {
  AppBar,
  Toolbar
} from "@mui/material";
import { Logo } from "../images";
import GroupButtons from './GroupButtons';

const StyledHeader = styled(AppBar)`
  background-color: white;
  box-shadow: none;
  border-bottom: 2px solid #e5e5e5;
`;

const StyledToolbar = styled(Toolbar)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 21px;
`;


const Header = () => {
  return (
    <StyledHeader position="static">
      <StyledToolbar>
        <Logo />
        <GroupButtons />
      </StyledToolbar>
    </StyledHeader>
  );
};

export default Header;
