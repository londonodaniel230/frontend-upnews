import { DrumArt } from '@/components/illustrations/DrumArt';
import { Icon } from '@/common/atoms/Icon';
import { SectionTitle } from '@/common/molecules/SectionTitle';
import { EventRow } from '@/common/molecules/EventRow';
import { NewsCard } from '@/common/molecules/NewsCard';
import { Footer } from '@/layout/Footer';

export function Home({ onNavigate }: { onNavigate: (page: any) => void }) {
  const events = [
    { day: '24', month: 'OCT', title: 'Feria de panadería', time: '10:00 a. m.', place: 'Sede de la fundación' },
    { day: '14', month: 'NOV', title: 'Muestra de música para las familias', time: '3:00 p. m.', place: 'Auditorio principal' },
    { day: '5', month: 'DIC', title: 'Novena con padrinos y familias', time: '4:00 p. m.', place: 'Casa ASISCO UP' },
  ];
  const news = [
    {
      category: 'Talleres',
      title: 'Taller: los jóvenes hornean sus primeras recetas',
      excerpt: 'Una jornada para aprender, compartir y fortalecer la autonomía.',
      art: 'screen',
      tone: 'orange',
    },
    {
      category: 'La Fundación',
      title: 'Abrimos inscripciones para el taller de panadería',
      excerpt: 'Conoce cómo participar en nuestros próximos espacios de formación.',
      art: 'bread',
      tone: 'cream',
    },
    {
      category: 'Comunidad',
      title: 'Cada corazón cuenta una historia',
      excerpt: 'Celebramos el acompañamiento de las familias de nuestra comunidad.',
      art: 'heart',
      tone: 'green',
    },
  ];

  return (
    <>
      <main>
        <section className="hero shell">
          <div className="hero-copy">
            <span className="eyebrow">Historias · 10 oct</span>
            <h1>El grupo de música prepara su primera muestra para las familias</h1>
            <p>Una historia sobre aprendizaje, confianza y el poder de crear juntos en nuestra fundación.</p>
            <div className="hero-buttons">
              <button className="button orange" onClick={() => onNavigate('noticia')}>
                Leer noticia <Icon name="arrow" size={16} />
              </button>
              <button className="button ghost-light">
                <Icon name="volume" size={16} /> Escuchar noticia
              </button>
            </div>
          </div>
          <div className="hero-art">
            <DrumArt />
          </div>
        </section>

        <section className="shell section">
          <SectionTitle title="Próximos eventos" action="Ver agenda" />
          <div className="events-preview">
            {events.map((event, index) => (
              <EventRow key={event.title} event={event} featured={index === 1} />
            ))}
          </div>
        </section>

        <section className="shell section news-section">
          <SectionTitle title="Últimas noticias" action="Ver todas" />
          <div className="filters" aria-label="Filtrar noticias">
            {['Todas', 'Talleres', 'Eventos', 'La Fundación'].map((filter, index) => (
              <button className={index === 0 ? 'active' : ''} key={filter}>
                {filter}
              </button>
            ))}
          </div>
          <div className="news-grid">
            {news.map((item) => (
              <NewsCard key={item.title} item={item} onNavigate={onNavigate} />
            ))}
          </div>
        </section>

        <section className="shell support-grid">
          <div className="telegram-band">
            <div className="round-icon">
              <Icon name="send" size={24} />
            </div>
            <div>
              <span>Las noticias de la fundación, en tu Telegram</span>
              <p>Recibe nuestras historias y eventos.</p>
            </div>
            <a className="button light" href="https://t.me/" target="_blank" rel="noreferrer">
              Unirme al canal
            </a>
          </div>
          <div className="donation-band" id="donar">
            <div className="round-icon">
              <Icon name="heart" size={24} />
            </div>
            <div>
              <span>¿Quieres apoyar nuestra labor?</span>
              <p>Tu aporte abre nuevas oportunidades.</p>
            </div>
            <button className="button dark">Donar con Asisco Pay</button>
          </div>
        </section>
      </main>
      <Footer onNavigate={onNavigate} />
    </>
  );
}
