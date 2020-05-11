import React from "react";

import CardContainer from "./CardContainer";
import CardTitleRow from "./CardTitleRow";
import CardTitle from "./CardTitle";
import CardType from "./CardType";
import CardProperty from "./CardProperty";

const Card = props => {
  return (
    <CardContainer>
      <CardTitleRow>
        <CardTitle>{props.title}</CardTitle>
        <CardType>{props.type}</CardType>
      </CardTitleRow>
      <CardProperty>{props.address}</CardProperty>
    </CardContainer>
  );
};

export default Card;
