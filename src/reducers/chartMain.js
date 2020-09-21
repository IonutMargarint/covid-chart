import createReducer from "../main/store/createReducer";

const initialState = {
  data: {},
  dailyData: [],
};

function LOAD_CHART_DATA(nextState, { data }) {
  nextState.data = data;
}

function LOAD_CHART_DAILY_DATA(nextState, { data }) {
  nextState.data = data;
}

export default createReducer(initialState, {
  LOAD_CHART_DATA,
  LOAD_CHART_DAILY_DATA,
});
