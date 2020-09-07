import React from "react";
import { useFormikContext } from "formik";

import FormField from "./FormField";
import ErrorMessage from "./ErrorMessage";

export default function InputField({ name, ...rest }) {
  const {
    values,
    handleBlur,
    handleChange,
    errors,
    touched,
  } = useFormikContext();

  return (
    <>
      <FormField
        name={name}
        value={values[name]}
        onBlur={handleBlur}
        onChange={handleChange}
        {...rest}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
}
