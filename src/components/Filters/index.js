import React from "react";
import styles from "./filters.module.css";
import { Button, Radio, ResponsiveGrid } from "../atoms";
import filtersOptions from "../../constants/filters.json";

function Filters({ onClear }) {
  return (
    <ResponsiveGrid className={styles.container}>
      {filtersOptions.map(({ label, key: optionKey, choices }) => (
        <div key={optionKey}>
          <h4 className={styles.optionHeading}>{label}</h4>
          <div className="mt-12">
            {choices.map(({ label: choiceLabel, value: choiceValue }) => (
              <Radio
                label={choiceLabel}
                key={choiceValue}
                id={`${optionKey}-${choiceValue}`}
                value={choiceValue}
                name={optionKey}
              />
            ))}
          </div>
        </div>
      ))}
      <div className="flex align-items-end justify-content-end">
        <Button secondary onClick={onClear}>
          Clear filter
        </Button>
      </div>
    </ResponsiveGrid>
  );
}

export default React.memo(Filters);