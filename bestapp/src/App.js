import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import "./App.css";
import styled from "@emotion/styled";
import CardList from "./components/CardList";
import { fetchItems } from "./actions/itemsActions";
import { AddCard } from "./components/AddCard";

const AppWrapper = styled.div`
  display: flex;
  box-sizing: border-box;
  width: 100vw;
  height: 100vh;
`;




const App = (props) => {


  useEffect(() => {
    props.fetchItems();
  }, []);

  return (
    <AppWrapper>
      <CardList items={props.items}/>
      <AddCard /> 
    </AppWrapper>
  );
};

const mapStateToProps = ({ items }) => ({
  items: items.items,
});

export default connect(mapStateToProps, { fetchItems })(App);
