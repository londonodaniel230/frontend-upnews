import { useState } from 'react';
import { Brand } from '@/components/Brand';
import { Icon } from '@/common/atoms/Icon';
import { DrumArt } from '@/components/illustrations/DrumArt';

export function PublishPage() {
  const [saved, setSaved] = useState(false);
  return (
    <main className="publisher">
      <div className="publisher-head">
        <div>
          <Brand />
          <h1>
            <Icon name="edit" size={19} /> Nueva noticia
          </h1>
        </div>
        <div>
          <span className="status">Borrador</span>
          <button className="pill">Vista previa</button>
          <button className="button secondary" onClick={() => setSaved(true)}>
            Guardar borrador
          </button>
          <button className="button primary" onClick={() => setSaved(true)}>
            Enviar a revisión
          </button>
        </div>
      </div>
      {saved && (
        <div className="save-notice">
          <Icon name="check" size={16} /> Los cambios se guardaron correctamente.
        </div>
      )}
      <div className="publisher-grid">
        <section className="editor-card">
          <label>
            Título <input defaultValue="El grupo de música prepara su primera muestra para las familias" />
          </label>
          <div className="field-group">
            <span>Categoría</span>
            <div className="chip-row">
              {['Historias', 'Talleres', 'Eventos', 'La Fundación'].map((x, i) => (
                <button className={i === 0 ? 'selected' : ''} key={x}>
                  {x}
                </button>
              ))}
            </div>
          </div>
          <label>
            Resumen
            <textarea defaultValue="Una historia sobre aprendizaje, confianza y el poder de crear juntos en nuestra fundación." />
          </label>
          <label>
            Noticia completa
            <textarea
              className="article-input"
              defaultValue={
                'Cada sábado, el salón de música se llena de ritmos, instrumentos y sonrisas.\n\nLa próxima muestra será un espacio para celebrar el esfuerzo del grupo junto a sus familias.'
              }
            />
          </label>
          <div className="photo-field">
            <DrumArt compact />
            <div>
              <strong>Ilustración de portada</strong>
              <p>Sin fotos de banco. Usa material autorizado o una ilustración editorial.</p>
              <button className="pill">Cambiar portada</button>
            </div>
          </div>
          <div className="warning">Antes de publicar, confirma la autorización de uso de imagen de todas las personas que aparezcan.</div>
        </section>
        <aside className="publisher-side">
          <div className="editor-card">
            <h2>Dónde se publica</h2>
            <label className="check-row">
              <input type="checkbox" defaultChecked /> Portal UpNews
            </label>
            <label className="check-row">
              <input type="checkbox" defaultChecked /> Canal de Telegram
            </label>
            <div className="schedule">
              <button className="pill filled">Al aprobarla</button>
              <button className="pill">Programar</button>
            </div>
          </div>
          <div className="editor-card preview">
            <h2>Así se verá en Telegram</h2>
            <DrumArt compact />
            <strong>El grupo de música prepara su primera muestra para las familias</strong>
            <p>Una historia sobre aprendizaje, confianza y el poder de crear juntos.</p>
          </div>
        </aside>
      </div>
    </main>
  );
}

export function Publish() {
  return <PublishPage />;
}
