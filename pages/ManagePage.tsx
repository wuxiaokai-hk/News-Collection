
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { MOCK_SOURCES, MOCK_INTERESTS } from '../constants';

const ManagePage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col h-full bg-background-light dark:bg-background-dark">
      <header className="sticky top-0 z-50 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md">
        <div className="flex items-center p-4 justify-between border-b border-gray-200 dark:border-white/10">
          <div 
            onClick={() => navigate(-1)}
            className="flex size-10 shrink-0 items-center justify-center rounded-full hover:bg-gray-200 dark:hover:bg-white/10 cursor-pointer"
          >
            <span className="material-symbols-outlined text-[24px]">arrow_back_ios_new</span>
          </div>
          <h2 className="text-lg font-bold leading-tight tracking-tight flex-1 text-center font-display">Sources & Interests</h2>
          <div className="flex w-10 items-center justify-end">
            <button className="flex items-center justify-center rounded-lg h-10 w-10 bg-primary/10 text-primary hover:bg-primary/20 transition-colors">
              <span className="material-symbols-outlined text-[24px]">done_all</span>
            </button>
          </div>
        </div>
      </header>

      <main className="flex-1 px-4 py-4 space-y-6">
        <div className="relative group">
          <div className="flex w-full items-stretch rounded-xl h-12 bg-gray-200 dark:bg-white/5 border border-transparent focus-within:border-primary/50 transition-all duration-200">
            <div className="flex items-center justify-center pl-4 text-gray-500 dark:text-gray-400">
              <span className="material-symbols-outlined text-[20px]">search</span>
            </div>
            <input 
              className="flex w-full border-none bg-transparent focus:ring-0 placeholder:text-gray-500 px-3 text-base font-normal" 
              placeholder="Search publications or topics..."
            />
          </div>
        </div>

        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-semibold">
          <span className="material-symbols-outlined text-[14px]">check_circle</span>
          You follow 12 sources
        </div>

        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-[20px] font-bold leading-tight tracking-tight font-display">Your Publications</h2>
            <button className="text-primary text-sm font-semibold hover:underline">View All</button>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {MOCK_SOURCES.map((source, i) => (
              <div 
                key={i}
                className="relative group flex flex-col gap-3 p-3 rounded-xl bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 hover:border-primary transition-all cursor-pointer"
              >
                <div className="absolute top-2 right-2 z-10">
                  <span className="material-symbols-outlined text-primary text-[20px] fill-1">check_circle</span>
                </div>
                <div className="w-full aspect-square bg-slate-100 dark:bg-slate-800 rounded-lg overflow-hidden flex items-center justify-center p-4">
                  <div 
                    className="w-full h-full bg-center bg-no-repeat bg-contain" 
                    style={{ backgroundImage: `url("${source.logo}")` }}
                  ></div>
                </div>
                <p className="text-sm font-semibold leading-tight text-center">{source.name}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <div className="pb-2">
            <h2 className="text-[20px] font-bold leading-tight tracking-tight font-display">Curated Interests</h2>
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">Select topics for AI summarization</p>
          </div>
          <div className="flex flex-col gap-3">
            {MOCK_INTERESTS.map(interest => (
              <div 
                key={interest.id}
                className="flex items-center justify-between p-4 rounded-xl bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 shadow-sm"
              >
                <div className="flex items-center gap-3">
                  <div className={`size-10 flex items-center justify-center rounded-lg ${interest.color}`}>
                    <span className="material-symbols-outlined">{interest.icon}</span>
                  </div>
                  <div>
                    <p className="text-base font-bold font-display">{interest.name}</p>
                    <p className="text-[10px] uppercase tracking-wider text-gray-500">{interest.reports}</p>
                  </div>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input defaultChecked className="sr-only peer" type="checkbox" />
                  <div className="w-11 h-6 bg-gray-300 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                </label>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default ManagePage;
