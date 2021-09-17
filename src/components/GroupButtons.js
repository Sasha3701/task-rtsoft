import styled from "styled-components";
import { Button } from "./UI";
import { change } from '../store/countElements/countElementsSlice';
import { useDispatch, useSelector } from 'react-redux';


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

  @media (max-width: 700px) {
    display: none;
  }
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

  const countElements = useSelector(state => state.countElements.value)
  const dispatch = useDispatch()

  return (
    <StyledList>
      {buttons.map(({ id, name, content }) => (
        <StyledItem key={id} name={name}>
          <Button onClick={() => dispatch(change(name))} active={name === countElements}>
		  	{content}
		  </Button>
        </StyledItem>
      ))}
    </StyledList>
  );
};

export default GroupButtons;
