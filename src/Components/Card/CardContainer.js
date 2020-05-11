import styled from "styled-components";

const CardContainer = styled.div`
  margin: 0.5rem 0.5rem;
  background-color: white;
  border-style: solid;
  border-width: 1px;
  border-color: #dddfe2;
  border-radius: 4px;
  box-shadow: 0px 1.5px rgba(1, 1, 1, 0.15);
  :hover {
    cursor: pointer;
  }
  :active {
    background-color: #efefef;
  }
`;

export default CardContainer;
