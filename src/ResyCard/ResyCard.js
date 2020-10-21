import React from 'react'
import './ResyCard.css';

export default function ResyCard(props) {
  return (
    <div className="resy-card">
      <h2>{props.reservation.name}</h2>
      <p>{props.reservation.date}</p>
      <p>{props.reservation.time}</p>
    </div>
  )
}

