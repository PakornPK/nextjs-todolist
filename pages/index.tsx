import Button from "../components/Button/Button"
import Title from "../components/Title/Title"
import List from "../components/List/ItemList"

export default () => {
  return (
    <>
      <div className="container">
        <div className="row text-center">
          <Title textTitle="my-to-do-list" />
        </div>
        <div className="row text-center">
          <div className="col">
            <input></input>
          </div>
          <div className="col">
            <Button btnText="add to-do" />
          </div>
        </div>
        <div className="row">
          <List />
        </div>
      </div>
    </>
  )
}