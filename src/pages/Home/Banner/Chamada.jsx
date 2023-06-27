import React from 'react'
import data from "./data/data";
import { ContainerChamada } from './Style';

export default function Chamada() {
  return (
    <>
      <ContainerChamada>

        {data.map((item) => (
          <div key={item.id}>
            <h2>{item.title}</h2>
            <h1>{item.chamada}</h1>
          </div>
        ))}

      </ContainerChamada>
    </>
  )
}
