import { Formik, Form, Field } from "formik";
import css from "./SearchBar.module.css";

export const SearchBar = ({ startValue, onSearch }) => {
  const handleSubmit = (initialValues, actions) => {
    actions.resetForm();
    onSearch(initialValues.searchValue);
  };

  return (
    <>
      <Formik
        initialValues={{ searchValue: startValue ?? "" }}
        onSubmit={handleSubmit}
      >
        <Form className={css.searchForm}>
          <Field type="text" name="searchValue" />
          <button className={css.button} type="submit">
            Search
          </button>
        </Form>
      </Formik>
    </>
  );
};

export default SearchBar;
