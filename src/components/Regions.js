import Region from "./Region/Region";
import styled from "styled-components";

const StyledList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: nowrap;
  list-style: none;
  padding: 0;
  margin: 0;
`;
const StyledItem = styled.li`
  padding: 0;
  margin: 0;
`;

const Regions = ({ elements }) => {
  return (
    <StyledList>
      {elements.map((region, index) => (
        <StyledItem key={index}>
          <Region key={index} region={region} />
        </StyledItem>
      ))}
    </StyledList>
  );
};

export default Regions;
