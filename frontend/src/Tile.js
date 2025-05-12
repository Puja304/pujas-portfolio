import React from 'react'

const Tile = (props) => {
    let {info,onClick} = props

  return (
    <button className='project-tile' onClick={onClick}>
        <div className='img-section'>
            <img src={`${process.env.PUBLIC_URL}/assets/images/${info.img}`} alt={info.name} loading="lazy"/>
        </div>
        <div className='project-info'>
            <text> 
                <b>{info.name}</b>
            </text>
            <text>{info.status}</text>
        </div>
        <div className='tag-marquee'>
            <marquee>
                {[...info.languages, ...info.frameworks].map((item, index) => (
                    <span key={index} style={{ marginRight: '1rem' }}>
                    <b>{item.toLowerCase()}</b> ★
                    </span>
                ))}
            </marquee>
        </div>
    </button>
  )
}

export default Tile