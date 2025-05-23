import toast from "react-hot-toast";
import css from "./SearchBar.module.css";
import React, { FormEvent } from "react";

interface SearchBarProps {
  onSubmit: (newQuery: string) => void;
}
const SearchBar: React.FC<SearchBarProps> = ({ onSubmit }) => {
  const warningObj = {
    duration: 1500,
    style: { border: "1px solid #322f42", padding: "16px", color: "#322f42" },
    icon: "⚠️",
  };

  const handleSubmit = (evt: FormEvent<HTMLFormElement>): void => {
    evt.preventDefault();
    const form = evt.target as HTMLFormElement;
    const query: string = (form.elements.namedItem("query") as HTMLInputElement)
      .value;
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
