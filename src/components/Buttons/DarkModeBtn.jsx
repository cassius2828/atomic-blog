import { usePosts } from "../../PostProvider";

const DarkModeBtn = () => {
  const { isFakeDark, setIsFakeDark } = usePosts();
  return (
    <button
      onClick={() => setIsFakeDark((isFakeDark) => !isFakeDark)}
      className="btn-fake-dark-mode"
    >
      {isFakeDark ? "☀️" : "🌙"}
    </button>
  );
};
export default DarkModeBtn;
