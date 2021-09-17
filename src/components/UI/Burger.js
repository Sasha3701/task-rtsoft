import styled from "styled-components";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { IconButton, Menu, MenuItem } from "@mui/material";
import { useState } from "react";

const StyledBurger = styled.div`
  margin: 0;
  padding: 0;
  @media (min-width: 699px) {
    display: none;
  }
`;

const Burger = ({ options, pickType }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <StyledBurger>
      <IconButton
        id="basic-button"
        aria-controls="basic-menu"
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <MoreVertIcon />
      </IconButton>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        {options.map(({ id, name, value }) => (
          <MenuItem key={id} onClick={() => { pickType(value); handleClose()}}>
            {name}
          </MenuItem>
        ))}
      </Menu>
    </StyledBurger>
  );
};

export default Burger;
