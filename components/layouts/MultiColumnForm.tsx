
import React from 'react';

const MultiColumnForm: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Form submitted! (Multi Column)');
  };

  return (
    <div className="max-w-4xl mx-auto bg-gray-50 p-6 md:p-12 rounded-3xl border border-gray-200">
      <div className="mb-10">
        <h2 className="text-4xl font-black text-gray-900 tracking-tight">Support Desk</h2>
        <p className="text-gray-500 mt-2 text-lg">We typically reply within 2 hours.</p>
      </div>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-sm font-bold text-gray-900">Name</label>
            <input type="text" className="w-full bg-white border border-gray-300 rounded-xl px-4 py-3 focus:ring-4 focus:ring-blue-100 focus:border-blue-500 outline-none transition-all" placeholder="Enter your name" />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-bold text-gray-900">Company</label>
            <input type="text" className="w-full bg-white border border-gray-300 rounded-xl px-4 py-3 focus:ring-4 focus:ring-blue-100 focus:border-blue-500 outline-none transition-all" placeholder="Enter company name" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-sm font-bold text-gray-900">Work Email</label>
            <input type="email" className="w-full bg-white border border-gray-300 rounded-xl px-4 py-3 focus:ring-4 focus:ring-blue-100 focus:border-blue-500 outline-none transition-all" placeholder="you@company.com" />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-bold text-gray-900">Service Category</label>
            <select className="w-full bg-white border border-gray-300 rounded-xl px-4 py-3 focus:ring-4 focus:ring-blue-100 focus:border-blue-500 outline-none transition-all appearance-none">
              <option>Technical Support</option>
              <option>Billing Inquiry</option>
              <option>Partnership</option>
              <option>Other</option>
            </select>
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-bold text-gray-900">Detailed Message</label>
          <textarea rows={5} className="w-full bg-white border border-gray-300 rounded-xl px-4 py-3 focus:ring-4 focus:ring-blue-100 focus:border-blue-500 outline-none transition-all resize-none" placeholder="Describe your issue in detail..."></textarea>
        </div>

        <div className="flex items-center space-x-3 bg-white p-4 rounded-xl border border-gray-200">
          <input type="checkbox" className="w-5 h-5 rounded text-blue-600 focus:ring-blue-500 cursor-pointer" id="privacy" />
          <label htmlFor="privacy" className="text-sm text-gray-600">I agree to the <span className="underline cursor-pointer font-medium">Privacy Policy</span> and terms of service.</label>
        </div>

        <button className="bg-blue-600 text-white font-bold px-10 py-4 rounded-xl hover:bg-blue-700 transition-all shadow-xl shadow-blue-200 w-full md:w-auto">
          Submit Ticket
        </button>
      </form>
    </div>
  );
};

export default MultiColumnForm;
