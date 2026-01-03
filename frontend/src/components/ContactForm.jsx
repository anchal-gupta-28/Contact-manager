import React, { useState } from "react";
import "./Form.css";

// import { useState } from "react";
// import "./Form.css";

function ContactForm({ onAdd }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    notes: "",
  });

  const [errors, setErrors] = useState({});

  // Regex patterns
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phoneRegex = /^[0-9]{10}$/;

  const validate = (name, value) => {
    let error = "";

    if (name === "name" && !value.trim()) {
      error = "Name is required";
    }

    if (name === "email" && value && !emailRegex.test(value)) {
      error = "Enter a valid email address";
    }

    if (name === "phone" && !phoneRegex.test(value)) {
      error = "Phone number must be 10 digits";
    }

    return error;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({ ...form, [name]: value });

    setErrors({
      ...errors,
      [name]: validate(name, value),
    });
  };

  const isFormValid =
    form.name &&
    emailRegex.test(form.email) &&
    phoneRegex.test(form.phone);

  const handleSubmit = () => {
    if (!isFormValid) return;

    onAdd(form);

    setForm({ name: "", email: "", phone: "", notes: "" });
    setErrors({});
  };

  return (
    <div className="card">
      <h2>Add Contact</h2>

      <input
        name="name"
        placeholder="Full Name"
        value={form.name}
        onChange={handleChange}
      />
      {errors.name && <p className="error">{errors.name}</p>}

      <input
        name="email"
        placeholder="Email Address"
        value={form.email}
        onChange={handleChange}
      />
      {errors.email && <p className="error">{errors.email}</p>}

      <input
        name="phone"
        placeholder="Phone Number"
        value={form.phone}
        onChange={handleChange}
      />
      {errors.phone && <p className="error">{errors.phone}</p>}

      <textarea
        name="notes"
        placeholder="Notes (optional)"
        value={form.notes}
        onChange={handleChange}
      />

      <button disabled={!isFormValid} onClick={handleSubmit}>
        Add Contact
      </button>
    </div>
  );
}

export default ContactForm;
