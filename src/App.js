import React, { Component } from 'react';
import Navbar from './components/navbar';
import Counters from './components/counters';


class App extends Component {
  

  state = {
    counters: [
      { id: 1, value: 7 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 8 },
      { id: 5, value: 0 },
      { id: 6, value: 0 },
    ],
  };

  handleDelete = (id) => {
    console.log("called ondelete event");
    let counters = this.state.counters.filter((counter) => counter.id !== id);

    this.setState({ counters });
  };

  handleIncrement = (counter) => {
    const counters = [...this.state.counters];
    const ind = counters.indexOf(counter);
    counters[ind] = {...counter};
    counters[ind].value++;
   // console.log(this.state.counters[ind]);
    this.setState({counters});


  };

  handleDecrement = (counter) => {
    const counters = [...this.state.counters];
    const ind = counters.indexOf(counter);

    if (counters[ind].value > 0) {
        counters[ind] = { ...counter};
        counters[ind].value--;

      this.setState({ counters });
    }
  };

  handleReset = () => {
    let counters = this.state.counters.map((counter) => {
      counter.value = 0;
      return counter;
    });
    this.setState({ counters });
  };

  render() { 
    return (
      <React.Fragment>
        <Navbar totalCount = {this.state.counters.filter(counter => counter.value > 0 ).length}/>
        <div className='container'>
          <Counters  
          counters = {this.state.counters}
          onDelete = {this.handleDelete}
          onReset = {this.handleReset}
          onIncrement = {this.handleIncrement}
          onDecrement = {this.handleDecrement}
          />
        </div>
      </React.Fragment>

    );
  }
}
 
export default App;