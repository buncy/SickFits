import React, { useState, useEffect } from "react";
export default function useForm(initial = {}) {
  const [inputs, setInputs] = useState(initial);

  const initalValues = Object.values(initial).join("");
  useEffect(() => {
    setInputs(initial);
  }, [initalValues]);

  function handleChange(e) {
    let { name, value, type } = e.target;
    if (type === "number") {
      value = parseInt(value);
    }
    if (type === "file") {
      [value] = e.target.files;
    }
    setInputs({
      ...inputs,
      [name]: value,
    });
  }

  function resetForm() {
    setInputs(initial);
  }

  function clearForm() {
    const blankSlate = Object.fromEntries(
      Object.entries(inputs).map(([key, value]) => [key, ""])
    );
    setInputs(blankSlate);
  }
  return {
    inputs,
    handleChange,
    resetForm,
    clearForm,
  };
}
