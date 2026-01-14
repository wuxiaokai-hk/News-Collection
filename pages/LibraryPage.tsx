
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { MOCK_ARTICLES } from '../constants';

const LibraryPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark">
      <header className="sticky top-0 z-50 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800">
        <div className="flex items-center px-4 h-16 justify-between">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-primary">inventory_2</span>
            <h1 className="text-xl font-bold tracking-tight">Library</h1>
          </div>
          <div className="flex gap-2">
            <button className="p-2 rounded-full hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors">
              <span className="material-symbols-outlined">filter_list</span>
            </button>
            <button className="p-2 rounded-full hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors">
              <span className="material-symbols-outlined">more_horiz</span>
            </button>
          </div>
        </div>
      </header>

      <main className="px-4 py-4 space-y-6">
        <div className="relative group">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <span className="material-symbols-outlined text-slate-400">search</span>
          </div>
          <input 
            className="block w-full pl-10 pr-4 py-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all placeholder:text-slate-400 text-sm" 
            placeholder="Search past research and reports..." 
            type="text"
          />
        </div>

        <section>
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-sm font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400">Today</h3>
            <span className="text-xs font-medium text-primary">2 updates</span>
          </div>
          {MOCK_ARTICLES.slice(0, 2).map(article => (
            <div 
              key={article.id} 
              onClick={() => navigate(`/analysis/${article.id}`)}
              className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-4 shadow-sm mb-4 active:scale-[0.98] transition-transform cursor-pointer"
            >
              <div className="flex justify-between items-start gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="px-2 py-0.5 rounded bg-primary/10 text-primary text-[10px] font-bold uppercase">{article.readTime}</span>
                    <span className="text-[10px] text-slate-500 font-medium">{article.published}</span>
                  </div>
                  <h2 className="text-base font-semibold leading-tight mb-2">{article.title}</h2>
                  <div className="flex -space-x-2 overflow-hidden mt-3">
                    <div className="inline-block size-6 rounded-full ring-2 ring-white dark:ring-slate-900 bg-slate-200 dark:bg-slate-700 flex items-center justify-center text-[10px] font-bold">R</div>
                    <div className="inline-block size-6 rounded-full ring-2 ring-white dark:ring-slate-900 bg-slate-200 dark:bg-slate-700 flex items-center justify-center text-[10px] font-bold">B</div>
                  </div>
                </div>
                {article.image && (
                  <div className="w-20 h-20 rounded-lg overflow-hidden shrink-0 bg-slate-100 dark:bg-slate-800">
                    <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: `url('${article.image}')` }}></div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </section>

        <section>
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-sm font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400">Yesterday</h3>
          </div>
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-4 shadow-sm mb-4 active:scale-[0.98] transition-transform cursor-pointer">
            <div className="flex items-center gap-2 mb-2">
              <span className="px-2 py-0.5 rounded bg-primary/10 text-primary text-[10px] font-bold uppercase">8 min read</span>
              <span className="text-[10px] text-slate-500 font-medium">Oct 23, 4:15 PM</span>
            </div>
            <h2 className="text-base font-semibold leading-tight mb-2">AI Regulation in the EU: What Tech Giants Need to Know</h2>
            <div className="flex items-center gap-2 mt-3">
              <span className="material-symbols-outlined text-sm text-slate-400">link</span>
              <span className="text-[10px] text-slate-400 font-medium italic">Summarized from 12 legal sources</span>
            </div>
          </div>
        </section>
      </main>

      <div className="fixed bottom-24 right-4 z-50">
        <button className="size-14 bg-primary text-white rounded-full shadow-lg shadow-primary/40 flex items-center justify-center active:scale-95 transition-transform">
          <span className="material-symbols-outlined text-2xl">add</span>
        </button>
      </div>
    </div>
  );
};

export default LibraryPage;
