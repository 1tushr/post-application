import {
  FETCH_ITEMS_LOADING,
  FETCH_ITEMS_SUCCESS,
  FETCH_ITEMS_FAILURE,
} from "./actionsType";

export const fetchItems = () => {
  return (dispatch) => {
    dispatch({ type: FETCH_ITEMS_LOADING });

    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => {
        dispatch({ type: FETCH_ITEMS_SUCCESS, payload: data });
      })
      .catch((error) => {
        dispatch({ type: FETCH_ITEMS_FAILURE, payload: error.message });
      });
  };
};
