import React from 'react';

type Tab = 'signin' | 'signup';

interface TabsProps {
  active: Tab;
  setActive: (tab: Tab) => void;
}

const Tabs: React.FC<TabsProps> = ({ active, setActive }) => (
  <div className="flex bg-slate-50 rounded-xl p-1 mb-8">
    {(['signin', 'signup'] as Tab[]).map((tab) => (
      <button
        key={tab}
        onClick={() => setActive(tab)}
        className={`flex-1 py-3 px-4 text-center text-sm font-semibold rounded-lg transition-all ${
          active === tab
            ? 'bg-white text-blue-900 shadow'
            : 'text-slate-500 hover:bg-slate-100'
        }`}
      >
        {tab === 'signin' ? 'Sign In' : 'Sign Up'}
      </button>
    ))}
  </div>
);

export default Tabs;
