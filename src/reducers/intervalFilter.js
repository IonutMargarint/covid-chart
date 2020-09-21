import createReducer from "../main/store/createReducer";

const initialState = {
  interval: "Global",
};

function LOAD_INTERVAL(nextState, { interval }) {
  nextState.interval = interval;
}

export default createReducer(initialState, {
  LOAD_INTERVAL,
});
