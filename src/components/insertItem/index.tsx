import React, { useState } from "react"
import { findOneItem } from "../../controller/itemController"

export const InsertItem = ({ infoId, setinfoId, CreateItem, UpdateItem, ExcludeItem }: any) => {

    const [itemId, setItemId] = useState<string>(``)
    const [itemName, setitemName] = useState<string>(``)
    const [itemDesc, setitemDesc] = useState<string>('')
    const [itemValor, setitemValor] = useState<number>(0)
    const [itemQuant, setitemQuant] = useState<number>(0)

    function clear() {
        setitemName(``)
        setitemDesc(``)
        setitemValor(0)
        setitemQuant(0)
    }

    const inputItem = async (itemName: string, itemDesc: string, itemValor: number, itemQuant: number) => {
        if(itemId != ''){
            await CreateItem(itemName, itemDesc, itemValor, itemQuant)    
            clear()
        } else {
            await UpdateItem(itemId, itemName, itemDesc, itemValor, itemQuant)    
            clear()
        }
        
    }

    const selectionItem = (id: string) => {
        findOneItem(id).then(Item => {
            setItemId(id)
            setitemName(Item!.itemName)
            setitemName(Item!.itemDesc)
            setitemName(Item!.itemValor)
            setitemName(Item!.itemQuant)
            setinfoId(``)
        })       
    }

    const excludeItem = async (id: string) => {
        await ExcludeItem(id)
        clear()        
    }

    return (
        <div>
            {infoId !== `` ? (selectionItem(infoId)) : setinfoId(``)} 
            <div>
                <text>Nome:</text>
                <input type="text" placeholder="Nome do item" value={itemName} onChange={(event) => { setitemName(event.target.value) }} />
            </div>  
            <div>
                <text>Descrição:</text>
                <input type="text" placeholder="descrição do item" value={itemDesc} onChange={(event) => { setitemDesc(event.target.value) }} />
            </div>  
            <div>
                <text>Valor:</text>
                <input type="text" placeholder="valor do item" value={itemValor} onChange={(event) => { setitemValor(event.target.valueAsNumber) }} />
            </div>  
            <div>
                <text>Quantidade:</text>
                <input type="text" placeholder="quantidade do item" value={itemQuant} onChange={(event) => { setitemQuant(event.target.valueAsNumber) }} />
            </div>  
            <div>
                <button onClick={() => inputItem(itemName, itemDesc, itemValor, itemQuant)}>Salvar</button>
                <button onClick={() => excludeItem(itemId)}>Excluir</button>
            </div>       
        </div>
      )
}
