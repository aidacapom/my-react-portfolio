import HeroSection from '../components/hero-section/HeroSection'
import SkillsSection from '../components/skills-section/SkillsSection'
import ContactSection from '../components/contact-section/ContactSection'

function Home() {
    return (
        <>
            <main>
                <HeroSection />
                <SkillsSection />
                <ContactSection />
            </main>
        </>
    )
}

export default Home