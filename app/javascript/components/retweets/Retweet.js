import React from "react";
import PropTypes from "prop-types";
import Avatar from "../../assets/avatar.png";
import Tweet from "../tweets/Tweet";

function Retweet(props) {
  return (
    <div>
      {props.comment ? (
        <div>
          <Tweet
            tweet={props.retweet}
            tweeter={props.retweeter}
            updatedAt={props.updatedAt}
            parentHandle={null}
          />
          <div className="retweeted">
            <Tweet
              tweet={props.tweet}
              tweeter={props.tweeter}
              updatedAt={props.tweetUpdatedAt}
              parentHandle={null}
            />
          </div>
        </div>
      ) : null}
    </div>
  );
}

Tweet.propTypes = {
  retweet: PropTypes.object,
  tweet: PropTypes.object,
  tweeter: PropTypes.object,
  retweeter: PropTypes.object,
  updatedAt: PropTypes.string,
  tweetUpdatedAt: PropTypes.string,
  comment: PropTypes.string,
};

export default Retweet;
