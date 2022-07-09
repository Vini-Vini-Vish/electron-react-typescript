import { create, findAll, findOne, update, exclude } from "../service/itemService"

interface Item {
    itemName: string;
}

export const createItem = (item: Item) => {
  return create(item)
}

export const findAllItem = () => {
  return findAll()
}

export const findOneItem = (id: string) => {
  return findOne(id)
}

export const updateItem = (id: string, item: Item) => {
  return update(id, item)
}

export const excludeItem = (id: string) => {
  return exclude(id)
}
