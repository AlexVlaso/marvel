import { useFormik } from "formik";
import "./searchForm.scss";
import * as yup from "yup";
import { useState } from "react";
import useCharacterService from "../../services/CharacterService";
import ErrorMessage from "../errorMessage/ErrorMessage";
import { Link } from "react-router-dom";
const SearchForm = () => {
  const { error, loading, getCharacterByName, clearError } =
    useCharacterService();
  const [char, setChar] = useState();
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
      clearError();
      getCharacterByName(values.name).then((data) => setChar(data));
    },
  });
  const validationMessage =
    formik.errors.name && formik.touched.name ? (
      <div className="search-form__error">{formik.errors.name}</div>
    ) : null;
  const errorMessage = error ? <ErrorMessage /> : null;
  const result = !char ? null : char.length > 0 ? (
    <div className="search-form__wrapper">
      <div className="search-form__info">{`There is! Visit ${char[0].name} page?`}</div>
      <Link to={`characters/${char[0].id}`} className="btn btn_grey">
        To Page
      </Link>
    </div>
  ) : (
    <div className="search-form__error">
      The character was not found. Check the name and try again
    </div>
  );
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
          disabled={formik.errors.name || loading}
          type="submit"
        >
          Find
        </button>
      </div>
      {validationMessage}
      {result}
      {errorMessage}
    </form>
  );
};
export default SearchForm;
