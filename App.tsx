
import React, { useState } from 'react';
import MinimalistForm from './components/layouts/MinimalistForm';
import ModernAuroraForm from './components/layouts/ModernAuroraForm';
import FloatingSidebarForm from './components/layouts/FloatingSidebarForm';
import BoldDarkModeForm from './components/layouts/BoldDarkModeForm';
import MultiColumnForm from './components/layouts/MultiColumnForm';

const App: React.FC = () => {
  const [activeLayout, setActiveLayout] = useState<number>(1);

  const layouts = [
    { id: 1, name: 'Minimalist Clean', component: <MinimalistForm /> },
    { id: 2, name: 'Modern Aurora', component: <ModernAuroraForm /> },
    { id: 3, name: 'Floating Sidebar', component: <FloatingSidebarForm /> },
    { id: 4, name: 'Bold Creative', component: <BoldDarkModeForm /> },
    { id: 5, name: 'Compact Grid', component: <MultiColumnForm /> },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Layout Switcher UI */}
      <div className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200 p-4 shadow-sm">
        <div className="max-w-6xl mx-auto flex flex-wrap justify-center gap-2">
          {layouts.map((layout) => (
            <button
              key={layout.id}
              onClick={() => setActiveLayout(layout.id)}
              className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                activeLayout === layout.id
                  ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-200 scale-105'
                  : 'bg-white text-gray-600 border border-gray-200 hover:border-indigo-300 hover:text-indigo-600'
              }`}
            >
              {layout.name}
            </button>
          ))}
        </div>
      </div>

      {/* Main Content Area */}
      <main className="flex-grow flex items-center justify-center py-12 px-4">
        <div className="w-full max-w-6xl animate-in fade-in zoom-in duration-500">
          {layouts.find((l) => l.id === activeLayout)?.component}
        </div>
      </main>
    </div>
  );
};

export default App;
