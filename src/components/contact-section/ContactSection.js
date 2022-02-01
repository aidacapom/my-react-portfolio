import ContactForm from '../contact-form/ContactForm'
import ContactItem from '../contact-item/ContactItem'
import SectionTitle from '../section-title/SectionTitle'
import SocialIcon from '../social-icon/SocialIcon'
import { socials } from '../../utilities/socials'
import { Icon } from '@iconify/react';
import './contact-section.css'

function ContactSection() {
    return (
        <section className="contact full-height" id="contact">
            <div className="contact__container container">

                <SectionTitle text="Contact Me" />

                <div className="contact__card">
                    <div className="contact__info-container">
                        <p className="contact__info-text">
                            You got a question or proposal, or just want to say hello? :)
                        </p>

                        <div className="contact__items">
                            <a href="tel:+34659546948">
                                <ContactItem 
                                    text="+34659546948" 
                                    icon={<Icon icon="ic:round-whatsapp" width="1.4em" />}
                                />
                            </a>
                            
                            <a href="mailto:aidacapom@gmail.com">
                                <ContactItem 
                                    text="aidacapom@gmail.com" 
                                    icon={<Icon  icon="carbon:email" width="1.3em" />}
                                />
                            </a>
                            
                            <ContactItem 
                                text="Baleares, Spain" 
                                icon={<Icon  icon="clarity:map-marker-line" width="1.35em" />}
                            />
                        </div>

                        <div className="contact__socials">
                            {
                                socials.map((social, index) => 
                                    <SocialIcon social={ social } key={ index }/>
                                )
                            }
                        </div>
                        
                    </div>
                    <div className="contact__form-container">
                        <ContactForm />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ContactSection