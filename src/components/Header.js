import React from "react";
import SWLogo from "./../images/Star-Wars-logo.png";
import styled from "styled-components";

const StyledHeader = styled.header`
  text-align: center;
  margin: 5%;
`;

const Img = styled.img`
  width: 30%;
`;

const Header = () => {
  return (
    <StyledHeader>
      <Img src={SWLogo} alt="star wars logo" />
    </StyledHeader>
  );
};

export default Header;
