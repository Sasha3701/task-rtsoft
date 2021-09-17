import { Button as MuiButton } from "@mui/material"
import FavoriteIcon from "@mui/icons-material/Favorite";
import styled from "@emotion/styled"

const StyledButton = styled(MuiButton)`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 16px;
    position: relative;
    color: #0000008A;
    line-height: 16px;
    letter-spacing: 2px;
    size: 14px;
    &::before {
        content: '';
        position: absolute;
        height: 2px;
        bottom: -2px;
        left: 0;
        right: 0;
        background-color: ${({ active }) => active ? "#C96C66" : "#e5e5e5"};
    };
    &:hover {
        background-color: #0000000A;
    }
`
const StyledFavoriteIcon = styled(FavoriteIcon)`
    width: 20px;
    height: 20px;
    margin-bottom: 7px;
    color: ${({ active }) => active ? "#C96C66" : "#0000008A"};
`

const Button = ({ children, active }) => {
    return (
        <StyledButton active={active}>
            <StyledFavoriteIcon active={active}/>
            {children}
        </StyledButton>
    )
}

export default Button