import { Icon } from "@iconify/react"
import './socialIcon.css'

function SocialIcon({ social }) {

    const { link, icon } = social

    return (
        <a href={ link } target="_blank" className="social-icon__link">
            <Icon icon={ icon } height="2em"/>
        </a>
    )
}

export default SocialIcon