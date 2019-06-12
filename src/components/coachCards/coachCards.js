import React from "react"

//Figure out how to get all 12 of the coachCards 
const coachCards = props =>{
    // eslint-disable-next-line no-unused-expressions
    <div className = "card" onClick = {props.imageClick}>
        <div className = "img-container">
            <img alt = {props.image.replace(".jpg", "")} src = {require("../../images" + props.image)} />
        </div>

    </div>
}


export default coachCards;