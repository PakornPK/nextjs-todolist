 
export default (props:{item:ItemsTodo}) => {

    return (
        <>
            <div className="row ">
                <div className="col col-2">
                    {props.item.no.toString()}
                </div>
                <div className="col">
                    {props.item.detail}
                </div>
                <div className="col col-2">
                    <input type="checkbox" defaultChecked={props.item.isDone}/>
                </div>
            </div>
        </>
    )
}