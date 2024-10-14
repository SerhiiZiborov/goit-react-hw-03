import css from "./SearchBox.module.css";

const SearchForm = ({ value, onFilter }) => {
  return (
    <div className={css.container}>
      <p className={css.label}>Find contacts by name</p>
      <input
        type="text"
        value={value}
        onChange={(e) => onFilter(e.target.value)}
      />
    </div>
  );
};

export default SearchForm;
