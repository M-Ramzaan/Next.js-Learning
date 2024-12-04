import { Outlet } from "react-router-dom";
import PostList from "../component/PostList";
function Posts() {
  return (
    <>
      <Outlet />
      <main>
        <PostList />
      </main>
    </>
  );
}

export default Posts;
