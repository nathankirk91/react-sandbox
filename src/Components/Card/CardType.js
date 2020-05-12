import styled from "styled-components";

const CardType = styled.div`
  display: flex;
  margin: 0;
  padding: 0 1rem;
  justify-items: flex-end;
  align-items: center;
  text-align: right;
  @media (max-width: 400px) {
    text-align: left;
  }
`;

export default CardType;
