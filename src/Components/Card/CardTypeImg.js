import styled from "styled-components";

const CardTypeImg = styled.img.attrs(props => {
  let x;
  if (props.type.toLowerCase() === "vendor") {
    x =
      "https://images.vexels.com/media/users/3/157343/isolated/preview/fa058a304813b6d204d29253f5cb90d4-flat-home-house-icon-by-vexels.png";
  }
  if (props.type.toLowerCase() === "purchaser") {
    x =
      "https://cdn2.iconfinder.com/data/icons/ecommerce-solid-icons-vol-1/64/012-512.png";
  }
  return {
    src: x
  };
})`
  max-width: 50px;
  padding-left: 0.5rem;
  align-items: center;
`;

export default CardTypeImg;
