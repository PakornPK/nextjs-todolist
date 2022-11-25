import { atom } from "recoil"

declare global { 
    interface ItemsTodo { 
        no: number,
        detail: string,
        isDone: boolean
    }
}
const arr: ItemsTodo[] = []

const todoListState  = atom({ 
    key: "itemState",
    default: arr
})

export {todoListState}