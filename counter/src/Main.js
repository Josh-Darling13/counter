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
                <div>
                <h1>It adds numbers and resets</h1>
                <h1>{this.state.num}</h1>
                    <div className='circular'>
                        <button className='btn-success' onClick={this.increment}>Add a number</button>
                    </div>
                    <div className='circular'>
                        <button className='btn-primary' onClick={this.toZero}>Reset to zero</button>
                    </div>
                </div>
          );
    }
}

export default Main;