import { skills } from '../data/skills'
import '../Styles/Skill.css'

const Skill = () => {
  return (
    <section id="habilidades" className="section">
      <div className="section__inner">
        <h2 className="section__title">Habilidades</h2>
        <div className="skills">
          {skills.map(({ group, items }) => (
            <div className="skills__group" key={group}>
              <h3>{group}</h3>
              <ul>
                {items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skill
