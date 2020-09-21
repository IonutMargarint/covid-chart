import createReducer from "../main/store/createReducer";

const initialState = {
  isSecondChartLoaded: false,
};

function LOAD_SECONDARY_CHART(nextState, { isSecondChartLoaded }) {
  nextState.isSecondChartLoaded = isSecondChartLoaded;
}

export default createReducer(initialState, {
  LOAD_SECONDARY_CHART,
});
