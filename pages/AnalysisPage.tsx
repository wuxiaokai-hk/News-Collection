
import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { MOCK_ARTICLES } from '../constants';

const AnalysisPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const article = MOCK_ARTICLES.find(a => a.id === id) || MOCK_ARTICLES[2];
  const [viewMode, setViewMode] = useState<'brief' | 'depth'>('brief');

  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark">
      <header className="sticky top-0 z-50 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800">
        <div className="flex items-center justify-between px-4 h-16">
          <button 
            onClick={() => navigate(-1)}
            className="flex items-center justify-center size-10 rounded-full hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors"
          >
            <span className="material-symbols-outlined">arrow_back</span>
          </button>
          <h1 className="text-sm font-bold tracking-tight uppercase dark:text-slate-400 text-slate-500">Analysis Intelligence</h1>
          <button className="flex items-center justify-center size-10 rounded-full hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors">
            <span className="material-symbols-outlined">ios_share</span>
          </button>
        </div>
      </header>

      <main className="max-w-md mx-auto">
        <section className="relative">
          <div className="aspect-[16/10] w-full overflow-hidden">
            <div 
              className="w-full h-full bg-cover bg-center" 
              style={{ 
                backgroundImage: `linear-gradient(180deg, rgba(18, 18, 18, 0) 0%, rgba(18, 18, 18, 0.9) 100%), url('${article.image || "https://picsum.photos/800/500"}')` 
              }}
            ></div>
          </div>
          <div className="absolute bottom-0 left-0 p-5 w-full">
            <div className="flex gap-2 mb-3">
              <span className="bg-primary text-white text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wider">{article.category}</span>
              <span className="bg-white/10 backdrop-blur-sm text-white text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wider">{article.readTime}</span>
            </div>
            <h2 className="text-2xl font-bold leading-tight text-white mb-2">{article.title}</h2>
            <p className="text-slate-300 text-xs font-medium">{article.published} • From 12 vetted sources</p>
          </div>
        </section>

        <div className="px-5 mt-6 flex justify-center">
          <div className="inline-flex p-1 bg-slate-200 dark:bg-card-dark rounded-xl">
            <button 
              onClick={() => setViewMode('brief')}
              className={`px-6 py-2 text-xs font-bold rounded-lg transition-all ${viewMode === 'brief' ? 'bg-primary text-white shadow-sm' : 'text-slate-500 dark:text-slate-400'}`}
            >
              Brief Summary
            </button>
            <button 
              onClick={() => setViewMode('depth')}
              className={`px-6 py-2 text-xs font-bold rounded-lg transition-all ${viewMode === 'depth' ? 'bg-primary text-white shadow-sm' : 'text-slate-500 dark:text-slate-400'}`}
            >
              In-Depth Analysis
            </button>
          </div>
        </div>

        {article.analysis && (
          <section className="px-5 mt-8">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold">Key Findings</h3>
              <span className="material-symbols-outlined text-primary">auto_awesome</span>
            </div>
            <div className="bg-white dark:bg-card-dark rounded-xl p-5 shadow-sm border border-slate-100 dark:border-slate-800">
              <div className="space-y-4">
                {article.analysis.findings.map((f, i) => (
                  <div key={i} className="flex gap-3">
                    <div className="mt-1 size-5 shrink-0 flex items-center justify-center bg-primary/20 rounded">
                      <span className="material-symbols-outlined text-primary text-sm">check</span>
                    </div>
                    <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">{f}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        <section className="mt-10">
          <div className="px-5 mb-4">
            <h3 className="text-lg font-bold">Source Comparison</h3>
            <p className="text-xs text-slate-500 mt-1">Differing perspectives across international media</p>
          </div>
          <div className="flex overflow-x-auto gap-4 px-5 pb-4 custom-scrollbar">
            <div 
              onClick={() => navigate(`/perspectives/${article.id}`)}
              className="min-w-[260px] bg-white dark:bg-card-dark p-4 rounded-xl shadow-sm border border-slate-100 dark:border-slate-800 cursor-pointer active:scale-95 transition-transform"
            >
              <div className="flex items-center gap-2 mb-3">
                <div className="size-6 bg-blue-600 rounded-sm flex items-center justify-center text-[10px] font-black text-white">REU</div>
                <span className="text-[11px] font-bold uppercase tracking-wider">Reuters</span>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-400 italic mb-2">"Market Focus"</p>
              <p className="text-sm font-medium leading-relaxed">Emphasizes the deflationary impact on global markets and potential interest rate shifts.</p>
            </div>
            <div className="min-w-[260px] bg-white dark:bg-card-dark p-4 rounded-xl shadow-sm border border-slate-100 dark:border-slate-800">
              <div className="flex items-center gap-2 mb-3">
                <div className="size-6 bg-red-700 rounded-sm flex items-center justify-center text-[10px] font-black text-white">NYT</div>
                <span className="text-[11px] font-bold uppercase tracking-wider">The NY Times</span>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-400 italic mb-2">"Geopolitical Focus"</p>
              <p className="text-sm font-medium leading-relaxed">Highlights the tension between national security interests and corporate profit margins.</p>
            </div>
          </div>
        </section>

        {article.analysis && (
          <section className="px-5 mt-10">
            <h3 className="text-lg font-bold mb-6">Timeline of Events</h3>
            <div className="space-y-0">
              {article.analysis.timeline.map((item, i) => (
                <div key={i} className="relative pl-8 pb-8 last:pb-2">
                  {i !== article.analysis!.timeline.length - 1 && (
                    <div className="absolute left-[7px] top-6 bottom-[-8px] w-[2px] bg-primary/20"></div>
                  )}
                  <div className={`absolute left-0 top-1 size-4 rounded-full border-2 bg-background-light dark:bg-background-dark z-10 flex items-center justify-center ${i === 0 ? 'border-primary' : 'border-primary/40'}`}>
                    {i === 0 && <div className="size-1.5 rounded-full bg-primary"></div>}
                  </div>
                  <div className="flex flex-col">
                    <span className={`text-[10px] font-bold uppercase mb-1 ${i === 0 ? 'text-primary' : 'text-slate-500'}`}>{item.date}</span>
                    <h4 className="text-sm font-bold mb-1">{item.event}</h4>
                    <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        <div className="px-5 mt-12 mb-10">
          <button className="w-full bg-slate-200 dark:bg-card-dark hover:bg-slate-300 dark:hover:bg-slate-800 text-slate-900 dark:text-white font-bold py-4 rounded-xl text-sm flex items-center justify-center gap-2 transition-colors active:scale-[0.98]">
            Read Full Original Sources
            <span className="material-symbols-outlined text-sm">open_in_new</span>
          </button>
        </div>
      </main>
    </div>
  );
};

export default AnalysisPage;
