import React from 'react'

export default function ProjectCard({src, link, h3,p}) {
  return (
    <a href={link} target='blank'>
        <img className='hover'src={src} alt={`${h3} Logo`}/>
        <h3>{h3}</h3>
        <p>{p}</p>
    </a>
  )
}
