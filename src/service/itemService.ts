import { connectDb, disconnectDb } from "../data/baseMongo"
import { ObjectId } from "mongodb"

interface Item {
    itemName: string;
    itemDesc: string;
    itemValor: number;
    itemQuant: number;
}

export const create = async (data: Item) => {
    const newItem = (await connectDb()).collection(`listItems`).insertOne(data)
    disconnectDb()
    return newItem
  }
  
  export const findAll = async () => {
    const listItems = (await connectDb()).collection(`listItems`).find({}).toArray()
    disconnectDb()
    return listItems
  }
  
  export const findOne = async (id: string) => {
    const item = (await connectDb()).collection(`listItems`).findOne({ _id: new ObjectId(id) })
    disconnectDb()
    return item
  }
  
  export const update = async (id: string, item: Item) => {
    const updateItem = (await connectDb()).collection(`listItems`).updateOne({ _id: new ObjectId(id) }, { $set: item })
    return updateItem
  }
  
  export const exclude = async (id: string) => {
    const excludeItem = (await connectDb()).collection(`listItems`).deleteOne({ _id: id })
    return excludeItem
  }