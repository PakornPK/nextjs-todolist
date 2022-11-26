import { atom, useRecoilState, useResetRecoilState, useSetRecoilState } from "recoil"

const todolistState = atom({
    key: "todolistState",
    default: [] as ITodolists[]
})


export const getTodolist = () => useRecoilState(todolistState)[0]
export const setTodolist = () => useSetRecoilState(todolistState)
