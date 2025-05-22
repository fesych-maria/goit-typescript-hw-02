import css from "./LoadMoreBtn.module.css";

const LoadMoreBtn = ({ handleClick }) => {
  return (
    <button className={css.load} onClick={handleClick}>
      Load more
    </button>
  );
};

export default LoadMoreBtn;
