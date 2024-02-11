import Results from "../../components/Results/Results";
import SearchPosts from "../../components/SearchPosts/SearchPosts";
import { usePosts } from "../../PostProvider";

function Header() {
  const { onClearPosts } = usePosts();

  return (
    <header>
      <h1>
        <span>⚛️</span>The Atomic Blog
      </h1>
      <div>
        <Results />
        <SearchPosts />
        <button onClick={onClearPosts}>Clear posts</button>
      </div>
    </header>
  );
}
export default Header;
