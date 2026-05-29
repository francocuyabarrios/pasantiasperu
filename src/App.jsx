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
          <a href="#" style={{ color: 'white', textDecoration: 'none' }}>
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

          <a href="#" style={{ color: 'white', textDecoration: 'none' }}>
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
          backgroundColor: '#112240',
          color: 'white',
          minHeight: '90vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          padding: '40px',
        }}
      >
        <h1 style={{ fontSize: '60px', marginBottom: '20px' }}>
          Encuentra tu próxima experiencia profesional
        </h1>

        <p style={{ fontSize: '22px', maxWidth: '900px' }}>
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
        id="programas"
        style={{
          padding: '80px 40px',
          backgroundColor: '#f4f4f4',
        }}
      >
        <h2
          style={{
            textAlign: 'center',
            fontSize: '40px',
            marginBottom: '50px',
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
              width: '300px',
              padding: '30px',
              borderRadius: '15px',
              boxShadow: '0px 4px 10px rgba(0,0,0,0.1)',
            }}
          >
            <h3>Voluntariados</h3>
            <p>
              Participa en proyectos sociales y desarrolla habilidades de
              liderazgo ayudando a comunidades.
            </p>
          </div>

          <div
            style={{
              backgroundColor: 'white',
              width: '300px',
              padding: '30px',
              borderRadius: '15px',
              boxShadow: '0px 4px 10px rgba(0,0,0,0.1)',
            }}
          >
            <h3>Pre Profesionales</h3>
            <p>
              Obtén experiencia laboral mientras estudias y fortalece tu perfil
              profesional.
            </p>
          </div>

          <div
            style={{
              backgroundColor: 'white',
              width: '300px',
              padding: '30px',
              borderRadius: '15px',
              boxShadow: '0px 4px 10px rgba(0,0,0,0.1)',
            }}
          >
            <h3>Profesionales</h3>
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
    </div>
  )
}

export default App
