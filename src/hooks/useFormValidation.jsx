import { useEffect, useState } from "react";

const useFormValidation = (initialState, validate) => {
  const [inputs, setInputs] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);

  const handleChangeInputs = (name, value) => {
    if (submitting) {
      // validate new value
      const validationErrors = validate({ ...inputs, [name]: value });
      setErrors((prevErrors) => {
        return {
          ...prevErrors,
          [name]: validationErrors[name],
        };
      });
    }

    setInputs((prevInput) => {
      return {
        ...prevInput,
        [name]: value,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validate(inputs);
    setErrors(validationErrors);

    setSubmitting(true);
  };

  useEffect(() => {
    const noErrors = Object.keys(errors).length === 0;

    if (submitting && noErrors) {
      console.log("Submitting");
      setSubmitting(false);
    }
  }, [submitting, errors]);

  return { handleChangeInputs, handleSubmit, errors };
};

export default useFormValidation;
