import styled from "styled-components";
import {
  AppBar,
  Toolbar
} from "@mui/material";
import { Logo } from "../images";
import GroupButtons from './GroupButtons';
import { Burger } from './UI';
import { useDispatch } from 'react-redux';
import { change } from '../store/countElements/countElementsSlice';

const options = [
  {
    id: 0,
    name: "1x3",
    value: "pag"
  },
  {
    id: 1,
    name: "2x3",
    value: "nopag"
  },
  {
    id: 2,
    name: "smart",
    value: "smart"
  }
]

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

  const dispatch = useDispatch()

  const handleClick = value => {
    dispatch(change(value))
  }

  return (
    <StyledHeader position="static">
      <StyledToolbar>
        <Logo />
        <GroupButtons />
        <Burger options={options} pickType={handleClick}/>
      </StyledToolbar>
    </StyledHeader>
  );
};

export default Header;
