import React from "react";
import PropTypes from "prop-types";

function Stats(props) {
  return (
    <React.Fragment>
      {props.count > 0 && (
        <a href="#">
          <span style={{ fontWeight: "700" }}>{props.count} </span>
          <span className="font-secondary">
            {props.count === 1 ? props.type.slice(0, -1) : props.type}
          </span>
        </a>
      )}
    </React.Fragment>
  );
}

Stats.propTypes = {
  type: PropTypes.string,
  count: PropTypes.number,
};

export default Stats;
