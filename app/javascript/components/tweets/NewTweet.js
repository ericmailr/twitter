import React from "react";
import PropTypes from "prop-types";
import Avatar from "../Avatar";

function NewTweet(props) {
  // fetch new_tweet_path and then run form_for here, post tweets path to create
  // right now I'm not using new tweet controller action. problem? idk, but for now I think it's fine to just skip the new action

  const readySubmitButton = () => {
    let newTweetClassElementIndex = props.parentTweet ? 1 : 0;
    let submitButton = document.getElementsByClassName("submit-button")[
      newTweetClassElementIndex
    ];
    submitButton.classList.add(
      "submittable-button",
      "reply-color-background-hover"
    );
    submitButton.classList.remove("unsubmittable-button");
    if (
      document.getElementsByClassName("new-tweet-input")[
        newTweetClassElementIndex
      ].value === ""
    ) {
      submitButton.classList.remove(
        "submittable-button",
        "reply-color-background-hover"
      );
      submitButton.classList.add("unsubmittable-button");
    }
  };

  const submit = async () => {
    const csrf = document
      .querySelector("meta[name='csrf-token']")
      .getAttribute("content");
    let msg = "";
    msg = await fetch("/tweets", {
      method: "POST",
      body: JSON.stringify({
        parent_id: props.parentTweet ? props.parentTweet.id : null,
        content: document.getElementsByClassName("new-tweet-input")[0].value,
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
          <Avatar />
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
            <div className="submit-options"></div>
            <div
              className="submit-button unsubmittable-button"
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
};

export default NewTweet;
