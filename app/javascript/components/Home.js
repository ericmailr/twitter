import React from "react";
import PropTypes from "prop-types";
import TopHeader from "./TopHeader";
import NewTweet from "./posts/NewTweet";
import PostList from "./PostList";

function Home({ posts, toggleModal }) {
  return (
    <React.Fragment>
      <TopHeader header="Home" />
      <NewTweet rows={1} />
      <div id="divider"></div>
      <PostList posts={posts} toggleModal={toggleModal} />
    </React.Fragment>
  );
}

Home.propTypes = {
  posts: PropTypes.array,
  toggleModal: PropTypes.func,
};

export default Home;
