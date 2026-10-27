import { DrumArt } from '@/components/illustrations/DrumArt';
import { Icon } from '@/common/atoms/Icon';
import { news } from '@/common/constants';
import { MiniStory } from '@/common/molecules/MiniStory';
import { Footer } from '@/layout/Footer';
import type { Page } from '@/models';

export function ArticlePage() {
  return (
    <main className="shell article-layout">
      <article className="article">
        <span className="eyebrow dark">Historias · 10 oct</span>
        <h1>El grupo de música prepara su primera muestra para las familias</h1>
        <p className="lead">Con alegría y mucha práctica, el grupo de música de ASISCO UP se prepara para compartir lo aprendido con sus familias.</p>
        <div className="article-actions">
          <button className="button secondary">
            <Icon name="volume" size={16} /> Escuchar noticia
          </button>
          <button className="plain-button">Lectura fácil</button>
        </div>
        <DrumArt />
        <p>Cada sábado, el salón de música se llena de ritmos, instrumentos y sonrisas. Durante las últimas semanas el grupo ha preparado una muestra sencilla para compartir con las personas que han acompañado su proceso.</p>
        <p>La actividad hace parte de un proceso en el que cada participante reconoce sus capacidades, practica la escucha y aprende a trabajar con otros. La presentación será un espacio cercano, pensado para celebrar el esfuerzo de todo el grupo.</p>
        <h2>Una muestra construida entre todos</h2>
        <p>Las familias podrán acompañar el encuentro y conocer de primera mano lo que sucede en el taller. Próximamente publicaremos la fecha y las recomendaciones para asistir.</p>
        <div className="article-tags">
          <span>Música</span>
          <span>Familias</span>
          <span>Historias</span>
        </div>
      </article>
      <aside className="article-aside">
        <div className="aside-card orange-card">
          <strong>¿Quieres apoyar nuestros talleres?</strong>
          <p>Tu donación ayuda a mantener espacios de aprendizaje y encuentro.</p>
          <button className="button light">Donar con Asisco Pay</button>
        </div>
        <div className="aside-card teal-card">
          <strong>¿Quieres recibir esta noticia?</strong>
          <p>Únete al canal oficial de la fundación.</p>
          <a className="button light" href="https://t.me/" target="_blank" rel="noreferrer">
            <Icon name="send" size={15} /> Ir a Telegram
          </a>
        </div>
        <div className="aside-card">
          <strong>También te puede interesar</strong>
          {news.slice(0, 2).map((item) => (
            <MiniStory key={item.title} item={item} />
          ))}
        </div>
      </aside>
    </main>
  );
}

export function Article() {
  return (
    <>
      <ArticlePage />
      <Footer onNavigate={(p: Page) => {}} />
    </>
  );
}
