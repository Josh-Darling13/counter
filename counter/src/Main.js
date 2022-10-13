import React, {Component} from 'react';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            num : 0
          }
        }

    increment = () =>{
        this.setState({num: this.state.num +1})
    }

    toZero = () =>{
        this.setState({num: 0})
    }

    render() {
        return (
                <div className='container'>
                    <div className='header'>
                        <h1>It adds numbers and resets to zero pretty basic</h1>
                        <div className='circular'>
                            <h1> {this.state.num} </h1>
                        </div>
                    </div>
                    <div className='divBod'>
                        <div className='alignBtn'>
                            <div className='circular'>
                                <button className='btn-success' onClick={this.increment}>Add a number</button>
                            </div>
                            <div className='circular'>
                                <button className='btn-primary' onClick={this.toZero}>Reset to zero</button>
                            </div>
                        </div>
                    </div>
                </div>
          );
    }
}

export default Main;