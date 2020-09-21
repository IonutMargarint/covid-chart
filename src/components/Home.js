import React, { useEffect } from "react";
import { connect } from "react-redux";

import Header from "./Header";
import Footer from "./Footer";
import Chart from "./Chart";

import IntervalSelect from "./IntervalSelect";

import { fetchData } from "../api";

import allActions from "../actions";

const Home = ({ data, interval, onLoadData, onChangeInterval }) => {
  useEffect(() => {
    const isDataEmpty = Object.keys(data).length === 0;

    if (isDataEmpty) {
      const loadData = async () => {
        const data = await fetchData(data);

        onLoadData(data);
      };
      loadData();
    }
  }, [data, onLoadData]);

  const handleIntervalChange = async (interval) => {
    onChangeInterval(interval);
  };

  return (
    <>
      <Header />
      <IntervalSelect handleIntervalChange={handleIntervalChange} />
      <Chart data={data} interval={interval}></Chart>
      <Footer />
    </>
  );
};

export default connect(
  (state) => ({
    data: state.chartMain.data,
    interval: state.intervalFilter.interval,
  }),
  (dispatch) => ({
    onLoadData: (data) => dispatch(allActions.homeActions.loadChartData(data)),
    onChangeInterval: (interval) =>
      dispatch(allActions.homeActions.loadInterval(interval)),
  })
)(Home);
