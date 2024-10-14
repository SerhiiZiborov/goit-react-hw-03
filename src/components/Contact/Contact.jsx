import { IoMdContact } from "react-icons/io";
import { FaPhone } from "react-icons/fa6";
import css from "./Contact.module.css";
const Contact = ({ id, name, number, onDelete }) => {
  return (
    <div className={css.container}>
      <div className={css.contactWrapper}>
        <p>
          <IoMdContact /> {name}
        </p>
        <p>
          <FaPhone /> {number}
        </p>
      </div>
      <div>
        <button onClick={() => onDelete(id)}>Delete</button>
      </div>
    </div>
  );
};

export default Contact;
