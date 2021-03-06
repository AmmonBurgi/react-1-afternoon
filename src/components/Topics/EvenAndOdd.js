import React, {Component} from 'react'

class EvenAndOdd extends Component {
    constructor(){
        super();
        this.state = {
        evenArray: [],
        oddArray: [],
        userInput: '',
        }
    }

    handleChange(val){
        this.setState({
            userInput: val
        })
    }
    buttonClick(userInput){
        let arr = userInput.split(",")
        let evens = []
        let odds = []
        for (let i = 0; i < arr.length; i++){
        if(arr[i] % 2 === 0){
            evens.push(arr[i])
        } 
        else if(arr[i] % 2 === 1){
            odds.push(arr[i])
        }
        this.setState({evenArray: evens, oddArray: odds})
    }
    }

    render(){
        console.log(this.state.userInput)
        return (
            <div className='puzzleBox evenAndOddPB'>
                <h4>Evens and Odds</h4>
                <input className='inputLine' onChange={ (e) => this.handleChange(e.target.value)}></input>
                <button className='confirmationButton' onClick={() => {this.buttonClick(this.state.userInput)}}>Split</button>
                <span className='resultsBox'> Even: {JSON.stringify(this.state.evenArray)} </span>
                <span className='resultsBox'> Odd: {JSON.stringify(this.state.oddArray)} </span>
            </div>
        )
    }
}

export default EvenAndOdd