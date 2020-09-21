import React from "react";
import { FormControl, NativeSelect } from "@material-ui/core";

import styles from "./IntervalSelect.scss";

const IntervalSelect = ({ handleIntervalChange }) => {
  const sections = {
    items: [
      { value: "Global", label: "Global" },
      { value: "USA", label: "USA" },
      { value: "SevenDays", label: "Last 7 days" },
      { value: "LastMonth", label: "Last Month" },
    ],
  };

  return (
    <FormControl className={styles.formControl}>
      <NativeSelect
        defaultValue=""
        onChange={(e) => handleIntervalChange(e.target.value)}
      >
        {sections.items.map((section, key) => (
          <option key={key} value={section.label}>
            {section.label}
          </option>
        ))}
      </NativeSelect>
    </FormControl>
  );
};

export default IntervalSelect;
