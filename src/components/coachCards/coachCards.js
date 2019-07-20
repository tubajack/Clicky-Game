import React from "react"
import image1 from "../../images/BrendaFrese.jpg"
import image2 from "../../images/DawnStaley.jpg"
import image3 from "../../images/GenoAuriemma.jpg"
import image4 from "../../images/JeffWalz.jpg"
import image5 from "../../images/KellyGraves.jpg"
import image6 from "../../images/KimMulkey.jpg"
import image7 from "../../images/LisaBluder.jpg"
import image8 from "../../images/MuffetMcGraw.jpg"
import image9 from "../../images/PatSummitt.jpg"
import image10 from "../../images/ScottRueck.jpg"
import image11 from "../../images/TaraVanDerveer.jpg"
import image12 from "../../images/VicShaefer.jpg"


//Figure out how to get all 12 of the coachCards 
const CoachCards = props =>{
    const images = [image1, image2, image3, image4, image5, image6, image7, image8, image9, image10, image11, image12];
  
    return images.map((image, i) => (
        <div key = {i} className = "card" onClick = {props.imageClick}>
            <div className = "img-container">
                <img src = {image} alt = ""/>
            </div>
        </div>
    ))
}

export default CoachCards;