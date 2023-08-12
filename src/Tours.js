import Card from "./Card"


function tours(props) {
    const removeHandler = props.removeHandler
    return (
       <div className="container">
        <h2 className="title">Plan With Harsh</h2>
       
       <div className="cards">
        {
            props.data.map(data =>{
                return <Card {...data} removeHandler={removeHandler}></Card>
            })
        }
       </div>
       </div>
    )
}

export default tours