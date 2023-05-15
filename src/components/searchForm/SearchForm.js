import { useFormik } from "formik";
import "./searchForm.scss";
import * as yup from "yup";

const SearchForm = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
    },
    validationSchema: yup.object({
      name: yup
        .string()
        .required("Name is required!")
        .min(2, "Name should be at least 2 char!"),
    }),
    onSubmit: (values) => {
      alert(values.name);
    },
  });
  const errorMessage =
    formik.errors.name && formik.touched.name ? (
      <div className="search-form__error">{formik.errors.name}</div>
    ) : null;
  const resultMessage = "";
  return (
    <form className="search-form" onSubmit={formik.handleSubmit}>
      <label htmlFor="name" className="search-form__label">
        Or find a character by name:
      </label>
      <div className="search-form__wrapper">
        <input
          type="text"
          name="name"
          placeholder="Enter name"
          value={formik.values.name}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          className="search-form__input"
        />
        <button
          className="btn btn_red"
          disabled={formik.errors.name}
          type="submit"
        >
          Find
        </button>
      </div>
      {errorMessage}
    </form>
  );
};
export default SearchForm;
