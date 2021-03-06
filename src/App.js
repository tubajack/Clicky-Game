//Import the react.JS files that are needed
import React, {Component} from "react"
// import ReactDOM from "react-dom"
import Header from "./components/header"
import CoachCards from "./components/coachCards"
import Footer from "./components/Footer"
//import Coaches from "./src/images"
import image1 from "./images/BrendaFrese.jpg"
import image2 from "./images/DawnStaley.jpg"
//Initialize the beginning of the game
class App extends Component{
    state = {
        Coaches: [], 
        selectedCoaches: "", 
        score: 0,
        highScore: 0
    };
    componentDidMount(){
        this.setState({
           Coaches: [{id: 1, images: image1, clicked: false}, {id: 2, images: image2, clicked: false}]
        })
    }

    //The coach is removed from the array once it is clicked
    imageClick = event => {
        //Figure out which coach was clicked last. 
        console.log(event.target)
        this.setState({
            currentCoach: event.target.alt
        })

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
    
    else(){
       
    }
    
    //At the end of the day, make sure to render all components
    render(){
        return(
            <div>
                <Header score = {this.state.score} />
                <CoachCards/>
    
                <Footer />
            </div>
            
        )

    }
};

export default App;

