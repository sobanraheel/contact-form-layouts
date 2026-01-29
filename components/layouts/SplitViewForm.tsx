
import React from 'react';

const SplitViewForm: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Form submitted! (Split View)');
  };

  return (
    <div className="bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row max-w-5xl mx-auto border border-gray-100">
      {/* Left Side: Info */}
      <div className="md:w-2/5 bg-indigo-600 p-12 text-white flex flex-col justify-between">
        <div>
          <h2 className="text-3xl font-bold mb-4">Contact Information</h2>
          <p className="text-indigo-100 opacity-90 leading-relaxed mb-8">
            Fill up the form and our team will get back to you within 24 hours.
          </p>
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-indigo-500 rounded-lg">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
              </div>
              <span className="text-lg">+1 (555) 000-0000</span>
            </div>
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-indigo-500 rounded-lg">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
              </div>
              <span className="text-lg">hello@design.com</span>
            </div>
          </div>
        </div>
        <div className="flex space-x-4 mt-12 md:mt-0">
          {[1,2,3].map(i => (
            <div key={i} className="w-10 h-10 bg-indigo-500 rounded-full flex items-center justify-center hover:bg-white hover:text-indigo-600 transition-colors cursor-pointer">
              <div className="w-5 h-5 bg-current rounded-sm"></div>
            </div>
          ))}
        </div>
      </div>

      {/* Right Side: Form */}
      <div className="md:w-3/5 p-12 bg-white">
        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
            <input type="text" className="w-full border-b border-gray-300 py-2 focus:border-indigo-600 outline-none transition-colors" placeholder="Jane" required />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
            <input type="text" className="w-full border-b border-gray-300 py-2 focus:border-indigo-600 outline-none transition-colors" placeholder="Doe" required />
          </div>
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
            <input type="email" className="w-full border-b border-gray-300 py-2 focus:border-indigo-600 outline-none transition-colors" placeholder="jane.doe@gmail.com" required />
          </div>
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
            <textarea rows={4} className="w-full border border-gray-200 rounded-xl p-4 mt-2 focus:ring-2 focus:ring-indigo-600 outline-none transition-all" placeholder="Write your message here..."></textarea>
          </div>
          <div className="md:col-span-2 flex justify-end mt-4">
            <button className="bg-indigo-600 text-white px-8 py-3 rounded-xl font-bold hover:bg-indigo-700 transition-all shadow-lg">
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SplitViewForm;
