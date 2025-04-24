import React from "react";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import s from "./RegistrationForm.module.css";

const RegistrationForm = () => {
  const FormSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    email: Yup.string().nullable().email().required("Required"),
    password: Yup.string()
      .min(6, "Too Short!")
      .max(12, "Too Long!")
      .required("Required"),
  });

  const handleSubmit = (values, options) => {
    console.log(values);
    dispatch(register(values));
    options.resetForm();
  };

  return (
    <div className={s.container}>
      <Formik
        initialValues={{ name: "", email: "", password: "" }}
        onSubmit={handleSubmit}
        validationSchema={FormSchema}
      >
        <Form className={s.Form}>
          <div className={s.titleBlock}>
            <p className={s.title}>Registration</p>
            <p className={s.titleText}>
              Thank you for your interest in our platform! In order to register,
              we need some information. Please provide us with the following
              information.
            </p>
          </div>
          <div className={s.labelBlock}>
            <label htmlFor="name"></label>
            <Field
              type="text"
              name="name"
              placeholder="name"
              className={s.label}
            />
            <ErrorMessage name="name" />
            <label htmlFor="email"></label>
            <Field
              type="email"
              name="email"
              placeholder="email"
              className={s.label}
            />
            <ErrorMessage name="email" />
            <label htmlFor="password"></label>
            <Field
              type="password"
              name="password"
              placeholder="password"
              className={s.label}
            />
            <ErrorMessage name="password" />
          </div>

          <button className={s.button} type="submit">
            Sign Up
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default RegistrationForm;
