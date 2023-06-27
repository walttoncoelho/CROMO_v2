import React from "react";
import {
  BtnExplorarContatiner,
  BtnExplorarPosition,
  BtnExplorarRetangulo,
  BtnExplorarText
} from "./Style";


export default function BtnExplorar() {
  return (
    <>
      <BtnExplorarContatiner>
        <BtnExplorarPosition>
          <a href="#secao-abaixo">
            <BtnExplorarRetangulo>
              <div className="barra"> </div>
            </BtnExplorarRetangulo>
            <BtnExplorarText>
              <h3>CONTINUAR EXPLORANDO</h3>
            </BtnExplorarText>
          </a>
        </BtnExplorarPosition>
      </BtnExplorarContatiner>

    </>
  );
}