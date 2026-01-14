
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { MOCK_ARTICLES } from '../constants';

const PerspectivesPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const article = MOCK_ARTICLES.find(a => a.id === id) || MOCK_ARTICLES[0];

  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark pb-32">
      <header className="sticky top-0 z-50 bg-background-light/80 dark:bg-background-dark/80 ios-blur border-b border-slate-200 dark:border-slate-800">
        <div className="flex items-center justify-between px-4 h-16">
          <button 
            onClick={() => navigate(-1)}
            className="flex items-center justify-center size-10 rounded-full hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors"
          >
            <span className="material-symbols-outlined">arrow_back</span>
          </button>
          <h1 className="text-sm font-bold tracking-tight uppercase dark:text-slate-400 text-slate-500">Perspectives</h1>
          <button className="flex items-center justify-center size-10 rounded-full hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors">
            <span className="material-symbols-outlined">ios_share</span>
          </button>
        </div>
      </header>

      <main className="max-w-md mx-auto">
        <section className="px-5 py-6">
          <div className="flex gap-2 mb-3">
            <span className="bg-primary/10 text-primary text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wider">Developing Story</span>
            <span className="bg-slate-200 dark:bg-slate-800 text-slate-500 dark:text-slate-400 text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wider">18 Sources</span>
          </div>
          <h2 className="text-2xl font-bold leading-tight mb-2">{article.title}</h2>
          <p className="text-sm text-slate-500 dark:text-slate-400">Comparing how different media outlets are reporting this story to provide a balanced view.</p>
        </section>

        <section className="mt-2">
          <div className="px-5 mb-4 flex items-center justify-between">
            <h3 className="text-lg font-bold">Multi-Source Perspectives</h3>
            <span className="text-xs font-bold text-primary">Slide to compare</span>
          </div>
          <div className="flex overflow-x-auto gap-4 px-5 pb-6 custom-scrollbar snap-x snap-mandatory">
            {(article.perspectives || []).map((p, i) => (
              <div 
                key={i}
                className="min-w-[280px] snap-center bg-white dark:bg-card-dark p-6 rounded-2xl shadow-lg border border-slate-100 dark:border-slate-800 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <div className={`size-8 ${p.color} rounded-lg flex items-center justify-center text-xs font-black text-white`}>{p.initial}</div>
                      <div>
                        <p className="text-xs font-bold uppercase tracking-wider">{p.source}</p>
                        <p className="text-[10px] text-slate-400">{p.sentiment}</p>
                      </div>
                    </div>
                    <span className="material-symbols-outlined text-primary text-xl">{p.icon}</span>
                  </div>
                  <div className="mb-4">
                    <span className={`text-[10px] font-bold uppercase px-1.5 py-0.5 rounded ${p.categoryColor}`}>{p.label}</span>
                  </div>
                  <p className="text-sm font-semibold leading-relaxed mb-3">{p.quote}</p>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">{p.detail}</p>
                </div>
                <button className="mt-6 text-xs font-bold text-primary flex items-center gap-1 active:translate-x-1 transition-transform">
                  Read Source <span className="material-symbols-outlined text-xs">arrow_forward</span>
                </button>
              </div>
            ))}
          </div>
        </section>

        <section className="px-5 mt-4">
          <div className="bg-primary/5 border border-primary/20 rounded-2xl p-5">
            <div className="flex items-center gap-2 mb-3">
              <span className="material-symbols-outlined text-primary text-xl">auto_awesome</span>
              <h4 className="text-sm font-bold">AI Meta-Analysis</h4>
            </div>
            <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
              While sources agree on the shift toward domestic production, there is a clear divide on the <span className="font-bold text-primary">timeline of impact</span>. Financial outlets predict immediate market cooling, while political sources anticipate a longer period of diplomatic transition.
            </p>
          </div>
        </section>

        <section className="px-5 mt-10">
          <h3 className="text-lg font-bold mb-4">Sentiment Breakdown</h3>
          <div className="space-y-3">
            {[
              { label: 'Economic Optimism', count: '8 sources', color: 'bg-primary', percent: '75%' },
              { label: 'Political Friction', count: '6 sources', color: 'bg-amber-500', percent: '45%' },
              { label: 'Social Reaction', count: '4 sources', color: 'bg-slate-400', percent: '20%' }
            ].map((s, i) => (
              <div key={i} className="flex items-center justify-between p-4 bg-white dark:bg-card-dark rounded-xl border border-slate-100 dark:border-slate-800">
                <div className="flex flex-col">
                  <span className="text-xs font-bold">{s.label}</span>
                  <span className="text-[10px] text-slate-500">{s.count}</span>
                </div>
                <div className="w-24 h-2 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
                  <div className={`h-full ${s.color}`} style={{ width: s.percent }}></div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <div className="px-5 mt-12 mb-10">
          <button className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-4 rounded-xl text-sm flex items-center justify-center gap-2 shadow-lg shadow-primary/20 transition-all active:scale-[0.98]">
            View Full Coverage
            <span className="material-symbols-outlined text-sm">open_in_new</span>
          </button>
          <p className="text-center text-[10px] text-slate-500 mt-4 uppercase tracking-[0.2em]">Aggregated from 18 verified sources</p>
        </div>
      </main>
    </div>
  );
};

export default PerspectivesPage;
