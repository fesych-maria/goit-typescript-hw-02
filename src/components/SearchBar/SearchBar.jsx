import toast from "react-hot-toast";
import css from "./SearchBar.module.css";

const SearchBar = ({ onSubmit }) => {
  const warningObj = {
    duration: 1500,
    style: { border: "1px solid #322f42", padding: "16px", color: "#322f42" },
    icon: "⚠️",
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const form = evt.target;
    const query = form.elements.query.value;
    if (query.trim() === "") {
      toast("Please enter search term!", warningObj);
      return;
    }
    onSubmit(query);
    form.reset();
  };

  return (
    <header className={css.header}>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="query"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
        <button type="submit">Search</button>
      </form>
    </header>
  );
};

export default SearchBar;
