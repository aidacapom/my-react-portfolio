import { useState, useEffect } from "react";
import { getRandomNumber } from "../../utilities/utilities";
import './typedtext.css'

function TypedText({ textArr }) {
    let deleteTextId, writeTextId, setIsWritingId /* settimeout variables */
  
    const waitBeforeWriting = 100

    const [arrIndex, setArrIndex] = useState(0)
    const [isDeleting, setIsDeleting] = useState(false)
    const [isWriting, setIsWriting] = useState(false)
    const [currentText, setCurrentText] = useState(textArr[arrIndex])
    const [currentTextIndex, setCurrentTextIndex] = useState(-1)

    const changeText = () => {
        setIsDeleting(true)
        setArrIndex(i => (i >= textArr.length - 1) ?  0 : i + 1)
        setCurrentTextIndex(-1)
    }

    useEffect(() => {
        if(isDeleting) {
            if(currentText == "") {
                setIsDeleting(false)
                setIsWriting(true)
            } else {
                deleteTextId = setTimeout(() => {
                    setCurrentText((value) => value.slice(0, -1))
                }, 50)
            }
        }

        return () => {
            clearTimeout(deleteTextId)
            clearTimeout(setIsWritingId)
        }
    }, [currentText, isDeleting])

    useEffect(() => {
        if(isWriting) {
            if(currentTextIndex < textArr[arrIndex].length) {
                /*if(currentTextIndex == -1) {
                    writeSpeed = waitBeforeWriting
                }
*/
                writeTextId = setTimeout(() => {
                    setCurrentText((value) => value + textArr[arrIndex].charAt(currentTextIndex))
                    setCurrentTextIndex(i => i + 1)
                }, getRandomNumber(40, 100))
            } else {
                setIsWriting(false)
            }
        }

        return () => {
            clearTimeout(writeTextId)
        }
    }, [isWriting, currentTextIndex])

    return (
        <p 
            className={ !isDeleting && !isWriting ? "typed-text paused" : "typed-text" }
            onMouseEnter={() => { if(!isDeleting && !isWriting) changeText() }}
        >
            { currentText }
        </p>
    )
}

export default TypedText