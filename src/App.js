//Import the react.JS files that are needed
import react, {Component} from "react"
import reactDOM from "react-dom";
import coaches from "./images"

//Initialize the beginning of the game
class App extends Component(){
    state = {
        coaches, 
        selectedCoaches = [], 
        points = 0
    };


//The coach is removed from the array once it is clicked



//Click on a previously selected coach, the game is reset. YOU LOSE. 


//Click on a fish that has not previously been selected, the score is increased. 


//If your score hits 12, YOU WIN. The game is reset. 


//Make sure you render all components
render(){
    return(
        <div>

        </div>
    );
}

}
export default App;