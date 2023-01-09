import React, {Component} from 'react';
import Die from './Die'

class RollDice extends Component {
    static defaultProps = {
        sides: ["one", "two", "three", "four", "five", "six"]
    }
    constructor(props) {
        super(props);
        this.state = {
            die1: "one", 
            die2: "one"
        }
        this.roll = this.roll.bind(this);
    }

    roll() {
        const newDiceOne = this.props.sides[Math.floor(Math.random() * this.props.sides.length)]
        const newDiceTwo = this.props.sides[Math.floor(Math.random() * this.props.sides.length)]
        this.setState({
            die1: newDiceOne,
            die2: newDiceTwo
        })
    }

    render() {
        return (
            <div>
                <Die face={this.state.die1}/>
                <Die face={this.state.die2}/>
                <button onClick={this.roll}>Roll Dice</button>
            </div>
        )
    }
}

export default RollDice;