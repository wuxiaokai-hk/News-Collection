
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { MOCK_ARTICLES } from '../constants';
import { NewsArticle } from '../types';

const NewsCard: React.FC<{ article: NewsArticle; onClick: () => void }> = ({ article, onClick }) => {
  return (
    <div 
      onClick={onClick}
      className="group bg-slate-100 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 overflow-hidden transition-all hover:shadow-md cursor-pointer"
    >
      {article.image && (
        <div className="aspect-video w-full bg-cover bg-center" style={{ backgroundImage: `url('${article.image}')` }}></div>
      )}
      <div className="p-5">
        <div className="flex justify-between items-start mb-4">
          <div className="flex -space-x-2">
            {article.sources.map((s, i) => (
              <div 
                key={i}
                className={`size-7 rounded-full border-2 border-slate-100 dark:border-slate-900 ${s.color} flex items-center justify-center text-[10px] font-bold text-white shadow-sm overflow-hidden`}
              >
                <span className="scale-75">{s.initial}</span>
              </div>
            ))}
          </div>
          <span className="text-[10px] font-bold text-primary px-2 py-0.5 bg-primary/10 rounded uppercase">{article.category}</span>
        </div>
        <h4 className="text-base font-bold leading-tight mb-2 group-hover:text-primary transition-colors">{article.title}</h4>
        <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-4 line-clamp-2">
          {article.summary}
        </p>
        <div className="flex items-center justify-between mt-4 pt-4 border-t border-slate-200 dark:border-slate-800">
          <div className="flex gap-4">
            <button className="flex items-center gap-1 text-slate-500 hover:text-primary transition-colors">
              <span className="material-symbols-outlined text-[18px]">bookmark</span>
            </button>
            <button className="flex items-center gap-1 text-slate-500 hover:text-primary transition-colors">
              <span className="material-symbols-outlined text-[18px]">share</span>
            </button>
          </div>
          <button className="flex items-center gap-1 text-sm font-bold text-primary group/btn">
            {article.analysis ? "Full Coverage" : "Read AI Summary"}
            <span className="material-symbols-outlined text-[18px] group-hover/btn:translate-x-1 transition-transform">arrow_right_alt</span>
          </button>
        </div>
      </div>
    </div>
  );
};

const FeedPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <header className="sticky top-0 z-50 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800">
        <div className="flex items-center justify-between p-4 max-w-md mx-auto">
          <div className="flex items-center gap-3">
            <div className="size-10 rounded-full bg-primary flex items-center justify-center text-white">
              <span className="material-symbols-outlined">newspaper</span>
            </div>
            <div>
              <h1 className="text-xl font-bold leading-none">NewsFeed</h1>
              <p className="text-[10px] uppercase tracking-widest text-primary font-semibold">AI Curated</p>
            </div>
          </div>
          <div className="flex gap-2">
            <button className="p-2 rounded-full hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors">
              <span className="material-symbols-outlined">search</span>
            </button>
            <button className="p-2 rounded-full hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors">
              <span className="material-symbols-outlined">settings</span>
            </button>
          </div>
        </div>
      </header>
      
      <main className="px-4 py-6 space-y-8">
        <section>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-[22px] font-bold tracking-tight">Daily Digest</h2>
            <span className="text-xs font-medium px-2 py-1 bg-primary/10 text-primary rounded-full">3 min read</span>
          </div>
          <div className="relative overflow-hidden rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-5 shadow-sm">
            <div className="absolute -top-12 -right-12 w-32 h-32 bg-primary/10 blur-3xl rounded-full"></div>
            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-3">
                <span className="material-symbols-outlined text-primary text-sm">wb_sunny</span>
                <span className="text-sm font-medium opacity-70">Good morning, Alex</span>
              </div>
              <p className="text-lg font-semibold leading-snug mb-4">Your 2-minute briefing on the top 3 things to know today is ready.</p>
              <div className="space-y-3 mb-5">
                <div className="flex items-center gap-3">
                  <div className="size-6 flex items-center justify-center rounded-full bg-primary/20 text-primary text-xs font-bold">1</div>
                  <p className="text-sm opacity-80">Global market shifts in tech sector</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="size-6 flex items-center justify-center rounded-full bg-primary/20 text-primary text-xs font-bold">2</div>
                  <p className="text-sm opacity-80">New climate policy breakthrough</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="size-6 flex items-center justify-center rounded-full bg-primary/20 text-primary text-xs font-bold">3</div>
                  <p className="text-sm opacity-80">Advancements in fusion energy</p>
                </div>
              </div>
              <button 
                className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-3 rounded-lg flex items-center justify-center gap-2 transition-all active:scale-[0.98]"
              >
                <span className="material-symbols-outlined">play_circle</span>
                Start Briefing
              </button>
            </div>
          </div>
        </section>

        <section className="space-y-6">
          <h3 className="text-lg font-bold">For You</h3>
          {MOCK_ARTICLES.map(article => (
            <NewsCard 
              key={article.id} 
              article={article} 
              onClick={() => navigate(`/analysis/${article.id}`)} 
            />
          ))}
        </section>
      </main>
    </>
  );
};

export default FeedPage;
