import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch} from "react-redux";
import { addProduct } from "../../redux/actions";
import styles from './AddProductForm.module.css'
import { Button } from "@mui/material";

const AddProductForm = () => {
  const dispatch = useDispatch();
  const initialValues = {
    title: "",
    author: "",
    year: "",
    rating: "",
    category: ""
  };

  const validationSchema = Yup.object({
    title: Yup.string().required("Title is required"),
    author: Yup.string().required("Author is required"),
    year: Yup.number().required("Year is required"),
    rating: Yup.number()
      .min(1, "Rating must be between 1 and 5")
      .max(5, "Rating must be between 1 and 5")
      .required("Rating is required"),
    category: Yup.string().required("Category is required"),
  });

  const onSubmit = (values, { resetForm }) => {
    values.id = new Date().getTime();
    dispatch(addProduct(values));
    resetForm();
  };

  return (
    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
      {({ errors, touched }) => (
        <Form style={styles}>
          <p>ADD PRODUCT</p>
          <div className={styles.input}>
            <Field name="title" type="text" placeholder="Title" />
            <ErrorMessage name="title" />
          </div>
          <div>
            <Field name="author" type="text" placeholder="Author" />
            <ErrorMessage name="author" />
          </div>
          <div>
            <Field name="year" type="number" placeholder="Year of publication" />
            <ErrorMessage name="year" />
          </div>
          <div>
            <Field name="rating" type="number" placeholder="Rating (1-5)" />
            <ErrorMessage name="rating" />
          </div>
          <div>
            <Field name="category" type="text" placeholder="Category" />
            <ErrorMessage name="category" />
          </div>
          <Button type="submit" sx={{width:"220px", mt:"20px"}} variant="outlined">Add</Button>
        </Form>
      )}
    </Formik>
  );
};

export default AddProductForm;