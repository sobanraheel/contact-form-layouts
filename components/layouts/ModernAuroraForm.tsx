
import React from 'react';

const ModernAuroraForm: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Form submitted! (Modern Aurora)');
  };

  return (
    <div className="relative w-full max-w-2xl mx-auto p-1 overflow-hidden rounded-[2.5rem] bg-white shadow-2xl">
      {/* Animated Aurora Background Blobs (behind the card) */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-purple-500/20 rounded-full blur-[100px] animate-pulse"></div>
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-indigo-500/20 rounded-full blur-[100px] animate-pulse delay-700"></div>
      
      <div className="relative z-10 bg-white p-10 md:p-14 rounded-[2.25rem]">
        <div className="text-center mb-10">
          <span className="inline-block px-4 py-1.5 mb-4 text-xs font-bold tracking-widest text-indigo-600 uppercase bg-indigo-50 rounded-full">
            Contact Us
          </span>
          <h2 className="text-4xl font-extrabold text-gray-900 tracking-tight">
            Work with <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">Experts</span>
          </h2>
          <p className="mt-4 text-gray-500 text-lg">
            Have a project in mind? We're ready to help you build something amazing.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-semibold text-gray-700 ml-1">Name</label>
              <input 
                type="text" 
                placeholder="Jane Cooper"
                className="w-full px-5 py-4 bg-gray-50 border border-transparent rounded-2xl focus:bg-white focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100 transition-all outline-none"
                required
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-semibold text-gray-700 ml-1">Email</label>
              <input 
                type="email" 
                placeholder="jane@company.com"
                className="w-full px-5 py-4 bg-gray-50 border border-transparent rounded-2xl focus:bg-white focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100 transition-all outline-none"
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-semibold text-gray-700 ml-1">Your Message</label>
            <textarea 
              rows={4} 
              placeholder="Tell us about your project goals..."
              className="w-full px-5 py-4 bg-gray-50 border border-transparent rounded-2xl focus:bg-white focus:border-indigo-500 focus:ring-4 focus:ring-indigo-100 transition-all outline-none resize-none"
              required
            ></textarea>
          </div>

          <button 
            type="submit" 
            className="w-full bg-indigo-600 text-white font-bold py-5 rounded-2xl hover:bg-indigo-700 hover:shadow-xl hover:shadow-indigo-200 transition-all active:scale-[0.98]"
          >
            Start Conversation
          </button>
        </form>
      </div>
    </div>
  );
};

export default ModernAuroraForm;
