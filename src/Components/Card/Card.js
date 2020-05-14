import React from "react";

import CardContainer from "./CardContainer";
import CardTitleRow from "./CardTitleRow";
import CardTitle from "./CardTitle";
import CardType from "./CardType";
//import CardTypeImg from "./CardTypeImg";
import CardSettlement from "./CardSettlement";
import CardProperty from "./CardProperty";
import CardStatusRow from "./CardStatusRow";

const Card = props => {
  const handleClickCard = props => {
    alert(`You clicked on ${props}`);
  };

  return (
    <CardContainer onClick={handleClickCard.bind(this, props.title)}>
      <CardTitleRow>
        <CardTitle>{props.title}</CardTitle>
        <CardType>
          <p>{props.type}</p>
        </CardType>
      </CardTitleRow>
      <CardSettlement>
        <b>Settlement Date: </b>
        {props.settlementDate.getDate()}/{props.settlementDate.getMonth() + 1}/
        {props.settlementDate.getFullYear()}
      </CardSettlement>
      <CardProperty>{props.address}</CardProperty>
      <CardStatusRow status={props.status} />
    </CardContainer>
  );
};

export default Card;
