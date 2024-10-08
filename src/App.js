import React from 'react';
import './index.css';
import Header from './components/Header';
import Footer from './components/Footer';
import MainContent from './components/MainContent';
import Hero from './components/Hero';
import Features from './components/Features';
import PinCreator from './components/PinCreator';
import ScheduleCalendar from './components/Calendar';
import TemplateEditor from './components/TemplateEditor';
import KeywordResearch from './components/KeywordResearch';
import TrendAlerts from './components/TrendAlerts';

function App() {
  return (
    <div className="App">
      <Header />
      <MainContent>
        <Hero />
        <Features />
        <PinCreator />
        <ScheduleCalendar />
        <TemplateEditor />
        <KeywordResearch />
        <TrendAlerts />
        {/* Add other components like Catalogs, PinHistory, etc. here */}
      </MainContent>
      <Footer />
    </div>
  );
}

export default App;