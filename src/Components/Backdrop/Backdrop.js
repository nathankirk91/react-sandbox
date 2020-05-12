import React from "react";
import "./Backdrop.css";
import styled from "styled-components";

const BackdropDiv = styled.div``;

const Backdrop = props => <div className="backdrop" onClick={props.click} />;

export default Backdrop;
