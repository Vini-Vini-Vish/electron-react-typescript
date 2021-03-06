import React, { useEffect, useState } from "react"

import { InfoItem } from "../../components/InfoItem"
import { InsertItem } from '../../components/insertItem'
import { createItem, excludeItem, findAllItem, updateItem } from "../../controller/itemController"

import styles from "./App.module.scss"
import logo from "../public/logo192.png"

export const App: React.FC = () => {

  const [infoItem, setinfoItem] = useState<any>([])
  const [infoId, setinfoId] = useState<string>(``)

  const listItems = async () => {
    await findAllItem().then((data) => {
      setinfoItem({ ...data })
    })
  }
  
  useEffect(() => {
    listItems()
  }, [])
  
  const CreateItem = async(itemName: string, itemDesc: string, itemValor: number, itemQuant: number) => {
    const item = {"itemName": itemName, "itemDesc": itemDesc, "itemValor": itemValor, "itemQuant": itemQuant}
    await createItem(item)
    await listItems()
  }
  const UpdateItem = async(itemId: string, itemName: string, itemDesc: string, itemValor: number, itemQuant: number) => {
    const item = {"itemName": itemName, "itemDesc": itemDesc, "itemValor": itemValor, "itemQuant": itemQuant}
    await updateItem(itemId, item)
    await listItems()
  }

  const ExcludeItem = async(itemId: string) => {
    await excludeItem(itemId)
    await listItems()
  }

  const Selection = async(id: string) => {
    setinfoId(id)
    await listItems()
  }

  return (
    <div className={styles.app}>
      <img
        src={logo}
        alt="React logo"
      />

      <h1>Sistema de Cadastro</h1>
      <h5>Opções da aplicação:</h5>

      <div>
        <p>Realizar um cadasto:</p>
        <InfoItem infoItem={infoItem} Selection={Selection}/>

      </div>
      
      <div>
        <p>Lista de Cadastros:</p>{ 
        <InsertItem infoId={infoId} setinfoId={setinfoId} CreateItem={CreateItem} UpdateItem={UpdateItem} ExcludeItem={ExcludeItem}/>}
      </div>
      
    </div>
  )
}
