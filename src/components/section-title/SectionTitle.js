import './section-title.css'

function SectionTitle({ text, letterSpacing, shadow, ...props }) {
    return (
        <h1 { ...props } 
            className={ letterSpacing ? "section-title letter-spacing" : "section-title" }
            style={{ textShadow: shadow }}
        >
            { text }
        </h1>
    )
}

SectionTitle.defaultProps = {
    shadow: '4px 5px 4px var(--color-shadow-dark)', 
}

export default SectionTitle