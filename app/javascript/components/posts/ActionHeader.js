import React from "react";
import PropTypes from "prop-types";

function ActionHeader(props) {
  return (
    <div className="action-header font-secondary">
      <span className="header-svg">
        <span>
          {
            {
              retweet: (
                <svg width="19px" height="19px" viewBox="0 0 24 24">
                  <g>
                    <path
                      fill="#8899a6"
                      d="M23.615 15.477c-.47-.47-1.23-.47-1.697 0l-1.326 1.326V7.4c0-2.178-1.772-3.95-3.95-3.95h-5.2c-.663 0-1.2.538-1.2 1.2s.537 1.2 1.2 1.2h5.2c.854 0 1.55.695 1.55 1.55v9.403l-1.326-1.326c-.47-.47-1.23-.47-1.697 0s-.47 1.23 0 1.697l3.374 3.375c.234.233.542.35.85.35s.613-.116.848-.35l3.375-3.376c.467-.47.467-1.23-.002-1.697zM12.562 18.5h-5.2c-.854 0-1.55-.695-1.55-1.55V7.547l1.326 1.326c.234.235.542.352.848.352s.614-.117.85-.352c.468-.47.468-1.23 0-1.697L5.46 3.8c-.47-.468-1.23-.468-1.697 0L.388 7.177c-.47.47-.47 1.23 0 1.697s1.23.47 1.697 0L3.41 7.547v9.403c0 2.178 1.773 3.95 3.95 3.95h5.2c.664 0 1.2-.538 1.2-1.2s-.535-1.2-1.198-1.2z"></path>
                  </g>
                </svg>
              ),
              reply: (
                <svg width="19px" height="19px" viewBox="0 0 24 24">
                  <g>
                    <path
                      fill="#8899a6"
                      d="M14.046 2.242l-4.148-.01h-.002c-4.374 0-7.8 3.427-7.8 7.802 0 4.098 3.186 7.206 7.465 7.37v3.828c0 .108.044.286.12.403.142.225.384.347.632.347.138 0 .277-.038.402-.118.264-.168 6.473-4.14 8.088-5.506 1.902-1.61 3.04-3.97 3.043-6.312v-.017c-.006-4.367-3.43-7.787-7.8-7.788z"></path>
                  </g>
                </svg>
              ),
              receivedReply: (
                <svg width="19px" height="19px" viewBox="0 0 24 24">
                  <g>
                    <path
                      fill="#8899a6"
                      d="M14.046 2.242l-4.148-.01h-.002c-4.374 0-7.8 3.427-7.8 7.802 0 4.098 3.186 7.206 7.465 7.37v3.828c0 .108.044.286.12.403.142.225.384.347.632.347.138 0 .277-.038.402-.118.264-.168 6.473-4.14 8.088-5.506 1.902-1.61 3.04-3.97 3.043-6.312v-.017c-.006-4.367-3.43-7.787-7.8-7.788z"></path>
                  </g>
                </svg>
              ),
              like: (
                <svg width="19px" height="19px" viewBox="0 0 24 24">
                  <g>
                    <path
                      fill="#8899a6"
                      d="M12 21.638h-.014C9.403 21.59 1.95 14.856 1.95 8.478c0-3.064 2.525-5.754 5.403-5.754 2.29 0 3.83 1.58 4.646 2.73.814-1.148 2.354-2.73 4.645-2.73 2.88 0 5.404 2.69 5.404 5.755 0 6.376-7.454 13.11-10.037 13.157H12z"></path>
                  </g>
                </svg>
              ),
            }[props.action === "quotetweet" ? "retweet" : props.action]
          }
        </span>
      </span>
      <span className="header-message font-secondary">
        {props.username}
        {
          {
            quotetweet: " Retweeted",
            retweet: " Retweeted",
            reply: " replied",
            receivedReply: " received a reply",
            like: " liked",
          }[props.action]
        }
      </span>
    </div>
  );
}

ActionHeader.propTypes = {
  username: PropTypes.string,
  action: PropTypes.string,
};

export default ActionHeader;
