// src/components/ActivityForm.js
import React, { useState } from 'react';

const ActivityForm = ({ onAddActivity }) => {
  // State to manage form data
  const [formData, setFormData] = useState({
    type: '',
    duration: '',
    date: '',
    notes: ''
  });

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Check if required fields are filled in
    if (!formData.type.trim() || !formData.duration.trim() || !formData.date.trim() || !formData.notes.trim()) {
      // Alert user about missing fields
      alert('Please fill in all required fields.');
      return; // Exit function without adding activity
    }
    // Pass the new activity data to the parent component
    onAddActivity(formData);
    // Reset form fields
    setFormData({
      type: '',
      duration: '',
      date: '',
      notes: ''
    });
  };

  // Function to handle form field changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div>
      <h2>Add New Activity</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Activity Type:</label>
          <input
            type="text"
            name="type"
            value={formData.type}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Duration (minutes):</label>
          <input
            type="number"
            name="duration"
            value={formData.duration}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Date:</label>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Notes:</label>
          <textarea
            name="notes"
            value={formData.notes}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Add Activity</button>
      </form>
    </div>
  );
};

export default ActivityForm;
