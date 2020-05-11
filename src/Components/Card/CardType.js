import styled from "styled-components";

const CardType = styled.div`
  flex: 1;
  margin: 0;
  padding: 0 1rem;
  text-align: right;
  @media (max-width: 400px) {
    text-align: left;
  }
`;

export default CardType;
