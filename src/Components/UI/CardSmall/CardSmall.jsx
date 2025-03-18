import React from 'react'

export const CardSmall = ({ contentTi = "Vacío", contentDes, content = [], icon = "⭐" }) => (
  <div className="bg-[#2C2F3F] p-8 rounded-lg shadow-lg w-full">
    <h4 className="text-xl font-semibold text-amber-300 mb-2">{contentTi}</h4>
    <p className="text-md mb-4">{contentDes}</p>

    <ul className=" text-[#D1D5DB] space-y-2">
      {Array.isArray(content) ? content.map((item, index) => (
            <li key={index} className="relative pl-7">
              <span className="absolute left-0 top-0 text-[#FFC107]">{icon}</span>
              {item}
            </li>
          ))
        : Object.entries(content).map(([description, year], index) => (
            <li key={index} className="relative pl-7">
              <span className="absolute left-0 top-0 text-[#FFC107]">{icon}</span>
              <div>
                <p className="font-semibold text-w">{description}</p>
                <p className="text-sm text-[#D1D5DB]">{year}</p>
              </div>
            </li>
          ))}
    </ul>
  </div>
);







