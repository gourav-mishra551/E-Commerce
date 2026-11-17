import React, { useState } from 'react'

const HoverImage = ({ src, hoverSrc, className, alt = '', style, onClick }) => {
  const [currentSrc, setCurrentSrc] = useState(src)

  return (
    <img
      src={currentSrc || src}
      alt={alt}
      className={className}
      style={style}
      onClick={onClick}
      onMouseOver={() => setCurrentSrc(hoverSrc || src)}
      onMouseOut={() => setCurrentSrc(src)}
    />
  )
}

export default HoverImage
