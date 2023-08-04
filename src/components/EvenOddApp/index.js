import {Component} from 'react'

import './index.css'

class EvenOddApp extends Component {
  state = {randomNumber: 0}

  onIncrement = () => {
    this.setState({
      randomNumber: Math.floor(Math.random() * (100 - 1) + 1),
    })
  }

  getEvenOrOdd = () => {
    const {randomNumber} = this.state
    return randomNumber % 2 === 0 ? 'Even' : 'Odd'
  }

  render() {
    const {randomNumber} = this.state
    const evenOdd = this.getEvenOrOdd()
    return (
      <div className="bg-container">
        <div className="container">
          <h1 className="heading"> Count {randomNumber} </h1>
          <p className="para"> Count is {evenOdd} </p>
          <button type="button" onClick={this.onIncrement}>
            Increment
          </button>
          <p> *Increase By Random Number Between 0 to 100 </p>
        </div>
      </div>
    )
  }
}
export default EvenOddApp
