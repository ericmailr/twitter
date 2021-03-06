import React, { useState } from "react";
import PropTypes from "prop-types";
import Avatar from "../users/Avatar";

function NewTweet(props) {
  /* href={Routes.new_tweet_path({ parent_id: props.tweetId }) */
  // fetch new_tweet_path and then run form_for here, post tweets path to create
  const [submitButtonClasses, setSubmitButtonClasses] = useState(
    "unsubmittable-button"
  );

  const readySubmitButton = (e) => {
    if (e.currentTarget.value === "") {
      setSubmitButtonClasses("unsubmittable-button");
    } else {
      setSubmitButtonClasses("submittable-button reply-color-background-hover");
    }
  };

  const submit = async (e) => {
    let textAreaValue =
      e.currentTarget.parentElement.parentElement.firstChild.value;
    const csrf = document
      .querySelector("meta[name='csrf-token']")
      .getAttribute("content");
    let msg = "";
    msg = await fetch("/tweets", {
      method: "POST",
      body: JSON.stringify({
        parent_id: props.parentTweet ? props.parentTweet.id : null,
        content: textAreaValue,
      }),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "X-CSRF-Token": csrf,
      },
    });
    location.reload();
  };
  return (
    <div className="tweet-spacing">
      <div className="tweet-container">
        <div className="avatar-container">
          <Avatar avatar_public_id={props.avatar_public_id} />
        </div>
        <div className="tweet-content">
          <textarea
            className="new-tweet-input"
            rows={props.rows}
            placeholder={
              props.parentTweet ? "Tweet your reply" : "What's happening?"
            }
            onInput={readySubmitButton}
          />
          <div className="submit-new-tweet-container">
            <div className="submit-button-spacer"></div>
            <div
              className={"submit-button " + submitButtonClasses}
              onClick={submit}>
              {props.parentTweet ? "Reply" : "Tweet"}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

NewTweet.propTypes = {
  rows: PropTypes.number,
  parentTweet: PropTypes.object,
  avatar_public_id: PropTypes.string,
};

export default NewTweet;
