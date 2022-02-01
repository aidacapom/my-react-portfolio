import { Link as LinkScroll } from 'react-scroll'
import Typewriter from 'typewriter-effect'
import TypedText from '../typedtext/TypedText'
import Card from '../card/Card'
import Note from '../note/Note'
import Cta from '../cta/Cta'
import SectionTitle from '../section-title/SectionTitle'
import sentences from '../../utilities/coolSentences'
import './hero.css'

function HeroSection() {
    return (
        <section className="hero" id="hero">
            <div className="hero__container container full-height">
                <div className="hero__left">
                    <SectionTitle text="Hi, I am Aida" letterSpacing={ true }/>

                    <h2 className="hero__subtitle">
                        <Typewriter 
                            onInit={(typewriter) => {
                                typewriter
                                    .pauseFor(400)
                                    .typeString('Front-end')
                                    .pauseFor(250)
                                    .typeString(' ')
                                    .pauseFor(250)
                                    .typeString('developer')
                                    .start()
                            }}
                        />
                    </h2>
                    

                    <p className="hero__info">
                        i like making interactive interfaces with great user experiences.
                    </p>

                    <LinkScroll 
                        to="contact"
                        smooth={ true }
                        duration={ 800 }
                        spy={ true }
                        className="hero__btn"
                    >
                        <Cta accent={ true } big={ true } shadows={ true }>
                            Contact Me
                        </Cta>
                    </LinkScroll>
                </div>

                <div className="hero__right">
                    <div className="hero__cards">
                        <Card rotation={-9}>
                            <TypedText textArr={[sentences[0], sentences[3]]} />
                        </Card>

                        <Card rotation={8}>
                            <TypedText textArr={[sentences[1], sentences[4]]} />
                        </Card>

                        <Card rotation={-4}>
                            <TypedText textArr={[sentences[2], sentences[5]]} />
                        </Card>
                    </div>

                    
                    <div className="hero__scroll">
                        <span className="scroll__indicator">Scroll</span>

                        <svg className="hero__scroll__arrow" width="18" height="91" viewBox="0 0 18 91" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.739726 74.6803C1.409 74.8692 2.04305 75.2067 2.64188 75.6927C3.2407 76.2056 3.80431 76.7995 4.33268 77.4745C4.86106 78.1764 5.33659 78.9323 5.7593 79.7422C6.182 80.5521 6.55186 81.3485 6.86888 82.1315C7.22113 82.9144 7.50294 83.6568 7.71429 84.3587C7.96086 85.0876 8.13699 85.6951 8.24266 86.181C8.27789 86.181 8.33072 86.181 8.40117 86.181C8.50685 86.208 8.5773 86.2215 8.61252 86.2215C9.07045 86.2215 9.44031 86.019 9.72211 85.6141C10.0039 85.2091 10.1977 84.8852 10.3033 84.6422C10.4795 84.2912 10.7613 83.6703 11.1487 82.7794C11.5362 81.8885 11.9413 80.9301 12.364 79.9042C12.8219 78.9053 13.2446 77.9604 13.6321 77.0695C14.0196 76.1786 14.2838 75.5577 14.4247 75.2067C15.1292 74.7748 15.728 74.5723 16.2211 74.5993C16.7495 74.6533 17.1546 74.8422 17.4364 75.1662C17.7182 75.4902 17.8943 75.8951 17.9648 76.3811C18.0352 76.894 18 77.3935 17.8591 77.8794C17.7534 78.3924 17.5245 78.8378 17.1722 79.2158C16.82 79.5937 16.362 79.8367 15.7984 79.9447L11.0431 89.3397C10.4442 90.4466 9.52838 91 8.2955 91C7.7319 91 7.3092 90.8515 7.0274 90.5545C6.7456 90.2846 6.55186 89.9471 6.44618 89.5422C6.34051 89.1372 6.27006 88.7187 6.23483 88.2868C6.23483 87.8818 6.23483 87.5444 6.23483 87.2744L0.0528376 76.2596C0.0528376 76.2056 0.035225 76.1516 0 76.0976C0 76.0706 0 76.0301 0 75.9761C0 75.7332 0.0528376 75.5037 0.158513 75.2877C0.299413 75.0987 0.493151 74.8962 0.739726 74.6803Z" fill="#F0B666"/>
                            <path d="M9.03345 86.6195V2" stroke="#F0B666" strokeWidth="4" strokeLinecap="round"/>
                        </svg>

                        <div className="left-note">
                            <Note rotation={6}>
                                <code>
                                    { sentences[7] }   
                                </code>
                            </Note>
                        </div>
                        
                        <div className="right-note">
                            <Note rotation={-9}>
                                <code>
                                    { sentences[1] }   
                                </code>
                            </Note>
                        </div>
                    </div>
                </div>       
            </div>
        </section>
    )
}

export default HeroSection