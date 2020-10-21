import React, { Component } from 'react';
import './App.css';
import '../ResyCard/ResyCard.css';
import { getReservations } from '../fetcher.js';
import ResyCard from '../ResyCard/ResyCard.js';

class App extends Component {
  constructor() {
    super()
    this.state = {
      reservations: []
    }
  }

  componentDidMount() {
    getReservations()
      .then(response => this.setState({reservations: response}))
      .catch(err => console.log(err))
  }

  render() {
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>

        </div>
        <div className='resy-container'>
          {this.state.reservations.map(reservation => {
            return <ResyCard reservation={reservation}/>
          })}
        </div>
      </div>
    )
  }
}

export default App;
