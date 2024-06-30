import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const ContactPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic here (e.g., send data to server)
    toast.success('Message sent successfully!');
    navigate('/');
  };

  return (
    <div className="contact-page flex flex-col items-center bg-transparent shadow-lg shadow-white p-8 rounded-xl w-[50vw] mx-28 mt-16">
      <h1 className="text-2xl text-white font-bold mb-4">Contact Us</h1>
      <form onSubmit={handleSubmit} className="w-full">
        <div className="mb-4">
          <label className="block text-gray-200 text-sm font-bold mb-2" htmlFor="name">Name</label>
          <input
            className="w-full px-3 py-2 bg-transparent text-white border rounded-lg focus:outline-none"
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-200 text-sm font-bold mb-2" htmlFor="email">Email</label>
          <input
            className="w-full px-3 py-2 bg-transparent text-white border rounded-lg focus:outline-none"
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-200 text-sm font-bold mb-2" htmlFor="message">Message</label>
          <textarea
            className="w-full px-3 py-2 bg-transparent text-white border rounded-lg focus:outline-none"
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <div className="flex justify-center">
          <button className="px-6 py-2 text-sm border rounded text-white active:scale-95 transition ease-in-out hover:bg-green-600" type="submit">Send Message</button>
        </div>
      </form>
    </div>
  );
};

export default ContactPage;
