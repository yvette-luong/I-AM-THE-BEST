import {
  FETCH_ITEMS_START,
  FETCH_ITEMS_FAILURE,
  FETCH_ITEMS_SUCCESS,
} from "../actions";

export const INITIAL_STATE = {
  items: [],
  errors: {},
};

export default function itemsReducer(state = INITIAL_STATE, { type, payload }) {
  switch (type) {
    case FETCH_ITEMS_START:
      return {
        ...state,
        fetching: true,
      };
    case FETCH_ITEMS_SUCCESS:
      return {
        ...state,
        fetching: false,
        items: payload,
      };
    case FETCH_ITEMS_FAILURE:
      return {
        ...state,
        fetching: false,
        errors: payload,
      };
    default:
      return state;
  }
}
