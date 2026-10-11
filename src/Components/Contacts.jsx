import '../Styles/Contacts.css'

const GMAIL_COMPOSE =
  'https://mail.google.com/mail/?view=cm&fs=1&to=ludabazu@gmail.com'

const contacts = [
  { label: 'Correo', value: 'ludabazu@gmail.com', href: GMAIL_COMPOSE },
  { label: 'GitHub', value: 'github.com/Luis-baza', href: 'https://github.com/Luis-baza' },
]

const Contacts = () => {
  return (
    <section id="contacto" className="section">
      <div className="section__inner contacts">
        <h2 className="section__title">Contacto</h2>
        <p className="section__subtitle">
          ¿Tienes una oportunidad o un proyecto en mente? Escríbeme.
        </p>

        <ul className="contacts__list">
          {contacts.map(({ label, value, href }) => (
            <li key={label}>
              <span>{label}</span>
              <a href={href} target="_blank" rel="noreferrer">
                {value}
              </a>
            </li>
          ))}
        </ul>

        <a
          className="btn btn--primary"
          href={GMAIL_COMPOSE}
          target="_blank"
          rel="noreferrer"
        >
          ENVIAR CORREO
        </a>
      </div>
    </section>
  )
}

export default Contacts
