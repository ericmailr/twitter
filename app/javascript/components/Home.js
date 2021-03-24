import React from "react";
import PropTypes from "prop-types";
import TopHeader from "./TopHeader";
import NewTweet from "./tweets/NewTweet";
import PostList from "./PostList";

function Home(props) {
  return (
    <React.Fragment>
      <TopHeader header="Home" />
      <NewTweet rows={1} />
      <div id="divider"></div>
      <PostList posts={props.posts} />
    </React.Fragment>
  );
}

Home.propTypes = {
  posts: PropTypes.array,
};

export default Home;
