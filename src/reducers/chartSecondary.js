import createReducer from "../main/store/createReducer";

const initialState = {
  isLoaded: false,
};

function LOAD_SECONDARY_CHART(nextState, { isLoaded }) {
  nextState.isLoaded = isLoaded;
}

export default createReducer(initialState, {
  LOAD_SECONDARY_CHART,
});
