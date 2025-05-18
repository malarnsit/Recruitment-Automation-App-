import React, { useState } from 'react';
import axios from 'axios';

const JobApplication = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    jobId: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/jobs/apply', formData);
      alert('Application Submitted');
    } catch (error) {
      alert('Error submitting application');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-6">
      <h2 className="text-2xl font-bold">Apply for a Job</h2>
      <div className="mt-4">
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
          className="border p-2 w-full mb-4"
        />
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
          className="border p-2 w-full mb-4"
        />
        <input
          type="text"
          name="jobId"
          placeholder="Job ID"
          value={formData.jobId}
          onChange={handleChange}
          className="border p-2 w-full mb-4"
        />
        <button type="submit" className="bg-blue-500 text-white p-2 w-full">Submit Application</button>
      </div>
    </form>
  );
};

export default JobApplication;
