import React, {Component} from 'react';
import '../Styles_Components/MainContent.css';
import Joke from './Joke';
import JokesData from './jokesData';

class MainContent extends Component {
    constructor() {
        super()
        this.state = {
            todos: JokesData
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange = (id) => {
        this.setState(prevState => {
            const updatedTodos = prevState.todos.map(todo => {
                if(todo.id === id) {
                    todo.completed = !todo.completed;
                }
                return todo;
            })
            return{

                todos: updatedTodos
            }
        })
        console.log(this.state.todos.map((joke) => {
            return (joke.question);
        }));
    }
    jokeComponents = () => {
       return (
           this.state.todos.map((joke) => {
              return (    
                  <Joke key={joke.id} question={joke.question} punchLine={joke.punchLine} handleChange = {this.handleChange}/>
              );
          })
       ) 
    }
    render () {
        const jokeComponents = this.jokeComponents();
        
        return (
            <div className="bloc-container">
            {jokeComponents}
            <button onClick={this.handleChange}>click me</button>
        </div>   
        )
    }
}

export default MainContent;