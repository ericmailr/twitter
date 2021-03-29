import React from "react";
import PropTypes from "prop-types";
import SuggestedFollow from "./SuggestedFollow";

function SuggestedSection(props) {
  const suggestedFollows = props.followable_users.map((user, index) => {
    return (
      <SuggestedFollow
        key={user.id}
        user={user}
        last={props.followable_users.length === index + 1}
      />
    );
  });

  return (
    <div className="suggested-section">
      <h2> Who to follow </h2>
      <div id="who-to-follow">{suggestedFollows}</div>
    </div>
  );
}

SuggestedSection.propTypes = {
  followable_users: PropTypes.array,
};

export default SuggestedSection;
