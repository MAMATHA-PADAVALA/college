// src/Login.js
import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./styles/login.css";

function Login() {
  return (
    <dialog open>
      <Formik
        initialValues={{
          username: "",
          password: "",
          role: "",
        }}
        validationSchema={Yup.object({
          username: Yup.string().required("Required"),
          password: Yup.string().required("Required"),
          role: Yup.string().required("Required"),
        })}
        onSubmit={(values, { setSubmitting }) => {
          console.log(values);
          setSubmitting(false);
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <div>
              <label htmlFor="username">Username</label>
              <Field name="username" type="text" />
              <ErrorMessage className="error" name="username" component="div" />
            </div>
            <div>
              <label htmlFor="password">Password</label>
              <Field name="password" type="password" />
              <ErrorMessage className="error" name="password" component="div" />
            </div>
            <div>
              <label htmlFor="role">Role</label>
              <Field style={{ width: "75%" }} as="select" name="role">
                <option value="">Select a role</option>
                <option value="Student">Student</option>
                <option value="Faculty Member">Faculty Member</option>
                <option value="Administrator">Administrator</option>
              </Field>
              <ErrorMessage className="error" name="role" component="div" />
            </div>
            <div>
              <button type="submit" disabled={isSubmitting}>
                Submit
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </dialog>
  );
}

export default Login;
