import React, {useState} from "react"

function Card({id,image,info,price,name,removeHandler}) {

const [readmore, setReadmore] = useState(false)

const desc = readmore ? info : `${info.substring(0,200)}....`

function readmoreHandler() {
    setReadmore(!readmore)
}

    return (
        <div className="card">
            <img src={image} alt="" className="image"></img>
           
           <div className="tour-info">
           <h4 className="tour-price">₹ {price}</h4>
            <h4 className="tour-name">{name}</h4>

          
           
            <p className="description">
                {desc}
            <span onClick={readmoreHandler} className="read-more">
                 {readmore ? `Show Less` : `Read More`}
                </span>    
            </p>
            </div>
            <button className="btn-red" onClick={() => removeHandler(id)}>Not Interested</button>
        </div>
    )
    }

export default Card