import { useRecoilValue } from "recoil";
import { todoListState } from "../../store";
import Item from "./Item"

export default () => {
    const todoList = useRecoilValue(todoListState);

    return (
        <>
            <div className="row">
                <div className="col col-2">
                    No
                </div>
                <div className="col">
                    detail
                </div>
                <div className="col col-2">
                    is done !
                </div>
            </div>
            <div className="row">
                <ul>
                   {todoList.map((el: ItemsTodo) => <li key={el.no}><Item item={el} key={el.no} /></li>)}
                </ul>
            </div>
        </>
    )
}
