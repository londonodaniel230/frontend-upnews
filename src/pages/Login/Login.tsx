import { useState } from 'react';
import { Brand } from '@/components/Brand';
import { Icon } from '@/common/atoms/Icon';

export function LoginPage({ onBack }: { onBack: () => void }) {
  const [showMessage, setShowMessage] = useState(false);

  return (
    <main className="login-page">
      <section className="login-shell">
        <div className="login-intro">
          <div className="login-lock">
            <Icon name="lock" size={25} />
          </div>
          <span className="eyebrow">Área privada</span>
          <h1>Acceso para administradores</h1>
          <p>Este espacio es exclusivo para el equipo autorizado de la Fundación ASISCO UP.</p>
          <div className="login-note">
            <Icon name="check" size={16} />
            <span>Desde aquí el equipo puede preparar, revisar y publicar las noticias del portal.</span>
          </div>
        </div>

        <div className="login-card">
          <div className="login-card-head">
            <Brand />
            <span>Administración</span>
          </div>
          <h2>Iniciar sesión</h2>
          <p>Ingresa con las credenciales asignadas por la fundación.</p>
          <form
            onSubmit={(event) => {
              event.preventDefault();
              setShowMessage(true);
            }}
          >
            <label>
              Correo electrónico
              <input type="email" placeholder="Ingresa tu correo electrónico" required />
            </label>
            <label>
              Contraseña
              <input type="password" placeholder="Tu contraseña" required />
            </label>
            <div className="login-options">
              <label>
                <input type="checkbox" /> Recordar este equipo
              </label>
              <button type="button">¿Olvidaste tu contraseña?</button>
            </div>
            <button className="button primary full" type="submit">
              <Icon name="lock" size={15} /> Ingresar al panel
            </button>
          </form>
          {showMessage && <div className="login-feedback">La validación de credenciales estará disponible en la versión conectada del portal.</div>}
          <button className="back-link" onClick={onBack}>
            ← Volver a UpNews
          </button>
          <small>Acceso restringido. Si no perteneces al equipo administrativo, vuelve al portal público.</small>
        </div>
      </section>
    </main>
  );
}

export function Login() {
  return <LoginPage onBack={() => {}} />;
}
