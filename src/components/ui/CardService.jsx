import React from 'react'

export const CardService = ({ backgroundColor, imageSrc, title, description }) => {
  return (
    <div>
        <div className={`relative ${backgroundColor} text-white w-[397px] h-auto rounded-2xl p-5 text-center overflow-hidden group cursor-pointer`}>
      {/* Pseudo-element for hover effect */}
      <div className="absolute inset-0 bg-primary transform -translate-x-full transition-transform duration-1000 ease-in-out group-hover:translate-x-0 z-0"></div>
      {/* Content inside card */}
      <div className="relative">
        <div className="mb-5">
          <div className="flex justify-center mb-2">
            <img src={imageSrc} alt="logo section service" />
          </div>
          <div className="font-bold text-3xl">
            <h3>{title}</h3>
          </div>
        </div>
        <blockquote className="text-center">
          <p>{description}</p>
        </blockquote>
      </div>
    </div>
    </div>
  )
}
