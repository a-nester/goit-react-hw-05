import { Formik, Form, Field, ErrorMessage } from "formik";
import css from "./SearchBar.module.css";
import * as Yup from "yup";

export const SearchBar = ({ onSearch }) => {
  const handleSubmit = (initialValues, actions) => {
    actions.resetForm();
    onSearch(initialValues.searchValue);
  };

  const validationErrorSchema = Yup.object().shape({
    searchValue: Yup.string()
      .min(3, "Too short!")
      .max(20, "Too long!")
      .required("Required"),
  });
  return (
    <>
      <Formik
        initialValues={{ searchValue: "" }}
        onSubmit={handleSubmit}
        validationSchema={validationErrorSchema}
      >
        <Form className={css.searchForm}>
          <Field
            className={css.field}
            type="text"
            name="searchValue"
            placeholder="Add movie"
          ></Field>
          <div className={css.errorWrapper}>
            <ErrorMessage
              className={css.message}
              name="searchValue"
              component="span"
            />
          </div>
          <button className={css.button} type="submit">
            Search
          </button>
        </Form>
      </Formik>
    </>
  );
};

export default SearchBar;
