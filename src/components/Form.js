import React, { useState } from 'react';
import '../Form.css';

const Form = ({ onSubmit }) => {
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(name);
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <label className="form-label">
        Nama:
        <input 
          type="text" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
          required 
          className="form-input"
        />
      </label>
      <button type="submit" className="form-button">Cek Khodam</button>
    </form>
  );
};

export default Form;
