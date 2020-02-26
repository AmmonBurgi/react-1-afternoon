import React, {Component} from 'react'

class Sum extends Component{
    constructor(){
        super()
        this.state = {
            number1: 0,
            number2: 0,
            sum: null
        }
    }
    numOneCh(val){
        this.setState({
            number1: parseInt(val)
        })
    }
    numTwoCh(val){
        this.setState({
            number2: parseInt(val)
        })
    }
    handleButton(input){
        let theSum = this.state.number1 + this.state.number2

    this.setState({sum: theSum})
    }
    render(){
        return (
            <div className='puzzleBox sumPB'>
            <h4>Sum</h4>
            <input className='inputLine' onChange={(e) => this.numOneCh(e.target.value)}></input>
            <input className='inputLine' onChange={(e) => this.numTwoCh(e.target.value)}></input>
            <button className='confirmationButton' onClick={() => this.handleButton(this.state.sum)}>Solve</button>
            <span className='resultsBox'> Sum: {this.state.sum}</span>
            </div>
        )
    }
}

export default Sum