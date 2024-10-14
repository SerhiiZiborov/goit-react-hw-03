import css from "./ContactForm.module.css";

import { nanoid } from "nanoid";
import * as Yup from "yup";

import { Formik, Form, Field } from "formik";

import { ErrorMessage } from "formik";

const ContactForm = ({ onAdd }) => {
  const handleSubmit = (values, { resetForm }) => {
    onAdd({
      id: nanoid(),
      name: values.name,
      number: values.number,
    });
    resetForm();
  };
  const initialValues = {
    name: "",
    number: "",
  };

  const FeedbackSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    number: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
  });

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={FeedbackSchema}
    >
      <Form className={css.form}>
        <div>
          <Field type="text" name="name" className={css.field} />
          <ErrorMessage name="name" component="span" className={css.error} />
        </div>
        <div>
          <Field type="text" name="number" className={css.field} />
          <ErrorMessage name="number" component="span" className={css.error} />
        </div>

        <button type="submit" className={css.btn}>
          Add contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
