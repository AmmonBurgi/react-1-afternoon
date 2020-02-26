import React, {Component} from 'react'

class Palindrome extends Component{
    constructor(){
        super()
        this.state = {
            userInput: '',
            palindrome: ''
        }
    }
    handleChange(val){
        this.setState({
            userInput: val
        })
    }
    handleClick(input){
        if(input.split("").reverse().join("") === input){
             return this.setState({palindrome: 'true'})
        } else{
             return this.setState({palindrome: 'false'})
        }
        // let solve = input
        // console.log(solve);
        // let rev = input.split("")
        // console.log(rev)
        // let reversed = rev.reverse()
        // console.log(reversed)
        // let joined = reversed.join("")
        // console.log(joined)
        // if(joined === solve){
        //   console.log(solve)
        //      return solve
        // }
        // this.setState({palindrome: solve})
    }
    render(){
        return(
            <div className='puzzleBox filterStringPB'>
                <h4>Palindrome</h4>
                <input className='inputLine' onChange={(e) => this.handleChange(e.target.value)}></input>
                <button className='confirmationButton' onClick={() => this.handleClick(this.state.userInput)}>Solve</button>
        <span className='resultsBox'>Palindrome: {this.state.palindrome}</span>
            </div>

        )
    }
}
export default Palindrome