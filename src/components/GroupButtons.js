import styled from "styled-components";
import { Button } from "./UI";

const buttons = [
  {
    id: 0,
    name: "pag",
    content: "1 X 3",
  },
  {
    id: 1,
    name: "nopag",
    content: "2 X 3",
  },
  {
    id: 2,
    name: "smart",
    content: "SMART",
  },
];

const StyledList = styled.ul`
	display: flex;
	list-style: none;
	margin: 0;
	padding: 0;
	box-sizing: border-box;
`;
const StyledItem = styled.li`
	margin: 0;
	paddig: 0;
	box-sizing: border-box;
	margin-right: 58px;
	&:last-child {
		margin: 0;
	}
`;
const GroupButtons = () => {
  return (
    <StyledList>
      {buttons.map(({ id, name, content }) => (
        <StyledItem key={id} name={name}>
          <Button>
		  	{content}
		  </Button>
        </StyledItem>
      ))}
    </StyledList>
  );
};

export default GroupButtons;
