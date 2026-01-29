
import React from 'react';

const GlassmorphismForm: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Form submitted! (Glassmorphism)');
  };

  return (
    <div className="relative min-h-[600px] flex items-center justify-center overflow-hidden rounded-3xl">
      {/* Decorative Blobs */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>

      <div className="relative z-10 w-full max-w-lg p-8 mx-4 backdrop-blur-xl bg-white/30 border border-white/20 rounded-3xl shadow-2xl">
        <h2 className="text-3xl font-extrabold text-white mb-6 text-center drop-shadow-sm">Let's Connect</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="group">
            <input 
              type="text" 
              placeholder="Name" 
              className="w-full px-6 py-4 bg-white/40 border border-white/40 rounded-2xl text-white placeholder-white/70 focus:outline-none focus:bg-white/60 transition-all"
              required
            />
          </div>
          <div>
            <input 
              type="email" 
              placeholder="Email" 
              className="w-full px-6 py-4 bg-white/40 border border-white/40 rounded-2xl text-white placeholder-white/70 focus:outline-none focus:bg-white/60 transition-all"
              required
            />
          </div>
          <div>
            <textarea 
              rows={3} 
              placeholder="Tell us everything..." 
              className="w-full px-6 py-4 bg-white/40 border border-white/40 rounded-2xl text-white placeholder-white/70 focus:outline-none focus:bg-white/60 transition-all resize-none"
              required
            ></textarea>
          </div>
          <button 
            type="submit" 
            className="w-full bg-white text-indigo-600 font-bold py-4 rounded-2xl hover:bg-opacity-90 transition-all shadow-lg active:scale-95"
          >
            Shoot!
          </button>
        </form>
      </div>
    </div>
  );
};

export default GlassmorphismForm;
