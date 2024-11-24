import Post from "./Post";
import NewPost from "./NewPost";
import classes from "./PostList.module.css";
import { useState } from "react";
function PostsList() {
  const [enteredBody, setEnteredBody] = useState("");
  const [enteredAuthor, setEnteredAuthor] = useState("");

  function bodyChangeHandler(event) {
    setEnteredBody(event.target.value);
  }

  function authorChangeHandler(event) {
    setEnteredAuthor(event.target.value);
  }

  return (
    <>
      <NewPost
        onBodyChange={bodyChangeHandler}
        onAuthorChange={authorChangeHandler}
      />
      <ul className={classes.posts}>
        <li>
          <Post author={enteredAuthor} body={enteredBody} />
        </li>
        <li>
          <Post author="Mirha" body="Please check out the full course!" />
        </li>
      </ul>
    </>
  );
}

export default PostsList;
