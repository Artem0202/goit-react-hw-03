import css from "./SearchBox.module.css";

export default function SearchBox({ value, onFilter }) {
  return (
    <div>
      <p className={css.label}>Find contacts by name</p>
      <input
        type="text"
        value={value}
        onChange={(event) => onFilter(event.target.value)}
        className={css.input}
      />
    </div>
  );
}
