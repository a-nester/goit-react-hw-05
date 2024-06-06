import { Formik, Form, Field } from "formik";

export const SearchBar = ({ onSearch }) => {
  const handleSubmit = (initialValues, actions) => {
    actions.resetForm();

    onSearch(initialValues.searchValue);
    // console.log(initialValues.searchValue);
  };

  return (
    <>
      <Formik initialValues={{ searchValue: "" }} onSubmit={handleSubmit}>
        <Form>
          <Field type="text" name="searchValue" />
          <button type="submit">Search</button>
        </Form>
      </Formik>
    </>
  );
};

export default SearchBar;
