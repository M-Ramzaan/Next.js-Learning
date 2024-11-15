import Post from "./Post";
import classes from "./PostList.module.css";
function PostsList() {
  return (
    <ul className={classes.posts}>
      <li>
        <Post author="Ramzan" body="React.js is awesome." />
      </li>
      <li>
        <Post author="Mirha" body="Check out the full course." love="Nice" />
      </li>
    </ul>
  );
}

export default PostsList;
