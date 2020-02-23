import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";
import styled from "styled-components";
import Loader from "../../../components/Loader";
import CharacterInfo from "./CharacterInfo";
import CharacterBasicInfo from "./CharacterBasicInfo";
import { fetchCharacter } from "./../actions/fetchCharacter";

const Header = styled.h1`
  color: #ffb701;
  text-align: center;
  font-size: 3em;
`;

const StyledLink = styled(Link)`
  position: fixed;
  bottom: 20px;
  right: 50px;
  font-size: 18px;
`;

const mapStateToProps = (state, ownProps) => {
  if (ownProps.match.params.id) {
    return {
      character: state.characters.character,
      films: state.characters.characterFilms,
      species: state.characters.characterSpecies,
      vehicles: state.characters.characterVehicles,
      starships: state.characters.characterStarships,
      homeworld: state.characters.characterHomeworld
    };
  }
};

const mapDispatchToProps = {
  fetchCharacter
};

const CharacterView = props => {
  const { character, fetchCharacter, match } = props;

  useEffect(() => {
    fetchCharacter(match.params.id);
    // eslint-disable-next-line
  }, []);

  if (!character) {
    return <Loader />;
  }

  return (
    <Container style={{ padding: "20px" }}>
      <Header>{character.name}</Header>
      <CharacterBasicInfo character={character} />
      {props.homeworld && (
        <CharacterInfo header="Home World" data={props.homeworld} attr="name" />
      )}
      {props.films && (
        <CharacterInfo header="Films" data={props.films} attr="title" />
      )}
      {props.species.length ? (
        <CharacterInfo header="Species" data={props.species} attr="name" />
      ) : null}
      {props.vehicles.length ? (
        <CharacterInfo header="Vehicles" data={props.vehicles} attr="name" />
      ) : null}
      {props.starships.length ? (
        <CharacterInfo header="Starships" data={props.starships} attr="name" />
      ) : null}
      <StyledLink to="/people">Back To List</StyledLink>
    </Container>
  );
};

CharacterView.propTypes = {
  match: PropTypes.object.isRequired,
  fetchCharacter: PropTypes.func.isRequired,
  character: PropTypes.object,
  homeworld: PropTypes.object,
  films: PropTypes.arrayOf(PropTypes.object).isRequired,
  species: PropTypes.arrayOf(PropTypes.object).isRequired,
  vehicles: PropTypes.arrayOf(PropTypes.object).isRequired,
  starships: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(CharacterView);
