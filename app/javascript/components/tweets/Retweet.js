import React from "react";
import PropTypes from "prop-types";
import PostWrapper from "../PostWrapper";
//THINK I CAN DELETE THIS COMPONENT
function Retweet(props) {
  return (
    <div>
      <PostWrapper
        tweet={props.quoted_tweet}
        user={props.tweet.user}
        updatedAt={props.updatedAt}
        isOgLiked={props.isLiked}
        isOgRetweeted={props.isOgRetweeted}
        actionHeader={"retweet"}
        postType={"tweet"}
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
