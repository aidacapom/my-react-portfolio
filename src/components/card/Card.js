import './card.css'

function Card(props) {
    return (
        <div 
            className={ `card ${props.bigDesktopLeftPad && "big-desktop-left-pad-card"}` }
            style={{ 
                transform: `rotate(${props.rotation}deg)`
            }}
        >
            { props.children }
        </div>
    )
}

Card.defaultProps = {
    bigDesktopLeftPad: true
}

export default Card