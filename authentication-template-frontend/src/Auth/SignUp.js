import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

const SignUp = () => {
  return (
    <div className="card p-5 col-6 mx-auto">
        <h2 className="display-6">Sign Up</h2>
      <Formik
        initialValues={{
          fname: "",
          lname: "",
          email: "",
          phNo: "",
          password: "",
          confirmPassword: "",
        }}
        validationSchema={Yup.object({
          fname: Yup.string().required("Required"),
          lname: Yup.string().required("Required"),
          phNo: Yup.number().required("Required"),
          email: Yup.string()
            .email("Invalid email address")
            .required("Required"),
          password: Yup.string()
            .min(8, "Should be minimum 8 characters long")
            .required("Required"),
          confirmPassword: Yup.string()
            .min(8, "Should be minimum 8 characters long")
            .required("Required")
            .oneOf([Yup.ref("password")], "Your passwords do not match."),
        })}
        onSubmit={(values, { setSubmitting }) => {
          console.log(values);
        }}
      >
        <Form>
          <div className="row g-3">
            <div className="mb-3 col">
              <label for="fname" className="form-label">
                First Name
              </label>
              <Field name="fname" type="text" className="form-control" />
              <ErrorMessage
                component="p"
                className="text-danger"
                name="fname"
              />
            </div>

            <div className="mb-3 col">
              <label for="lname" className="form-label">
                Last Name
              </label>
              <Field name="lname" type="text" className="form-control" />
              <ErrorMessage
                component="p"
                className="text-danger"
                name="lname"
              />
            </div>
          </div>
          <div className="row">
            <div className="mb-3 col-6">
              <label for="email" className="form-label">
                Email ID
              </label>
              <Field name="email" type="email" className="form-control" />
              <ErrorMessage
                component="p"
                className="text-danger"
                name="email"
              />
            </div>
          </div>
          <div className="row">
            <div className="mb-3 col-6">
              <label for="phNo" className="form-label">
                Phone number
              </label>
              <Field name="phNo" type="number" className="form-control" />
              <ErrorMessage component="p" className="text-danger" name="phNo" />
            </div>
          </div>
          <div className="row g-3">
            <div className="mb-3 col">
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
            <div className="mb-3 col">
              <label for="confirmPassword" className="form-label">
                Confirm Password
              </label>
              <Field
                name="confirmPassword"
                type="password"
                className="form-control"
              />
              <ErrorMessage
                component="p"
                className="text-danger"
                name="confirmPassword"
              />
            </div>
          </div>
          <div className="mb-3">
            <button type="submit" className="btn btn-lg btn-success">
              Sign up
            </button>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default SignUp;
