import React from "react";
import PropTypes from "prop-types";
import Avatar from "../Avatar";
import StatusReplyHeader from "../statuses/StatusReplyHeader";
import TweetOptions from "./TweetOptions";
import ActionHeader from "./ActionHeader";

function Tweet(props) {
  const clickTweetHandler = (e) => {
    if (!e.target.closest("#modal")) {
      window.location.href = Routes.status_path(
        props.user.handle,
        props.tweet.id
      );
    }
  };

  const addStopPropagation = (e) => {
    e.stopPropagation();
  };

  return (
    <div
      onClick={!props.newReply ? clickTweetHandler : null}
      className={
        props.isReply ? "post-container" : "post-container post-border"
      }
      style={{
        paddingTop: props.newReply ? "10px" : "",
        cursor: props.newReply ? "auto" : "",
        marginBottom: props.isParent ? "-5px" : "",
      }}>
      {props.actionHeader && (
        <ActionHeader
          username={props.user.username}
          action={props.actionHeader}
        />
      )}
      <div className="tweet-container">
        <div className="avatar-container">
          <Avatar />
          {props.isParent && <div className="reply-connector"></div>}
        </div>
        <div className="tweet-content">
          <div className="tweet">
            <div>
              <div className="tweet-header">
                <a
                  href={Routes.profile_path(props.tweet.user.handle)}
                  onClick={addStopPropagation}>
                  <span className={"username"}>
                    {props.tweet.user.username}
                  </span>
                  <span className={"font-secondary handle"}>
                    {" @"}
                    {props.tweet.user.handle}
                  </span>
                </a>
                <span className={"font-secondary"}>
                  {" · "}
                  {props.updatedAt}
                </span>
              </div>
              {/*only shows under status */}
              {props.replyingTo && (
                <StatusReplyHeader parentHandle={props.replyingTo} />
              )}
              <div>{props.tweet.content}</div>
            </div>
          </div>
          {props.newReply && (
            <span style={{ padding: "15px 0" }}>
              <StatusReplyHeader parentHandle={props.tweet.user.handle} />
            </span>
          )}
          {!props.hideOptions && (
            <TweetOptions
              tweet={props.tweet}
              updatedAt={props.updatedAt}
              commentCount={props.tweet.children.length}
              retweetsCount={props.retweetsCount}
              likesCount={props.likesCount}
              isLiked={props.isLiked}
              isRetweeted={props.isRetweeted}
              isStatusOption={false}
              toggleLike={props.toggleLike}
              toggleRetweet={props.toggleRetweet}
            />
          )}
        </div>
      </div>
    </div>
  );
}

Tweet.propTypes = {
  tweet: PropTypes.object,
  user: PropTypes.object,
  updatedAt: PropTypes.string,
  replyingTo: PropTypes.string,
  isLiked: PropTypes.bool,
  isParent: PropTypes.bool,
  isReply: PropTypes.bool,
  isRetweeted: PropTypes.bool,
  actionHeader: PropTypes.string,
  toggleLike: PropTypes.func,
  hideOptions: PropTypes.bool,
  newReply: PropTypes.bool,
};

export default Tweet;
