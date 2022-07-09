import React, { useState } from "react"
import { findOneItem } from "../../controller/itemController"

export const InfoItem = ({ infoId, setinfoId, CreateItem, UpdateItem, ExcludeItem }: any) => {

    const [itemId, setItemId] = useState<string>(``)
    const [itemName, setitemName] = useState<string>(``)

    function clear() {
        setitemName(``)
    }

    const inputItem = async (itemName: string) => {
        await CreateItem(itemName)    
        clear()
    }

    const selectionItem = (id: string) => {
        findOneItem(id).then(Item => {
            setItemId(id)
            setitemName(Item!.itemName)
        })       
    }

    const excludeItem = async (id: string) => {
        await ExcludeItem(id)
        clear()        
    }

    return (
        <div className="container">
          {/* {infoId !== `` ? (selectionItem(infoId)) : setinfoId(``)}  */}
          <div>
            <text>Nome:</text>
            <input className="inputName" type="text" placeholder="Nome do item" value={itemName} onChange={(event) => { setitemName(event.target.value) }} />
          </div>          
        </div>
      )

}
