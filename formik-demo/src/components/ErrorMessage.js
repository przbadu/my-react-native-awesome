import React from "react";

export default function ErrorMessage({ visible, error }) {
  if (!visible || !error) return null;
  return <p className="error">{error}</p>;
}
