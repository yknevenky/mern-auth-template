import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

const SignIn = () => {
  return (
    <div className="card p-5 col-6 mx-auto">
      <h2 className="display-6">Sign In</h2>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validationSchema={Yup.object({
          email: Yup.string()
            .email("Invalid email address")
            .required("Required"),
          password: Yup.string().required("Required"),
        })}
        onSubmit={(values, { setSubmitting }) => {
          console.log(values);
        }}
      >
        <Form>
          <div className="mb-3">
            <label for="email" className="form-label">
              Email ID
            </label>
            <Field name="email" type="email" className="form-control" />
            <ErrorMessage component="p" className="text-danger" name="email" />
          </div>

          <div className="mb-3">
            <label for="password" className="form-label">
              Password
            </label>
            <Field name="password" type="password" className="form-control" />
            <ErrorMessage
              component="p"
              className="text-danger"
              name="password"
            />
          </div>

          <div className="mb-3">
            <button type="submit" className="btn btn-lg btn-success">
              Sign in
            </button>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default SignIn;
