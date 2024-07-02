import React, { useState, useEffect } from 'react'
import Cursorstyles from "./CustomCursor.module.css"
import {motion} from 'framer-motion'
import { height } from '@fortawesome/free-brands-svg-icons/fa42Group'

function CustomCursor() {

    const [mousePosition, setMousePosition] = useState({
        x: 0,
        y: 0
    })

    const [cursorVariant, setCursorVariant] = useState("default")

    useEffect(() => {

        const mouseMove = e => {
            setMousePosition({
                x: e.clientX,
                y: e.clientY
            })
        }

        window.addEventListener("mousemove", mouseMove)

        return () => {
            window.removeEventListener("mousemove", mouseMove)
        }
    }, [])

    const variants = {
        default: {
            x: mousePosition.x - 16,
            y: mousePosition.y - 16
        },
        text: {
            width: 150,
            height: 150,
            x: mousePosition.x - 75,
            y: mousePosition.y - 75,
            backgroundColor: "yellow",
            mixBlendMode: "difference"
        }
    }

    const textEnter = () => setCursorVariant("text")
    const textLeave = () => setCursorVariant("default")

  return (
    <motion.div
     className={Cursorstyles["cursor"]}
     variants={variants}
     animate={cursorVariant} />

  )
}

export default CustomCursor
