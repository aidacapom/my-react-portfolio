import './note.css'

function Note(props) {
    return (
        <div 
            className="note"
            style={{ 
                transform: `rotate(${props.rotation}deg)`
            }}
        >
            { props.children }
        </div>
    )
}

export default Note