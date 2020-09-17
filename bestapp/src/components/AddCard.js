import React, { useReducer, useState } from 'react'
import { itemsReducer } from "../reducers/itemsReducer";
import { INITIAL_STATE } from '../reducers/itemsReducer'
import styled from "@emotion/styled";


const AddCardWrapper = styled.div`
align-items: center;
  box-sizing: border-box;
  width: 100%;
  border: 1px solid black;
  border-radius: 10%;
  display: flex;
  flex-flow: column wrap;
  padding: 1.5rem;
`
const AddItemWrapper = styled.div`
`
export const AddCard = () => {
    const [addCard, setAddCard] = useState('')
    const [state, dispatch]= useReducer(itemsReducer, INITIAL_STATE );

    const handleInput = (e) => {
        setAddCard(e.target.value);
    }

    const handleSubmit = () =>{
        dispatch({ type: ADD_CARD, payload: addCard })
        setAddCard('')
    };
    return(
        <AddCardWrapper>
            <AddItemWrapper>
                <input
                    name=""
                    type="text"
                    value={addCard}
                    onChange={handleInput}>
                </input>
                <button  className="add" onClick={handleSubmit}> Add to List</button>
            </AddItemWrapper>
        </AddCardWrapper>
    )
}