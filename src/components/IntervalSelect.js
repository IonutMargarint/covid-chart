import React from "react";
import { FormControl, NativeSelect, Grid } from "@material-ui/core";

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
    <Grid
      container
      direction="column"
      alignItems="center"
      justify="center"
      style={{ minHeight: "10vh" }}
    >
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
    </Grid>
  );
};

export default IntervalSelect;
