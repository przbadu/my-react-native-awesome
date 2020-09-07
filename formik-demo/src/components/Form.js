import React from "react";
import * as Yup from "yup";

import InputField from "./InputField";
import SubmitButton from "./SubmitButton";
import SimpleForm from "./SimpleForm";

const validationSchema = Yup.object().shape({
  firstName: Yup.string().required().label("First Name"),
  lastName: Yup.string().required().label("Last Name"),
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(6).label("Password"),
});

export default function Form() {
  return (
    <div>
      <h1>Form with Formik</h1>
      <SimpleForm
        initialValues={{ firstName: "", lastName: "", email: "", password: "" }}
        onSubmit={(values) => {
          console.log(values);
        }}
        validationSchema={validationSchema}
      >
        <InputField name="firstName" label="First Name" />
        <InputField name="lastName" label="Last Name" />
        <InputField label="Email" type="email" name="email" />
        <InputField label="Password" type="password" name="password" />

        <SubmitButton />
      </SimpleForm>
    </div>
  );
}
