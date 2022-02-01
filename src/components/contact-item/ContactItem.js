import './contact-item.css'

function ContactItem(props) {
    return (
        <div className="contact-item">
            { props.icon }
            <span className="contact-item__text">{ props.text }</span>
        </div>
    )
}

export default ContactItem