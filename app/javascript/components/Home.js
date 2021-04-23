import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import TopHeader from "./TopHeader";
import NewTweet from "./posts/NewTweet";
import PostList from "./PostList";

function Home({ postsProp, toggleModal }) {
  // could remove postsProp and just fetch...
  const [posts, setPosts] = useState(postsProp);
  const fetchPosts = async () => {
    let msg = await fetch(`/home`);
    let json = await msg.json();
    setPosts(() => {
      return json.content.posts;
    });
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  useEffect(() => {
    const updateInterval = setInterval(() => {
      fetchPosts();
    }, 5000);
    return () => {
      clearInterval(updateInterval);
    };
  }, [posts]);

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
