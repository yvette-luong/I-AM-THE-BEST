import React from "react";
import styled from "@emotion/styled";

const CardWrapper = styled.div`
  align-items: center;
  box-sizing: border-box;
  width: 100%;
  border: 1px solid black;
  border-radius: 10%;
  display: flex;
  flex-flow: column wrap;
  padding: 1.5rem;
`;

const CardTitle = styled.h3`
  padding: 0.4rem;
  border-bottom: 1px solid purple;
`;

const ItemCombinations = styled.div`
  padding: 0.5rem;
`;

const Card = ({ item }) => {
  const { name, bonus, built_with, combos, img } = item;
  return (
    <CardWrapper>
      <CardTitle>{name}</CardTitle>
      <img src={img}></img>
      {bonus}
      {built_with ? (
        <ItemCombinations>
          <h4>Built With: </h4> {built_with.item_1}, {built_with.item_2}
        </ItemCombinations>
      ) : (
        <ItemCombinations>
          <h4>Can be made into: </h4>
          {combos.map((item) => `${item} `)}
        </ItemCombinations>
      )}
    </CardWrapper>
  );
};

export default Card;
