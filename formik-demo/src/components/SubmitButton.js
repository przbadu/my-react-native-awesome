import React from "react";
import { useFormikContext } from "formik";

export default function SubmitButton({ label = "Submit" }) {
  const { handleSubmit } = useFormikContext();

  return (
    <button type="submit" className="button" onClick={handleSubmit}>
      {label}
    </button>
  );
}
