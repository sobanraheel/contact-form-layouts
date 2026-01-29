
import React from 'react';

const BoldDarkModeForm: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Form submitted! (Bold Dark)');
  };

  return (
    <div className="max-w-4xl mx-auto bg-zinc-950 p-1 rounded-[40px] shadow-2xl">
      <div className="bg-zinc-900 rounded-[38px] p-8 md:p-16 text-white border border-zinc-800">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-amber-400 font-mono tracking-widest uppercase text-sm font-bold">Available for hire</span>
            <h2 className="text-5xl md:text-6xl font-black mt-4 leading-tight">
              Start a <span className="text-zinc-500 italic">Project</span> together.
            </h2>
            <p className="mt-8 text-zinc-400 text-lg">
              Got a challenge for us? We're always looking for new and exciting projects.
            </p>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="relative">
              <input 
                type="text" 
                className="peer w-full bg-transparent border-b-2 border-zinc-800 py-2 focus:border-amber-400 outline-none transition-all text-xl"
                placeholder=" "
                required
              />
              <label className="absolute left-0 top-2 text-zinc-600 pointer-events-none transition-all peer-focus:-top-4 peer-focus:text-xs peer-focus:text-amber-400 peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-xs">
                WHAT'S YOUR NAME?
              </label>
            </div>
            
            <div className="relative">
              <input 
                type="email" 
                className="peer w-full bg-transparent border-b-2 border-zinc-800 py-2 focus:border-amber-400 outline-none transition-all text-xl"
                placeholder=" "
                required
              />
              <label className="absolute left-0 top-2 text-zinc-600 pointer-events-none transition-all peer-focus:-top-4 peer-focus:text-xs peer-focus:text-amber-400 peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-xs">
                EMAIL ADDRESS
              </label>
            </div>

            <div className="relative">
              <textarea 
                rows={2}
                className="peer w-full bg-transparent border-b-2 border-zinc-800 py-2 focus:border-amber-400 outline-none transition-all text-xl resize-none"
                placeholder=" "
                required
              ></textarea>
              <label className="absolute left-0 top-2 text-zinc-600 pointer-events-none transition-all peer-focus:-top-4 peer-focus:text-xs peer-focus:text-amber-400 peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-xs">
                TELL US ABOUT IT
              </label>
            </div>

            <button className="group relative px-8 py-4 bg-amber-400 text-black font-black uppercase tracking-tighter rounded-full overflow-hidden hover:pr-12 transition-all">
              <span>Send Enquiry</span>
              <svg className="absolute right-4 top-1/2 -translate-y-1/2 w-6 h-6 opacity-0 group-hover:opacity-100 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BoldDarkModeForm;
