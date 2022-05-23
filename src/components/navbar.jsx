import React, { Component } from "react";

const Navbar = ({ totalCount }) => {
  return (
    <React.Fragment>
      <nav class="navbar navbar-light bg-light">
        <div class="container-fluid">
          <span class="navbar-brand mb-0 h1">
            Total{" "}
            <span className="badge badge-pill badge-secondary">
              {totalCount}
            </span>
          </span>
        </div>
      </nav>
    </React.Fragment>
  );
};

export default Navbar;
