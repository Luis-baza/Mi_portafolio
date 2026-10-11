import '../Styles/Contacts.css'

// ✏️ Cambia estos enlaces por los tuyos.
const contacts = [
  { label: 'Correo', value: 'ludabazugmail.com', href: 'ludabazu@gmail.com' },
  { label: 'GitHub', value: 'github.com/Luis-baza', href: 'https://github.com/Luis-baza' },
  { label: 'LinkedIn', value: 'linkedin.com/in/tu-usuario', href: 'https://linkedin.com/in/tu-usuario' },
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

        <a className="btn btn--primary" href="ludabazu@gmail.com">
          ENVIAR CORREO
        </a>
      </div>
    </section>
  )
}

export default Contacts
