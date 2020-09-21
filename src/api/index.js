import axios from "axios";

const baseURL = "https://covid19.mathdro.id/api";

export const fetchData = async (selection) => {
  let dynamicUrl = baseURL;

  if (selection === "USA") {
    dynamicUrl = `${baseURL}/countries/${selection}`;
  }

  if (selection === "Global" || selection === "Last 7 days") {
    dynamicUrl = `${baseURL}/countries`;
  }

  try {
    const {
      data: { confirmed, deaths },
    } = await axios.get(dynamicUrl);

    return {
      confirmed,
      deaths,
    };
  } catch (error) {
    console.log(error);
  }
};

export const getDailyData = async () => {
  try {
    const { data } = await axios.get(`${baseURL}/daily`);

    const formatData = data.map((dailyData) => ({
      confirmed: dailyData.confirmed.total,
      deaths: dailyData.deaths.total,
      date: dailyData.reportDate,
    }));

    return formatData;
  } catch (error) {
    console.log(error);
  }
};

export const getStatesData = async () => {
  try {
    const { data } = await axios.get(`${baseURL}/confirmed`);

    const formatData = data
      .filter((states) => states.countryRegion === "US")
      .map((statesData) => ({
        confirmed: statesData.confirmed,
        deaths: statesData.deaths,
        provinceState: statesData.provinceState,
      }));

    return formatData;
  } catch (error) {
    console.log(error);
  }
};
