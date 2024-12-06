import { Link } from "react-router-dom";
import classes from "./Post.module.css";
// const names = ["Ramzan", "Mirha"];
function Post({ id, author, body }) {
  // const chosenName = Math.random() > 0.5 ? names[0] : names[1];
  return (
    <li className={classes.post}>
      <Link to={id}>
        <p className={classes.author}>{author}</p>
        <p className={classes.text}>{body}</p>
        {/* <p>{chosenName}</p>
      <p>Rect.js is awesome</p> */}
      </Link>
    </li>
  );
}

export default Post;
