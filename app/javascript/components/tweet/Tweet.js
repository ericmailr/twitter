import React from "react";
import PropTypes from "prop-types";
import TweetTime from "./TweetTime";
import TweetInfo from "./TweetInfo";
import TweetOptions from "./TweetOptions";
//<a href={Routes.status_path(props.tweeterHandle, props.tweetId)}>        {props.tweetContent}      </a>
function Tweet(props) {
  return (
    <div style={getStyle()}>
      butt
      <TweetTime updatedAt={props.updatedAt} />
      <TweetInfo
        retweetCount={props.retweetCount}
        likesCount={props.retweetCount}
      />
      <TweetOptions tweetId={props.tweetId} />
    </div>
  );
}

const getStyle = () => {
  return {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
  };
};

Tweet.propTypes = {
  tweetId: PropTypes.number,
  tweetContent: PropTypes.string,
  tweeterHandle: PropTypes.string,
  updatedAt: PropTypes.string,
  retweetCount: PropTypes.number,
  likesCount: PropTypes.number,
};

export default Tweet;
