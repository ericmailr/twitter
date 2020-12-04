import React from "react";
import PropTypes from "prop-types";
import Tweet from "./Tweet";

function Retweet(props) {
  return (
    <div>
      <Tweet
        tweet={props.quoted_tweet}
        tweeter={props.tweet.tweeter}
        updatedAt={props.updatedAt}
        isOgLiked={props.isLiked}
        isOgRetweeted={props.ogIsRetweeted}
        actionHeader={"retweet"}
      />
    </div>
  );
}

Retweet.propTypes = {
  tweet: PropTypes.object,
  quoted_tweet: PropTypes.object,
  updatedAt: PropTypes.string,
  isOgLiked: PropTypes.bool,
  isOgRetweeted: PropTypes.bool,
};

export default Retweet;
