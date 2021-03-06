import React from "react";
import PropTypes from "prop-types";

function Retweet(props) {
  const retweetPopup = (e) => {
    let retweetModal = e.currentTarget.firstChild;
    retweetModal.style.display = "flex";
    const hideRetweetPopup = (e) => {
      retweetModal.style.display = "none";
      document.body.removeEventListener("click", hideRetweetPopup, true);
    };
    document.body.addEventListener("click", hideRetweetPopup, true);
  };

  return (
    <React.Fragment>
      <div
        className="option-container retweet-option"
        onClick={(e) => {
          retweetPopup(e);
        }}>
        <div className="retweet-modal">
          <div>
            <svg className="tweet-options-svg" viewBox="0 0 24 24">
              <g>
                <path
                  className="font-secondary"
                  d="M23.615 15.477c-.47-.47-1.23-.47-1.697 0l-1.326 1.326V7.4c0-2.178-1.772-3.95-3.95-3.95h-5.2c-.663 0-1.2.538-1.2 1.2s.537 1.2 1.2 1.2h5.2c.854 0 1.55.695 1.55 1.55v9.403l-1.326-1.326c-.47-.47-1.23-.47-1.697 0s-.47 1.23 0 1.697l3.374 3.375c.234.233.542.35.85.35s.613-.116.848-.35l3.375-3.376c.467-.47.467-1.23-.002-1.697zM12.562 18.5h-5.2c-.854 0-1.55-.695-1.55-1.55V7.547l1.326 1.326c.234.235.542.352.848.352s.614-.117.85-.352c.468-.47.468-1.23 0-1.697L5.46 3.8c-.47-.468-1.23-.468-1.697 0L.388 7.177c-.47.47-.47 1.23 0 1.697s1.23.47 1.697 0L3.41 7.547v9.403c0 2.178 1.773 3.95 3.95 3.95h5.2c.664 0 1.2-.538 1.2-1.2s-.535-1.2-1.198-1.2z"></path>
              </g>
            </svg>
            <div onClick={props.toggleRetweet}>
              {props.isRetweeted ? "Undo Retweet" : "Retweet"}
            </div>
          </div>
          <div>
            <svg className="tweet-options-svg" viewBox="0 0 24 24">
              <g>
                <path
                  className="font-secondary"
                  d="M22.132 7.653c0-.6-.234-1.166-.66-1.59l-3.535-3.536c-.85-.85-2.333-.85-3.182 0L3.417 13.865c-.323.323-.538.732-.63 1.25l-.534 5.816c-.02.223.06.442.217.6.14.142.332.22.53.22.023 0 .046 0 .068-.003l5.884-.544c.45-.082.86-.297 1.184-.62l11.337-11.34c.425-.424.66-.99.66-1.59zm-17.954 8.69l3.476 3.476-3.825.35.348-3.826zm5.628 2.447c-.282.283-.777.284-1.06 0L5.21 15.255c-.292-.292-.292-.77 0-1.06l8.398-8.398 4.596 4.596-8.398 8.397zM20.413 8.184l-1.15 1.15-4.595-4.597 1.15-1.15c.14-.14.33-.22.53-.22s.388.08.53.22l3.535 3.536c.142.142.22.33.22.53s-.08.39-.22.53z"></path>
              </g>
            </svg>
            <div>Quote Tweet</div>
          </div>
        </div>
        <div
          className="option-container-text"
          onMouseOver={props.mouseEnterColor}
          onMouseLeave={props.mouseLeaveColor}>
          <span className="svg-background">
            <svg className="tweet-options-svg retweet-svg" viewBox="0 0 24 24">
              <g>
                <path
                  className={props.isRetweeted ? "retweeted-color" : ""}
                  d={
                    props.isRetweeted
                      ? "M23.615 15.477c-.47-.47-1.23-.47-1.697 0l-1.326 1.326V7.4c0-2.178-1.772-3.95-3.95-3.95h-5.2c-.663 0-1.2.538-1.2 1.2s.537 1.2 1.2 1.2h5.2c.854 0 1.55.695 1.55 1.55v9.403l-1.326-1.326c-.47-.47-1.23-.47-1.697 0s-.47 1.23 0 1.697l3.374 3.375c.234.233.542.35.85.35s.613-.116.848-.35l3.375-3.376c.467-.47.467-1.23-.002-1.697zM12.562 18.5h-5.2c-.854 0-1.55-.695-1.55-1.55V7.547l1.326 1.326c.234.235.542.352.848.352s.614-.117.85-.352c.468-.47.468-1.23 0-1.697L5.46 3.8c-.47-.468-1.23-.468-1.697 0L.388 7.177c-.47.47-.47 1.23 0 1.697s1.23.47 1.697 0L3.41 7.547v9.403c0 2.178 1.773 3.95 3.95 3.95h5.2c.664 0 1.2-.538 1.2-1.2s-.535-1.2-1.198-1.2z"
                      : "M23.77 15.67c-.292-.293-.767-.293-1.06 0l-2.22 2.22V7.65c0-2.068-1.683-3.75-3.75-3.75h-5.85c-.414 0-.75.336-.75.75s.336.75.75.75h5.85c1.24 0 2.25 1.01 2.25 2.25v10.24l-2.22-2.22c-.293-.293-.768-.293-1.06 0s-.294.768 0 1.06l3.5 3.5c.145.147.337.22.53.22s.383-.072.53-.22l3.5-3.5c.294-.292.294-.767 0-1.06zm-10.66 3.28H7.26c-1.24 0-2.25-1.01-2.25-2.25V6.46l2.22 2.22c.148.147.34.22.532.22s.384-.073.53-.22c.293-.293.293-.768 0-1.06l-3.5-3.5c-.293-.294-.768-.294-1.06 0l-3.5 3.5c-.294.292-.294.767 0 1.06s.767.293 1.06 0l2.22-2.22V16.7c0 2.068 1.683 3.75 3.75 3.75h5.85c.414 0 .75-.336.75-.75s-.337-.75-.75-.75z"
                  }
                  fill="currentcolor"></path>
              </g>
            </svg>
          </span>
          {!props.isStatusOption && props.retweetsCount != 0 && (
            <span
              className={`option-count ${
                props.isRetweeted && "retweeted-color"
              }`}>
              {props.retweetsCount}
            </span>
          )}
        </div>
      </div>
    </React.Fragment>
  );
}

Retweet.propTypes = {
  tweetId: PropTypes.number,
  retweetsCount: PropTypes.number,
  isStatusOption: PropTypes.bool,
  isRetweeted: PropTypes.bool,
  toggleRetweet: PropTypes.func,
  mouseEnterColor: PropTypes.func,
  mouseLeaveColor: PropTypes.func,
};

export default Retweet;
