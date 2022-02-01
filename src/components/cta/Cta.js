import './cta.css'

function Cta({ children, accent, big, shadows, ...props }) {

    return (
        <div {...props} className={
            "btn" + 
            (accent ? " cta-accent" : " cta-dark") + 
            (big ? " cta-big" : " cta-normal") + 
            (shadows ? " cta-shadows" : "")
        }>
            { children }
        </div>
    )
}

export default Cta