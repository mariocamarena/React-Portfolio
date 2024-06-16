import React from 'react'

export default function ProjectCard({src, link, h3}) {
  return (
    <a href={link} target='blank'>
        <img className='hover'src={src} alt={`${h3} Logo`}/>
        <h3>{h3}</h3>
        <p>Streaming App</p>
    </a>
  )
}
