import React from "react"

// class Header extends Component
function Header(props){
    //render(){
        return(
            <div className= "navbar navbar-default navbar-fixed-top">
                <ul>
                    <li className = "item-left">These are some of the best coaches in women's basketball. 
                    <li id = "current-score"> Score: {props.score}</li>
                    <li id = "high-score">High Score: {props.highScore}</li> 

                    </li>
                </ul>
            </div>

        );
}

export default Header;