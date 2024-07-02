import React, { useState } from 'react';

export default function InputField({ h3, placeholder, value, name, onChange, p, type, required, regex, errorMsg }) {
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { value } = e.target;
    let errorMsg = '';

    if (required && !value) {
      errorMsg = 'This field is required';
    } else if (regex && !regex.test(value)) {
      errorMsg = errorMsg || 'Invalid format';
    }

    setError(errorMsg);
    onChange(e);
  };

  return (
    <div className='block'>
      <h3 className='h3block'>{h3}</h3>
      <p className="subtext">{p}</p>
      <input
        className='blockinput'
        placeholder={placeholder}
        value={value}
        name={name}
        onChange={handleChange}
        type={type ? type : "text"}
      />
      {error && <p className='error'>{error}</p>}
    </div>
  );
}
