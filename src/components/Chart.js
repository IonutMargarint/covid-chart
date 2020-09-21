import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

import { getDailyData, getStatesData } from "../api";
import { Line, Bar } from "react-chartjs-2";

import allActions from "../actions";

import styles from "./Chart.scss";

const Chart = ({
  data: { confirmed, deaths },
  interval,
  isLoaded,
  onLoadSecondaryChart,
}) => {
  const [dailyData, setDailyData] = useState([]);

  const [statesData, setStatesData] = useState([]);

  useEffect(() => {
    const loadDailyData = async () => {
      const data = await getDailyData();

      const statesData = await getStatesData();

      setStatesData(statesData);
      setDailyData(data);
    };

    loadDailyData();
  }, []);

  const globalLineChart =
    interval === "Global" ? (
      <Line
        data={{
          labels: dailyData.map(({ date }) => date),
          datasets: [
            {
              data: dailyData.map(({ confirmed }) => confirmed),
              label: "Infected",
              backgroundColor: "rgba(75,192,192,0.2)",
              borderColor: "rgba(75,192,192,1)",
              fill: true,
            },
            {
              data: dailyData.map(({ deaths }) => deaths),
              label: "Deaths",
              borderColor: "rgba(255, 0, 0, 1)",
              backgroundColor: "rgba(255,0,0,0.5)",
              fill: true,
            },
          ],
        }}
      />
    ) : null;

  const usaBarChart =
    interval === "USA" ? (
      <Bar
        data={{
          labels: ["Infected", "Deaths"],
          datasets: [
            {
              label: "People",
              backgroundColor: [
                "rgba(0, 0, 255, 0.5)",
                "rgba(0, 255, 0, 0.5)",
                "rgba(255, 0, 0, 0.5)",
                "rgba(242, 234, 0, 0.5)",
              ],
              hoverBackgroundColor: [
                "rgba(0, 77, 153)",
                "rgba(30, 102, 49)",
                "rgba(255, 51, 51)",
                "rgba(204, 153, 0)",
              ],
              data: [confirmed.value, deaths.value],
            },
          ],
        }}
        options={{
          legend: { display: false },
          title: { display: true, text: `All time state in ${interval}` },
          maintainAspectRatio: false,
        }}
        width={600}
        height={300}
        getElementAtEvent={(chartEl) => onLoadSecondaryChart(!!chartEl)}
      />
    ) : null;

  const formatData = (arr, daysToSubstract) => {
    const formattedData = arr.filter((day, index) => {
      let today = new Date();
      today.setDate(today.getDate() - daysToSubstract);

      let formatToday = today.toLocaleDateString("lv-LV").replace(/\./g, "-");

      formatToday = formatToday.toString().substring(0, formatToday.length - 1);

      const dateIndex = dailyData.findIndex((day) => day.date === formatToday);

      return index >= dateIndex ? day : null;
    });

    return formattedData;
  };

  const format7DaysData = formatData(dailyData, 7);

  const dailyLineChart =
    interval === "Last 7 days" ? (
      <Line
        data={{
          labels: format7DaysData.map(({ date }) => date),
          datasets: [
            {
              data: format7DaysData.map(({ confirmed }) => confirmed),
              label: "Infected",
              backgroundColor: "rgba(75,192,192,0.2)",
              borderColor: "rgba(75,192,192,1)",
              fill: true,
            },
            {
              data: format7DaysData.map(({ deaths }) => deaths),
              label: "Deaths",
              borderColor: "rgba(255, 0, 0, 1)",
              backgroundColor: "rgba(255,0,0,0.5)",
              fill: true,
            },
          ],
        }}
      />
    ) : null;

  const format30DaysData = formatData(dailyData, 30);

  const monthlyLineChart =
    interval === "Last Month" ? (
      <Line
        data={{
          labels: format30DaysData.map(({ date }) => date),
          datasets: [
            {
              data: format30DaysData.map(({ confirmed }) => confirmed),
              label: "Infected",
              backgroundColor: "rgba(75,192,192,0.2)",
              borderColor: "rgba(75,192,192,1)",
              fill: true,
            },
            {
              data: format30DaysData.map(({ deaths }) => deaths),
              label: "Deaths",
              borderColor: "rgba(255, 0, 0, 1)",
              backgroundColor: "rgba(255,0,0,0.5)",
              fill: true,
            },
          ],
        }}
      />
    ) : null;

  const drillDownChart = isLoaded ? (
    <Line
      data={{
        labels: statesData.map(({ provinceState }) => provinceState),
        datasets: [
          {
            data: statesData.map(({ confirmed }) => confirmed),
            label: "Infected",
            backgroundColor: "rgba(75,192,192,0.2)",
            borderColor: "rgba(75,192,192,1)",
          },
          {
            data: statesData.map(({ deaths }) => deaths),
            label: "Deaths",
            borderColor: "rgba(255, 0, 0, 1)",
            backgroundColor: "rgba(255,0,0,0.5)",
          },
        ],
      }}
    />
  ) : null;

  return (
    <div className={styles.container}>
      {globalLineChart}
      {dailyLineChart}
      {monthlyLineChart}
      <div className={styles.countryCharts}>
        {usaBarChart}
        {drillDownChart}
      </div>
    </div>
  );
};

export default connect(
  (state) => ({
    data: state.chartMain.data,
    dailyData: state.chartMain.dailyData,
    isLoaded: state.chartSecondary.isLoaded,
  }),
  (dispatch) => ({
    onLoadSecondaryChart: (secondaryChartState) =>
      dispatch(allActions.homeActions.loadSecondaryChart(secondaryChartState)),
  })
)(Chart);
