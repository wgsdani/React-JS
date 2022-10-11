/* eslint-disable jsx-a11y/accessible-emoji */
import React from "react";
import { render } from "react-dom";
import Styles from "./Style";
import { Form, Field } from "react-final-form";

const FinalForm = () => {
  const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  const onSubmit = async (values) => {
    await sleep(300);
    window.alert(JSON.stringify(values, 0, 2));
  };

  return (
    <Styles>
      <h1>Employee Form</h1>
      <a
        href="https://final-form.org/react"
        target="_blank"
        rel="noopener noreferrer"
      >
        FORM
      </a>
      <Form
        onSubmit={onSubmit}
        initialValues={{ stooge: "larry", employed: false }}
        render={({ handleSubmit, form, submitting, pristine, values }) => (
          <form onSubmit={handleSubmit}>
            <div>
              <label>First Name</label>
              <Field
                name="firstName"
                component="input"
                type="text"
                placeholder="First Name"
              />
            </div>
            <div>
              <label>Last Name</label>
              <Field
                name="lastName"
                component="input"
                type="text"
                placeholder="Last Name"
              />
            </div>
            <div>
              <label>Employed</label>
              <Field name="employed" component="input" type="checkbox" />
            </div>
            <div>
              <label>Education</label>
              <Field name="favoriteColor" component="select">
                <option />
                <option value="#ff0000">High School</option>
                <option value="#00ff00">Bachelor</option>
                <option value="#0000ff">Master</option>
              </Field>
            </div>
            <div>
              <label>Expertise</label>
              <div>
                <label>
                  <Field
                    name="Expertise"
                    component="input"
                    type="checkbox"
                    value="HTML"
                  />{" "}
                  HTML
                </label>
                <label>
                  <Field
                    name="Expertise"
                    component="input"
                    type="checkbox"
                    value="CSS"
                  />{" "}
                  CSS
                </label>
                <label>
                  <Field
                    name="Expertise"
                    component="input"
                    type="checkbox"
                    value="Javascript"
                  />{" "}
                  Javascript
                </label>
                <label>
                  <Field
                    name="Expertise"
                    component="input"
                    type="checkbox"
                    value="ReactJS"
                  />{" "}
                  ReactJS
                </label>
              </div>
            </div>
            <div>
              <label>Prefer Tech</label>
              <div>
                <label>
                  <Field
                    name="stooge"
                    component="input"
                    type="radio"
                    value="Front-End"
                  />{" "}
                  Front-End
                </label>
                <label>
                  <Field
                    name="stooge"
                    component="input"
                    type="radio"
                    value="Back-End"
                  />{" "}
                  Back-End
                </label>
                <label>
                  <Field
                    name="stooge"
                    component="input"
                    type="radio"
                    value="Fullstack"
                  />{" "}
                  Fullstack
                </label>
              </div>
            </div>
            <div>
              <label>Notes</label>
              <Field name="notes" component="textarea" placeholder="Notes" />
            </div>
            <div className="buttons">
              <button type="submit" disabled={submitting || pristine}>
                Submit
              </button>
              <button
                type="button"
                onClick={form.reset}
                disabled={submitting || pristine}
              >
                Reset
              </button>
            </div>
            <pre>{JSON.stringify(values, 0, 2)}</pre>
          </form>
        )}
      />
    </Styles>
  );
};

export default FinalForm;
