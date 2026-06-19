import { useState } from 'react'

function App() {
  const [showCookies, setShowCookies] = useState(true)
  const [showContact, setShowContact] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')
  return (
    <div>
      {showCookies && (
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100vh',
          backgroundColor: 'rgba(0,0,0,0.6)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          zIndex: 999,
        }}
      >
        <div
          style={{
            backgroundColor: 'white',
            padding: '40px',
            borderRadius: '20px',
            width: '400px',
            textAlign: 'center',
            boxShadow: '0px 4px 15px rgba(0,0,0,0.3)',
          }}
        >
          <h2>Aceptar Cookies</h2>

          <p>
            Utilizamos cookies para mejorar tu experiencia dentro de Pasantías
            Perú.
          </p>

          <button
            style={{
              marginTop: '20px',
              padding: '12px 30px',
              border: 'none',
              borderRadius: '10px',
              backgroundColor: '#0a192f',
              color: 'white',
              cursor: 'pointer',
              fontSize: '16px',
            }}
            onClick={() => setShowCookies(false)}
          >
            Aceptar Cookies
          </button>
        </div>
      </div>
      )}
      <header
        style={{
          backgroundColor: '#0a192f',
          color: 'white',
          padding: '20px 60px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <h2>Pasantías Perú</h2>

        <nav style={{ display: 'flex', gap: '20px' }}>
          <a
            href="#"
            style={{ color: 'white', textDecoration: 'none' }}
            onClick={() => window.location.reload()}
          >
            Inicio
          </a>

          <a
            href="#"
            style={{ color: 'white', textDecoration: 'none' }}
            onClick={() => {
              const section = document.getElementById('programas')
              section.scrollIntoView({ behavior: 'smooth' })
            }}
          >
            Programas
          </a>

          <a
            href="#"
            style={{ color: 'white', textDecoration: 'none' }}
            onClick={() => {
              const section = document.getElementById('aliados')
              section.scrollIntoView({ behavior: 'smooth' })
            }}
          >
            Empresas
          </a>

          <a
            href="#"
            style={{ color: 'white', textDecoration: 'none' }}
            onClick={() => setShowContact(true)}
          >
            Contacto
          </a>
        </nav>
      </header>

      <section
        style={{
          position: 'relative',
          color: 'white',
          minHeight: '90vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          padding: '40px',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundImage:
              'url(https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=2070&auto=format&fit=crop)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            zIndex: -2,
          }}
        />

        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(10,25,47,0.75)',
            zIndex: -1,
          }}
        />
        <h1
          style={{
            fontSize: '60px',
            marginBottom: '20px',
            color: 'white',
            textShadow: '0px 4px 15px rgba(0,0,0,0.9)',
            fontWeight: 'bold',
          }}
        >
          Empieza tu camino profesional
        </h1>

        <p
          style={{
            fontSize: '22px',
            maxWidth: '900px',
            color: 'white',
            textShadow: '0px 3px 10px rgba(0,0,0,0.8)',
            fontWeight: '500',
          }}
        >
          Descubre oportunidades de voluntariado, prácticas pre profesionales y
          prácticas profesionales en las mejores organizaciones y empresas del
          Perú.
        </p>

        <button
          style={{
            marginTop: '30px',
            padding: '15px 35px',
            fontSize: '18px',
            border: 'none',
            borderRadius: '10px',
            cursor: 'pointer',
            backgroundColor: '#64ffda',
            color: '#0a192f',
          }}
          onClick={() => {
            const section = document.getElementById('programas')
            section.scrollIntoView({ behavior: 'smooth' })
          }}
        >
          Explorar oportunidades
        </button>
      </section>

      <section
        id="aliados"
        style={{
          padding: '80px 40px',
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.92), rgba(255,255,255,0.92)), url(https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
      >
        <h2
          style={{
            textAlign: 'center',
            fontSize: '40px',
            marginBottom: '50px',
            color: '#0a192f',
          }}
        >
          Nuestros Aliados
        </h2>

        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '30px',
            flexWrap: 'wrap',
          }}
        >
          <div
            style={{
              backgroundColor: '#f4f4f4',
              backdropFilter: 'blur(8px)',
              background: 'rgba(255,255,255,0.88)',
              width: '250px',
              padding: '30px',
              borderRadius: '15px',
              textAlign: 'center',
              boxShadow: '0px 4px 10px rgba(0,0,0,0.1)',
            }}
          >
            <h3>Google</h3>
            <p>Oportunidades en desarrollo de software, cloud e inteligencia artificial.</p>
          </div>

          <div
            style={{
              backgroundColor: '#f4f4f4',
              backdropFilter: 'blur(8px)',
              background: 'rgba(255,255,255,0.88)',
              width: '250px',
              padding: '30px',
              borderRadius: '15px',
              textAlign: 'center',
              boxShadow: '0px 4px 10px rgba(0,0,0,0.1)',
            }}
          >
            <h3>Microsoft</h3>
            <p>Vacantes tecnológicas para estudiantes, egresados y profesionales IT.</p>
          </div>

          <div
            style={{
              backgroundColor: '#f4f4f4',
              backdropFilter: 'blur(8px)',
              background: 'rgba(255,255,255,0.88)',
              width: '250px',
              padding: '30px',
              borderRadius: '15px',
              textAlign: 'center',
              boxShadow: '0px 4px 10px rgba(0,0,0,0.1)',
            }}
          >
            <h3>IBM</h3>
            <p>Programas de innovación, análisis de datos y desarrollo empresarial.</p>
          </div>

          <div
            style={{
              backgroundColor: '#f4f4f4',
              backdropFilter: 'blur(8px)',
              background: 'rgba(255,255,255,0.88)',
              width: '250px',
              padding: '30px',
              borderRadius: '15px',
              textAlign: 'center',
              boxShadow: '0px 4px 10px rgba(0,0,0,0.1)',
            }}
          >
            <h3>BBVA</h3>
            <p>Oportunidades corporativas y tecnológicas en el sector financiero.</p>
          </div>
        </div>
      </section>

      <section
        id="programas"
        style={{
          padding: '80px 40px',
          backgroundImage:
            'linear-gradient(rgba(244,244,244,0.94), rgba(244,244,244,0.94)), url(https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=2069&auto=format&fit=crop)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
      >
        <h2
          style={{
            textAlign: 'center',
            fontSize: '40px',
            marginBottom: '50px',
            color: '#000000',
          }}
        >
          Nuestros Programas
        </h2>

        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '30px',
            flexWrap: 'wrap',
          }}
        >
          <div
            style={{
              backgroundColor: 'white',
              backdropFilter: 'blur(8px)',
              background: 'rgba(255,255,255,0.88)',
              width: '300px',
              padding: '30px',
              borderRadius: '15px',
              boxShadow: '0px 4px 10px rgba(0,0,0,0.1)',
            }}
          >
            <a
              href="https://www.voluntariosperu.org/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: 'none' }}
            >
              <button
                style={{
                  padding: '12px 20px',
                  border: 'none',
                  borderRadius: '10px',
                  backgroundColor: '#0a192f',
                  color: 'white',
                  cursor: 'pointer',
                  fontSize: '18px',
                  marginBottom: '15px',
                }}
              >
                Voluntariados
              </button>
            </a>
            <p>
              Participa en proyectos sociales y desarrolla habilidades de
              liderazgo ayudando a comunidades.
            </p>
          </div>

          <div
            style={{
              backgroundColor: 'white',
              backdropFilter: 'blur(8px)',
              background: 'rgba(255,255,255,0.88)',
              width: '300px',
              padding: '30px',
              borderRadius: '15px',
              boxShadow: '0px 4px 10px rgba(0,0,0,0.1)',
            }}
          >
            <a
              href="https://www.linkedin.com/jobs/practicante-jobs/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: 'none' }}
            >
              <button
                style={{
                  padding: '12px 20px',
                  border: 'none',
                  borderRadius: '10px',
                  backgroundColor: '#0a192f',
                  color: 'white',
                  cursor: 'pointer',
                  fontSize: '18px',
                  marginBottom: '15px',
                }}
              >
                Pre Profesionales
              </button>
            </a>
            <p>
              Obtén experiencia laboral mientras estudias y fortalece tu perfil
              profesional.
            </p>
          </div>

          <div
            style={{
              backgroundColor: 'white',
              backdropFilter: 'blur(8px)',
              background: 'rgba(255,255,255,0.88)',
              width: '300px',
              padding: '30px',
              borderRadius: '15px',
              boxShadow: '0px 4px 10px rgba(0,0,0,0.1)',
            }}
          >
            <a
              href="https://www.linkedin.com/jobs/information-technology-jobs/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: 'none' }}
            >
              <button
                style={{
                  padding: '12px 20px',
                  border: 'none',
                  borderRadius: '10px',
                  backgroundColor: '#0a192f',
                  color: 'white',
                  cursor: 'pointer',
                  fontSize: '18px',
                  marginBottom: '15px',
                }}
              >
                Profesionales
              </button>
            </a>
            <p>
              Accede a oportunidades para egresados y profesionales en empresas
              nacionales e internacionales.
            </p>
          </div>
        </div>
      </section>

      {showContact && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100vh',
            backgroundColor: 'rgba(0,0,0,0.7)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 1000,
          }}
        >
          <div
            style={{
              backgroundColor: 'white',
              padding: '40px',
              borderRadius: '20px',
              width: '500px',
              display: 'flex',
              flexDirection: 'column',
              gap: '15px',
            }}
          >
            <h2>Contacto</h2>

            <p>
              <strong>Representante Nacional:</strong> Franco Cuya Barrios
            </p>

            <p>
              <strong>Teléfono:</strong> +51970533292
            </p>

            <p>
              <strong>Correo:</strong> franco.cuya@pasantiasperu.pe
            </p>

            <input
              type="text"
              placeholder="Asunto"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              style={{
                padding: '12px',
                borderRadius: '10px',
                border: '1px solid gray',
              }}
            />

            <textarea
              placeholder="Escribe tu mensaje"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows="6"
              style={{
                padding: '12px',
                borderRadius: '10px',
                border: '1px solid gray',
                resize: 'none',
              }}
            />

            <button
              style={{
                padding: '14px',
                border: 'none',
                borderRadius: '10px',
                backgroundColor: '#0a192f',
                color: 'white',
                cursor: 'pointer',
                fontSize: '16px',
              }}
              onClick={() => {
                if (subject.trim() === '' || message.trim() === '') {
                  alert('Completa todos los campos')
                  return
                }

                setSubject('')
                setMessage('')
                setShowContact(false)
                setShowSuccess(true)
              }}
            >
              Enviar
            </button>
          </div>
        </div>
      )}

      {showSuccess && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100vh',
            backgroundColor: 'rgba(0,0,0,0.7)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 1001,
          }}
        >
          <div
            style={{
              backgroundColor: 'white',
              padding: '40px',
              borderRadius: '20px',
              textAlign: 'center',
              width: '350px',
            }}
          >
            <h2>Correo enviado correctamente</h2>

            <button
              style={{
                marginTop: '20px',
                padding: '12px 25px',
                border: 'none',
                borderRadius: '10px',
                backgroundColor: '#0a192f',
                color: 'white',
                cursor: 'pointer',
              }}
              onClick={() => setShowSuccess(false)}
            >
              Cerrar
            </button>
          </div>
        </div>
      )}
      <footer
        style={{
          backgroundColor: '#f5f5f7',
          padding: '60px 40px 30px 40px',
          color: '#1d1d1f',
          marginTop: '50px',
        }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '40px',
            marginBottom: '40px',
          }}
        >
          <div>
            <h4>Explorar</h4>
            <p>Voluntariados</p>
            <p>Prácticas Pre Profesionales</p>
            <p>Prácticas Profesionales</p>
            <p>Empresas Aliadas</p>
            <p>Programas Internacionales</p>
          </div>

          <div>
            <h4>Mi Cuenta</h4>
            <p>Crear Perfil</p>
            <p>Mis Postulaciones</p>
            <p>Notificaciones</p>
            <p>Configuración</p>
            <p>Centro de Ayuda</p>
          </div>

          <div>
            <h4>Empresas</h4>
            <p>Publicar Oportunidades</p>
            <p>Buscar Talento</p>
            <p>Planes Corporativos</p>
            <p>Aliados Estratégicos</p>
            <p>Historias de Éxito</p>
          </div>

          <div>
            <h4>Nosotros</h4>
            <p>Quiénes Somos</p>
            <p>Nuestra Misión</p>
            <p>Trabaja con Nosotros</p>
            <p>Prensa</p>
            <p>Contacto</p>
          </div>

          <div>
            <h4>Legal</h4>
            <p>Política de Privacidad</p>
            <p>Términos y Condiciones</p>
            <p>Uso de Cookies</p>
            <p>Libro de Reclamaciones</p>
            <p>Protección de Datos</p>
          </div>
        </div>

        <hr style={{ border: '0.5px solid #d2d2d7' }} />

        <div
          style={{
            marginTop: '20px',
            display: 'flex',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '20px',
            fontSize: '14px',
          }}
        >
          <p>
            Más oportunidades para crecer profesionalmente en Perú y el mundo.
          </p>

          <p>
            Copyright © 2026 Pasantías Perú. Todos los derechos reservados.
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App
