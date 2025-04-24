import React, { useState } from "react";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import s from "./LoginForm.module.css";
import Icon from "../Icon/Icon";

const LoginForm = () => {
  const [isPasswordShown, setIsPasswordShown] = useState(false);
  //   const dispatch = useDispatch();

  const FormSchema = Yup.object().shape({
    email: Yup.string().nullable().email().required("Required"),
    password: Yup.string()
      .min(6, "Too Short!")
      .max(12, "Too Long!")
      .required("Required"),
  });

  const handleSubmit = (values, options) => {
    dispatch(register(values));
    options.resetForm();
  };

  return (
    <div className={s.container}>
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={handleSubmit}
        validationSchema={FormSchema}
      >
        <Form className={s.Form}>
          <div className={s.titleBlock}>
            <p className={s.title}>Log In</p>
            <p className={s.titleText}>
              Welcome back! Please enter your credentials to access your account
              and continue your search for a psychologist.
            </p>
          </div>
          <div className={s.labelBlock}>
            <label htmlFor="email"></label>
            <Field
              type="email"
              name="email"
              placeholder="email"
              className={s.label}
            />
            <ErrorMessage name="email" />
            <label htmlFor="password" className={s.passwordLabel}>
              <Field
                type={isPasswordShown ? "text" : "password"}
                name="password"
                placeholder="password"
                className={s.label}
              />{" "}
              <button
                type="button"
                className={s.eyeButton}
                onClick={() => setIsPasswordShown(!isPasswordShown)}
              >
                {isPasswordShown ? (
                  <Icon width={24} height={24} name="icon-eye" />
                ) : (
                  <Icon width={24} height={24} name="icon-eye-slash" />
                )}
              </button>
              <ErrorMessage name="password" />
            </label>
          </div>

          <button className={s.button} type="submit">
            Log In
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default LoginForm;
