import { useState, useCallback } from 'react';

/**
 * Custom hook for handling form state and validation
 */
export const useForm = (initialValues = {}, validationRules = {}) => {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  /**
   * Handle input change
   */
  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  }, [errors]);

  /**
   * Handle input blur - mark field as touched and validate
   */
  const handleBlur = useCallback((e) => {
    const { name, value } = e.target;
    
    setTouched((prev) => ({ ...prev, [name]: true }));
    
    // Validate field
    if (validationRules[name]) {
      const error = validateField(name, value);
      setErrors((prev) => ({ ...prev, [name]: error }));
    }
  }, [validationRules]);

  /**
   * Validate single field
   */
  const validateField = useCallback((name, value) => {
    const rules = validationRules[name];
    if (!rules) return '';

    for (const rule of rules) {
      const error = rule(value, values);
      if (error) return error;
    }

    return '';
  }, [validationRules, values]);

  /**
   * Validate all fields
   */
  const validate = useCallback(() => {
    const newErrors = {};
    let isValid = true;

    Object.keys(validationRules).forEach((name) => {
      const error = validateField(name, values[name]);
      if (error) {
        newErrors[name] = error;
        isValid = false;
      }
    });

    setErrors(newErrors);
    setTouched(
      Object.keys(validationRules).reduce((acc, name) => {
        acc[name] = true;
        return acc;
      }, {})
    );

    return isValid;
  }, [validateField, validationRules, values]);

  /**
   * Reset form
   */
  const reset = useCallback(() => {
    setValues(initialValues);
    setErrors({});
    setTouched({});
    setIsSubmitting(false);
  }, [initialValues]);

  /**
   * Set form values programmatically
   */
  const setFieldValue = useCallback((name, value) => {
    setValues((prev) => ({ ...prev, [name]: value }));
  }, []);

  /**
   * Set field error programmatically
   */
  const setFieldError = useCallback((name, error) => {
    setErrors((prev) => ({ ...prev, [name]: error }));
  }, []);

  /**
   * Submit handler
   */
  const handleSubmit = useCallback((onSubmit) => async (e) => {
    if (e) e.preventDefault();
    
    setIsSubmitting(true);
    
    const isValid = validate();
    
    if (isValid) {
      try {
        await onSubmit(values);
      } finally {
        setIsSubmitting(false);
      }
    } else {
      setIsSubmitting(false);
    }
  }, [validate, values]);

  return {
    values,
    errors,
    touched,
    isSubmitting,
    handleChange,
    handleBlur,
    handleSubmit,
    validate,
    reset,
    setFieldValue,
    setFieldError,
    setValues,
    setErrors,
  };
};

/**
 * Common validation rules
 */
export const validators = {
  required: (message = 'Trường này là bắt buộc') => (value) => {
    if (!value || (typeof value === 'string' && !value.trim())) {
      return message;
    }
    return '';
  },

  email: (message = 'Email không hợp lệ') => (value) => {
    if (!value) return '';
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(value)) {
      return message;
    }
    return '';
  },

  minLength: (min, message) => (value) => {
    if (!value) return '';
    if (value.length < min) {
      return message || `Tối thiểu ${min} ký tự`;
    }
    return '';
  },

  maxLength: (max, message) => (value) => {
    if (!value) return '';
    if (value.length > max) {
      return message || `Tối đa ${max} ký tự`;
    }
    return '';
  },

  password: (message = 'Mật khẩu phải có ít nhất 8 ký tự, bao gồm chữ hoa, chữ thường, số và ký tự đặc biệt') => (value) => {
    if (!value) return '';
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>])[A-Za-z\d!@#$%^&*(),.?":{}|<>]{8,}$/;
    if (!passwordRegex.test(value)) {
      return message;
    }
    return '';
  },

  match: (fieldName, getOtherValue, message) => (value) => {
    if (!value) return '';
    if (value !== getOtherValue()) {
      return message || 'Giá trị không khớp';
    }
    return '';
  },

  phone: (message = 'Số điện thoại không hợp lệ') => (value) => {
    if (!value) return '';
    const phoneRegex = /^(0[1-9])+([0-9]{8,9})$/;
    if (!phoneRegex.test(value.replace(/\s/g, ''))) {
      return message;
    }
    return '';
  },
};

export default useForm;
