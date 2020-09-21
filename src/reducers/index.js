import chartMain from "./chartMain";
import chartSecondary from "./chartSecondary";
import intervalFilter from "./intervalFilter";

import { combineReducers } from "redux";

const rootReducer = combineReducers({
  chartMain,
  chartSecondary,
  intervalFilter,
});

export default rootReducer;
