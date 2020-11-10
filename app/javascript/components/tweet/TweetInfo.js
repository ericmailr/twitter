import React from "react";
import PropTypes from "prop-types";

class TweetInfo extends React.Component {
  render() {
    return (
      <div style={setStyle()}>
        {this.props.retweetCount}
        {this.props.likesCount}
      </div>
    );
  }
}

const setStyle = () => {
  return {
    borderStyle: "solid",
    borderWidth: "thin",
    borderLeft: "none",
    borderRight: "none",
    padding: "5px",
  };
};

TweetInfo.propTypes = {
  retweetCount: PropTypes.number,
  likesCount: PropTypes.number,
};
export default TweetInfo;
