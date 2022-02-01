import sentences from '../../utilities/coolSentences'
import Card from '../card/Card'
import SectionTitle from '../section-title/SectionTitle'
import TypedText from '../typedtext/TypedText'
import { skills } from './skills'
import './skillsSection.css'

function SkillsSection() {
    return (
        <section className="skills full-height" id="skills">
            <div className="skills__left">
                <div className="skills__cards">
                    <Card rotation={7}>
                        <TypedText textArr={[sentences[6], sentences[8]]} />
                    </Card>
                    <Card big={true} rotation={-5} bigDesktopLeftPad={false}>
                        <TypedText textArr={[sentences[7], sentences[9]]} />
                    </Card>
                </div>
            </div>

            <div className="skills__right container">
                <div className="skills__info">
                    <SectionTitle text="My Skills" />

                    <p className="skills__description">
                        i am a CSS lover with a passion for clean code 
                        and a good eye for usable design.
                    </p>
                    <p className="skills__description">
                        These are my main skills :
                    </p>

                    <ul className="skills__list">
                        { skills.map((skill, index) => 
                            <li className="skills__list-item" key={ index }>
                                <span className="skills__list-item-text">{ skill }</span>
                            </li>
                        )}
                    </ul>    
                </div>
            </div>
        </section>
    )
}

export default SkillsSection