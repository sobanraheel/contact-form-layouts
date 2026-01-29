
import React from 'react';

const FloatingSidebarForm: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Form submitted! (Floating Sidebar)');
  };

  return (
    <div className="max-w-6xl mx-auto">
      <div className="flex flex-col lg:flex-row gap-8 items-start">
        {/* Left: Contact Form Card */}
        <div className="w-full lg:w-2/3 bg-white p-8 md:p-12 rounded-[2rem] shadow-xl border border-gray-100">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Send us a Message</h2>
          <p className="text-gray-500 mb-8">We usually respond within a few hours during business days.</p>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input 
                type="text" 
                placeholder="First Name" 
                className="w-full px-6 py-4 bg-gray-50 rounded-xl border-none focus:ring-2 focus:ring-emerald-500 outline-none transition-all"
                required 
              />
              <input 
                type="text" 
                placeholder="Last Name" 
                className="w-full px-6 py-4 bg-gray-50 rounded-xl border-none focus:ring-2 focus:ring-emerald-500 outline-none transition-all"
                required 
              />
            </div>
            <input 
              type="email" 
              placeholder="Email Address" 
              className="w-full px-6 py-4 bg-gray-50 rounded-xl border-none focus:ring-2 focus:ring-emerald-500 outline-none transition-all"
              required 
            />
            <textarea 
              rows={5} 
              placeholder="How can we help?" 
              className="w-full px-6 py-4 bg-gray-50 rounded-xl border-none focus:ring-2 focus:ring-emerald-500 outline-none transition-all resize-none"
              required
            ></textarea>
            
            <button className="bg-emerald-600 text-white font-bold px-10 py-4 rounded-xl hover:bg-emerald-700 transition-all shadow-lg shadow-emerald-100 flex items-center space-x-2">
              <span>Send Message</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
            </button>
          </form>
        </div>

        {/* Right: Floating Info Sidebar */}
        <div className="w-full lg:w-1/3 space-y-6 sticky top-24">
          <div className="bg-emerald-600 p-8 rounded-[2rem] text-white shadow-xl shadow-emerald-100">
            <h3 className="text-xl font-bold mb-6">Contact Information</h3>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="p-2 bg-emerald-500 rounded-lg">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                </div>
                <div>
                  <p className="font-bold">Our Office</p>
                  <p className="text-emerald-100 text-sm leading-snug">123 Design Street, Creative Valley, CA 90210</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="p-2 bg-emerald-500 rounded-lg">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                </div>
                <div>
                  <p className="font-bold">Email Us</p>
                  <p className="text-emerald-100 text-sm">hello@creative.studio</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="p-2 bg-emerald-500 rounded-lg">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                </div>
                <div>
                  <p className="font-bold">Business Hours</p>
                  <p className="text-emerald-100 text-sm">Mon - Fri: 9am - 6pm</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="p-8 rounded-[2rem] bg-gray-100 border border-gray-200">
             <p className="text-gray-600 text-sm font-medium italic">
               "We're dedicated to bringing your vision to life with precision and care."
             </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FloatingSidebarForm;
