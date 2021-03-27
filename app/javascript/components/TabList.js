import React from "react";
import PropTypes from "prop-types";

function TabList({ tabArray, contentType }) {
  return (
    <ul className="tab-list">
      {tabArray.map((tabInfo, index) => {
        return (
          <li
            key={index}
            className={
              contentType === tabInfo.contentType ? "selected-tab" : ""
            }>
            <a href={tabInfo.path}>{tabInfo.name}</a>
          </li>
        );
      })}
    </ul>
  );
}

TabList.propTypes = {
  tabArray: PropTypes.array,
  contentType: PropTypes.string,
};

export default TabList;
