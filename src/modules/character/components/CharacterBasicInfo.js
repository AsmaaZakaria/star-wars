import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { Row, Col } from "react-bootstrap";
import styled from "styled-components";

const StyledRow = styled(Row)`
  text-align: center;
`;

const Span = styled.span`
  font-size: 20px;
  color: #ffb701;
`;

// const Circle = styled(Span)`
//   border-radius: 50%;
//   color: ${props => (props.color ? props.color : "n/a")};
//   background-color: ${props => (props.color ? props.color : "n/a")};
//   height: 30px;
//   width: 30px;
//   display: inline-block;
// `;

const Div = styled.div`
  padding: 20px;
  border: 1px solid #ffb701;
  border-radius: 15px;
`;

const CharacterBasicInfo = ({ character }) => {
  return (
    <Fragment>
      <h3>Basic Info:</h3>
      <Div>
        <StyledRow>
          <Col>
            <p>
              <Span>Birth Year: </Span>
              {character.birth_year}
            </p>
          </Col>
          <Col>
            <p>
              <Span>Gender: </Span>
              {character.gender}
            </p>
          </Col>
        </StyledRow>
        <StyledRow>
          <Col>
            <p>
              <Span>Height: </Span>
              {character.height}
            </p>
          </Col>
          <Col>
            <p>
              <Span>Mass: </Span>
              {character.mass}
            </p>
          </Col>
        </StyledRow>
        <StyledRow>
          <Col>
            <p>
              <Span>Hair Color: </Span>
              {character.hair_color}
              {/* <Circle color={character.hair_color} /> */}
            </p>
          </Col>
          <Col>
            <p>
              <Span>Skin Color: </Span>
              {character.skin_color}
              {/* <Circle color={character.skin_color} /> */}
            </p>
          </Col>
          <Col>
            <p>
              <Span>Eye Color: </Span>
              {character.eye_color}
              {/* <Circle color={character.eye_color} /> */}
            </p>
          </Col>
        </StyledRow>
      </Div>
    </Fragment>
  );
};

CharacterBasicInfo.propTypes = {
  character: PropTypes.object.isRequired
};

export default CharacterBasicInfo;
