import React from "react";
import { Container } from "react-bootstrap";
import { Switch, Route } from "react-router-dom";
import NotFound from "./NotFound";
import Header from "./Header";
import charactersList from "../modules/character/components/CharactersList";
import CharacterView from "../modules/character/components/CharacterView";

const App = () => {
  return (
    <Container>
      <Header />
      <Switch>
        <Route exact path="/" component={charactersList} />
        <Route exact path="/people/" component={charactersList} />
        <Route exact path="/people/:id" component={CharacterView} />
        <Route path="*" component={NotFound} />
      </Switch>
    </Container>
  );
};

export default App;
