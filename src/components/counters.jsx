import React, { Component } from "react";
import Counter from "./counter";

const Counters = ({
  onReset,
  onDecrement,
  onDelete,
  onIncrement,
  counters,
}) => {
  return (
    <React.Fragment>
      <button className="btn btn-primary btn-sm m-4" onClick={onReset}>
        Reset
      </button>
      {counters.map((counter) => (
        <Counter
          onDelete={onDelete}
          onIncrement={onIncrement}
          onDecrement={onDecrement}
          key={counter.id}
          counter={counter}
        >
          {" "}
          <strong>id : {counter.id}</strong>{" "}
        </Counter>
      ))}
    </React.Fragment>
  );
};

export default Counters;
