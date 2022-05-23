import React, { Component } from "react";

class Counter extends Component {
  badgeClasses = () => {
    const { counter } = this.props;
    let classes = "badge badge-";
    classes += counter.value === 0 ? "warning" : "primary";
    return classes;
  };

  counterFormat = () => {
    const { counter } = this.props;
    if (counter.value === 0) return "zero";
    return counter.value;
  };

  render() {
    const { counter, children, onDecrement, onIncrement, onDelete } =
      this.props;
    return (
      <div className="container p-2">
        <div className="row">
          <div className="col-2">
            {children}
            <span className={this.badgeClasses()}>{this.counterFormat()}</span>
          </div>
          <div className="col-6">
            <button
              onClick={() => onIncrement(counter)}
              className=" btn btn-sm mx-4"
            >
              <strong>+</strong>
            </button>
            <button
              onClick={() => onDecrement(counter)}
              className=" btn btn-sm "
              disabled = {counter.value === 0 ? 'disabled' : ''}
            >
              <strong>-</strong>
            </button>
            <button
              onClick={() => onDelete(counter.id)}
              className="btn btn-danger btn-sm mx-4"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Counter;
