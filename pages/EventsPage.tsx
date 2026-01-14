
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { MOCK_ARTICLES } from '../constants';

const EventsPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark">
      <header className="sticky top-0 z-50 bg-background-light/95 dark:bg-background-dark/95 backdrop-blur-xl">
        <div className="max-w-md mx-auto px-6 py-4 flex items-center justify-between">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-primary mb-1">Live Updates</p>
            <h1 className="text-3xl font-extrabold tracking-tight">Main Events</h1>
          </div>
          <button className="size-10 flex items-center justify-center rounded-full bg-slate-100 dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800">
            <span className="material-symbols-outlined text-xl">search</span>
          </button>
        </div>
      </header>

      <main className="max-w-md mx-auto px-6 pt-2 space-y-6">
        <div className="flex items-center gap-2 py-2">
          <div className="size-2 rounded-full bg-primary animate-pulse"></div>
          <span className="text-sm font-semibold opacity-60 italic">Top stories from the last hour</span>
        </div>

        {MOCK_ARTICLES.map(article => (
          <article 
            key={article.id}
            className="bg-white dark:bg-card-dark rounded-2xl border border-slate-200 dark:border-zinc-800 p-6 transition-all active:scale-[0.98] shadow-sm"
          >
            <div className="flex justify-between items-center mb-4">
              <div className="flex -space-x-1.5">
                {article.sources.map((s, idx) => (
                  <div key={idx} className={`size-6 rounded-full ring-2 ring-white dark:ring-card-dark ${s.color} flex items-center justify-center overflow-hidden`}>
                    <span className="text-[8px] font-bold text-white">{s.initial}</span>
                  </div>
                ))}
              </div>
              <span className="text-[10px] font-bold text-slate-400">{article.published}</span>
            </div>
            <h2 className="text-xl font-bold leading-tight tracking-tight mb-3">{article.title}</h2>
            <p className="text-slate-600 dark:text-zinc-400 text-sm leading-relaxed mb-6 font-medium">
              {article.summary}
            </p>
            <button 
              onClick={() => navigate(`/perspectives/${article.id}`)}
              className="w-full py-3.5 bg-slate-900 dark:bg-white text-white dark:text-black font-bold text-sm rounded-xl flex items-center justify-center gap-2 active:scale-95 transition-all"
            >
              View Perspectives
              <span className="material-symbols-outlined text-lg">layers</span>
            </button>
          </article>
        ))}
      </main>
    </div>
  );
};

export default EventsPage;
