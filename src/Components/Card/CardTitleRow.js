import styled from "styled-components";

const CardTitleRow = styled.div`
  display: flex;
  padding-top: 0.5rem;
  align-items: center;
  @media (max-width: 400px) {
    flex-direction: column;
  }
`;

export default CardTitleRow;
