import List from "../components/List/ItemList"
import { useSetRecoilState } from "recoil"
import { todoListState } from "../store"
import { useState } from "react";

let id = 0;
function getId() {
  return id++;
}

export default () => {
  const [inputValue, setInputValue] = useState('');
  const setTodoList = useSetRecoilState(todoListState);

  const onChange = (e: any) => {
    setInputValue(e.target.value);
  };

  const addItem = () => {
    setTodoList((oldTodoList) => [
      ...oldTodoList,
      {
        no: getId(),
        detail: inputValue,
        isDone: false,
      }])
    setInputValue('');
  }
  
  return (
    <>
      <div className="container">
        <div className="row text-center">
          <h1>to-do-list</h1>
        </div>
        <div className="row text-center">
          <div className="col">
            <input type="text" value={inputValue} onChange={onChange} />
          </div>
          <div className="col">
            <button className="btn btn-primary" onClick={addItem}>add to-do</button>
          </div>
        </div>
        <div className="row">
          <List />
        </div>
      </div>
    </>
  )
}

//https://recoiljs.org/docs/basic-tutorial/selectors