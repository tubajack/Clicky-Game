//Import the react.JS files that are needed
import React, {Component} from "react"
import ReactDOM from "react-dom";
import Header from "./components/header"
import coachCards from "./components/coachCards"
import Footer from "./components/Footer"
import Coaches from "./images"

//Initialize the beginning of the game
class App extends Component(){
    state = {
        Coaches, 
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
                selectedCoaches: this.state.selectedCoaches.concat(selectedCoaches),
                //Don't forget to update the score
                score: this.state.score + 1
            },

            //What happens when someone gets all 12 of the coaches correctly?
            () => {
                if(this.state.points === 12){
                    alert("Congratulations! You have won the game.");
                    //Once again, you have to shuffle the cards in a random order
                    this.setState({
                        coaches: this.state.coaches.sort(function(a,b){
                            return Math.random() - 0.5;
                        }), 
                        selectedCoaches: [],
                        score: 0
                    });
                    
                }
            }  
        );
    }
    
    //At the end of the day, make sure to render all components
    // render(){
    //     return(
            
    //     )

    // }
};

export default App;

