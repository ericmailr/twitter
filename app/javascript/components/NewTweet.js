import React from "react";
import PropTypes from "prop-types";
class NewTweet extends React.Component {
  render() {
    return (
      <React.Fragment>
        <p style={getStyle()}> Hello tweeter # {this.props.tweeterId}</p>
      </React.Fragment>
    );
  }
}

const getStyle = () => {
  return {};
};

NewTweet.propTypes = {
  tweeterId: PropTypes.number,
};
export default NewTweet;
