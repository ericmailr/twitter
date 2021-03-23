import React from "react";
import PropTypes from "prop-types";
import Nav from "./Nav";
import Login from "./Login";
import SuggestedSection from "./SuggestedSection";
import TopHeader from "./TopHeader";
import NewTweet from "./tweets/NewTweet";
import PostList from "./PostList";
import PostWrapper from "./PostWrapper";

/* don't forget, you can destructure props like so const {current_user, authenticity_token, etc.} = props */
function App(props) {
  const renderMainContent = () => {
    let mainContent = null;
    switch (props.mainContent) {
      case "tweets#index":
        mainContent = (
          <React.Fragment>
            <TopHeader header="Home" />
            <NewTweet rows={1} />
            <div id="divider"></div>
            <PostList posts={props.posts} />
          </React.Fragment>
        );
        break;
      case "tweets#show":
        mainContent = (
          <React.Fragment>
            <PostWrapper
              tweet={props.tweet}
              updatedAt={props.tweet.updated_at_full}
              updatedAtBrief={props.tweet.updated_at_brief}
              isLiked={props.tweetIsLiked}
              postType="status"
            />
            {props.tweet.children.map((reply) => {
              return (
                <PostWrapper
                  key={reply.id}
                  tweet={reply}
                  updatedAt={reply.updated_at_brief}
                  replyingTo={props.tweet.user.handle}
                  postType="tweet"
                />
              );
            })}
          </React.Fragment>
        );
        break;
      default:
        mainContent = (
          <React.Fragment>
            <TopHeader header="Home" />
            <NewTweet rows={1} />
            <div id="divider"></div>
            <PostList posts={props.posts} />;
          </React.Fragment>
        );
    }
    return mainContent;
  };
  return (
    <div id="container">
      {props.current_user ? (
        <div id="main-container">
          <Nav
            handle={props.current_user.handle}
            username={props.current_user.username}
          />
          <div id="main-content">{renderMainContent()}</div>
          <div id="search-container">
            <form action="/search" method="get">
              <div className="search-input-container font-secondary">
                <svg className="search-svg" viewBox="0 0 24 24">
                  <g>
                    <path
                      d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"
                      fill="currentcolor"></path>
                  </g>
                </svg>
                <input
                  type="text"
                  name="query"
                  id="query"
                  placeholder="Search Twitter"
                  className="search-input"
                />
              </div>
            </form>
            <SuggestedSection followable_users={[]} />
          </div>

          <div id="modal-container"></div>
        </div>
      ) : (
        <Login
          authenticity_token={props.authenticity_token}
          flash={props.flash}
        />
      )}
      <div id="modal-container"></div>
    </div>
  );
}

App.propTypes = {
  current_user: PropTypes.object,
  authenticity_token: PropTypes.string,
  flash: PropTypes.string,
  posts: PropTypes.array,
  tweet: PropTypes.object,
  tweetIsLiked: PropTypes.bool,
  main_content: PropTypes.string,
};

export default App;
