import React from "react";
import PropTypes from "prop-types";
import Tweet from "./tweets/Tweet";

function QuoteTweet(props) {
  return (
    <div>
      <Tweet
        tweet={props.comment}
        user={props.comment.retweeter}
        updatedAt={props.commentUpdatedAt}
      />
      <div className="quoted">
        <Tweet
          tweet={props.quoteTweet}
          user={props.quoteTweet.user}
          updatedAt={props.quoteTweetUpdatedAt}
        />
      </div>
    </div>
  );
}

QuoteTweet.propTypes = {
  quoteTweet: PropTypes.object,
  comment: PropTypes.object,
  commentUpdatedAt: PropTypes.string,
  quoteTweetUpdatedAt: PropTypes.string,
};

export default QuoteTweet;
