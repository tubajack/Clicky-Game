import react, {Component} from "react"

class Header extends Component{
    render(){
        return(
            <div class= "navbar navbar-default navbar-fixed-top">
                <ul>
                    <li className = "item-left">These cards feature 12 of the best coaches in women's college basketball.</li>
                    <li className = "item-center"></li>
                    <li className = "item-right">Current Score: {this.props.points}</li>
                </ul>
            </div>

        );
    }
}

export default Header;