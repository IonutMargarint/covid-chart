import * as actionTypes from "./actionTypes";

const loadChartData = (data) => {
  return (dispatch) => {
    dispatch({
      type: actionTypes.LOAD_CHART_DATA,
      data: data,
    });
  };
};

const loadChartDailyData = (dailyData) => {
  return (dispatch) => {
    dispatch({
      type: actionTypes.LOAD_CHART_DAILY_DATA,
      dailyData: dailyData,
    });
  };
};

const loadSecondaryChart = (secondaryChartState) => {
  return (dispatch) => {
    dispatch({
      type: actionTypes.LOAD_SECONDARY_CHART,
      isSecondChartLoaded: secondaryChartState,
    });
  };
};

const loadInterval = (interval) => {
  return (dispatch) => {
    dispatch({
      type: actionTypes.LOAD_INTERVAL,
      interval: interval,
    });
  };
};

export default {
  loadChartData,
  loadChartDailyData,
  loadSecondaryChart,
  loadInterval,
};
