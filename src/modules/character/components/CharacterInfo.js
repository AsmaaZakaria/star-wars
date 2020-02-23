import React from "react";
import { ListGroup } from "react-bootstrap";
import styled from "styled-components";

const Div = styled.div`
  padding-top: 20px;
`;

const ListItem = styled(ListGroup.Item)`
  background-color: #212b2d;
  color: #5586a6;
  border: 1px solid #ffb701;
`;

const CharacterInfo = ({ header, data, attr }) => {
  return (
    <Div>
      <h3>{header}</h3>
      <ListGroup horizontal>
        {data.length ? (
          data.map(d => <ListItem key={d[attr]}>{d[attr]}</ListItem>)
        ) : (
          <ListItem>{data[attr]}</ListItem>
        )}
      </ListGroup>
    </Div>
  );
};

export default CharacterInfo;
