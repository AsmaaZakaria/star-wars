import React from "react";
import PropTypes from "prop-types";
import { Card } from "react-bootstrap";
import styled from "styled-components";

const StyledCard = styled(Card)`
  width: 18rem;
  margin: 0 0 30px;
  background-color: #212b2d;
  color: #ffb701;
  border: 1px solid;
  &:hover {
    -webkit-box-shadow: 0px 0px 7px 5px rgba(255, 147, 2, 0.83);
    -moz-box-shadow: 0px 0px 7px 5px rgba(255, 147, 2, 0.83);
    box-shadow: 0px 0px 7px 5px rgba(255, 147, 2, 0.83);
  }
`;

const CharacterCard = ({ character }) => {
  return (
    <StyledCard>
      <Card.Body>
        <Card.Title>{character.name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          {character.birth_year}
        </Card.Subtitle>
        <Card.Text>{character.gender}</Card.Text>
        <Card.Link
          style={{ color: "#5586a6" }}
          href={character.url.split("/api/")[1]}
        >
          Show more
        </Card.Link>
      </Card.Body>
    </StyledCard>
  );
};

CharacterCard.propTypes = {
  character: PropTypes.object.isRequired
};

export default CharacterCard;
