// src/hooks/useFormValidation.js
import { useEffect, useState } from "react";
import { validateRequired, validateCheckBox } from "../component/Forms/fv.js";

// Custom hook for form validation
const useFormValidation = (formData, requiredFields) => {
  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(true);

  useEffect(() => {
    const { isValid, missingFields } = validateForm();
    setIsValid(isValid);
    if (!isValid) {
      const newErrors = {};
      missingFields.forEach((field) => {
        if (Array.isArray(formData[field])) {
          newErrors[field] = validateCheckBox(formData[field]);
        } else {
          newErrors[field] = validateRequired(formData[field]);
        }
      });
      setErrors(newErrors);
    } else {
      setErrors({});
    }
  }, [formData]);

  const validateForm = () => {
    const missingFields = requiredFields.filter((field) => {
      if (Array.isArray(formData[field])) {
        return formData[field].every(
          (item) =>
            item === "" || (typeof item === "string" && item.trim() === "")
        );
      } else {
        return (
          !formData[field] ||
          (typeof formData[field] === "string" && formData[field].trim() === "")
        );
      }
    });
    return { isValid: missingFields.length === 0, missingFields };
  };

  return { isValid, errors,setErrors };
};

export default useFormValidation;
