import styled from "styled-components";
import React from "react";

const StatusBackground = styled.div`
  background-color: lightgray;
  height: 24px;
  position: relative;
`;

const ProgressDiv = styled.div`
  height: 100%;
  width: ${props => `${props.status * 100}%`};
  background-color: lightgreen;
  z-index: 10;
`;

const ProgressText = styled.p`
  position: absolute;
  left: 50%;
  top: 50%;
  z-index: 20;
  margin: 0;
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
`;

const CardStatusRow = props => (
  <React.Fragment>
    <div style={{ padding: "0.5rem" }}>
      <StatusBackground>
        <ProgressDiv status={props.status} />
        <ProgressText>{`${props.status * 100}%`}</ProgressText>
      </StatusBackground>
    </div>
  </React.Fragment>
);

export default CardStatusRow;
