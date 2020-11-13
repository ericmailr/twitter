import React from "react";
import PropTypes from "prop-types";

function TweetOptions(props) {
  return (
    <div>
      <a href={Routes.new_tweet_path({ parent_id: props.tweetId })}> c </a>
    </div>
  );
}

TweetOptions.propTypes = {
  tweetId: PropTypes.number,
};

export default TweetOptions;
