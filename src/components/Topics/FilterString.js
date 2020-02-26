import React, {Component} from 'react'

class FilterString extends Component {
    constructor(){
        super()
        this.state = {
            unFilteredArray: ['Bill ', 'Fred ', 'Andy ', 'Bob'],
            userInput: '',
            filteredArray: []
        }
    }  
        changeHandler(val){
            this.setState({
                userInput: val
            });
        }
        handleButton(input){
            let names = this.state.unFilteredArray.filter((element) => {
                if (element.includes(input)){
                    return element
                }
            })
            this.setState({ filteredArray: names});
        }
    
    render(){
        return (
            <div className='puzzleBox filterStringPB'>
            <h4>Filter String</h4>
            <span className='puzzleText'> Names: {this.state.unFilteredArray}</span>
            <input className='inputLine' onChange={(e) => this.changeHandler(e.target.value)}></input>
            <button className='confirmationButton' onClick={() => this.handleButton(this.state.userInput)}>Filter</button>
            <span className='resultsBox filterStringRB'>Filtered Names: {this.state.filteredArray}</span>
            </div>
        )
    }
}
export default FilterString
