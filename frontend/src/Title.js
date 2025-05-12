import React from 'react'

const Title = () => {
  return (
   <div className="title">
      {"Puja's Portfolio".split("").map((char, index) => (
        <span
          key={index}
          className="title-letter"
          style={{ animationDelay: `${index * 0.1}s` }}
        >
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </div>

  )
}

export default Title