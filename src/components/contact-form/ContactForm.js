import './contact-form.css'
import { useState } from 'react'
import axios from 'axios'
import Botpoison from '@botpoison/browser'
import { FORMSPARK_FORM_ID, BOTPOISON_PUBLIC_KEY } from '../../utilities/constants'
import Cta from '../cta/Cta'


const botpoison = new Botpoison({
    publicKey: BOTPOISON_PUBLIC_KEY
})

const formSparkUrl = `https://submit-form.com/${FORMSPARK_FORM_ID}`


function ContactForm() {
    
    const [submitting, setSubmitting] = useState(false);
    const [message, setMessage] = useState(null)
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    })

    const handleChange = (event) => {
        const { name, value } = event.target
        setFormData({
            ...formData,
            [name]: value
        })
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        setSubmitting(true)
        await postSubmission()
        setSubmitting(false)
    }

    const postSubmission = async () => {
        try {
            const { solution } = await botpoison.challenge()
            await axios.post(formSparkUrl, {...formData, _botpoison: solution})
            setMessage({
                class: "success-msg", 
                text: "Thanks for getting in touch! I will reply by email as soon as possible."
            })
            setFormData({
                name: '',
                email: '',
                message: ''
            })
        } catch(error) {
            setMessage({
                class: "error-msg", 
                text: "Upps, something went wrong. Please try again. "
            })
        }
    }

    return (
        <form onSubmit={ handleSubmit } className="contact-form">

            { message  && <div className={ message.class }>{ message.text }</div>}

            <div className="contact-form__row">
                <div className="contact-form__input-container">
                    <label htmlFor="name" className="contact-form__required-label">Your Name</label>
                    <input 
                        type="text"
                        id="name"
                        name="name"
                        placeholder="e.g. Peter Parker"
                        required
                        value={ formData.name }
                        onChange={ handleChange }
                    />
                </div>
                
                <div className="contact-form__input-container">
                    <label htmlFor="email" className="contact-form__required-label">Your Email</label>
                    <input 
                        type="email"
                        id="email"
                        name="email"
                        placeholder="e.g. parker@gmail.com"
                        required
                        value={ formData.email }
                        onChange={ handleChange }
                    />
                </div>
            </div>
            
            <div className="contact-form__textarea-container">
                <label htmlFor="message" className="contact-form__required-label">Your Message</label>
                <textarea 
                    id="message"
                    name="message"
                    rows="3"
                    placeholder="e.g. Hi! Just wanna let you know that you rock :)"
                    required
                    value={ formData.message }
                    onChange={ handleChange }
                />
            </div>
        
            <button type="submit" disabled={ submitting } className="btn contact-form__btn">
                { submitting ? "Sending..." : "Send Message" }
            </button>
        </form>
    )
}

export default ContactForm