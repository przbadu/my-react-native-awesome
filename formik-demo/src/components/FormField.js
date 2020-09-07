import React from "react";

export default function FormField({ label, onChange, ...rest }) {
  return (
    <div className="form-fields">
      <label>{label}</label>
      <input onChange={onChange} {...rest} />
    </div>
  );
}
