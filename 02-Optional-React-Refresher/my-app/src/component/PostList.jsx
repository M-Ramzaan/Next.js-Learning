import Post from "./Post";
import NewPost from "./NewPost";
import classes from "./PostList.module.css";
import Modal from "./Modal";
import { useState } from "react";

function PostsList({ isPosting, onStopPosting }) {
  let modalContent = null;

  if (isPosting) {
    modalContent = (
      <Modal onClose={onStopPosting}>
        <NewPost onCancel={onStopPosting} />
      </Modal>
    );
  }

  return (
    <>
      {modalContent}
      <ul className={classes.posts}>
        <li>
          <Post author="Mirha" body="Please check out the full course!" />
        </li>
      </ul>
    </>
  );
}

export default PostsList;
