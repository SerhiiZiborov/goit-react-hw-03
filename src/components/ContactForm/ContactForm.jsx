import css from "./ContactForm.module.css";
import { nanoid } from "nanoid";

const ContactForm = ({ onAdd }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd({
      id: nanoid(),
      name: e.target.elements.name.value,
      number: e.target.elements.number.value,
    });
    e.target.reset();
  };
  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <label htmlFor="" className={css.label}>
        <span>Name</span>
        <input type="text" name="name" />
      </label>

      <label htmlFor="" className={css.label}>
        <span>Number</span>
        <input type="text" name="number" />
      </label>
      <button type="submit"> Add contact</button>
    </form>
  );
};

export default ContactForm;
