import React from 'react';
import './App.css';
import axios from 'axios';

class App extends React.Component{
    state = { fact: '' };
    componentDidMount(){
        this.setState({fact:"Click the button below to get a cool fact about a number!"});
    }
    fetchFact = () =>{
        const number = document.getElementById('input').value;
        if (number && Number.isInteger(Number(number))&&number>=0){
        axios.get('http://numbersapi.com/' + number)
        .then((response)=>{
            const fact = response.data;
            console.log(fact);
            this.setState({fact:fact})
        }).catch((error)=>{
            console.log(error);
        })
        }
        else{
            this.setState({fact:"Please enter a positive integer"})
        }
}
    
    render(){
        const {fact} = this.state;
        return(
            <div className='app'>
                <div className='card'>
                    <h1 className='heading'>{fact}</h1>
                    <input id = 'input' className='number-input' type = 'number' placeholder='Type A Number Here'></input>
                    <button className='button' onClick={this.fetchFact}>
                        <span>Click Here!</span>
                    </button>
                </div>
            </div>
        )
    }
}
export default App;