import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Container, Row, Col } from "react-bootstrap";
import Loader from "../../../components/Loader";
import CharacterCard from "./CharacterCard";
import { fetchCharacters } from "../actions/fetchCharacters";

const mapStateToProps = state => ({
  characters: state.characters.characters
});

const mapDispatchToProps = {
  fetchCharacters
};

const CharactersList = props => {
  useEffect(() => {
    props.fetchCharacters();
    // eslint-disable-next-line
  }, []);

  const renderCharactersList = () => {
    if (!props.characters.length) {
      return <Loader />;
    }

    return props.characters.map(character => (
      <Col key={character.url}>
        <CharacterCard character={character} />
      </Col>
    ));
  };

  return (
    <Container>
      <Row>{renderCharactersList()}</Row>
    </Container>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(CharactersList);
