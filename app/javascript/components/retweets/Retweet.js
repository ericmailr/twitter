import React from "react";
import PropTypes from "prop-types";
import Tweet from "../tweets/Tweet";

function Retweet(props) {
  return (
    <div>
      {/* A RETWEET WITH A COMMENT IS CALLED A QUOTE TWEET */}
      {props.comment ? (
        <div>
          <Tweet
            tweet={props.retweet}
            tweeter={props.retweeter}
            updatedAt={props.updatedAt}
            parentHandle={null}
          />
          <div className="quoted">
            <Tweet
              tweet={props.tweet}
              tweeter={props.tweeter}
              updatedAt={props.tweetUpdatedAt}
              parentHandle={null}
            />
          </div>
        </div>
      ) : (
        <div>
          <span className="tweet-header font-secondary">
            <svg width="19px" height="19px" viewBox="0 0 24 24">
              <g>
                <path
                  fill="#8899a6"
                  d="M23.615 15.477c-.47-.47-1.23-.47-1.697 0l-1.326 1.326V7.4c0-2.178-1.772-3.95-3.95-3.95h-5.2c-.663 0-1.2.538-1.2 1.2s.537 1.2 1.2 1.2h5.2c.854 0 1.55.695 1.55 1.55v9.403l-1.326-1.326c-.47-.47-1.23-.47-1.697 0s-.47 1.23 0 1.697l3.374 3.375c.234.233.542.35.85.35s.613-.116.848-.35l3.375-3.376c.467-.47.467-1.23-.002-1.697zM12.562 18.5h-5.2c-.854 0-1.55-.695-1.55-1.55V7.547l1.326 1.326c.234.235.542.352.848.352s.614-.117.85-.352c.468-.47.468-1.23 0-1.697L5.46 3.8c-.47-.468-1.23-.468-1.697 0L.388 7.177c-.47.47-.47 1.23 0 1.697s1.23.47 1.697 0L3.41 7.547v9.403c0 2.178 1.773 3.95 3.95 3.95h5.2c.664 0 1.2-.538 1.2-1.2s-.535-1.2-1.198-1.2z"></path>
              </g>
            </svg>
            <span style={{ marginLeft: "10px" }}>
              {props.retweeter.handle} Retweeted
            </span>
          </span>
          <Tweet
            tweet={props.tweet}
            tweeter={props.tweeter}
            updatedAt={props.tweetUpdatedAt}
            parentHandle={null}
          />
        </div>
      )}
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
