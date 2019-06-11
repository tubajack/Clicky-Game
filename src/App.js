//Import the react.JS files that are needed
import react, {Component} from "react"
import reactDOM from "react-dom";
import coaches from "./images"

//Initialize the beginning of the game
class App extends Component(){
    state = {
        coaches, 
        selectedCoaches: [], 
        points: 0
    };

    //The coach is removed from the array once it is clicked
    pictureClick = event => {
        //Figure out which coach was clicked last. 
        const currentCoach = event.target.alt;

        //Remove that coach from the array. 
        const chosenCoach = this.state.selectedCoaches.indexof(selectedCoaches) > -1;

    }

    //Click on a previously selected coach, the game is reset. YOU LOSE. 
    if(chosenCoach){
        this.setState({
            //Sort the coaches in a random order
            coaches: this.state.coaches.sort(function(a, b){
                return Math.random() - 0.5
            }),
            selectedCoaches: [],
            points: 0
        });
        
        alert("You lost. Play again?");

    }
    //For some reason, I get an error with my else statement when I dont have a set of parenthesis around it. This is very strange
    //Click on a coach that has not previously been selected, the score is increased. 
    else(){
        this.setState({
            //Sort the coaches in a random order
            coaches: this.state.coaches.sort(function(a,b){
                return Math.random() - 0.5
            }),
            //Add the selected coach to the array of coaches that have been selected
            selectedCoaches: this.state.selectedCoaches.concat(
                selectedCoaches
            ),
            //Don't forget to update the score
            score: this.state.score + 1
        })
    }
    
   



}
    




//If your score hits 12, YOU WIN. The game is reset. 


//Make sure you render all components
// render(){
//     return(
//         <div>

//         </div>
//     );
// }

// }
export default App;