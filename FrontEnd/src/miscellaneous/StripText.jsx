import { Box } from '@chakra-ui/react'
import React from 'react'
import "./StripText.css"
export default function StripText(props) {
  return (
    <div className="centered-text-container">
    <span className="center-line left-line"></span>
    <span className="centered-text" style={{fontSize:"30px"}}>{props.text}</span>
    <span className="center-line right-line"></span>
  </div>
  )
}
