import { useState } from 'react';
import { Header } from '@/layout/Header';
import { Home } from '@/pages/Home';
import { Article } from '@/pages/Article';
import { Agenda } from '@/pages/Agenda';
import { Projects } from '@/pages/Projects';
import { About } from '@/pages/About';
import { Publish } from '@/pages/Publish';
import { LoginPage } from '@/pages/Login';
import { Footer } from '@/layout/Footer';
import type { Page } from '@/models';

export default function App() {
  const [page, setPage] = useState<Page>('inicio');
  const navigate = (next: Page) => {
    setPage(next);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  return (
    <div className="app">
      <Header page={page} onNavigate={navigate} />
      {page === 'inicio' && <Home onNavigate={navigate} />}
      {page === 'noticia' && (
        <>
          <Article />
          <Footer onNavigate={navigate} />
        </>
      )}
      {page === 'agenda' && (
        <>
          <Agenda />
          <Footer onNavigate={navigate} />
        </>
      )}
      {page === 'proyectos' && (
        <>
          <Projects />
          <Footer onNavigate={navigate} />
        </>
      )}
      {page === 'nosotros' && (
        <>
          <About />
          <Footer onNavigate={navigate} />
        </>
      )}
      {page === 'publicar' && <Publish />}
      {page === 'login' && <LoginPage onBack={() => navigate('inicio')} />}
    </div>
  );
}
