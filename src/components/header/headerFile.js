import React from "react"

// class Header extends Component
function Header(props){
    //render(){
        return(
            <div className= "navbar navbar-default navbar-fixed-top">
                <ul>
                    <li className = "item-left">These cards feature 12 of the best coaches in women's college basketball.</li>
                    <li className = "item-center"></li>
                    <li className = "item-right">Current Score: {props.score}</li>
                </ul>
            </div>

        );
}

export default Header;