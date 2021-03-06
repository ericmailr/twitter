import React from "react";
import PropTypes from "prop-types";

function TopHeader(props) {
  const mouseEnterColor = (e) => {
    e.currentTarget.style.color = `rgb(var(--reply-color))`;
    e.currentTarget.firstChild.style.backgroundColor = `rgba(var(--reply-color), 0.1)`;
    e.currentTarget.firstChild.classList.add("svg-hover");
  };

  const mouseLeaveColor = (e) => {
    e.currentTarget.style.color = "";
    e.currentTarget.firstChild.style.backgroundColor = "";
    e.currentTarget.firstChild.classList.remove("svg-hover");
  };

  const goBack = () => {
    history.back();
  };

  return (
    <div id="top-header">
      {props.goBack && (
        <a
          onClick={goBack}
          onMouseEnter={mouseEnterColor}
          onMouseLeave={mouseLeaveColor}>
          <div className="svg-background">
            <svg className="nav-svg" viewBox="0 0 24 24">
              <g>
                <path
                  d="M20 11H7.414l4.293-4.293c.39-.39.39-1.023 0-1.414s-1.023-.39-1.414 0l-6 6c-.39.39-.39 1.023 0 1.414l6 6c.195.195.45.293.707.293s.512-.098.707-.293c.39-.39.39-1.023 0-1.414L7.414 13H20c.553 0 1-.447 1-1s-.447-1-1-1z"
                  fill="rgb(var(--reply-color))"></path>
              </g>
            </svg>{" "}
          </div>
        </a>
      )}
      <div id="header-title">
        <h1>{props.header}</h1>
        {props.tweetCount && (
          <p className="tiny-note font-secondary">{props.tweetCount} Tweets</p>
        )}
      </div>
    </div>
  );
}

TopHeader.propTypes = {
  header: PropTypes.string,
  goBack: PropTypes.bool,
  tweetCount: PropTypes.number,
};

export default TopHeader;
