import React from "react";
import Card from "./Card";
import styled from "@emotion/styled";

const CardListWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-flow: row wrap;
  height: 100%;
  justify-content: center;
`;

const CardWrapper = styled.div`
  width: 25%;
  height: auto;
  margin: 1rem;
`;
const CardList = ({ items }) => {
  return (
    <CardListWrapper>
      {items.map((item, index) => (
        <CardWrapper key={index}>
          <Card item={item} />
        </CardWrapper>
      ))}
    </CardListWrapper>
  );
};

export default CardList;
