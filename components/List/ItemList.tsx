import Item from "./Item"

export default () => {
    const array = [...Array(5)]
    return (
        <>
            <div className="row">
                <div className="col">
                    No
                </div>
                <div className="col">
                    detail
                </div>
                <div className="col">
                    is done !
                </div>
            </div>
            <div className="row">
                <ul>
                   {array.map((el,i) => <li><Item key={i} /></li>)}
                </ul>
            </div>
        </>
    )
}