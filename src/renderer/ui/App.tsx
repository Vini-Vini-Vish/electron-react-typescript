import React, { useEffect, useState } from "react"

import { getDate } from "../../common/getDate"

import styles from "./App.module.scss"
import logo from "../public/logo192.png"

export const App: React.FC = () => {

  const [infoItem, setinfoItem] = useState<any>([])
  const [iId, setitemId] = useState<string>(``)
  
  

  return (
    <div className={styles.app}>
      <img
        src={logo}
        alt="React logo"
      />

      <h1>Sistema de Cadastro</h1>
      <h5>Opções da aplicação:</h5>

      <div className="cad">
        <p>Realizar um cadasto:</p>
        <button>Cadastrar</button>
      </div>
      
      <div className="listCad">
        <p>Lista de Cadastros:</p>
        <button>Listar</button>
      </div>
      
    </div>
  )
}
