
import React, { useState, useEffect } from 'react';
import { HashRouter, Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import { NavTab, NewsArticle } from './types';
import { MOCK_ARTICLES } from './constants';
import FeedPage from './pages/FeedPage';
import AnalysisPage from './pages/AnalysisPage';
import ManagePage from './pages/ManagePage';
import LibraryPage from './pages/LibraryPage';
import PerspectivesPage from './pages/PerspectivesPage';
import EventsPage from './pages/EventsPage';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const getActiveTab = (): NavTab => {
    if (location.pathname === '/') return 'feed';
    if (location.pathname.startsWith('/library')) return 'library';
    if (location.pathname.startsWith('/manage')) return 'manage';
    if (location.pathname.startsWith('/explore')) return 'explore';
    if (location.pathname.startsWith('/events')) return 'events';
    return 'feed';
  };

  const activeTab = getActiveTab();

  return (
    <div className="max-w-md mx-auto relative min-h-screen pb-24 shadow-2xl bg-background-light dark:bg-background-dark overflow-x-hidden">
      {children}
      
      {/* Persistent Bottom Nav */}
      <nav className="fixed bottom-0 left-0 right-0 z-50 bg-background-light/90 dark:bg-background-dark/90 backdrop-blur-xl border-t border-slate-200 dark:border-slate-800 pb-8 pt-2">
        <div className="max-w-md mx-auto flex justify-around items-center px-4">
          <button 
            onClick={() => navigate('/')}
            className={`flex flex-col items-center gap-1 transition-colors ${activeTab === 'feed' ? 'text-primary' : 'text-slate-500 dark:text-slate-400'}`}
          >
            <span className={`material-symbols-outlined text-[24px] ${activeTab === 'feed' ? 'fill-1' : ''}`}>home</span>
            <span className="text-[10px] font-bold">Feed</span>
          </button>
          <button 
            onClick={() => navigate('/events')}
            className={`flex flex-col items-center gap-1 transition-colors ${activeTab === 'events' ? 'text-primary' : 'text-slate-500 dark:text-slate-400'}`}
          >
            <span className={`material-symbols-outlined text-[24px] ${activeTab === 'events' ? 'fill-1' : ''}`}>dataset</span>
            <span className="text-[10px] font-bold">Events</span>
          </button>
          <button 
            onClick={() => navigate('/manage')}
            className={`flex flex-col items-center gap-1 transition-colors ${activeTab === 'manage' ? 'text-primary' : 'text-slate-500 dark:text-slate-400'}`}
          >
            <span className={`material-symbols-outlined text-[24px] ${activeTab === 'manage' ? 'fill-1' : ''}`}>layers</span>
            <span className="text-[10px] font-bold">Manage</span>
          </button>
          <button 
            onClick={() => navigate('/library')}
            className={`flex flex-col items-center gap-1 transition-colors ${activeTab === 'library' ? 'text-primary' : 'text-slate-500 dark:text-slate-400'}`}
          >
            <span className={`material-symbols-outlined text-[24px] ${activeTab === 'library' ? 'fill-1' : ''}`}>inventory_2</span>
            <span className="text-[10px] font-bold">Library</span>
          </button>
        </div>
      </nav>
    </div>
  );
};

export default function App() {
  return (
    <HashRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<FeedPage />} />
          <Route path="/analysis/:id" element={<AnalysisPage />} />
          <Route path="/perspectives/:id" element={<PerspectivesPage />} />
          <Route path="/manage" element={<ManagePage />} />
          <Route path="/library" element={<LibraryPage />} />
          <Route path="/events" element={<EventsPage />} />
          <Route path="/explore" element={<FeedPage />} />
        </Routes>
      </Layout>
    </HashRouter>
  );
}
